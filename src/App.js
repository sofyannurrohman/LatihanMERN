import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPages from 'pages/LandingPages';
import DetailsPages from 'pages/Detailspage';
import Example from "pages/Example";
import "assets/scss/style.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages} />
        <Route exact path="/properties/:id" component={DetailsPages} />
        <Route exact path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
