import React, { useState } from "react";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

import Add from "@mui/icons-material/Add";
import { Cancel } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

function AddNew({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdd = (data) => {
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(data);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(handleAdd)}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ textAlign: "center" }}>
              <h1>Add Employee</h1>
            </div>

            <TextField
              id="firstName"
              label="First Name"
              size="small"
              fullWidth
              defaultValue={firstName}
              {...register("first_name", {
                required: "Name is Required",
                onChange: (e) => setFirstName(e.target.value),
              })}
              error={!!errors?.first_name}
              helperText={errors?.first_name ? errors.first_name.message : null}
            />
            <TextField
              id="lastName"
              label="Last Name"
              size="small"
              fullWidth
              defaultValue={lastName}
              {...register("last_name", {
                required: "Name is Required",
                onChange: (e) => setLastName(e.target.value),
              })}
              error={!!errors?.last_name}
              helperText={errors?.last_name ? errors.last_name.message : null}
            />
            <TextField
              label="Email"
              defaultValue={email}
              fullWidth
              size="small"
              {...register("email", {
                required: "Email is Required",
                onChange: (e) => setEmail(e.target.value),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email Address",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              id="salary"
              label="Salary($)"
              type="number"
              size="small"
              defaultValue={salary}
              fullWidth
              {...register("salary", {
                required: "Salary is Required",
                onChange: (e) => setSalary(e.target.value),
              })}
              error={!!errors?.salary}
              helperText={errors?.salary ? errors.salary.message : null}
            />
            <TextField
              type="date"
              fullWidth
              defaultValue={date}
              size="small"
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>
          <div style={{ marginTop: "30px" }}>
            <Stack spacing={2} direction="row">
              <Button
                type="submit"
                startIcon={<Add />}
                color="success"
                variant="contained"
                size="small"
              >
                Add
              </Button>
              <Button
                type="submit"
                onClick={() => setIsAdding(false)}
                startIcon={<Cancel />}
                color="error"
                variant="contained"
                size="small"
              >
                Cancel
              </Button>
            </Stack>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default AddNew;
