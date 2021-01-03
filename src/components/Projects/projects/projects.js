import React, { useState } from "react";
import { Button, Form, FormControl, Container } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import CreateProject from "../createProject/createProject";
import "./projects.css";
import { Table } from "react-bootstrap";
const Projects = () => {
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const projects = [
    {
      _id: "01552214",
      date: new Date(),
      Name: "projectName1",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
    },
    {
      _id: "01255214",
      date: new Date(),
      Name: "projectName2",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
    },
    {
      _id: "01255221",
      date: new Date(),
      Name: "projectName3",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
    },
    {
      _id: "0125214",
      date: new Date(),
      Name: "projectName4",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
    },
  ];
  return (
    <Container className="pro">
      <h2 className="projectsTitle">Your Projects</h2>

      <Form className="searchProjects" inline>
        <FormControl type="text" placeholder="Search Projects..." />
        &nbsp;
        <Button className="navbutton">
          <FontAwesome name="search" />
        </Button>
      </Form>
      <Button className="createproject" onClick={handleShowCreate}>
        Create New Project
      </Button>
      <div className="contproj">
        <Table className="tableprojects" hover>
          <thead>
            <tr className="firstrow">
              <th className="firstrowitem">Project Id</th>
              <th className="firstrowitem">Project Name</th>
              <th className="firstrowitem">Date</th>
              <th className="firstrowitem">lead</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <CreateProject show={showCreate} handleClose={handleCloseCreate} />
    </Container>
  );
};

export default Projects;
