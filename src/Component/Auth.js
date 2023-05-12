import React, { Component } from "react";
import { Button, TextField, Typography, colors } from "@mui/material";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: "",
        password: "",
      },
    };

    this.creds = {
      username: "pathanmujahid",
      password: "123456789",
    };
  }

  handleChange = (key, value) => {
    let { form } = this.state;
    form[key] = value;
    this.setState({ form });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.state;
    const { username, password } = this.creds;
    if (form.username === username && form.password === password) {
      console.log("Valid information");
      localStorage.setItem("isAuth", 1);
      this.props.updateAuth(1);

      //redirect
    } else {
      alert("Invalid username & password");
    }
  };

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background:
                "url(https://www.deutschland.de/sites/default/files/styles/image_container/public/media/image/germany-media-newspaper-magazine-press-freedom-print.jpg?itok=rrF-cc2g)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              color: "white",
              height: "100vh",
              width: "100%",
            }}
          >
            <h6
              style={{
                textAlign: "center",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "16px",
                margin: "10px",
                color: "black",
              }}
            >
              Hello! Welcome to
            </h6>
            <h6
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "500",
                margin: "10px",
                color: "black",
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
              }}
            >
              Connected to your community. We set you thinking.
              <br /> The lively one, with a mind of its own. ...
            </h6>
            <h1
              style={{
                textAlign: "center",
                fontSize: "25px",
                color: "rgb(150, 4, 2)",
              }}
            >
              READ<span style={{ color: "yellow" }}>it</span>{" "}
              <sapn style={{ color: "black" }}>BLOGS</sapn>
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: "rgb(252, 239, 217)",
                boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderRadius: "10px",
                maxWidth: "350px",
                marginLeft: "35%",
              }}
            >
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "100%",
                  alignItems: "center",
                  margin: "15px",
                }}
              >
                <Typography
                  style={{
                    padding: "25px 12px 8px",
                    fontWeight: "700",
                    fontSize: "2rem",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    color: "black",
                  }}
                  variant="h4"
                >
                  Login
                </Typography>
                <p style={{ color: "rgb(108, 115, 127)" }}>
                  Don't have an account? &nbsp;
                  <a
                    class="MuiTypography-root MuiTypography-subtitle2 MuiLink-root MuiLink-underlineHover css-1t6xrf9"
                    href="/auth/register"
                  >
                    Register
                  </a>
                </p>

                <TextField
                  onChange={(e) =>
                    this.handleChange("username", e.target.value)
                  }
                  style={{
                    width: "80%",
                    textAlign: "center",
                    border: "solid 1px white",
                    color: "white",
                  }}
                  size="small"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                ></TextField>

                <TextField
                  onChange={(e) =>
                    this.handleChange("password", e.target.value)
                  }
                  style={{
                    width: "80%",
                    border: "solid 1px white",
                    color: "white",
                  }}
                  size="small"
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                ></TextField>

                <Button
                  style={{ width: "80%" }}
                  variant="contained"
                  type="submit"
                >
                  Continue
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Auth;
