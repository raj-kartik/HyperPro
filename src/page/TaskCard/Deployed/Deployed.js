import React from 'react'
import TaskData from '../../../TaskData/TaskData'
const Deployed = () => {
  return (
    <div>
      <div style={{backgroundColor:"#2c0759"}} >
        <p style={{textAlign:'center', color:"#fff", fontWeight:"bold", fontSize:20, margin:0, paddingBottom:16}} >Deployed</p>
      </div>
      <div>
        <TaskData statusAssign={'Deployed'} />
      </div>
    </div>
  )
}

export default Deployed
