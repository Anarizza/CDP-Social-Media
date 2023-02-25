import React, { useState, useEffect } from "react";
import { Close, EmojiEmotions, PermMedia } from "@mui/icons-material";
import "./Share.css";
import SendIcon from "@mui/icons-material/Send";
import * as postService from "../../Service/post";
import * as userService from "../../Service/users";
import Joi from 'joi';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Share = () => {
// FIGHTINGGGG
  // const [posttext, setText] = useState("");
  // const [image, setImage] = useState("");
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { posttext , image};
  //     const response = await fetch(
  //       "http://localhost:8080/timelineapi/post/new",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       }
  //     );
  //     console.log(response);
  //     setImage(response.data);
  //     setText(response.data)
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  //**********************************************

  const [form, setForm] = useState(
     {
      posttext: "",
      image: "",
    
    }
  );

  const navigate = useNavigate();
  
  const onSubmit = (post) => {
    postService
      .addPost(2, post)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setForm({
    
      [input.name]: input.value,
    });

    const result = schema.extract(input.name).label(input.name).validate(input.value);

    if (result.error){
      setErrors({...errors,
          [input.name]: result.error.details[0].message
      });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const schema = Joi.object({
    posttext: Joi.string().min(1).max(100).required(),
    image: Joi.any().allow("").allow(null).optional(),
  });

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  const handleChange2 = (event) => {
    console.log(event.currentTarget.value);
    setForm({
      ...form,
      posttext: event.currentTarget.value,
     // image: event.target.files[0],
     
      
    })
  }


  //******************************************* */
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.addPost().then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

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
    <Grid  
    container
    component="form" 
    onSubmit={handleSubmit}
    >
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={user.profilePic} alt="" className="shareProfileImg" />
          <input
            name="posttext"
            variant="standard"
            value={form.posttext}
            onChange={handleChange2}
            placeholder="What's happening?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
      
        {file && (
          <div className="shareImgContainer">
            <img  src={URL.createObjectURL(file)} alt="" className="shareImg" value={form.image} onChange={handleChange2}/>
            <Close className="shareCancelImg" onClick={removeImage} />
          </div>
        )}
       
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <div className="shareOptionText">Image</div>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <div className="shareOptionText">Feelings/Activity</div>
            </div>
            <Button disabled={isFormInvalid()}  type="submit">
            <div className="shareOption">
              <SendIcon className="shareIcon" style={{ color: "#0399f4" }} />
              <div className="shareOptionText">Share</div>
            </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Grid>
  );
};

export default Share;
