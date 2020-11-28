import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import Planner from './components/Planner'

function PathNotFound() {
  return (
    <h3>Error 404 - Page Not Found!</h3>
  )
}


//Front-end routing to corresponding pages
export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact/>
        <Route path="/log-in" component={Login} exact/>
        <Route path="/sign-up" component={Signup} exact/>
        <Route path="/account/:username" component={Account} exact/>
        <Route path="/account/:username/planner/:index" component={Planner} exact/>
        <Route component={PathNotFound} />
      </Switch>
    </main>
  );
}

