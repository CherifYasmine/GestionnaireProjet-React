import React, { useState } from "react";
import "./Register.css";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import FormikField from "../formikField/FormikField";

function RegisterForm() {
  const forward = () => {
    window.open("/login", "_self");
  };
  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    username: Yup.string().min(3, "Too short!").required("*Required field"),
    email: Yup.string()
      .email("Invalid email format ")
      .required("*Required field"),
    password: Yup.string()
      .min(8, "Minimum 8 characters required")
      .required("*Required field"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must be the same")
      .required("*Required field"),
  });
  return (
    <Formik
      onSubmit={handleSubmit}
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <button onClick={forward} className="link">
              Login
            </button>
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Register Now</h3>
                <Form>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <FormikField
                          type="text"
                          name="username"
                          placeholder="Username *"
                        />
                      </div>

                      <div className="form-group">
                        <FormikField
                          type="text"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <FormikField
                          type="password"
                          name="password"
                          placeholder="Password *"
                        />
                      </div>

                      <div className="form-group">
                        <FormikField
                          type="password"
                          name="passwordConfirmation"
                          placeholder="Confirm Password *"
                        />
                      </div>

                      <button type="submit" className="btnRegister">
                        Register
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Formik>
  );
}

export default RegisterForm;
