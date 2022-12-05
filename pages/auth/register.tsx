import { Formik, Field } from "formik";

import InputField from "../../components/Fields/InputField";
import {registrationSchema} from "../../validations/registrationsSchema"

const Register = () => {
  return (
    <>
      <div>
      <Formik
        validationSchema={registrationSchema}
        initialValues={{ name: "",email: "", password: "" }}
        onSubmit={(values) => {
          console.log((values));
        }}
      >
        {({
          values,
          handleSubmit,
        }) => (
          <div className="register">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <span>Register</span>

                <Field
                    component={InputField}
                    type="name"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control inp_text"
                    id="name"
                />

                <Field
                    component={InputField}
                    type="email"
                    name="email"
                    placeholder="Enter email id"
                    className="form-control inp_text"
                    id="email"
                />

                <Field
                  component={InputField}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control"
                />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
      </div>
    </>
  );
}

export default Register;
