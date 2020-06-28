import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from './Components/Header';
import AllCountryData from './Components/AllCountryData';
import SpecificCountry from './Components/SpecificCountry';


class App extends React.Component {

render() {
  return (
    <Router>
      <Header className="App"/>
      <Switch>
        <Route path="/" exact={true} component={AllCountryData} />
        <Route path="/:Country" exact={true} render={({match})=>{
          return <SpecificCountry country={match.params.Country}/>
        }} />
      </Switch>
    </Router>
  )
}
}

export default App;
