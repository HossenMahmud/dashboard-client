import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { LayoutContiner } from '../../styles/MetarialStyles';
import SubNav2 from '../../components/subNav/SubNav2';
import EditProjectForm from "../../components/projects/EditProjectForm";
const EditProject = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/projects/${id}`)
            .then((res) => setValue(res.data[0]));
    }, [id]);

    const handleProjectEdit = () => {
        axios
            .put(`http://localhost:5000/projectUpdate/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    alert("success");
                }
            });
    };

    return (
        <LayoutContiner>
            <SubNav2 project="Edit Project" />
            {(value.length !== 0) &&
                <EditProjectForm
                    data={data}
                    setData={setData}
                    value={value}
                    handleProjectEdit={handleProjectEdit}
                />
            }
        </LayoutContiner>
    );
};

export default EditProject;