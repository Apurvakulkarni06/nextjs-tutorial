"use client"
import React from 'react'
import useSWR from 'swr'

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading}  = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log("data:", data)
  
  
  return (
    <div>
      <p>{isLoading ? "Loading" : "Dashboard"}</p>
    </div>
  )
}

export default Dashboard