import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [data, setData] = useState({
    title: "",
    website: "",
    imagelink: "",
    note: "",
    done: false,
  });
  // change event
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };
  // submitting the data into database
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await fetch(`http://localhost:5000/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      alert("Note has been added successfully!");

      setData({
        title: "",
        website: "",
        imagelink: "",
        note: "",
      });
    } else {
      alert("Check your credentials and try again!");
    }
    //console.log("Your note has been added. " + response.json);
  };

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
            name="title"
            value={data.title}
            onChange={onChange}
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
              name="website"
              value={data.website}
              onChange={onChange}
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
              name="imagelink"
              value={data.imagelink}
              onChange={onChange}
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
            name="note"
            value={data.note}
            onChange={onChange}
          ></textarea>
        </div>
        {/* -----------------form */}
        <div className="button-box">
          <button className="submit-button" onClick={onSubmit}>
            Save
          </button>
        </div>
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
                <i className="fas fa-solid fa-check mx-2"></i>
                <i class="fa-solid fa-trash mx-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
