import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import GuidePage from './views/GuidePage';
import ProblemPage from './views/problem/ProblemPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/guide" component={GuidePage}/>
        <Route path="/problem" component={ProblemPage}/>
      </Switch>
    </Router>
  );
}

export default App;
