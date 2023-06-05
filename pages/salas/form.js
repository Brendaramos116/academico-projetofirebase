import Pagina from '@/Components/Pagina';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';

const form = () => {
    const { register, handleSubmit } = useForm();

    const { push } = useRouter();

    function salvar(dados) {
        axios.post("/api/salas", dados);
        push("/salas");
    }

    return (
        <>
            <Pagina titulo="Salas">
                <Form>
                    <Form.Group className="mb-3 text-white" controlId="nome">
                        <Form.Label>
                            <strong>Nome </strong>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Insira o nome da sala:"{...register("nome")} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-white" controlId="capacidade">
                        <Form.Label>
                            <strong>Capacidade </strong>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Insira a capacidade da sala:"{...register("capacidade")} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-white" controlId="tipo">
                        <Form.Label>
                            <strong>Tipo </strong>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Insira o tipo da sala:"{...register("tipo")} />
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