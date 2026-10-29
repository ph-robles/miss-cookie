import { createBrowserClient } from "@supabase/ssr";
 
export function createSupabaseBrowserClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
 
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase não configurado. Confira as variáveis do arquivo .env.local."
    );
  }
 
  return createBrowserClient(supabaseUrl, supabaseKey);
}