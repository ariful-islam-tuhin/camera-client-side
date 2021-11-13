import { Route, Switch } from "react-router";
import "./App.css";
import About from "./compunents/About/About";

import { BrowserRouter } from "react-router-dom";
import Header from "./compunents/Header/Header";
import Home from "./compunents/Home/Home/Home";
import Register from "./compunents/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import MoreProduct from "./compunents/Home/Home/MoreProduct";
import Footer from "./compunents/Home/Home/Footer";
import Login from "./compunents/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/moreProduct">
              <MoreProduct></MoreProduct>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
