import { TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import "./login.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitForm = (data) => {
    console.log(data);
    let value = JSON.stringify(data);
    localStorage.setItem("user", value);
    navigate("/dashboard");
  };
  return (
    <div className="loginContainer">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxWidth="xs">
          <Card variant="outlined">
            <CardContent>
              <div className="logo">
                <h1>HRM</h1>
              </div>
              <form onSubmit={handleSubmit(submitForm)}>
                <Box mb={1}>
                  <TextField
                    variant="outlined"
                    label="email"
                    fullWidth
                    autoFocus
                    size="small"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email Address",
                      },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                  <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    fullWidth
                    autoFocus
                    size="small"
                    margin="normal"
                    {...register("password", {
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters",
                      },
                    })}
                    error={!!errors?.password}
                    helperText={
                      errors?.password ? errors.password.message : null
                    }
                  />
                </Box>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </form>
              <small style={{ color: "grey", fontWeight: "bold" }}>
                * Input your email and create a password to register/login
              </small>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </div>
  );
};

export default Login;
