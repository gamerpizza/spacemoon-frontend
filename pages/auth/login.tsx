import { Formik, Field } from "formik";

import InputField from "../../components/Fields/InputField";
import {loginSchema} from "../../validations/loginSchema"

const Login = () => {
  return (
    <>
      <div>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log((values));
        }}
      >
        {({
          values,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <span>Login</span>
                <Field
                    component={InputField}
                    type="email"
                    name="email"
                    placeholder="Enter email id"
                    className="form-control inp_text"
                    id="email"         />

                <Field
                  component={InputField}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
      </div>
    </>
  );
}

export default Login;
