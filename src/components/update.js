import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [procedencia, setProcedencia] = useState('');
    const [patente, setPatente] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setMarca(localStorage.getItem('marca'));
        setModelo(localStorage.getItem('modelo'));
        setProcedencia(localStorage.getItem('procedencia'));
        setPatente(localStorage.getItem('patente'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
           id,marca,modelo,procedencia,patente
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Marca</label>
                    <input placeholder='digite marca' value={marca} onChange={(e) => setMarca(e.target.value)}/>
                </Form.Field>
                
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder='digite modelo' value={modelo} onChange={(e) => setModelo(e.target.value)}/>
                </Form.Field>
                 
                <Form.Field>
                    <label>Procedencia</label>
                    <input placeholder='digite procedencia' value={procedencia} onChange={(e) =>  setProcedencia(e.target.value)}/>
                </Form.Field>
         
                <Form.Field>
                    <label>Patente</label>
                    <input placeholder='digite patente' value={procedencia} onChange={(e) =>  setPatente(e.target.value)}/>
                </Form.Field>


                <Button type='submit' onClick={updateAPIData}>Guardar</Button>
            </Form>
        </div>
    )
}
