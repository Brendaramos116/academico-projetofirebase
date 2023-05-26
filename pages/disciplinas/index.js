import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiPencil } from 'react-icons/bi'
import { HiTrash } from 'react-icons/hi'

const index = () => {
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
       
    }, [])
    

   
    

    return (
        <Pagina titulo='Disciplinas'>
            <Link href='/disciplinas/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
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
                    {disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/disciplinas/' + i}> 
                                <BiPencil href={'/disciplinas/' + i} title="Alterar" /> 
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