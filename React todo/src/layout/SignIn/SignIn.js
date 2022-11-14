import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";

export default function SignIn() {
  const [uname, setUname] = useState("");
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate();
  const SubmitForm = () => {
    if (uname === "carestack" && pswd === "abc12345") {
      localStorage.setItem("auth", true);
      navigate("/user");
    } else {
      alert("incorrect username/password ");
    }
  };

  return (
    <>
      <div className="signBox">
        <h2>Sign In Form</h2>
        <TextField
          id="name"
          required
          label="Username"
          variant="outlined"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          id="name"
          required
          type="password"
          label="Password"
          variant="outlined"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={SubmitForm}>
          Sign In
        </Button>
      </div>
    </>
  );
}
