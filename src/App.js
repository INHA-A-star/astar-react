import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import GuidePage from './views/GuidePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/guide" component={GuidePage}/>
      </Switch>
    </Router>
  );
}

export default App;
