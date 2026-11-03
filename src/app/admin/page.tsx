import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import AdminUsersClient from "./AdminUsersClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect("/login?next=/admin");
    }

    const { data: administrator, error: administratorError } =
        await supabase
            .from("admin_users")
            .select("user_id")
            .eq("user_id", user.id)
            .maybeSingle();

    if (administratorError) {
        console.error(
            "Erro ao verificar acesso administrativo:",
            administratorError.message
        );

        redirect("/account?error=admin_verification_failed");
    }

    if (!administrator) {
        redirect("/account?error=admin_access_denied");
    }

    return <AdminUsersClient />;
}