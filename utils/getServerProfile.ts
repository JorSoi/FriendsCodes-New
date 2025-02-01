import { createClient } from "./supabase/server"
import { User, AuthError, QueryError } from "@supabase/supabase-js";
import { Tables } from "@/types/database.types";

export interface UserProfileResponse {
  user: User | null;
  profile: Tables<"profiles"> | null; 
  error: AuthError | QueryError | null ;
}

export const getServerProfile = async (): Promise<UserProfileResponse> => {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user || error) {
    return { user: null, profile: null, error };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select()
    .eq("id", user.id)
    .single();

  return {
    user,
    profile,
    error: profileError || error
  };
};