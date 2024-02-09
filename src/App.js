import { useState, useEffect } from "react";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const login = localStorage.getItem("login");
    console.log(login);
    console.log(isLoggedin);
    if (login === 'true') {
      setIsLoggedIn(true);
    }
    return () => {};
  }, [isLoggedin]);

  return (
    <div className="App">
      {!isLoggedin ? (
        <Card>
          <Form setLogin={setIsLoggedIn} />
        </Card>
      ) : (
        <Card>
          <Welcome setLogin={setIsLoggedIn} />
        </Card>
      )}
    </div>
  );
}

export default App;
