import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ResourcesContext } from "./contexts/ResourcesContext";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const { setResources, setSections } = useContext(ResourcesContext);
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  useEffect(() => {
    Promise.all([
      fetch(
        `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=resourceCard`
      ),
      fetch(
        `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=section`
      ),
    ])
      .then(([resResources, resSections]) =>
        Promise.all([resResources.json(), resSections.json()])
      )
      .then(([jsonResources, jsonSections]) => {
        setResources(jsonResources);
        setSections(jsonSections);
        console.log("jsonresources", jsonResources);
        console.log("jsonSections", jsonSections);
      });
  }, [ACCESS_TOKEN, setResources, setSections]);

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
