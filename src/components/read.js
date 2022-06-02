import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7167/Vehiculo`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, marca, modelo,procedencia,patente } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Marca', marca);
        localStorage.setItem('Modelo', modelo);
        localStorage.setItem('Procedencia',procedencia);
        localStorage.setItem('Patente', patente); 
    }

    const getData = () => {
        axios.get(`https://localhost:7167/Vehiculo` )
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://localhost:7167/Vehiculo/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Marca</Table.HeaderCell>
                        <Table.HeaderCell>Modelo</Table.HeaderCell>
                        <Table.HeaderCell>Procedencia</Table.HeaderCell>
                        <Table.HeaderCell>Patente</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.marca}</Table.Cell>
                                <Table.Cell>{data.modelo}</Table.Cell>
                                <Table.Cell>{data.procedencia}</Table.Cell>
                                <Table.Cell>{data.patente}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Modificar</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
