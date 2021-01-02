import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateProject from "../createProject/createProject";
const Projects = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create Project
      </Button>
      <CreateProject show={show} handleClose={handleClose} />
    </div>
  );
};

export default Projects;
