import React from "react";
import * as Components from "./Components";
import "./formInput.css";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Close, PermMedia } from "@mui/icons-material";
import Joi from "joi";
import Swal from "sweetalert2";
import FormHelperText from '@mui/material/FormHelperText';
import { TextField } from "@mui/material";

function Register({setIsLoggedIn}) {
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
    confirmePassword: "",
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
    givenName: Joi.string().min(3).max(100).required(),
    surname: Joi.string().min(3).max(20).required(),
    username: Joi.string().min(3).max(20).required(),
    phoneNumber: Joi.string().min(6).max(15).allow("").optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),

    brgy: Joi.string().min(3).max(500).allow("").optional(),
    city: Joi.string().min(3).max(500).allow("").required(),
    province: Joi.string().min(3).max(500).allow("").required(),
    dot: Joi.string().min(6).max(500).allow("").required(),
    password: Joi.string().pattern(RegExp("^[a-zA-Z0-9]")).min(8).max(15).required(),
    confirmePassword: Joi.valid(users.password).messages({
      "any.only": "The two passwords do not match",
      "any.required": "Please re-enter the password",
    }),
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
        setIsLoggedIn(false);
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
        text: "Username or Password does not match!",
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
                <TextField
                  helperText={errors.givenName}
                  name="givenName"
                  error={!!errors.givenName}
                  value={users.givenName}
                  type="text"
                  variant="standard"
                  label="First Name"
                  onChange={handleChange}
                 
                />
              
              </div>

              <div className="surName">
                <TextField
                  name="surname"
                  helperText={errors.surname}
                  error={!!errors.surname}
                  variant="standard"
                  value={users.surname}
                  type="text"
                  label="Last Name"
                  onChange={handleChange}
               
                
                />
              </div>
            </div>

            <div>
              <TextField
                helperText={errors.username}
                error={!!errors.username}
                variant="standard"
                name="username"
                value={users.username}
                type="text"
                label="username"
                onChange={handleChange}
                fullWidth
              
              />
            </div>

            <div>
              <TextField
                name="phoneNumber"
                helperText={errors.phoneNumber}
                error={!!errors.phoneNumber}
                value={users.phoneNumber}
                type="text"
                variant="standard"
                onChange={handleChange}
                label="Phone Number(+63)"
                fullWidth
              />
            </div>

            <div>
              <TextField
                name="email"
                value={users.email}
                type="text"
                variant="standard"
                label="Email"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
              />
            </div>

            <div>
              {/* <Components.LabelBrgy>Barangay</Components.LabelBrgy>
            <Components.LabelProvince>Province</Components.LabelProvince>
            <Components.LabelCity>City</Components.LabelCity> */}
              <TextField
                name="brgy"
                value={users.brgy}
                type="text"
                variant="standard"
                label="Brgy"
                onChange={handleChange}
                error={!!errors.brgy}
                helperText={errors.brgy}
                fullWidth
              />
            </div>
            <div>
              <TextField
                name="city"
                value={users.city}
                type="text"
                variant="standard"
                label="City"
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
                fullWidth
              />
            </div>
            <div>
              <TextField
                name="province"
                value={users.province}
                type="text"
                variant="standard"
                label="Province"
                onChange={handleChange}
                error={!!errors.province}
                helperText={errors.province}
                fullWidth
              />
            </div>

            <div className="bDateContainer">
              {/* <div className="bDateLabel">
              <Components.LabelBDate>Birthdate</Components.LabelBDate>
            </div> */}

              <div className="bDateInput">
                <TextField
                  name="dot"
                  value={users.dot}
                  type="date"
                  variant="standard"
                  label="Birthdate"
                  onChange={handleChange}
                  error={!!errors.dot}
                  InputLabelProps={{shrink: true}}
                  helperText={errors.dot}
                  fullWidth
                />
              </div>

              <div>
                <TextField
                  name="password"
                  value={users.password}
                  type="password"
                  variant="standard"
                  label="Password"
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  fullWidth
                />
              </div>

              <div>
                <TextField
                  name="confirmePassword"
                  value={users.confirmePassword}
                  type="password"
                  variant="standard"
                  label="Confirm Password"
                  onChange={handleChange}
                  error={!!errors.confirmePassword}
                  helperText={errors.confirmePassword}
                  fullWidth
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
