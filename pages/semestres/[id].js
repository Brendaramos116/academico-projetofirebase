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

            axios.get('/api/semestres/' + query.id).then(resultado => {

                const sala = resultado.data

                for (let atributo in sala) {
                    setValue(atributo, sala[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/semestres/' + query.id, dados)
        push('/semestres')
    }

    return (
        <>
            <Pagina titulo="Formulário">
                <Form>
                    <Form.Group className="mb-3 text-white" controlId="semestre">
                        <Form.Label><strong>Semestre </strong></Form.Label>
                        <Form.Control type="text" placeholder="Insira o período:"{...register("semestre")} />=
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="datai">
                        <Form.Label><strong>Data de Início </strong></Form.Label>
                        <Form.Control type="date" placeholder="Insira a data de início:"{...register("datai")} />
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="dataf">
                        <Form.Label><strong>Data de conclusão </strong></Form.Label>
                        <Form.Control type="date" placeholder="Insira a data de conclusão:"{...register("dataf")} />
                    </Form.Group>
                    <div className="text-center">
                        <Button
                            className="ms-2 btn btn-warning"
                            type="submit"
                            onClick={handleSubmit(salvar)}>
                            <BiSend className="me-2" /> Salvar
                        </Button>
                        <Link href="/semestres" className="ms-2 btn btn-primary" type="submit">
                            <BiArrowBack /> Voltar
                        </Link>
                    </div>
                </Form>
            </Pagina>
        </>
    )


}
export default form