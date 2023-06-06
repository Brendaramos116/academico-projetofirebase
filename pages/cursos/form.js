import Pagina from '@/Components/Pagina'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'
import cursoValidator from '@/validators/cursoValidator'


const form = () => {
  
  const { push } = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm()

  function enviar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

  

  return (
    <Pagina titulo='Curso'>
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" placeholder="Digite o nome"  {...register('nome', cursoValidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Duração</Form.Label>
          <Form.Control isInvalid={errors.duracao} type="text" placeholder="Digite a duração" {...register('duracao', cursoValidator.duracao)} />
          {
            errors.duracao &&
            <small>{errors.duracao.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="modalidade">
          <Form.Label>Modalidade</Form.Label>
          <Form.Control isInvalid={errors.modalidade} type="text" placeholder="Digite a modalidade" {...register('modalidade', cursoValidator.modalidade)} />
          {
            errors.modalidade &&
            <small>{errors.modalidade.message}</small>        
          }        
          </Form.Group>

        <div className='text-center'>
          <Button variant="warning" onClick={handleSubmit(enviar)}>
            <FiSave className='me-2' /> Salvar
          </Button>
          <Link href="/cursos" className="ms-2 btn btn-primary" type="submit">
            <BiArrowBack /> Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default form