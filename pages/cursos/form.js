import Pagina from '@/Components/Pagina'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {IoIosSend} from 'react-icons/io'

const form = () => {

    const{register, handleSubmit} = useForm()
    function enviar(dados){

    }

  return (
    <Pagina titulo='Curso'>
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome"  {...register('nome')}/>        
      </Form.Group>
      <Form.Group className="mb-3" controlId="duracao" >
        <Form.Label>Duração</Form.Label>
        <Form.Control type="text" placeholder="Duração" {...register('duracao')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade</Form.Label>
        <Form.Control type="text" placeholder="Modalidade" {...register('modalidade')}/>
      </Form.Group>
     
      <Button variant="warning" onClick={handleSubmit(enviar)}>
        <IoIosSend/> Enviar
      </Button>
    </Form>
    </Pagina>
  )
}

export default form