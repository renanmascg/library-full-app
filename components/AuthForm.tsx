import React from "react";

interface Props<T extends FieldValues> {
  type;
  schema;
  defaultValues;
  onSubmit;
}

const AuthForm = ({ type, schema, defaultValues, onSubmit }) => {
  return <div>AuthForm</div>;
};

export default AuthForm;
