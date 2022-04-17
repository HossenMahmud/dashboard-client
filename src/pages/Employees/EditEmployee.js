import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditEmployeeForm from "../../components/employee/EditEmployeeForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const EditEmployee = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/employee/${id}`)
            .then((res) => setEmployee(res.data[0]));
    }, [id]);

    const EmployeeUpdate = () => {
        axios
            .put(`http://localhost:5000/employeeUpdae/${id}`, data)
            .then((res) => {
                if (res.status === 200) {
                    alert("success");
                }
            });
    };


    return (
        <LayoutContiner>
            {/* Subnav  */}
            <SubNav2 project="Edit Project" />
            {(employee.length !== 0) &&
                <EditEmployeeForm
                    EmployeeUpdate={EmployeeUpdate}
                    data={data}
                    setData={setData}
                    employee={employee}
                />
            }
        </LayoutContiner>
    );
};

export default EditEmployee;