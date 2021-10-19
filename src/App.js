
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import OurFacility from './components/OurFacility/OurFacility';
import Registration from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import DetailService from './components/DetailService/DetailService';
import DetailFacility from './components/DetailFacility/DetailFacility';
import './App.css';
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/facility" exact component={OurFacility} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/detailservice/:id" exact>
              <DetailService />
            </PrivateRoute>
            <PrivateRoute path="/DetailFacility/:id" exact>
              <DetailFacility />
            </PrivateRoute>
            <Route path="/*" exact component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
