import { ErrorMessage, Field } from "formik";
import { ReactElement } from "react";
import { TextError } from "./TextError";

interface IProps {
  label: string;
  name: string;
}

export const InputBox = (props: IProps): ReactElement => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
