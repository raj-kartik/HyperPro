
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const TaskData = ({statusAssign})=> {
    const data = useSelector(state => state.form.formDataList);

    const [isVisible, setIsVisible] = useState(false);
    const filteredData = data.filter(item => item.formData.status === statusAssign);

  return (
    <div>
      {
        filteredData.map((item)=>{
          return(
            <div key={item.id} style={{backgroundColor:"#f7f7f7", margin:5, padding:10, border:"1px solid black"}} >
                <div style={{display:"flex", justifyContent:"space-between"}} >
                  <p>Task</p>
                  <p style={{color:"#fff", backgroundColor:"blue", padding:5, borderRadius:5}} >{item.formData.priority}</p>
                </div>
                <hr/>
                <div>
                  {item.formData.description}
                </div>

                <div>
                  <div style={{display:"flex", justifyContent:"space-between", height:"60px"}} >
                    <span style={{padding:0, margin:0}} >@Praveen</span>
                    <span style={{color:"#fff", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"flex-end"}} >
                      <span onClick={()=>setIsVisible(!isVisible)} style={{margin:0,backgroundColor:"blue", padding:"0 5px", borderRadius:2}} >...</span>
                        <span style={{backgroundColor:"#ccc", display: isVisible?"flex":"none", flexDirection:"column", borderRadius:2}} >
                          <button style={{color:"black", padding:"2px 5px", margin:0, background:"none"}} >Edit</button>
                          <button style={{color:"black", padding:"2px 5px", margin:0, background:"none"}} >Delete</button>
                        </span>
                    </span>

                  </div>
                  <div style={{width:"10vw", backgroundColor:"blue", color:"#fff", fontWeight:600, borderRadius:5, margin:0 }} >
                    <p style={{padding:5, textAlign:"center"}} >{item.formData.status}</p>
                  </div>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskData
