import React from 'react'
import TaskData from '../../../TaskData/TaskData'

const Completed = () => {
  return (
    <div>
      <div style={{backgroundColor:"#7db579"}} >
        <p style={{textAlign:'center', color:"#fff", fontWeight:"bold", fontSize:20, margin:0, paddingBottom:16}} >Completed</p>
      </div>
      <div>
      <TaskData statusAssign={'Completed'} />
      </div>
    </div>
  )
}

export default Completed
