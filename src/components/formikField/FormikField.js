import React from "react";
import { ErrorMessage, Field } from "formik";


function FormikField({name, type,placeholder}) {


    return(
        <div >
            <Field

                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className="form-control"
            />
            <div className="error"><ErrorMessage name={name}/></div>
        </div>
    )

}
export default FormikField;