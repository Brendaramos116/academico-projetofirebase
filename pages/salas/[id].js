import Pagina from "@/Components/Pagina";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";

const form = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/salas/' + query.id).then(resultado => {

                const sala = resultado.data

                for (let atributo in sala) {
                    setValue(atributo, sala[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/salas/' + query.id, dados)
        push('/salas')
    }

    return (
        <>
            <Pagina titulo="Formulário">
                <Form>
                    <Form.Group className="mb-3 text-white" controlId="nome">
                        <Form.Label><strong>Nome </strong></Form.Label>
                        <Form.Control type="text" placeholder="Insira o nome da sala"{...register("nome")}/>
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="capacidade">
                        <Form.Label><strong>Capacidade </strong></Form.Label>
                        <Form.Control type="text" placeholder="Insira a capacidade da sala"{...register("capacidade")}/>
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="tipo">
                        <Form.Label><strong>Tipo </strong></Form.Label>
                        <Form.Control type="text" placeholder="Insira o tipo da sala"{...register("tipo")}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button
                            className="ms-2 btn btn-warning"
                            type="submit"
                            onClick={handleSubmit(salvar)}>
                            <BiSend className="me-2" /> Salvar
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