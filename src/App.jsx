import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Secondary from "./components/Secondary";
import HomePage from "./components/Homepage";
import { createContext, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Rukshan");
  const userContext = createContext();

  function logMe() {
    alert("I'm awesome");
  }

  return (
    <userContext.Provider value={name} awesome={logMe}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage veloxal={name} awesome={logMe} />}
          />
          <Route path="/two" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
