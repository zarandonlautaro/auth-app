import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "../components/Layouts/Layout";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../utils/privateRoute";
import Edit from "../pages/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/' exact component={Login} />
          <Route path='/auth/:token' exact component={Auth} />
          <Route path='/register' exact component={Register} />
          <Route path='/edit/:idUser' exact component={Edit} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <Redirect to='/' />
        </Layout>
      </Switch>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
      />
    </BrowserRouter>
  );
};

export default Router;
