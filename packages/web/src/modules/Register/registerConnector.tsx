import * as React from "react";
import { Register } from "./view/register";

export const RegisterConnector = () => {
  const submit = async (e: any) => {
    console.log(e);
    return null;
  };
  return <Register submit={submit} />;
};
