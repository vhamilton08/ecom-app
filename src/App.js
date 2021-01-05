import './App.scss';
import routes from './routes';
import Nav from './components/Nav';
import {withRouter} from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {props.location.pathname !=='/auth' ?
      <Nav/> : null}
      {routes}
    </div>
  );
}

export default withRouter(App);
