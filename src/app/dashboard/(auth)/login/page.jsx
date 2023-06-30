import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import React from 'react'

const Login = () => {


  const handleSignUp = async (formData) =>{
    'use server'

    const email = formData.get("email")
    const password = formData.get("password")

    const supabase = createServerActionClient({ cookies })

    await supabase.auth.signUp({
      email,
      password,
      options:{
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    })
    revalidatePath("/")
  }

  const handleSignIn = async (formData) =>{
    'use server'

    const email = formData.get('email')
    const password = formData.get('password')
    const supabase = createServerActionClient({ cookies })

    await supabase.auth.signInWithPassword({
      email,
      password
    })

    revalidatePath("/")


  }
  
  const handleSignOut = async () =>{
    'use server'
    const supabase = createServerActionClient({ cookies})

    await supabase.auth.signOut();
    revalidatePath('/')
  }
  return (
    <div>
      <form action={handleSignup}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button>Sign Up</button>
        <button formAction={handleSignIn}>Sign In</button>
        <button formAction={handleSignOut}>Sign Out</button>
      </form>
    </div>
  )
}

export default Login