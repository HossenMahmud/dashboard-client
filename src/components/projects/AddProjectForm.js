
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ButtonMake, TextFieldMake } from "../../styles/MetarialStyles";

const department = [
  {
    value: "web",
    label: "Web",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "Flutter",
    label: "flutter",
  },
];
const Priority = [
  {
    value: "high",
    label: "Hight",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "low",
    label: "Low",
  },
];
const TeamMember = [
  {
    value: "tanvir",
    label: "Tanvir",
  },
  {
    value: "raju",
    label: "Raju",
  },
  {
    value: "himel",
    label: "Himel",
  },
];
const Category = [
  {
    value: "design",
    label: "Design",
  },
  {
    value: "development",
    label: "Development",
  },
  {
    value: "testing",
    label: "Testing",
  },
];
const Phase = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
];

const AddProjectForm = ({ data, setData, handleProjectSubmit }) => {
  return (
    <Box component="form" onSubmit={handleProjectSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            variant="outlined"
            name="projectId"
            label="Project ID"
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
            {department.map((option) => (
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
            label="Priority"
            name="priority"
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
            {Priority.map((option) => (
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
            label="Client"
            name="Client"
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
            label="Team Leader"
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
            variant="outlined"
            label="Team Member"
            name="TeamMember"
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
            {TeamMember.map((option) => (
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
            label="Category"
            name="category"
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
            {Category.map((option) => (
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
            label="Phases"
            name="phases"
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
            {Phase.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextFieldMake>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextFieldMake
            fullWidth
            focused
            variant="outlined"
            type="date"
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
            name="projectEnd"
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
    </Box >
  );
};

export default AddProjectForm;
