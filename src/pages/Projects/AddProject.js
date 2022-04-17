import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddProjectForm from "../../components/projects/AddProjectForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddProject = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleProjectSubmit = () => {
        axios.post("http://localhost:5000/addproject", data).then((res) => {
            if (res.status === 200) {
                navigate("/");
            }
        });
    };

    return (
        <LayoutContiner>
            {/* Subnav  */}
            <SubNav2 project="Add Project" />
            <AddProjectForm
                data={data}
                setData={setData}
                handleProjectSubmit={handleProjectSubmit}
            />
        </LayoutContiner>
    );
};

export default AddProject;