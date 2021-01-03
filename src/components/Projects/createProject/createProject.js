import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./createProject.css";
const CreateProject = ({ show, handleClose, project }) => {
  const [projectName, setProjectName] = useState("");
  const [projectNameError, setProjectNameError] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDescriptionError, setProjectDescriptionError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName === "") {
      setProjectNameError("this field is required*");
    }
    if (projectDescription === "") {
      setProjectDescriptionError("this field is required*");
    }
    if (projectName !== "" && projectDescription !== "") {
      handleClose();
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="createProjectHeader" closeButton>
        <Modal.Title className="createprojtitle">
          {project ? "Edit" : "Create"} Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <b>Project Name*</b>
            </Form.Label>
            <Form.Text className="error">{projectNameError}</Form.Text>
            <Form.Control
              required
              type="text"
              placeholder="Enter project name..."
              value={project ? project.Name : null}
              onChange={(event) => {
                setProjectNameError("");
                setProjectName(event.target.value);
                console.log(projectName);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <b>Project Description*</b>
            </Form.Label>
            <Form.Text className="error">{projectDescriptionError}</Form.Text>
            <Form.Control
              as="textarea"
              rows={3}
              value={project ? project.description : null}
              placeholder="Enter project description..."
              onChange={(event) => {
                setProjectDescriptionError("");
                setProjectDescription(event.target.value);
                console.log(projectDescription);
              }}
            />
          </Form.Group>
          <Button
            className="btncreateproject"
            type="submit"
            onClick={handleSubmit}
          >
            Create Project
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateProject;
