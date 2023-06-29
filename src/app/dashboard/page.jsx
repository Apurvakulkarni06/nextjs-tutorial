// "use client";
// import React, { useEffect, useState } from "react";
// import supabase from "../../utils/supabase";
// import Signup from "@/components/Auth/Signup";

// const Dashboard = async () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = async () => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });
//   };

//   const signOut = async () =>{
//     let { error } = await supabase.auth.signOut();
//     console.error("Error occurred while signing out", error)
//   }

//   useEffect(() => {
//     async function loadData() {
//       const { data } = await supabaseClient.from("item").select("*");
//       setData(data);
//     }
//     // Only run query once user is logged in.
//     if (user) loadData();
//   }, [user]);

//   useEffect(async () => {
//     const {
//       data: { user: authenticatedUser },
//     } = await supabase.auth.getUser();

//     console.log("authenticatedUser", authenticatedUser);
//     setUser(authenticatedUser)
//   }, []);

//   return (
//     <div>
//       {/* <p>{isLoading ? "Loading" : "Dashboard"}</p> */}
//       {Boolean(user) ? (
//         <pre>Dashboard</pre>
        
//       ) : (
//         <>
//           {/* <button onClick={() => supabaseClient.auth.signOut()}>
//             Sign out
//           </button>
//           <p>user:</p>
//           <pre>{JSON.stringify(user, null, 2)}</pre>
//           <p>client-side data fetching with RLS</p>
//           <pre>{JSON.stringify(data, null, 2)}</pre> */}
          
//           <Signup email={email} password={password} onSubmit={signIn} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

"use client"
import React, { useEffect } from "react";
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const Dashboard = () =>{
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient())
  

  useEffect(()=>{
    const { user, error } = useUser();
    console.log("user:",user)
  }, [])
  
  return(
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
    <div>Dashboard</div>
    </SessionContextProvider>
  )
}

export default Dashboard;
