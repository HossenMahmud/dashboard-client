import React, { useState } from 'react';
import AddEmployeeForm from "../../components/employee/AddEmployeeForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";
const AddEmployee = () => {
    const [data, setData] = useState([]);

    const handleFormSubmit = (e) => {
        const formData = new FormData();
        formData.append('firstName', data.firstName);
        formData.append('lastName', data.lastName);
        formData.append('gender', data.gender);
        formData.append('mobile', data.mobile);
        formData.append('password', data.password);
        formData.append('designation', data.designation);
        formData.append('department', data.department);
        formData.append('address', data.address);
        formData.append('email', data.email);
        formData.append('birth', data.birth);
        formData.append('education', data.education);
        formData.append('description', data.description);
        // formData.append('image', data.image);
        // formData.append('file', data.file);

        fetch('http://localhost:5000/addemployee', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.firstName) {
                    e.target.reset();
                    alert("Successfully created data")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        e.preventDefault();
    }


    return (
        <LayoutContiner>
            {/* Subnav  */}
            <SubNav2 project="Add Employee" />
            <AddEmployeeForm
                handleFormSubmit={handleFormSubmit}
                data={data}
                setData={setData}
            />
        </LayoutContiner>
    );
};

export default AddEmployee;
