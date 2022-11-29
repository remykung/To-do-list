import React from 'react';
import Form from 'react-bootstrap/Form';

const TodoList = ({list, remove}) => {

    return(
     <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
          <div className="todo">
            <Form><Form.Check type="checkbox" /></Form>
            <li key={index}> {entry} </li>
            <button className="delete-button" onClick={() =>{remove(entry);}}>
              Delete</button>
          </div>

          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>NO TASKS</p>
        </div>
      )}
    </>   
  );
};


export default TodoList;
