// "use client"
// import React, { useEffect } from 'react';
// import useSWR from 'swr';
// import supabase from '../../utils/supabase';
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

import AuthForm from "./(auth)/authForm/page"

const Dashboard = async() => {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const {data, error, isLoading}  = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log("data:", data)
  
  // useEffect(async()=>{
  //   const countries = await supabase.from('countries').select('name', 'id');
  //   console.log("countries:", countries)
  // },[])

  // const supabase = createServerComponentClient({ cookies });

  // const { data: countries } = await supabase.from("countries").select();
  // console.log("countries", countries)
  
  return (
    <div>
      {/* <p>{isLoading ? "Loading" : "Dashboard"}</p> */}
      <AuthForm />
    </div>
  )
}

export default Dashboard


