import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Nuevo() {
    let history = useHistory(); 
    
    const [id, setId] = useState(0);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [procedencia, setProcedencia] = useState('');
    const [patente, setPatente] = useState('');
  
 
    const postData = () => {
        axios.post(`https://localhost:7167/Vehiculo`, {
            id,
            marca,
            modelo,
            procedencia,
            patente
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Marca</label>
                    <input placeholder='digite marca' onChange={(e) => setMarca(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder='digite modelo' onChange={(e) => setModelo(e.target.value)}/>
                </Form.Field>
              
                <Form.Field>
                    <label>Procedencia</label>
                    <input placeholder='digite procedencia' onChange={(e) =>  setProcedencia(e.target.value)}/>
                </Form.Field> 
                <Form.Field>
                    <label>Patente</label>
                    <input placeholder='digite patente' onChange={(e) =>  setPatente(e.target.value)}/>
                </Form.Field>
              
                <Button onClick={postData} type='submit'>Guardar</Button>
            </Form>
        </div>
    )
}
