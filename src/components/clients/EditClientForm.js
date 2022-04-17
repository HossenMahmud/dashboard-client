import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const EditClientForm = ({ ClientUpdate, data, setData, client }) => {

  return (
    <Box component="form" onSubmit={ClientUpdate}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="name"
            label="Full Name"
            focused
            defaultValue={client.name}
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
            defaultValue={client.companyName}
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
            name="email"
            label="Email"
            defaultValue={client.email}
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
            name="mobile"
            label="Mobile"
            focused
            defaultValue={client.mobile}
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
            focused
            variant="outlined"
            type="date"
            label="Date "
            name="date"
            defaultValue={client.date}
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
            focused
            variant="outlined"
            type="text"
            label="Billing Method "
            name="billMethod"
            defaultValue={client.billMethod}
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
            label="Location"
            name="location"
            focused
            defaultValue={client.location}
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
            focused
            rows={8}
            variant="outlined"
            label="Description"
            name="description"
            defaultValue={client.description}
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

export default EditClientForm;
