import Pagina from '@/Components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave } from 'react-icons/fi'


const form = () => {
  const { push } = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  function salvar(dados) {

    axios.post('/api/alunos', dados)
    push('/alunos')

  }

  return (
    <Pagina titulo='Aluno'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" placeholder="Digite o nome"  {...register('nome', alunoVatidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf" >
          <Form.Label>CPF</Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" placeholder="Digite seu CPF" {...register('cpf', alunoVatidator.cpf)} />
          {
            errors.cpf &&
            <small>{errors.cpf.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula" >
          <Form.Label>Matrícula</Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text" placeholder="Digite sua Matrícula" {...register('matricula', alunoVatidator.matricula)} />
          {
            errors.matricula &&
            <small>{errors.matricula.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control isInvalid={errors.email} type="text" placeholder="Digite seu Email" {...register('email', alunoVatidator.email)} />
          {
            errors.email &&
            <small>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone" >
          <Form.Label>Telefone</Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" placeholder="Digite seu Telefone" {...register('telefone', alunoVatidator.telefone)} />
          {
            errors.telefone &&
            <small>{errors.telefone.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf" >
          <Form.Label>CEP</Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" placeholder="Digite seu CEP" {...register('cep', alunoVatidator.cep)} />
          {
            errors.cep &&
            <small>{errors.cep.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="endereco" >
          <Form.Label>Endereço</Form.Label>
          <Form.Control isInvalid={errors.endereco} type="text" placeholder="Digite seu Endereço" {...register('endereco', alunoVatidator.endereco)} />
          {
            errors.endereco &&
            <small>{errors.endereco.message}</small>
          }
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
