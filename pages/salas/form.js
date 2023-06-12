import Pagina from '@/Components/Pagina';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';

const form = () => {
    const { push } = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        axios.post("/api/salas", dados);
        push("/salas");
    }

    return (
        <>
            <Pagina titulo="Sala">
                <Form>
                    <Form.Group className="mb-3 text-white" controlId="nome">
                        <Form.Label><strong>Nome </strong></Form.Label>
                        <Form.Control isInvalid={errors.nome} type="text" placeholder="Insira o nome da sala:"{...register("nome", salaValidator.nome)} />
                        {
                            errors.nome &&
                            <small>{errors.nome.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3 text-white" controlId="capacidade">
                        <Form.Label><strong>Capacidade </strong></Form.Label>
                        <Form.Control isInvalid={errors.capacidade} type="text" placeholder="Insira a capacidade da sala:"{...register("capacidade", salaValidator.capacidade)} />
                        {
                            errors.capacidade &&
                            <small>{errors.capacidade.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3 text-white" controlId="tipo">
                        <Form.Label><strong>Tipo </strong></Form.Label>
                        <Form.Control isInvalid={errors.tipo} type="text" placeholder="Insira o tipo da sala:"{...register("tipo", salaValidator.tipo)} />
                        {
                            errors.tipo &&
                            <small>{errors.tipo.message}</small>
                        }
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="warning" onClick={handleSubmit(salvar)}>
                            <FiSave className='me-2' /> Salvar
                        </Button>
                        <Link href="/salas" className="ms-2 btn btn-primary" type="submit">
                            <BiArrowBack /> Voltar
                        </Link>
                    </div>
                </Form>
            </Pagina>
        </>
    )
}

export default form