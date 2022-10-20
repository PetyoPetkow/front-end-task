import React from "react";
import { useState } from "react";
import Names from "./Names";

function Form() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  //button functions:

  //Has validation if the name has already been used
  const Submit = () => {
    const input = document.querySelector("#name");
    if (!names.includes(input.value)) {
      if (input.checkValidity()) {
        setNames((prevState) => [...prevState, input.value]);
      }
    } else {
      alert("Опитай с друга мадама!");
    }
  };

  const ShowRecords = () => {
    document.querySelector("#table-records-div").style.display = "block";
  };

  //Checks if there are any records and if so deletes them
  const DeleteRecords = () => {
    if (names.length) {
      setNames([]);
    } else {
      alert("Няма запазени мадами!😭😭😭");
    }
  };
  //////////////////////////////////////////////

  return (
    <>
      <div id="leftSide">
        <form className="form" target="frame">
          <div className="form-group form-div">
            <label className="label-name" htmlFor="name">
              Add (ма)дама
            </label>

            <input
              type="text"
              id="name"
              className="form-control input-name"
              name="name"
              value={name}
              required
              maxLength="32"
              pattern="[A-Za-z]{1,32}"
              autoComplete="off"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>

            <button type="submit" className="submit-name" onClick={Submit}>
              Submit
            </button>

            <p></p>
          </div>
        </form>
      </div>

      <div id="rightSide">
        <button className="btn-show" onClick={ShowRecords}>
          show
        </button>

        <button className="btn-clear" onClick={DeleteRecords}>
          clear
        </button>

        <div id="table-records-div">
          <table id="table-records">
            <tbody>
              <Names names={names.sort()} />
            </tbody>
          </table>
        </div>
      </div>

      {/*iframe to avoid page reload on form submition*/}
      <iframe name="frame"></iframe>
    </>
  );
}

export default Form;
