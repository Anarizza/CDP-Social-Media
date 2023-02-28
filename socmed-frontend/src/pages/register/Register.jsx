import React from "react";
import * as Components from "./Components";
import "./formInput.css";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(users);
  };

  const handleChange = (event) => {
    setUsers({
      ...users,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  useEffect(() => {
    userService.registerUser(users).then((response) => {
      setUsers(response.data);
    });
  }, []);


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

    console.log("changes in user and pass: " + loginDetails)
  };

 
  /*
  const isExists = person2.find((user) => user.username === loginDetails.username && user.password === loginDetails.password)
  console.log("hereeeeeee pola: "+isExists);
  */


//console.log("hereeeeeee pola person2: "+person2);
//console.log("hereeeeeee pola person: "+person);

//const tao = person.find((p) =>p.username === loginDetails.username && p.password === loginDetails.password)
//const isExists2 = person.map((user) => user.find(f => f.username === loginDetails.username && f.password === loginDetails.password));
//console.log("person2: "+person2);

//const user = person.find(u => u.username === loginDetails.username && u.password === loginDetails.password);
//console.log("hereeee user: "+user)
//const user = person2.filter((u) => u.username === loginDetails.username && u.password === loginDetails.password)
//console.log("user: "+ user)

const [person, setPerson ] = useState([])
useEffect(() => {
  userService.getUsersByUsername(loginDetails.username).then((response) => {
    setPerson(response.data);
    console.log(response.data);
  });
}, [loginDetails.username]); 

const handleSubmitLogin = (event) => {
  event.preventDefault();
    if(person.username === loginDetails.username && person.password === loginDetails.password){
          console.log("Successfully login");
          navigate(`/homepage/${person.userId}`);
          return;
      }
      console.log("Username and pasword not match!")
 
  }

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
                  value={users.profilePic}
                  type="text"
                  placeholder="Profile picture"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="nameContainer">
              <div className="givenName">
                <Components.NameInput
                  name="givenName"
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
              />
            </div>

            <div>
              <Components.SignUpInput
                name="phoneNumber"
                value={users.phoneNumber}
                type="text"
                onChange={handleChange}
                placeholder="Phone Number(+63)"
              />
            </div>

            <div>
              <Components.SignUpInput
                name="email"
                value={users.email}
                type="text"
                placeholder="Email"
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
              {/* <Components.LabelBrgy>Barangay</Components.LabelBrgy>
            <Components.LabelProvince>Province</Components.LabelProvince>
            <Components.LabelCity>City</Components.LabelCity> */}
              <Components.SignUpInput
                name="brgy"
                value={users.brgy}
                type="text"
                placeholder="Brgy"
                onChange={handleChange}
              />
            </div>
            <div>
              <Components.SignUpInput
                name="city"
                value={users.city}
                type="text"
                placeholder="City"
                onChange={handleChange}
              />
            </div>
            <div>
              <Components.SignUpInput
                name="province"
                value={users.province}
                type="text"
                placeholder="Province"
                onChange={handleChange}
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
            </div>

            <Components.Button type="submit">Sign Up</Components.Button>
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
