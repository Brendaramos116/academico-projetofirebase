import Pagina from '@/Components/Pagina'
import professorValidator from '@/validators/professorValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave} from 'react-icons/fi'
import { mask } from 'remask'



const form = () => {
    const { push } = useRouter()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  
    function salvar(dados) {

        axios.post('/api/professores', dados)
        push('/professores')
              
    }

    function handleChange(event) {
      const name = event.target.name
      const valor = event.target.setValue
      const mascara = event.target.getAttribute('mask')
  
      setValue(name, mask(valor, mascara));
    }
  
    return (
      <Pagina titulo='Professor'>
        <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control isInvalid={errors.nome} type="text"
           placeholder="Digite o nome" 
          {...register('nome', professorVatidator.nome)} />
          {
            errors.nome &&
            <small>{errors.nome.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf" >
          <Form.Label>CPF</Form.Label>
          <Form.Control mask='999.999.999-99' isInvalid={errors.cpf} type="text" 
          placeholder="Digite seu CPF"
           {...register('cpf', professorValidator.cpf)}
           onChange={handleChange} />
          {
            errors.cpf &&
            <small>{errors.cpf.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula" >
          <Form.Label>Matrícula</Form.Label>
          <Form.Control isInvalid={errors.matricula} 
          type="text" placeholder="Digite sua Matrícula"
           {...register('matricula', professorValidator.matricula)}
            />
          {
            errors.matricula &&
            <small>{errors.matricula.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control isInvalid={errors.email} type="text" 
          placeholder="Digite seu Email"
           {...register('email', professorValidator.email)} />
          {
            errors.email &&
            <small>{errors.email.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone" >
          <Form.Label>Telefone</Form.Label>
          <Form.Control  mask='(99) 99999-9999' isInvalid={errors.telefone}
           type="text" placeholder="Digite seu Telefone"
            {...register('telefone', professorValidator.telefone)} 
            onChange={handleChange}/>
          {
            errors.telefone &&
            <small>{errors.telefone.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf" >
          <Form.Label>CEP</Form.Label>
          <Form.Control mask='99.999-999' isInvalid={errors.cep} type="text"
           placeholder="Digite seu CEP"
            {...register('cep', professorValidator.cep)}
            onChange={handleChange} />
          {
            errors.cep &&
            <small>{errors.cep.message}</small>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="endereco" >
          <Form.Label>Endereço</Form.Label>
          <Form.Control isInvalid={errors.endereco} type="text"
           placeholder="Digite seu Endereço" 
           {...register('endereco', professorValidator.endereco)} />
          {
            errors.endereco &&
            <small>{errors.endereco.message}</small>
          }
        </Form.Group>
          
  
          <div className='text-center'>
            <Button variant="warning" onClick={handleSubmit(salvar)}>
              <FiSave className='me-2' /> Salvar
            </Button>
            <Link href="/professores" className="ms-2 btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Form>
      </Pagina>
    )
  }


export default form
