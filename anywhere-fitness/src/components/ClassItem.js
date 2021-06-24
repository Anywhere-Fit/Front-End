import React from "react";
import {  useHistory } from "react-router-dom";

const ClassItem = (props) => {
  const { push } = useHistory();
  const { classItem, deleteClass } = props;

  const handleDelete = (id) => {
    deleteClass(id);
    push("/classlist");
  };

  const handleEdit = (id)=>{
      push(`/class/edit/${classItem.class_id}`);
  }

  const handleAdd = (id) => {
    push("/addclass");
  };

  return (
    <div className="ClassItem">
      <div className="card">
        <h5>Id: {classItem.class_id}</h5>
        <h5>Name: {classItem.class_name}</h5>
        <h5>Type: {classItem.type_id}</h5>
        <h5>Date: {classItem.date}</h5>
        <h5>Start_Time: {classItem.start_time}</h5>
        <h5>duration: {classItem.duration}</h5>
        <h5>Intensity: {classItem.intensity}</h5>
        <h5>Date: {classItem.date}</h5>
        <h5>Registered_Atendees: {classItem.current_class_size}</h5>
        <h5>Location: {classItem.location}</h5>
        <h5>Class_Size: {classItem.max_class_size}</h5>
        <button
          onClick={() => {
            handleAdd(classItem.class_id);
          }}
        >
          Add New Class
        </button>
        <button onClick={()=>{handleEdit(classItem.class_id)}}>Edit</button>
        {/* <Link to={`/class/edit/${classItem.class_id}`} className="m-2 btn btn-success">
          Edit
        </Link> */}
        <button
          onClick={() => {
            handleDelete(classItem.class_id);
          }}
        >
          Delete
        </button>
        <h5>-------------------------------------------------------</h5>
      </div>
    </div>
  );
};

export default ClassItem;
