import React from 'react'
import './main.css'
import TaskBoard from './Task'

const Main = () => {
  return (
    <div style={{backgroundColor:"#fff",}} >
      <div style={{display:"flex", flexDirection:"row", backgroundColor:"#fff", justifyContent:"space-between", alignItems:"center", padding:10}} >
        <h1>Task Board</h1>
        <div>Profile</div>
      </div>

      <div>
        <TaskBoard />
      </div>
    </div>
  )
}

export default Main
