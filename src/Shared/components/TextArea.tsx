import { ErrorMessage, Field } from "formik";

import { TextError } from "./TextError";

interface IProps {
  label: string;
  name: string;
}

export const TextArea = (props: IProps) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
