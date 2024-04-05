import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addFormData, resetFormData } from "../Redux/Slice/Slice";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

  const navigate = useNavigate('');
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    priority: "p0",
    status: "Assign"
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    dispatch(addFormData({ formData, id: uuidv4() }));

    setFormData({
      title: "",
      description: "",
      team: "",
      priority: "p0",
    });
    navigate("/");
  };

  const handleReset = () => {
    setFormData({
      title: "",
      description: "",
      team: "",
      priority: "p0",
    });
    dispatch(resetFormData());
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  

  return (
    <div style={{ margin: 100 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form className="form">
          <div className="formHeader">
            <h2 style={{paddingLeft:8}} >CREATE TASK</h2>
          </div>

          {/* Title Input */}
          <div className="inputDiv">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Description Input */}
          <div className="inputDiv">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              style={{borderRadius:8, border:"1px solid black"}}
              rows={5}
            />
          </div>

          {/* Team Input */}
          <div className="inputDiv">
            <label htmlFor="team">Team</label>
            <input
              type="text"
              id="team"
              value={formData.team}
              onChange={handleChange}
            />
          </div>

          <div style={{display:"flex", justifyContent:"space-between"}} >

            {/* Priority Selection */}
          <div className="inputDiv">
            <label htmlFor="priority">Priority:</label>
            <select
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
              }}
              value={formData.priority}
              id="priority"
              onChange={handleChange}
            >
              <option value="p0">p0</option>
              <option value="p1">p1</option>
              <option value="p2">p2</option>
            </select>
          </div>

          {/* Status Selection */}
          <div className="inputDiv">
            <label htmlFor="status">Status:</label>
            <select
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
              }}
              value={formData.status}
              id="status"
              onChange={handleChange}
            >
              <option value="In pending">Assign</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deffered">Deffered</option>
            </select>
          </div>

          </div>

          

          {/* Submit and Reset Buttons */}
          <span>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
