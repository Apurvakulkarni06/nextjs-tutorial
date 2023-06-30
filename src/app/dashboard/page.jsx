"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import Router from "next/router";
import React, { useEffect, useState } from 'react'


const Dashboard = async() => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter()
  const supabase = createClientComponentClient();
  
  // useEffect(async()=>{
  //   const session = await supabase.auth.getSession()
  //     console.log("supabaseL",session )
  // }, [])

  const handleSignUp = async () =>{
    await supabase.auth.signUp({
      email, 
      password,
      options:{
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })

    Router.reload();
  }

  const handleSignIn = async () =>{
    await supabase.auth.signInWithPassword({
      email,
      password
    })

    Router.reload();
  }

  const handleSignOut = async() =>{
    await supabase.auth.signOut()
    Router.reload();
  }


  return (
    <div>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />

      <input 
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password} 
        />

        <button onClick={handleSignUp}>Sign up</button>

        <button onClick={handleSignIn}>Sign in</button>

        <button onClick={handleSignOut}>Sign Out</button>
      
    </div>
  )
}

export default Dashboard