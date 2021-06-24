import React, { useState, useEffect }   from 'react'
import Styled from 'styled-components'
import ClassItem from './ClassItem';
import { axiosWithAuth } from "./../utils/axiosWithAuth";


// Styling for the ClassList page
const StyledClassListPage = Styled.div`
    border: 2px solid black;
    border-radius: 40px;
    width: 60%;
    margin: 2% auto 2% auto;
    padding: 3%;
    background-color: beige;

    /* input {
        margin: 2%;
        font-size: 120%;
    } */
`
const ClassListPage = () => {
    const [classList, setClassList] = useState([]);
    const getData = () => {
      axiosWithAuth()
        .get("/api/classes")
        .then((res) => {
        //   console.log("Classes Data:", res);
          setClassList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    useEffect(() => {
      getData();
    }, []);

    const deleteClass =(id) =>{
        axiosWithAuth()
       .delete(`/api/classes/${id}`)
       .then(resp=>{
           console.log("Delete Resp:", resp.data.removedClass.class_id);
           console.log("Delete ClassList:", classList);
               const newClassList = classList.filter(item => item.class_id !== resp.data.removedClass.class_id);
             console.log("Delete NewClassList:", newClassList);
               setClassList(newClassList);
       })
    }
  
    return (
      <div className="ClassesList">
        <header className="App-header">
          <h3>Welcome to Class List Page</h3>
          <div className="class-list">
   { classList && classList.map(c =>{return <ClassItem key={c.class_id} classItem={c} deleteClass = {deleteClass} classList ={classList} setClassList={setClassList}/>})}
          </div>
        </header>
      </div>
    );
  };
 
  
export default ClassListPage