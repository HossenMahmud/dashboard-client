import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EmployeeList from "../../components/employee/EmployeeList";
import SubNav from "../../components/subNav/SubNav";
import { LayoutContiner } from "../../styles/MetarialStyles";
import Axios from "axios";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, []);

    const deleteEmployee = (id) => {
        Axios.delete(`http://localhost:5000/employeeDelete/${id}`).then((response) => {
            setEmployees(
                employees.filter((val) => {
                    return val.id !== id;
                })
            );
        });
    };



    return (
        <LayoutContiner>
            <SubNav project="Employees" addproject="addemployee"></SubNav>
            <Grid container spacing={2}>
                {employees.map((employee, index) => (
                    <EmployeeList
                        key={index}
                        employee={employee}
                        deleteEmployee={deleteEmployee}
                    ></EmployeeList>
                ))}
            </Grid>
        </LayoutContiner>
    );
};

export default Employees;