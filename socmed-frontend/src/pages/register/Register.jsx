import Joi from "joi";
import React, { useState } from "react";
import * as Components from "./Components";
import "./formInput.css";

function Register() {
  const [signIn, toggle] = React.useState(true);
  const [form, setForm] = useState({
    givenName: "",
    surName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    givenName: "Invalid First Name",
  });

  const schema = Joi.object({
    givenName: Joi.string().min(2).max(50).required(),
    surName: Joi.string().min(2).max(50).required(),
    userName: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string().min(6).max(15).allow("").optional(),
    address: Joi.string().min(3).max(500).allow("").optional(),
    birthdate: Joi.date().max("now").required(),
    password: Joi.string()
      .min(8)
      .max(20)
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?!.*\s).{8,20}$/)
      .required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const result = schema.extract(input.givenName).validate(input.value);
    console.log(result);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);

    return !!result.error;
    //console.log(result);
  };

  return (
    <Components.Container component="form" onSubmit={handleSubmit}>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <div className="nameContainer">
            <div className="givenName">
              <Components.NameInput
                value={form.givenName}
                type="text"
                placeholder="First Name"
                name="givenName"
                error={!!errors.givenName}
                helperText={errors.givenName}
                onChange={handleChange}
              />
            </div>

            <div className="surName">
              <Components.NameInput
                value={form.surName}
                type="text"
                placeholder="Last Name"
                name="surName"
                onChange={handleChange}
                error={!!errors.surName}
                helperText="mynameishelper"
              />
            </div>
          </div>

          <div>
            <Components.SignUpInput
              value={form.userName}
              type="text"
              placeholder="Username"
              name="userName"
              error={true}
              helperText="mynameishelper"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpInput
              value={form.email}
              type="email"
              placeholder="Email"
              name="email"
              error={true}
              helperText="mynameishelper"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpInput
              value={form.phone}
              type="text"
              placeholder="Phone Number"
              name="phone"
              error={true}
              helperText="mynameishelper"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpInput
              value={form.address}
              type="text"
              placeholder="Address"
              name="address"
              error={true}
              helperText="mynameishelper"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpBDate
              value={form.birthdate}
              type="date"
              placeholder="Birthdate"
              name="birthdate"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpInput
              value={form.password}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div>
            <Components.SignUpInput
              value={form.confirmPassword}
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>

          <Components.Button type="submit" disabled={isFormInvalid()}>
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.SignInInput type="email" placeholder="Email" />
          <Components.SignInInput type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

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
  );
}

export default Register;
