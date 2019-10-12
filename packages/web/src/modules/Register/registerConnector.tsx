import * as React from "react";
import { Register } from "./view/register";
import { RegisterController } from "@abb_clone/controller";

export const RegisterConnector = () => {
  return (
    <RegisterController>
      {({ submit }) => <Register submit={submit} />}
    </RegisterController>
  );
};
