import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { FormikControl } from "../../../Shared/components/FormikControl";

import { ROUTES } from "../../../appContants";
import { ToDoPostData } from "../../../data/types/types";
import { DATE, INPUT, TEXTAREA } from "../../../constant";

interface IProps {
  handleSubmit: (
    values: ToDoPostData,
    actions: FormikHelpers<ToDoPostData>
  ) => void;
}

const AddTodoComponent: React.FC<IProps> = (props): ReactElement => {
  const { handleSubmit } = props;

  const initialValues: ToDoPostData = {
    title: "",
    body: "",
    date: "",
    completed: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().trim().required("Required"),
    body: Yup.string().trim().required("Required"),
    date: Yup.string().required("Required"),
  });

  return (
    <div>
      <div className="cross-button">
        <NavLink className="cross-button-link" to={ROUTES.HOME}>
          X
        </NavLink>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className="add-todo-form">
            <Form>
              <h2 className="add-heading">Add Todo</h2>
              <FormikControl control={INPUT} name="title" label="Title" />
              <FormikControl
                control={TEXTAREA}
                name="body"
                label="Description"
              />
              <FormikControl control={DATE} name="date" label="Due-Date" />
              <FormikControl
                className="input-status"
                control={INPUT}
                name="completed"
                label="Status"
                disabled
              />
              <button type="submit" className="add-todo-button">
                Submit
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(AddTodoComponent);
