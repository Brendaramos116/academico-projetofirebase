import Pagina from '@/Components/Pagina';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

const index = () => {

    const [semestres, setSemestres] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    function getAll() {
        axios.get('/api/semestres').then(resultado => {
            setSemestres(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/semestres/' + id)
            getAll()
        }
    }
    return (
        <>
            <Pagina titulo='Semestres'>
                <Link href='/semestres/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Data de início</th>
                            <th>Data de conclusão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semestres.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/semestres/' + item.id}>
                                        <BiPencil href={'/semestres/' + item.id} title="Alterar" />
                                    </Link>
                                    <HiTrash onClick={() => excluir(item.id)} />
                                </td>
                                <td>{item.semestre}</td>
                                <td>{item.datai}</td>
                                <td>{item.dataf}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}
export default index