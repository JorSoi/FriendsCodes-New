import { Tables } from "@/types/database.types";
import { createClient } from "./supabase/client"
import { User, AuthError, QueryError } from "@supabase/supabase-js";

export interface UserProfileResponse {
  user: User | null;
  profile: Tables<"profiles"> | null; 
  error: AuthError | QueryError | null ;
}

export const getClientProfile = async (): Promise<UserProfileResponse> => {
  const supabase = createClient();
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