import React from 'react'
import TaskData from '../../../TaskData/TaskData'
const InProgress = () => {
  return (
    <div>
      <div style={{backgroundColor:"#ebb538"}} >
        <p style={{textAlign:'center', color:"#fff", fontWeight:"bold", fontSize:20, margin:0, paddingBottom:16}}>In Progress</p>
      </div>
      <div>
        <TaskData statusAssign={'In Progress'} />
      </div>
    </div>
  )
}

export default InProgress
