import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ResourcesContext } from "./contexts/ResourcesContext";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const { setResources, setSections } = useContext(ResourcesContext);
  const { REACT_APP_ACCESS_TOKEN } = process.env;

  useEffect(() => {
    Promise.all([
      fetch(
        `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=${REACT_APP_ACCESS_TOKEN}&content_type=resourceCard`
      ),
      fetch(
        `https://cdn.contentful.com/spaces/web30mio6wbr/environments/master/entries?access_token=${REACT_APP_ACCESS_TOKEN}&content_type=section`
      ),
    ])
      .then(([resResources, resSections]) =>
        Promise.all([resResources.json(), resSections.json()])
      )
      .then(([jsonResources, jsonSections]) => {
        setResources(jsonResources);
        setSections(jsonSections);
      });
  }, [REACT_APP_ACCESS_TOKEN, setResources, setSections]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
