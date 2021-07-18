import React from "react";
import "./Login.css";
import { Dropdown } from "react-bootstrap";

export default function LoginForm() {
  //   const [emailaddr, setemailaddr] = useState("");
  // const [psswd, setpsswd] = useState("");

  // function validateForm() {
  //   return emailaddr.length > 0 && psswd.length > 0;
  // }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="LoginPage">
        <div className="m-4">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            // value={emailaddr}
            // onChange={(e) => setemailaddr(e.target.value)}
          />
        </div>
        <div className="m-4">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            // value={psswd}
            // onChange={(e) => setpsswd(e.target.value)}
          />
        </div>

               
          <Dropdown>
     <Dropdown.Toggle id="dropdown-button-light-example1" className="mx-4 my-3" variant="outline-primary" size="sm">
        User Type
      </Dropdown.Toggle>
  
      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#/action-1">
          Admin
         </Dropdown.Item>
         <Dropdown.Item href="#/action-2">PG Owner</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Student</Dropdown.Item>
        
       </Dropdown.Menu>
     </Dropdown>

        <button
          type="submit"
          className="btn btn-primary mx-4 my-3"
          // disabled={!validateForm()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
