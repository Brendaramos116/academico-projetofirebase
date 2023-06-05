import React, { useEffect, useState } from "react";
import Pagina from "@/Components/Pagina";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import Link from "next/link";


const index = () => {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    function getAll() {
        axios.get('/api/salas').then(resultado => {
            setSalas(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/salas/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina titulo="Salas">
                <Link href="/salas/form" className="btn btn-primary"> <AiFillPlusCircle /> Novo</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Salas</th>
                            <th>Capacidade</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salas.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/salas/' + item.id}></Link>
                                    <Button href={'/salas/' + item.id}>
                                        <BsPencilFill title="Alterar" />
                                    </Button>
                                    <Button>
                                        <BiTrash onClick={() => excluir(item.id)} />
                                    </Button>
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.capacidade}</td>
                                <td>{item.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default index