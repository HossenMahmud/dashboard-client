import { Box, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const AddClientForm = ({ data, setData, handleFormSubmit }) => {
  const Bills = [
    {
      value: "cash",
      label: "Cash",
    },
    {
      value: "online",
      label: "Online",
    }
  ]

  return (
    <Box component="form" onSubmit={handleFormSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="name"
            label="Full Name"
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
            name="companyName"
            label="Company Name"
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
            variant="outlined"
            type="date"
            label="Date"
            name="date"
            focused
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
            type="text"
            label="Currency"
            name="currency"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            label="Billing Method"
            name="billMethod"
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
            {Bills.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="text"
            label="Location"
            name="location"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>


        <Grid item xs={12} md={12}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            type="text"
            label="Decription"
            name="description"
            multiline
            rows={4}
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
            label="Image"
            name="image"
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.files[0],
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
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

export default AddClientForm;
