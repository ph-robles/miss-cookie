 
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
 
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });
 
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase não configurado. Confira as variáveis do arquivo .env.local."
    );
  }
 
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
 
        supabaseResponse = NextResponse.next({
          request,
        });
 
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
      },
    },
  });
 
  // Atualiza a sessão e valida o usuário junto ao Supabase Auth.
  await supabase.auth.getUser();
 
  return supabaseResponse;
}
 