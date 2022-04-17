import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditClientForm from "../../components/clients/EditClientForm";
import SubNav2 from "../../components/subNav/SubNav2";
import { LayoutContiner } from "../../styles/MetarialStyles";

const EditClients = () => {
    const [data, setData] = useState([]);
    let { id } = useParams();
    const [client, setClient] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/client/${id}`)
            .then(res => res.json())
            .then(data => setClient(data[0]));
    }, [id]);

    const ClientUpdate = (e) => {
        Axios.put(`http://localhost:5000/clientUpdate/${id}`, {
            ...data
        })
            .then(res => res.json())
            .then(data => {
                if (data.name) {
                    console.log("updated")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    return (
        <LayoutContiner>
            <SubNav2 project="Edit Client" />
            {(client.length !== 0) && <EditClientForm
                ClientUpdate={ClientUpdate}
                data={data}
                setData={setData}
                client={client}
            />}

        </LayoutContiner>
    );
};

export default EditClients;