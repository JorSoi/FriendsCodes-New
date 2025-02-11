import { createClient } from "./supabase/server";



export const generateUniqueProfileName = async (email : string) : Promise<string> => {
    let baseUsername = email.split("@")[0].split(".")[0].replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let username = baseUsername
    let counter = 0;
    const maxAttempts = 100;

    while (await checkUserExist(username)) {
        counter++;
        username = `${baseUsername}${counter}`;
    }
    if (counter >= maxAttempts) {
        throw new Error("Failed to generate unique username. Tried too many times without success.");
    }

    return username
}

const checkUserExist = async (username: string): Promise<boolean> => {
    const supabase = await createClient();
    const { count, error } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true })
        .ilike("user_name", username);

    if (error) {
        console.error("Error checking username:", error);
        return false; // Default to false if an error occurs
    }

    return count ? count > 0 : false // Ensures a valid boolean return
};

