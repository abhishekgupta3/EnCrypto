import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Users from './user/pages/Users';


function App() {
  return (
  <BrowserRouter>
  <Switch>
<Route path="/" exact><h1>Hello</h1></Route>
<Route path="/user"> <Users/> </Route>

  </Switch>

   </BrowserRouter>

  );
}

export default App;
