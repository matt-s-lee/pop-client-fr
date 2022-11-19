import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ResourcesContext } from "./contexts/ResourcesContext";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const { setResources } = useContext(ResourcesContext);
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  useEffect(() => {
    fetch(
      `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=resourceCard`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setResources(json);
      });
  }, [ACCESS_TOKEN, setResources]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
