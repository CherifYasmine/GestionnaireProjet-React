import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
const DeleteProject = ({ show, handleClose, project }) => {
  const handleSubmit = (e) => {
    handleClose();
  };
  console.log(project);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="createProjectHeader" closeButton>
        <Modal.Title className="createprojtitle">Delete Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Are You sure you want to delete {project.Name}?</h5>
        <br />
        <Form>
          <Button
            className="btncreateproject"
            type="submit"
            onClick={handleSubmit}
          >
            Delete This Project
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteProject;
