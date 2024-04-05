import React from 'react'
import TaskData from '../../../TaskData/TaskData'

const Pending = () => {

  return (
    <div>
      <div style={{backgroundColor:"#cccccc"}} >
      <p style={{textAlign:'center', color:"#fff", fontWeight:"bold", fontSize:20, margin:0, paddingBottom:16}}>Pending</p>
      </div>
      <div>
        <TaskData statusAssign={'Assign'} />
      </div>
    </div>
  )
}

export default Pending
