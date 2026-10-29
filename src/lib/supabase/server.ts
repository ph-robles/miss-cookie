 
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
 
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
 
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase não configurado. Confira as variáveis do arquivo .env.local."
    );
  }
 
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Em Server Components, a gravação de cookies pode não ser permitida.
          // A renovação da sessão será tratada pela camada de proxy.
        }
      },
    },
  });
}
 