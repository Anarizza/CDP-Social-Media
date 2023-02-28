import React, { useState , useEffect} from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import Joi from "joi";
import { Close, EmojiEmotions, PermMedia } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import * as userService from "../../Service/users";
import "./PostForm.css";
const PostForm = ({ onSubmit, initialValue }) => {
  
  const [form, setForm] = useState(
    initialValue || {
      posttext: "",
      image: "",
    }
  );
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    posttext: Joi.string().min(1).max(100).required(),
    image: Joi.string().min(1).max(100).required(),

  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    
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

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };
   //onChange ito
   function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  //################################################
  const [file, setFile] = useState(null);
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(1).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const removeImage = () => {
    setFile(null);
  };
  return (
    <Grid container component="form" onSubmit={handleSubmit}>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img src={user.profilePic} alt="" className="shareProfileImg" />
            <input
              name="posttext"
              variant="standard"
              value={form.posttext}
              onChange={handleChange}
              placeholder="What's happening?"
              className="shareInput"
            />
          </div>
          <hr className="shareHr" />

          {file && (
            <div className="shareImgContainer">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="shareImg"
              />
              <Close className="shareCancelImg" onClick={removeImage} />
            </div>
          )}

          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia
                  className="shareIcon"
                  style={{ color: "#2e0196f1" }}
                />
                <div className="shareOptionText">Image</div>
                <input
                  type="file"
                  name="image"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  style={{ display: "none" }}
                  onChange={handleFile}
                />
              </label>

              <Button disabled={isFormInvalid()} type="submit">
                <div className="shareOption">
                  <SendIcon
                    className="shareIcon"
                    style={{ color: "#0399f4" }}
                  />
                  <div className="shareOptionText">Save Changes</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};
export default PostForm;
