import React from "react";

const Welcome = (props) => {
  const buttonHandler = () => {
    props.setLogin(false);
    localStorage.setItem('login', false);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={buttonHandler}>Logout</button>
    </div>
  );
};

export default Welcome;
