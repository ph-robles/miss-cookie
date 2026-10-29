 
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
 
export const dynamic = "force-dynamic";
 
export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
 
    // 1. Confirmar a identidade do usuário no servidor
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
 
    if (userError || !user) {
      return NextResponse.json(
        { error: "Faça login para continuar." },
        { status: 401 }
      );
    }
 
    // 2. Verificar se a dona autorizou o acesso
    const { data: access, error: accessError } = await supabase
      .from("gallery_access")
      .select("active")
      .eq("user_id", user.id)
      .maybeSingle();
 
    if (accessError) {
      console.error("Erro ao verificar acesso à galeria:", accessError.message);
 
      return NextResponse.json(
        { error: "Não foi possível verificar seu acesso." },
        { status: 500 }
      );
    }
 
    if (!access?.active) {
      return NextResponse.json(
        {
          error:
            "Sua galeria ainda não está liberada. Entre em contato com Miss Cookie.",
          images: [],
        },
        { status: 403 }
      );
    }
 
    // 3. Listar as fotos no bucket privado
    const { data: files, error: filesError } = await supabase.storage
      .from("private-gallery")
      .list("", {
        limit: 100,
        sortBy: { column: "name", order: "asc" },
      });
 
    if (filesError) {
      console.error("Erro ao listar fotos:", filesError.message);
 
      return NextResponse.json(
        { error: "Não foi possível carregar as fotos." },
        { status: 500 }
      );
    }
 
    // Ignorar pastas e aceitar somente formatos de imagem permitidos
    const allowedExtensions = /\.(jpe?g|png|webp|avif)$/i;
 
    const imageFiles = (files ?? []).filter(
      (file) => file.id && allowedExtensions.test(file.name)
    );
 
    if (imageFiles.length === 0) {
      return NextResponse.json({ images: [] });
    }
 
    // 4. Gerar links temporários de cinco minutos
    const paths = imageFiles.map((file) => file.name);
 
    const { data: signedFiles, error: signedError } =
      await supabase.storage
        .from("private-gallery")
        .createSignedUrls(paths, 300);
 
    if (signedError || !signedFiles) {
      console.error(
        "Erro ao gerar links temporários:",
        signedError?.message
      );
 
      return NextResponse.json(
        { error: "Não foi possível liberar as fotos." },
        { status: 500 }
      );
    }
 
    const images = signedFiles
      .filter((file) => file.signedUrl)
      .map((file, index) => ({
        name: imageFiles[index]?.name ?? file.path,
        url: file.signedUrl,
      }));
 
    return NextResponse.json(
      { images },
      {
        headers: {
          "Cache-Control": "private, no-store",
        },
      }
    );
  } catch (error) {
    console.error("Erro inesperado na galeria:", error);
 
    return NextResponse.json(
      { error: "Ocorreu um erro inesperado." },
      { status: 500 }
    );
  }
}
 