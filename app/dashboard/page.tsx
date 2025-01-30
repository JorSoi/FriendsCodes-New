import NavBar from "@/components/Product/NavBar/NavBar";
import { createClient } from "@/utils/supabase/server";

async function Page() {

    const supabase = await createClient()
    const {data : {user}} = await supabase.auth.getUser();
    // if (!error && user) {
    //     const {data} = await supabase.from("profiles").select().eq("id", user.id)
    //     console.log(data)
    // }


    return (
        <div>
            <NavBar />
            {user ? <h1>Welcome back {user.email}</h1> : <h1>You are not authed yet</h1>}
           
        </div>
    );
}

export default Page;