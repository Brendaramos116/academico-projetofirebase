import Pagina from '@/Components/Pagina'
import semestreValidator from '@/validators/semestreValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave } from 'react-icons/fi'
import { mask } from 'remask'

const form = () => {
  const { push } = useRouter()

  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  function salvar(dados) {

    axios.post('/api/semestres', dados)
    push('/semestres')

  }

  function handleChange(event) {
    const name = event.target.name
    const valor = event.target.setValue
    const mascara = event.target.getAttribute('mask')

    setValue(name, mask(valor, mascara));
  }

  return (
    <Pagina titulo='Semestre'>
      <Form>
        <Form.Group className="mb-3 text-white" controlId="semestre">
          <Form.Label><strong>Semestre </strong></Form.Label>
          <Form.Control isInvalid={errors.semestre} type="text"
           placeholder="Insira o período:"
           {...register("semestre", semestreValidator.semestre)} />
          {
            errors.semestre &&
            <small>{errors.semestre.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="datai">
          <Form.Label><strong>Data de Início </strong></Form.Label>
          <Form.Control mask='99/99/9999' isInvalid={errors.datai} type="date"
           placeholder="Insira a data de início:"
           {...register("datai", semestreValidator.datai)}
           onChange={handleChange} />
          {
            errors.datai &&
            <small>{errors.datai.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3 text-white" controlId="dataf">
          <Form.Label><strong>Data de conclusão </strong></Form.Label>
          <Form.Control mask='99/99/9999' isInvalid={errors.dataf} type="date"
           placeholder="Insira a data de conclusão:"
           {...register("dataf", semestreValidator.dataf)}
           onChange={handleChange} />
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
