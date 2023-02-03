type ErrorMessage={
  children?:string;
}

export const TextError = (props: ErrorMessage) => {
  return <div className="error-form-msg">{props.children}</div>;
};
