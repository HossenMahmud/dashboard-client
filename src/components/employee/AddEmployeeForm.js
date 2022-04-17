import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const states = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];
const states2 = [
  {
    value: "React",
    label: "React",
  },
  {
    value: "Laravel",
    label: "Laravel",
  },
  {
    value: "Android",
    label: "Android",
  },
];

const AddEmployeeForm = ({ handleFormSubmit, data, setData }) => {


  return (
    <Box component="form" onSubmit={handleFormSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="firstName"
            label="First Name"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Last Name"
            name="lastName"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Gender"
            name="gender"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
            required
            select
            SelectProps={{ native: true }}
          >
            {states.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Mobile"
            name="mobile"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            type="password"
            variant="outlined"
            label="Password"
            name="password"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            type="password"
            variant="outlined"
            label="Re-Password"
            name="RePassword"
          // onChange={(event) =>
          //   setData({
          //     ...data,
          //     [event.target.name]: event.target.value,
          //   })
          // }
          // required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            focused
            variant="outlined"
            type="date"
            label="Date of birth"
            name="birth"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Department"
            name="department"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
            required
            select
            SelectProps={{ native: true }}
          >
            {states2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Designation"
            name="designation"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Address"
            name="address"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldMake
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            label="Description"
            name="description"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        {/* <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          type="file"
          focused
          variant="outlined"
          label="Profile"
          name="image"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.files[0],
            })
          }
        />
      </Grid> */}
        {/* <Grid item xs={12}>
        <TextFieldMake
          fullWidth
          type="file"
          focused
          variant="outlined"
          label="File"
          name="file"
          onChange={(event) =>
            setData({
              ...data,
              [event.target.name]: event.target.files[0],
            })
          }
        />
      </Grid> */}
        <Grid item xs={12}>
          <Stack spacing={3} direction="row">
            <ButtonMake size="medium" type="submit">
              Send
            </ButtonMake>
            <ButtonMake size="medium" type="reset">
              Cancel
            </ButtonMake>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEmployeeForm;
