import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiTrash } from 'react-icons/hi'
import { BiPencil } from 'react-icons/bi'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll)
    }, [])
    function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id) {
        if(confirm('Deseja realmente excluir o registro?')){
        const itens = getAll()
        itens.splice(id, 1)
        window.localStorage.setItem('cursos', JSON.stringify(itens))
        setCursos(itens)
    }
    }

    return (
        <Pagina titulo='Cursos'>
            <Link href='/cursos/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/cursos/' + i}> 
                                <BiPencil href={'/cursos/' + i} title="Alterar" /> 
                                </Link>
                                <HiTrash onClick={() => excluir(i)} />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index