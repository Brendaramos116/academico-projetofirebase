import Pagina from '@/Components/Pagina';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

const index = () => {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    function getAll() {
        axios.get('/api/alunos').then(resultado => {
            setAlunos(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/alunos/' + id)
            getAll()
        }
    }
    return (
        <>
            <Pagina titulo='Alunos'>
                <Link href='/alunos/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Alunos</th>
                            <th>CPF</th>
                            <th>Matrícula</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>CEP</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/alunos/' + item.id}>
                                        <BiPencil href={'/alunos/' + item.id} title="Alterar" />
                                    </Link>
                                    <HiTrash onClick={() => excluir(item.id)} />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.matricula}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.endereco}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default index