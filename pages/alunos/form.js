import Pagina from '@/Components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave} from 'react-icons/fi'


const form = () => {
    const { push } = useRouter()

    const { register, handleSubmit } = useForm()
  
    function salvar(dados) {

        axios.post('/api/alunos', dados)
        push('/alunos')
              
    }
  
    return (
      <Pagina titulo='Aluno'>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome"  {...register('nome')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf" >
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="Digite seu CPF" {...register('cpf')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="matricula" >
            <Form.Label>Matrícula</Form.Label>
            <Form.Control type="text" placeholder="Digite sua Matrícula" {...register('matricula')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Email" {...register('email')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="telefone" >
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Telefone" {...register('telefone')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpf" >
            <Form.Label>CEP</Form.Label>
            <Form.Control type="text" placeholder="Digite seu CEP" {...register('cep')} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="endereco" >
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Digite seu Endereço" {...register('endereco')} />
          </Form.Group>
          
  
          <div className='text-center'>
            <Button variant="warning" onClick={handleSubmit(salvar)}>
              <FiSave className='me-2' /> Salvar
            </Button>
            <Link href="/alunos" className="ms-2 btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    )
  }


export default form
