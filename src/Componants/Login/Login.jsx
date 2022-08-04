import React from "react";

function Login() {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <button className="btn btn-primary mb-2" onClick={addUserHandler}>
          Add Name
        </button>
        <ul className="list-group">{nameListComponant()}</ul>
      </div>
    </React.Fragment>
  );
}
export default Login;
