import { DatePicker } from "./DatePicker";
import { InputBox } from "./InputBox";
import { TextArea } from "./TextArea";

import { DATE, INPUT, TEXTAREA } from "../../constant";

interface IProps {
  control: string;
  name: string;
  label: string;
  className?: string;
  id?: string;
  style?: string;
  disabled?:boolean
}

export const FormikControl = (props: IProps) => {
  const { control, ...rest } = props;
  switch (control) {
    case INPUT:
      return <InputBox {...rest} />;
    case TEXTAREA:
      return <TextArea {...rest} />;
    case DATE:
      return <DatePicker {...rest} />;
    default:
      return <div>Invalid Entry of Formik</div>;
  }
};
