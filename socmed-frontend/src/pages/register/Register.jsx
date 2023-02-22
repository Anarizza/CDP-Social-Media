import React from "react";
import * as Components from "./Components";
import "./formInput.css";
import { useFormik } from "formik";
import { formSchema } from "./schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Register() {
  const [signIn, toggle] = React.useState(true);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      givenName: "",
      surName: "",
      signInUsername: "",
      signUpUsername: "",
      email: "",
      phone: "",
      address: "",
      birthDate: "",
      signUpPassword: "",
      signInPassword: "",
      confirmPassword: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <Components.Outer>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit} autoComplete="off">
            {/* SignUp starts here... */}
            <Components.Title>Create Account</Components.Title>
            <div className="nameContainer">
              <div className="givenName">
                <Components.NameInput
                  value={values.givenName}
                  onChange={handleChange}
                  id="givenName"
                  type="text"
                  placeholder="First Name"
                  onBlur={handleBlur}
                  className={
                    errors.givenName && touched.givenName ? "signup-error" : ""
                  }
                />
                {errors.givenName && touched.givenName && (
                  <p className="signupError">{errors.givenName}</p>
                )}
              </div>

              <div className="surName">
                <Components.NameInput
                  value={values.surName}
                  onChange={handleChange}
                  id="surName"
                  type="text"
                  placeholder="Last Name"
                  onBlur={handleBlur}
                  className={
                    errors.surName && touched.surName ? "signup-error" : ""
                  }
                />
                {errors.surName && touched.surName && (
                  <p className="signupError">{errors.surName}</p>
                )}
              </div>
            </div>

            <div>
              <Components.SignUpInput
                value={values.signUpUsername}
                onChange={handleChange}
                id="signUpUsername"
                type="text"
                placeholder="Username"
                onBlur={handleBlur}
                className={
                  errors.signUpUsername && touched.signUpUsername
                    ? "signup-error"
                    : ""
                }
              />
              {errors.signUpUsername && touched.signUpUsername && (
                <p className="signupError">{errors.signUpUsername}</p>
              )}
            </div>

            <div>
              <Components.SignUpInput
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "signup-error" : ""}
              />
              {errors.email && touched.email && (
                <p className="signupError">{errors.email}</p>
              )}
            </div>

            <div>
              <Components.SignUpInput
                value={values.phone}
                onChange={handleChange}
                id="phone"
                type="text"
                placeholder="Phone Number(+63)"
                onBlur={handleBlur}
                className={errors.phone && touched.phone ? "signup-error" : ""}
              />
              {errors.phone && touched.phone && (
                <p className="signupError">{errors.phone}</p>
              )}
            </div>

            <div>
              {/* <Components.LabelBrgy>Barangay</Components.LabelBrgy>
            <Components.LabelProvince>Province</Components.LabelProvince>
            <Components.LabelCity>City</Components.LabelCity> */}
              <Components.SignUpInput
                value={values.address}
                onChange={handleChange}
                id="address"
                type="text"
                placeholder="Address"
                address="address"
                onBlur={handleBlur}
                className={
                  errors.address && touched.address ? "signup-error" : ""
                }
              />
              {errors.address && touched.address && (
                <p className="signupError">{errors.address}</p>
              )}
            </div>

            <div className="bDateContainer">
              {/* <div className="bDateLabel">
              <Components.LabelBDate>Birthdate</Components.LabelBDate>
            </div> */}

              <div className="bDateInput">
                <Components.SignUpBDate
                  value={values.birthDate}
                  onChange={handleChange}
                  id="birthDate"
                  type="date"
                  placeholder="Birthdate"
                  onBlur={handleBlur}
                  className={
                    errors.birthDate && touched.birthDate ? "signup-error" : ""
                  }
                />
                {errors.birthDate && touched.birthDate && (
                  <p className="signupError">{errors.birthDate}</p>
                )}
              </div>
            </div>

            <div>
              <Components.SignUpInput
                value={values.signUpPassword}
                onChange={handleChange}
                id="signUpPassword"
                type="password"
                placeholder="Password"
                onBlur={handleBlur}
                className={
                  errors.signUpPassword && touched.signUpPassword
                    ? "signup-error"
                    : ""
                }
              />
              {errors.signUpPassword && touched.signUpPassword && (
                <p className="signupError">{errors.signUpPassword}</p>
              )}
            </div>

            <div>
              <Components.SignUpInput
                value={values.confirmPassword}
                onChange={handleChange}
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "signup-error"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="signupError">{errors.confirmPassword}</p>
              )}
            </div>

            <Components.Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* End of Sign Up */}

        {/* Sign In starts here... */}

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.SignInInput
              value={values.signInUsername}
              onChange={handleChange}
              id="signInUsername"
              type="text"
              placeholder="Enter username"
              onBlur={handleBlur}
              className={
                errors.signInUsername && touched.signInUsername
                  ? "signin-error"
                  : ""
              }
            />
            {errors.signInUsername && touched.signInUsername && (
              <p className="signinError">{errors.signInUsername}</p>
            )}
            <Components.SignInInput
              value={values.signInPassword}
              onChange={handleChange}
              id="signInPassword"
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
              className={
                errors.signInPassword && touched.signInPassword
                  ? "signin-error"
                  : ""
              }
            />
            {errors.signInPassword && touched.signInPassword && (
              <p className="signinError">{errors.signInPassword}</p>
            )}

            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        {/* End of Sign In... */}

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Have an existing account? Please sign in.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Don't have an account yet? Join and start journey with us!
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Outer>
  );
}

export default Register;
