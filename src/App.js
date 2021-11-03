import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
      </Switch>
    </Router>
  );
}

export default App;
