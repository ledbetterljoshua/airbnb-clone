import * as React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";
import * as yup from "yup";
import { passwordValidation, emailValidation } from "@abb_clone/common";

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props;
    return (
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: "auto" }}>
          <FormItem
            help={touched.email && errors.email ? errors.email : ""}
            validateStatus={touched.email && errors.email ? "error" : undefined}
          >
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem
            help={touched.password && errors.password ? errors.password : ""}
            // tslint:disable-next-line:jsx-no-multiline-js
            validateStatus={
              touched.password && errors.password ? "error" : undefined
            }
          >
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </form>
    );
  }
}

export const Register = withFormik<Props, FormValues>({
  validationSchema: yup
    .object()
    .shape({ email: emailValidation, password: passwordValidation }),
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
