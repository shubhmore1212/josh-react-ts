import { ErrorMessage, Field } from "formik";

import { TextError } from "./TextError";

interface IProps {
  label: string;
  name: string;
}

export const DatePicker = (props: IProps) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field type="date" name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
