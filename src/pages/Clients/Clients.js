import { Grid } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClientList from "../../components/clients/ClientList";
import SubNav from "../../components/subNav/SubNav";
import { LayoutContiner } from "../../styles/MetarialStyles";

const Clients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, []);

    const deleteClient = (id) => {
        Axios.delete(`http://localhost:5000/clientDelete/${id}`).then((response) => {
            setClients(
                clients.filter((val) => {
                    return val.id !== id;
                })
            );
        });
    };

    return (
        <LayoutContiner>
            <SubNav project="Clients" addproject="addclient"></SubNav>

            <Grid container spacing={2}>
                {clients.map((client, index) => (
                    <ClientList
                        key={index}
                        client={client}
                        deleteClient={deleteClient}
                    ></ClientList>
                ))}
            </Grid>
        </LayoutContiner>
    );
};

export default Clients;