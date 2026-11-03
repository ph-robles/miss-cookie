import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type GalleryImage = {
  name: string;
  url: string;
};

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();

    // Confirma a identidade diretamente com o servidor do Supabase.
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error(
        "Usuário não autenticado:",
        userError?.message ?? "Sessão não encontrada."
      );

      return NextResponse.json(
        {
          error: "Faça login para continuar.",
          images: [],
        },
        {
          status: 401,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    // Verifica se o usuário recebeu autorização para acessar a galeria.
    const { data: access, error: accessError } = await supabase
      .from("gallery_access")
      .select("active")
      .eq("user_id", user.id)
      .maybeSingle();

    if (accessError) {
      console.error(
        "Erro ao verificar acesso à galeria:",
        accessError.message
      );

      return NextResponse.json(
        {
          error: "Não foi possível verificar seu acesso.",
          images: [],
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    if (!access?.active) {
      return NextResponse.json(
        {
          error:
            "Sua galeria ainda não está liberada. Entre em contato com Miss Cookie.",
          images: [],
        },
        {
          status: 403,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    // Lista os arquivos existentes na raiz do bucket privado.
    const { data: files, error: filesError } = await supabase.storage
      .from("private-gallery")
      .list("", {
        limit: 100,
        offset: 0,
        sortBy: {
          column: "name",
          order: "asc",
        },
      });

    if (filesError) {
      console.error("Erro ao listar fotos:", filesError.message);

      return NextResponse.json(
        {
          error: "Não foi possível carregar as fotos.",
          images: [],
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    // Aceita somente arquivos de imagem.
    const allowedExtensions = /\.(jpe?g|png|webp|avif)$/i;

    const imageFiles = (files ?? []).filter((file) => {
      return Boolean(file.id) && allowedExtensions.test(file.name);
    });

    if (imageFiles.length === 0) {
      return NextResponse.json(
        {
          images: [],
        },
        {
          status: 200,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    const paths = imageFiles.map((file) => file.name);

    // URLs válidas durante cinco minutos.
    const { data: signedFiles, error: signedError } =
      await supabase.storage
        .from("private-gallery")
        .createSignedUrls(paths, 300);

    if (signedError || !signedFiles) {
      console.error(
        "Erro ao gerar links temporários:",
        signedError?.message ?? "Nenhum link foi retornado."
      );

      return NextResponse.json(
        {
          error: "Não foi possível liberar as fotos.",
          images: [],
        },
        {
          status: 500,
          headers: {
            "Cache-Control": "private, no-store, max-age=0",
          },
        }
      );
    }

    const images: GalleryImage[] = signedFiles
      .map((signedFile) => {
        if (!signedFile.signedUrl) {
          return null;
        }

        return {
          name: signedFile.path,
          url: signedFile.signedUrl,
        };
      })
      .filter((image): image is GalleryImage => image !== null);

    return NextResponse.json(
      {
        images,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "private, no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Erro inesperado na galeria:", error);

    return NextResponse.json(
      {
        error: "Ocorreu um erro inesperado.",
        images: [],
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "private, no-store, max-age=0",
        },
      }
    );
  }
}