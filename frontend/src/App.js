import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import approval from './Pages/Admin/Approval/approval';
import dashboard2 from './Pages/Admin/Dashboard2/dashboard2';
import viewOrder from './Pages/Admin/ViewOrder/viewOrder';



function App() {
  return (
    <>

      <Router>

        <div className='main-wrapper'>
          <div className='main-body'>
            <Switch>
            <Route path='/mainPage' component={dashboard2} />
            <Route path='/approval' component={approval} />
            <Route path='/dashboard2' component={dashboard2} />
            <Route path='/viewOrder/:id' component={viewOrder} />
        
            <Redirect from='/' to='/mainPage' />

            </Switch>
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
