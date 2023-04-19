import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ownership from './ownership';
import Scope from './scope';
import Audit from './audit';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Ownership} />
        <Route exact path="/search-console" component={Audit} />
      </Switch>
    </Router>
  );
}

export default App;
