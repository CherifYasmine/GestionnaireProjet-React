import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import {
  Form,
  Row,
  Col,
  Card,
  Table,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./project.css";
import DeleteProject from "../../DeleteProject/DeleteProject";
import CreateProject from "../../createProject/createProject";

const Project = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const projects = [
    {
      _id: "01552214",
      date: new Date(),
      Name: "projectName11111111111111111111111",
      leader: "Yasmine Cherif",
      description:
        "faire quelque chose icihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      collaborators: ["Amal Abidi", "Yasmine Cherif", "Chaima Ben Ghanem"],
      tasks: [
        {
          _id: "12333333333333333333333333333333",
          username: "Amalhhhhhhhhhhhhhhhhh",
          description:
            "faire quelque chose icihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "1234",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "12345",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "In Progress",
          dueDate: new Date(),
        },
        {
          _id: "123456",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "Done",
          dueDate: new Date(),
        },
      ],
    },
    {
      _id: "01255214",
      date: new Date(),
      Name: "projectName2",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
      collaborators: ["Amal Abidi", "Yasmine Cherif", "Chaima Ben Ghanem"],
      tasks: [
        {
          _id: "123",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "1234",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "12345",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "123456",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
      ],
    },
    {
      _id: "01255221",
      date: new Date(),
      Name: "projectName3",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
      collaborators: ["Amal Abidi", "Yasmine Cherif", "Chaima Ben Ghanem"],
      tasks: [
        {
          _id: "123",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "1234",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "12345",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "123456",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
      ],
    },
    {
      _id: "0125214",
      date: new Date(),
      Name: "projectName4",
      leader: "Yasmine Cherif",
      description: "faire quelque chose ici",
      collaborators: ["Amal Abidi", "Yasmine Cherif", "Chaima Ben Ghanem"],
      tasks: [
        {
          _id: "123",
          username: "Amal hhhhhhhhhhhh",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "1234",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "12345",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
        {
          _id: "123456",
          username: "Amal",
          description: "faire quelque chose ici",
          state: "To Do",
          dueDate: new Date(),
        },
      ],
    },
  ];
  const project = projects.find((p) => p._id === props.match.params.id);
  console.log(project);
  return (
    <div className="first">
      <div className="contprojsingle">
        <Row>
          <Col xs={3.5} sm={12} md={6} lg={4} xl={3}>
            <Card className="card card1">
              <Card.Header>
                <br />
                <h3>Name: {project.Name}</h3>
                <h5>Leader: {project.leader}</h5>
                <p>
                  <b>Date : {project.date.toLocaleString()}</b>
                </p>
              </Card.Header>
              <Card.Body>
                <p>
                  <b>Description :</b>
                </p>
                <p>{project.description}</p>
                <p>
                  <b>Collaborators:</b>
                </p>
                {project.collaborators.map((collaborator) => (
                  <p>
                    <Link>
                      <i className="trash"></i>
                    </Link>
                    &nbsp;
                    {collaborator}
                  </p>
                ))}
              </Card.Body>
              <Card.Footer>
                <Link to="/">Add Collaborator</Link> <br />
                <Link onClick={handleShowCreate}>Edit Project</Link> <br />
                <Link onClick={handleShowDelete}>Delete Project</Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Row>
                <Col xs={6}>
                  <Form className="sortTasks" inline>
                    <Form.Label>Sort Tasks :</Form.Label> &nbsp;
                    <FormControl className="sortTasksSelect" as="select">
                      <option>hellllllloooo</option>
                      <option>helllloooooo</option>
                    </FormControl>
                  </Form>
                </Col>
                <Col xs={6}>
                  <Form className="searchTasks" inline>
                    <FormControl type="text" placeholder="Search Tasks..." />
                    &nbsp;
                    <Button className="navbutton">
                      <FontAwesome name="search" />
                    </Button>
                  </Form>
                </Col>
              </Row>

              <div className="table-responsive">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Task Id</th>
                      <th>Task Description</th>
                      <th>User</th>
                      <th>Due Date</th>
                      <th style={{ maxWidth: "5px" }}>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.tasks.map((task) => (
                      <tr key={task._id}>
                        <td className="tabletaskitem">{task._id}</td>
                        <td className="tabletaskitem">{task.description}</td>
                        <td className="tabletaskitem">{task.username}</td>
                        <td className="tabletaskitem">
                          {task.dueDate.toLocaleString()}
                        </td>
                        <td className="tabletaskitem">{task.state}</td>
                        <td style={{ display: "flex" }}>
                          <Link>
                            <FontAwesome name="edit" />
                          </Link>
                          <Link>
                            <FontAwesome name="trash" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td>
                        <Button className="newtaskadd">Add New Task</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
        <CreateProject
          project={project}
          show={showCreate}
          handleClose={handleCloseCreate}
        />

        <DeleteProject
          show={showDelete}
          handleClose={handleCloseDelete}
          project={project}
        />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Project;
