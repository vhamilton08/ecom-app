import './App.scss';
import routes from './routes';
import Nav from './components/Nav';
import {withRouter} from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {props.location.pathname ==='/auth' ?
      null : <Nav/>}
      {routes}
    </div>
  );
}

export default withRouter(App);
