import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Main from "./page/main";
import AddTask from "./AddTask/AddTask";
import TaskData from "./TaskData/TaskData";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<AddTask />} />
        <Route path="/task" element={<TaskData />} />
      </Routes>
    </Router>
  );
}

export default App;