import React, { useState } from 'react'
import './Task.css'
import Pending from '../TaskCard/Pending/Pending';
import InProgress from '../TaskCard/InProgress/InProgress';
import Completed from '../TaskCard/Completed/Completed';
import Deployed from '../TaskCard/Deployed/Deployed';
import Declined from '../TaskCard/Declined/Declined';
import AddTask from '../../AddTask/AddTask';
import Filter from '../FilterStore/Filter';
import Sort from '../FilterStore/Sort';

const TaskBoard = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = ()=>{
    setIsVisible(true);
  }
  return (
    <div className='forAddTask' >
      <div style={{border:"5px solid black", margin:100, padding:10, borderRadius:10}} >
        <div className="filterDiv" >
          <div>
            <Filter/>
            <Sort/>
          </div>
          <button className='addTaskButton' onClick={handleClick} >Add New Task</button>
        </div>

        <div style={{display:"flex", marginTop:10}} >
          
          <div className='taskbox' >
            <Pending />
          </div>

          <div className='taskbox'  >
            <InProgress/>
          </div>

          <div className='taskbox'  >
            <Completed/>
          </div>

          <div className='taskbox'  >
            <Deployed/>
          </div>

          <div className='taskbox'  >
            <Declined/>
          </div>
        </div>

      </div>


      <div className='fixAddTask' style={{display : isVisible ? 'block':'none' }} >
      <div style={{ cursor:"pointer" }} onClick={()=>setIsVisible(false)} className='closeDiv' ><p style={{textAlign:"center", padding:10, fontWeight:"bold", fontSize:20}} >X</p></div>
        <AddTask/>
      </div>
    </div>
  )
}


export default (TaskBoard);