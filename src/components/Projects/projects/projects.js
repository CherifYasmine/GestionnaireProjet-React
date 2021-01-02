import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import DeleteProject from "../deleteProject/deleteProject";
import CreateProject from "../createProject/createProject";
import "./projects.css";
import { Table } from "react-bootstrap";
const Projects = () => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const projects = [
    {
      _id: "01552214",
      date: new Date(),
      Name: "projectName1",
      leader: "Yasmine Cherif",
    },
    {
      _id: "01255214",
      date: new Date(),
      Name: "projectName2",
      leader: "Yasmine Cherif",
    },
    {
      _id: "01255221",
      date: new Date(),
      Name: "projectName3",
      leader: "Yasmine Cherif",
    },
    {
      _id: "0125214",
      date: new Date(),
      Name: "projectName",
      leader: "Yasmine Cherif",
    },
    {
      _id: "02214",
      date: new Date(),
      Name: "projectName",
      leader: "Yasmine Cherif",
    },
    {
      _id: "01255552214",
      date: new Date(),
      Name: "projectName",
      leader: "Yasmine Cherif",
    },
  ];
  return (
    <div className="pro">
      <Button className="createproject" onClick={handleShowCreate}>
        Create Project
      </Button>
      <h1 className="projectsTitle">Your Projects</h1>
      <Form className="searchProjects" inline>
        <FormControl type="text" placeholder="Search Projects..." />
        <Button className="navbutton">
          <FontAwesome name="search" />
        </Button>
      </Form>
      <Table className="tableprojects" hover>
        <thead>
          <tr>
            <th>Project Id</th>
            <th>Project Name</th>
            <th>Date</th>
            <th>lead</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project._id}</td>
              <td>
                <Link to={`/project/${project._id}`}>{project.Name}</Link>
              </td>
              <td>{project.date.toLocaleString()}</td>
              <td>{project.leader}</td>
              <td>
                <Button onClick={handleShowDelete} className="buttonDelete">
                  <i class="fas fa-trash"></i>
                </Button>
                <DeleteProject
                  project={project}
                  show={showDelete}
                  handleClose={handleCloseDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CreateProject show={showCreate} handleClose={handleCloseCreate} />
    </div>
  );
};

export default Projects;
