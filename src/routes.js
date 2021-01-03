import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import RegisterForm from "./components/register/RegisterForm";
import Home from "./components/Home/Home";
import CreateProject from "./components/Projects/createProject/createProject";
import Projects from "./components/Projects/projects/projects";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Project from "./components/Projects/projects/project/project";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={RegisterForm} />
        <Route path="/createproject" exact component={CreateProject} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" exact component={Project} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
