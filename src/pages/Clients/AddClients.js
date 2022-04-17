import React, { useState } from 'react';
import AddClientForm from '../../components/clients/AddClientForm';
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const AddClients = () => {
    const [data, setData] = useState([]);

    const handleFormSubmit = (e) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('companyName', data.companyName);
        formData.append('email', data.email);
        formData.append('mobile', data.mobile);
        formData.append('date', data.date);
        formData.append('currency', data.currency);
        formData.append('billMethod', data.billMethod);
        formData.append('location', data.location);
        formData.append('description', data.description);
        formData.append('image', data.image);
        formData.append('file', data.file);
        fetch('http://localhost:5000/addclient', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.name) {
                    e.target.reset();
                    alert("Successfully created data")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <LayoutContiner>
            <SubNav2 project="Edit Client" />
            <AddClientForm
                data={data}
                setData={setData}
                handleFormSubmit={handleFormSubmit}
            />
        </LayoutContiner>
    );
};

export default AddClients;