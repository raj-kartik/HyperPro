import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Filter = ()=> {

    
    const [assign, setAssign] = useState('');
    const [priority, setPriority] = useState('');
    const data = useSelector(state => state.form.formDataList);

    const filteredResults = data.filter(item => {
        if (assign && item.formData.assign.toLowerCase().indexOf(assign.toLowerCase()) === -1) {
          return false;
        }
        if (priority && item.formData.priority !== priority) {
          return false;
        }
        return true;
      });

  return (
      <div style={{display:"flex", flexDirection:"row"}} >
        <div style={{marginRight:20}} >
            <label htmlFor="name" style={{color:"#000"}} >Filter By:</label>
            <input type="text" id="name" value={assign} placeholder='Assign Name' onChange={(e) => setAssign(e.target.value)} />
        </div>
        <label htmlFor="priority" style={{color:"#000"}} >Priority:</label>
        <select id="priority" value={priority} style={{padding:5, borderRadius:5}} placeholder="Priority" onChange={(e) => setPriority(e.target.value)}>
          <option value="p0">p0</option>
          <option value="p1">p1</option>
          <option value="p2">p2</option>
        </select>
      </div>
  )
}

export default Filter
