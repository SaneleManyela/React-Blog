import Home from './Home';
import Navbar from './Navbar';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './404NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/' exact={true}>
              <Home />
            </Route>
            <Route path='/create' exact={true}>
              <Create />
            </Route>
            <Route path='/blogs/:id' exact={true}>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
