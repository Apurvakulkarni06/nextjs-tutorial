"use client"
import React, { useEffect } from 'react'
import useSWR from 'swr'
import supabase from '../../utils/supabase';

const Dashboard = async() => {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const {data, error, isLoading}  = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log("data:", data)
  useEffect(async()=>{
    const countries = await supabase.from('countries').select('name', 'id');
    console.log("countries:", countries)
  },[])
  
  
  return (
    <div>
      {/* <p>{isLoading ? "Loading" : "Dashboard"}</p> */}
      Dashboard
    </div>
  )
}

export default Dashboard