import Pagina from '@/Components/Pagina'
import axios from 'axios'
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
      getAll() 
    }, [])

    function getAll(){
        axios.get('/api/disciplinas').then(resultado=>{
            setDisciplinas(resultado.data);
        })
    }

    function excluir(id){
        if(confirm('Deseja realmente excluir o registro?')){
            axios.delete('/api/disciplinas/' + id)
            getAll()
        }
    }
   
    

    return (
        <Pagina titulo='Disciplinas'>
            <Link href='/disciplinas/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Curso</th>                        
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/disciplinas/' + item.id}> 
                                <BiPencil href={'/disciplinas/' + item.id} title="Alterar" /> 
                                </Link>
                                <HiTrash onClick={() => excluir(item.id)} />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}



export default index