"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Authform from "@/components/Auth/Authform";
import supabaseClient from "@/utils/supabase";
import { useRouter } from "next/navigation";
import _ from "lodash"


const Dashboard = async () => {

  // const supabase = createClientComponentClient()

  const [testuser, setTestuser] = useState({});
  
  const[formData, setFormData] = useState({
    email:'',
    password:'',
    view:'signin'
  })

  const router = useRouter()

  async function getUser(){
    const {
      data: { session },
    } = await supabaseClient.auth.getSession()

    if(session){
      const {data:{user}} = await supabaseClient.auth.getUser();
      console.log("user", user)
      setTestuser({...testuser, ...user})
    }
  }

  useEffect(()=>{

    console.log(" from useEffect testuser:",testuser);
    console.log("isEmpty:", _.isEmpty(testuser))
    
    if(_.isEmpty(testuser)){
      getUser()
    }

  }, [testuser])

  const handleChange = (e) =>{
    console.log("e.target:",e.target)
    const {name, value} = e.target || {};
    setFormData({...formData, [name]:value})
  }

  const handleSignUp = async (userData) =>{
    await supabaseClient.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async (userData) =>{
    await supabaseClient.auth.signInWithPassword({
      email: userData.email,
      password: userData.password
    })

    router.refresh()
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("formData:", formData)
    formData.view === "signin" ? handleSignIn(formData) : handleSignUp(formData)
  }

  useEffect(()=>{
    console.log("_.isEmpty(testuser):",_.isEmpty(testuser))
  })

  // console.log("testuser:",testuser)

  return (
    <div>
      { _.isEmpty(testuser) ? <Authform user={testuser} handleChange={handleChange} handleSubmit={handleSubmit} formData= {formData} /> :
      
      (<pre>{JSON.stringify(testuser, undefined, 2)}</pre>)
  } 
    </div>
  );
};

export default Dashboard;
