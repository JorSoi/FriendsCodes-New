"use client"

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import Button from "@/components/Global/Button";

function Page() {

  
  const [email, setEmail] = useState<string>("")

  const handleClick = async () => {
    const supabase = await createClient();
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password: "Supert0ll"
    })

    if(error) {
      console.log(error)
    } else {
      console.log(data)
    }
  }

  const handleSignOut = async () => {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }



  return (
    <div>
      <input className="text-black" type="email" value={email} onChange={(el) => {setEmail(el.target.value)}}/>
      <Button onClick={handleClick}>login</Button>
      <Button onClick={handleSignOut} variant={"secondary"}>SignOut</Button>
    </div>
  );
}

export default Page;
