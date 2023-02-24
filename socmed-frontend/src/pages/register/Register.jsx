import React from "react";
import * as Components from "./Components";
import "./formInput.css";
import { useFormik } from "formik";
import { formSchema } from "./schemas";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const { user, setUser } = useState({
    profilePic: "",
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
  });

  const {
    profilePic,
    givenName,
    surName,
    signInUsername,
    signUpUsername,
    email,
    phone,
    address,
    birthDate,
    signUpPassword,
    signInPassword,
    confirmPassword,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = (user) => {
    userService.registerUser(user).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(user);
  };

  useEffect(() => {
    userService.registerUser(user).then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Components.Outer>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit} autoComplete="off">
            {/* SignUp starts here... */}
            <Components.Title>Create Account</Components.Title>
            <div className="profilePic">
              <div className="givenName">
                <Components.NameInput
                  name="profilePic"
                  value={user.profilePic}
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="nameContainer">
              <div className="givenName">
                <Components.NameInput
                  name="givenName"
                  value={user.givenName}
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="surName">
                <Components.NameInput
                  name="surName"
                  value={user.surName}
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div>
              <Components.SignUpInput
                name="signUpUsername"
                value={user.signUpUsername}
                type="text"
                placeholder="Username"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <Components.SignUpInput
                name="email"
                value={user.email}
                type="email"
                placeholder="Email"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <Components.SignUpInput
                name="phone"
                value={user.phone}
                type="text"
                onChange={(e) => onInputChange(e)}
                placeholder="Phone Number(+63)"
              />
            </div>

            <div>
              {/* <Components.LabelBrgy>Barangay</Components.LabelBrgy>
            <Components.LabelProvince>Province</Components.LabelProvince>
            <Components.LabelCity>City</Components.LabelCity> */}
              <Components.SignUpInput
                name="address"
                value={user.address}
                type="text"
                placeholder="Address"
                address="address"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="bDateContainer">
              {/* <div className="bDateLabel">
              <Components.LabelBDate>Birthdate</Components.LabelBDate>
            </div> */}

              <div className="bDateInput">
                <Components.SignUpBDate
                  name="birthDate"
                  value={user.birthDate}
                  type="date"
                  placeholder="Birthdate"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div>
              <Components.SignUpInput
                name="signUpPassword"
                value={user.signUpPassword}
                type="password"
                placeholder="Password"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div>
              <Components.SignUpInput
                name="confirmPassword"
                value={user.confirmPassword}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* End of Sign Up */}

        {/* Sign In starts here... */}

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.SignInInput
              name="signInUsername"
              value={user.signInUsername}
              type="text"
              placeholder="Enter username"
              onChange={(e) => onInputChange(e)}
            />

            <Components.SignInInput
              name="signInPassword"
              value={user.signInPassword}
              type="password"
              placeholder="Password"
              onChange={(e) => onInputChange(e)}
            />

            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        {/* End of Sign In... */}

        {/* Flipping SignIn/SignUp starts here... */}

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
