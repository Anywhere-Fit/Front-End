import React, {  useEffect } from "react";
import Styled from "styled-components";
import ClassItem from "./ClassItem";
import { connect } from "react-redux";
import { getClasses, deleteClass } from "../actions/userAction";


const ClassListPage = (props) => {
  useEffect(() => {
    props.getClasses();
  }, []);

  const deleteClass = (id) => {
    console.log("in ClassListPage delete:", id);
    props.deleteClass(id);
  };

  return (
    <div className="ClassesList">
      <header className="App-header">
        <h3>Welcome to Class List Page</h3>
        <div className="class-list">
          {props.classList &&
            props.classList.map((c) => {
              return (
                <ClassItem
                  key={c.class_id}
                  classItem={c}
                  deleteClass={deleteClass}
                />
              );
            })}
        </div>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    classList: state.userReducer.allClasses,
    isLoading: state.userReducer.isLoading,
  };
};
export default connect(mapStateToProps, { getClasses, deleteClass })(
  ClassListPage
);
