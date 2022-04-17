
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const EditProjectForm = ({ data, setData, value, handleProjectEdit }) => {
  return (
    <Box component="form" onSubmit={handleProjectEdit} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="projectId"
            label="Project ID"
            focused
            defaultValue={value?.projectId}
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
            label="Project Title"
            name="projectTitle"
            focused
            defaultValue={value?.projectTitle}
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
            label="Client"
            name="client"
            focused
            defaultValue={value?.client}
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
            label="Price"
            name="price"
            focused
            defaultValue={value?.price}
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
            defaultValue={value?.projectStart}
            label="Project Start Date"
            name="projectStart"
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
            label="Project End Date"
            defaultValue={value?.projectEnd}
            name="projectEnd"
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
            label="Team Leader"
            defaultValue={value?.teamLeader}
            name="teamLeader"
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
            label="Priority"
            defaultValue={value?.priority}
            name="priority"
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
            label="Phases"
            defaultValue={value?.phases}
            name="phases"
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
            rows={5}
            variant="outlined"
            label="Description"
            name="description"
            focused
            defaultValue={value?.description}
            onChange={(event) =>
              setData({
                ...data,
                [event.target.name]: event.target.value,
              })
            }
          />
        </Grid>

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

export default EditProjectForm;
