import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import MyOrder from "../MyOrder/MyOrder";
import Pay from "../Pay/Pay";
import NotFound from "../../Home/Home/NotFound";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AddCemera from "../AddCamera/AddCemera";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProduct from "../ManageProduct/ManageProduct";
import AddminRoute from "../../Login/AddminRoute/AddminRoute";

const Dashboard = () => {
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  const handleLogOut = () => {
    logOut(history);
  };
  return (
    <div>
      <div className="headerColor"></div>
      <Row className="w-100">
        <Col xs={12} md={2}>
          <div className="bg-light shadow">
            <Nav className="dash-nav">
              <Nav.Link as={Link} to="/" className="dashboad-style">
                <h4>Home Page</h4>
              </Nav.Link>
              <Nav.Link as={Link} to={`${url}`} className="dashboad-style">
                Dashboard
              </Nav.Link>
              {!admin && (
                <>
                  {" "}
                  <Nav.Link
                    as={Link}
                    to={`${url}/pay`}
                    className="dashboad-style"
                  >
                    Payment Method
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/myorders`}
                    className="dashboad-style"
                  >
                    My Orders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/review`}
                    className="dashboad-style"
                  >
                    Add Review
                  </Nav.Link>
                </>
              )}

              {admin && (
                <>
                  {" "}
                  <Nav.Link
                    as={Link}
                    to={`${url}/manageorder`}
                    className="dashboad-style"
                  >
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/addproduct`}
                    className="dashboad-style"
                  >
                    Add Camara
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/makeadmin`}
                    className="dashboad-style"
                  >
                    Make Admin
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={`${url}/manageproduct`}
                    className="dashboad-style"
                  >
                    Manage Product
                  </Nav.Link>
                </>
              )}

              <button onClick={handleLogOut} className="dash-btn bg-success">
                LogOut
              </button>
            </Nav>
          </div>
        </Col>
        <Col xs={12} md={10}>
          <Switch>
            <Route exact path={path}>
              <div className="dash-board">
                <h3>Welcome to Dashboard</h3>
              </div>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/review`}>
              <AddReview></AddReview>
            </Route>
            <AddminRoute path={`${path}/manageorder`}>
              <ManageAllOrder></ManageAllOrder>
            </AddminRoute>
            <AddminRoute path={`${path}/addproduct`}>
              <AddCemera></AddCemera>
            </AddminRoute>
            <AddminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AddminRoute>
            <AddminRoute path={`${path}/manageproduct`}>
              <ManageProduct></ManageProduct>
            </AddminRoute>
            <Route path={`${path}/*`}>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
