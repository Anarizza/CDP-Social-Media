import React from "react";
import * as Components from "./Components";
import "./formInput.css";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Close, EmojiEmotions, PermMedia } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import Joi from "joi";
import Swal from "sweetalert2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";

function Register() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);

  const [users, setUsers] = useState({
    profilePic: "",
    givenName: "",
    surname: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    brgy: "",
    city: "",
    province: "",
    dot: "",
  });

  const onSubmit = (user) => {
    userService.registerUser(user).then((response) => {
      console.log(response);
      navigate(0);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(users);
  };

  const schema = Joi.object({
    profilePic: Joi.string().allow("").optional(),
    givenName: Joi.string().min(1).max(100).required(),
    surname: Joi.string().min(1).max(20).required(),
    username: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(6).max(15).allow("").optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),

    brgy: Joi.string().min(3).max(500).allow("").optional(),
    city: Joi.string().min(3).max(500).allow("").required(),
    province: Joi.string().min(3).max(500).allow("").required(),
    dot: Joi.string().min(6).max(500).allow("").required(),
    password: Joi.string().min(8).max(15).required(),
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setUsers({
      ...users,
      [input.name]: input.value,
      profilePic: file == null ? "" : URL.createObjectURL(file),
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  /*
  useEffect(() => {
    userService.registerUser(users).then((response) => {
      setUsers(response.data);
    });
  }, []);
  */

  const isFormInvalid = () => {
    const result = schema.validate(users);
    console.log(result);
    return !!result.error;
  };

  //******************LOGIN HERE****************************** */

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChangeLogin = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    console.log("changes in user and pass: " + loginDetails);
  };

  /*
  const isExists = person2.find((user) => user.username === loginDetails.username && user.password === loginDetails.password)
  console.log("hereeeeeee pola: "+isExists);
  */

  //console.log("hereeeeeee pola person2: "+person2);
  //console.log("hereeeeeee pola person: "+person);

  const [person, setPerson] = useState([]);
  useEffect(() => {
    userService.getUsersByUsername(loginDetails.username).then((response) => {
      setPerson(response.data);
      console.log(response.data);
    });
  }, [loginDetails.username]);

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      if (
        person.username === loginDetails.username &&
        person.password === loginDetails.password
      ) {
        Swal.fire({
          title: "Success!",
          text: "Successfully logged in!",
          icon: "success",
          confirmButtonColor: "#00796b",
        });
        navigate(`/homepage/${person.userId}`);
        return;
      }
      Swal.fire({
        title: "Error!",
        text: "User does not exist!",
        icon: "error",
        confirmButtonColor: "#00796b",
      });
    } catch (error) {
      console.log("API ERROR: " + error);
    }
  };
  //*********FOR PROFILE********************** */

  const [file, setFile] = useState(null);

  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const removeImage = () => {
    setFile(null);
  };

  return (
    <Components.Outer>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmit} autoComplete="off">
            {/* SignUp starts here... */}
            <Components.Title>Create Account</Components.Title>

            {file && (
              <div className="shareImgContainer">
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="shareImg"
                  style={{
                    borderRadius: "50%",
                    height: "60px",
                    width: "60px",
                    objectFit: "cover",
                    marginBottom: "-20px",
                  }}
                />
                <Close className="shareCancelImg" onClick={removeImage} />
              </div>
            )}

            <div className="profilePic">
              <div className="givenName">
                <label htmlFor="file" className="shareOption">
                  <PermMedia
                    className="shareIcon"
                    style={{ color: "#00796b" }}
                  />{" "}
                  Choose profile
                  <div className="profie" sx={{ color: "black" }}>
                    <Components.NameInput
                      id="file"
                      //value={users.profilePic}
                      type="file"
                      accept=".png,.jpeg,.jpg"
                      placeholder="Select profile"
                      //onChange={handleChange}
                      style={{ display: "none" }}
                      onChange={handleFile}
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="nameContainer">
              <div className="givenName">
                <Components.NameInput
                  helperText="mynameishelper"
                  name="givenName"
                  error={!!errors.name}
                  value={users.givenName}
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>

              <div className="surName">
                <Components.NameInput
                  name="surname"
                  value={users.surname}
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </div>
            </div>

            <div>
              <Components.SignUpInput
                name="username"
                value={users.username}
                type="text"
                placeholder="username"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>

            <div>
              <Components.SignUpInput
                name="phoneNumber"
                value={users.phoneNumber}
                type="text"
                onChange={handleChange}
                placeholder="Phone Number(+63)"
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>

            <div>
              <Components.SignUpInput
                name="email"
                value={users.email}
                type="text"
                placeholder="Email"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>

            <div>
              {/* <Components.LabelBrgy>Barangay</Components.LabelBrgy>
            <Components.LabelProvince>Province</Components.LabelProvince>
            <Components.LabelCity>City</Components.LabelCity> */}
              <Components.SignUpInput
                name="brgy"
                value={users.brgy}
                type="text"
                placeholder="Brgy"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div>
              <Components.SignUpInput
                name="city"
                value={users.city}
                type="text"
                placeholder="City"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div>
              <Components.SignUpInput
                name="province"
                value={users.province}
                type="text"
                placeholder="Province"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>

            <div className="bDateContainer">
              {/* <div className="bDateLabel">
              <Components.LabelBDate>Birthdate</Components.LabelBDate>
            </div> */}

              <div className="bDateInput">
                <Components.SignUpBDate
                  name="dot"
                  value={users.dot}
                  type="date"
                  placeholder="Birthdate"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Components.SignUpInput
                  name="password"
                  value={users.password}
                  type="text"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Components.SignUpInput
                  name="password"
                  value={users.password}
                  type="text"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <Components.Button disabled={isFormInvalid()} type="submit">
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        {/* End of Sign Up */}

        {/* Sign In starts here... */}

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSubmitLogin} autoComplete="off">
            <Components.Title>Sign in</Components.Title>
            <Components.SignInInput
              name="username"
              value={loginDetails.username}
              type="text"
              placeholder="Enter username"
              onChange={handleChangeLogin}
            />

            <Components.SignInInput
              name="password"
              value={loginDetails.password}
              type="password"
              placeholder="Password"
              onChange={handleChangeLogin}
            />

            <Components.Anchor href="#"></Components.Anchor>
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        {/* End of Sign In... */}

        {/* Flipping SignIn/SignUp starts here... */}
        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome To Timeline!</Components.Title>
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
