import React from 'react'
import TaskData from '../../../TaskData/TaskData'
const Declined = () => {
  return (
    <div style={{padding:0, margin:0}} >
      <div style={{backgroundColor:"#de865d"}} >
        <p style={{textAlign:'center', color:"#fff", fontWeight:"bold", fontSize:20, margin:0, paddingBottom:16}}>Deffered</p>
      </div>
      <div>
        <TaskData statusAssign={'Deffered'} />
      </div>
    </div>
  )
}

export default Declined
