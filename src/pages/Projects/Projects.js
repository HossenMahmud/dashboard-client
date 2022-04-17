import React, { useEffect, useState } from 'react';
import { LayoutContiner } from '../../styles/MetarialStyles';
import SubNav from '../../components/subNav/SubNav';
import { Grid } from '@mui/material';
import CategoriProject from "../../components/projects/CategoriProject";
import Axios from "axios";
import ListProject from '../../components/projects/ListProject';


const Projects = () => {
    const projectCategori = [
        {
            id: 1,
            name: "New Project",
        },
        {
            id: 2,
            name: "Running",
        },
        {
            id: 3,
            name: "On Hold",
        },
        {
            id: 4,
            name: "Finished",
        },
    ];
    const [isCategori, setCategori] = useState(projectCategori[0].name);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    const deleteProject = (id) => {
        Axios.delete(`http://localhost:5000/projectDelete/${id}`).then((response) => {
            setProjects(
                projects.filter((val) => {
                    return val.id !== id;
                })
            );
        });
    };

    return (
        <LayoutContiner>
            {/* Subnav  */}
            <SubNav project="All Projects" addproject="addproject"></SubNav>

            <Grid container spacing={2}>
                {projectCategori.map((categori, index) => (
                    <CategoriProject
                        key={index}
                        categori={categori}
                        isCategori={isCategori}
                        setCategori={setCategori}
                    ></CategoriProject>
                ))}

                {projects?.map((project, index) => (
                    <ListProject
                        key={index}
                        project={project}
                        deleteProject={deleteProject}
                    ></ListProject>
                ))}
            </Grid>
        </LayoutContiner>
    );
};

export default Projects;