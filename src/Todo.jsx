import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [data, setData] = useState({
    title: "",
    website: "",
    imagelink: "",
    done: "",
  });

  return (
    <>
      <div className="title">TODO App</div>
      <div className="form container my-5">
        {/* -----------------form */}

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Website URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Image URL
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon3">
              https://
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
        </div>

        <div className="input-group">
          <span className="input-group-text">Your Note</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        {/* -----------------form */}
      </div>
      <div className="allTodos">
        <div className="allTodo_title">All Todos</div>
        <div className="list container">
          {/* ---------todo--------------- */}
          <div className="todo">
            <div className="img">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/eBay-Emblem.png"
                alt="images"
              />
              <div className="name">
                <a href="https://www.ebay.com/">Ebay</a>
              </div>
            </div>
            <div className="notes">
              <div className="note">This is note this is the note</div>
              <div className="mark">
                <i className="fas fa-solid fa-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
