import Pagina from '@/Components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'


const form = () => {
    const { push } = useRouter()

    const { register, handleSubmit } = useForm()
  
    function salvar(dados) {

        axios.post('/api/disciplinas', dados)
              
    }
  
    return (
      <Pagina titulo='Disciplinas'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome"  {...register('nome')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="curso" >
            <Form.Label>Curso</Form.Label>
            <Form.Control type="text" placeholder="Digite o curso" {...register('curso')} />
          </Form.Group>
          
  
          <div>
            <Button variant="warning" onClick={handleSubmit(salvar)}>
              <IoIosSend /> Salvar
            </Button>
            <Link href="/cursos" className="btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    )
  }


export default form