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

    axios.post('/api/semestres', dados)
    push('/semestres')

  }

  return (
    <Pagina titulo='Semestre'>
      <Form>
        <Form.Group className="mb-3 text-white" controlId="semestre">
          <Form.Label><strong>Semestre </strong></Form.Label>
          <Form.Control isInvalid={errors.semestre} type="text" placeholder="Insira o período:"{...register("semestre", semestreValidator.semestre)} />
          {
            errors.semestre &&
            <small>{errors.semestre.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="datai">
          <Form.Label><strong>Data de Início </strong></Form.Label>
          <Form.Control isInvalid={errors.datai} type="date" placeholder="Insira a data de início:"{...register("datai", semestreValidator.datai)} />
          {
            errors.datai &&
            <small>{errors.datai.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="dataf">
          <Form.Label><strong>Data de conclusão </strong></Form.Label>
          <Form.Control isInvalid={errors.dataf} type="date" placeholder="Insira a data de conclusão:"{...register("dataf", semestreValidator.dataf)} />
          {
            errors.dataf &&
            <small>{errors.dataf.message}</small>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant="warning" onClick={handleSubmit(salvar)}>
            <FiSave className='me-2' /> Salvar
          </Button>
          <Link href="/semestres" className="ms-2 btn btn-primary" type="submit">
            <BiArrowBack /> Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}


export default form
