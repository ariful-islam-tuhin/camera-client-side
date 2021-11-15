import { Route, Switch } from "react-router";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./compunents/Header/Header";
import Home from "./compunents/Home/Home/Home";
import Register from "./compunents/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import MoreProduct from "./compunents/Home/Home/MoreProduct";
import Footer from "./compunents/Home/Home/Footer";
import Login from "./compunents/Login/Login/Login";
import AddCemera from "./compunents/Dashboard/AddCamera/AddCemera";
import NotFound from ".//compunents//Home//Home//NotFound";
import Dashboard from "./compunents/Dashboard/Dashboard/Dashboard";
import PlaceOrder from "./compunents/Home/PlaceOrder/PlaceOrder";

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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/moreProduct">
              <MoreProduct></MoreProduct>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/addcamera">
              <AddCemera></AddCemera>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
