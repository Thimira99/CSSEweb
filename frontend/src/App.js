import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import dashboard from './Pages/Admin/Dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>

      <Router>

        <div className='main-wrapper'>
          <div className='main-body'>
            <Switch>
            <Route path='/mainPage' component={dashboard} />
        

            </Switch>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
