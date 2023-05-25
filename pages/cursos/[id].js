import Pagina from "@/Components/Pagina";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiSend, BiArrowBack } from "react-icons/bi";
import Link from 'next/link'

const form = () => {


  const { push, query } = useRouter()
  const [ curso, setCurso ] = useState({})
  const { register, handleSubmit, setValue } = useForm()
  
  
  useEffect(() => {
    
    if(query.id) {
      
      const cursos = JSON.parse(window.localStorage.getItem("cursos"))
      const curso = cursos[query.id]
      
      setValue('nome', curso.nome)
      setValue('duracao', curso.duracao)
      setValue('modalidade', curso.modalidade)

      for(let atributo in curso){
        setValue(atributo, curso[atributo])
      }
      
    }
  }, [query.id]);


  function salvar(dados) {
    console.log(dados);
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.splice(query.id, 1, dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    push('/cursos')
  }

  return (
    <>
      <Pagina titulo="Formulário">
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do curso"
              {...register("nome")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a duração do curso"
              {...register("duracao")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modalidade">
            <Form.Label>Modalidade: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a modalidade do curso"
              {...register("modalidade")}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="ms-2 btn btn-warning" 
              type="submit" 
              onClick={handleSubmit(salvar)}>
              <BiSend className="me-2"/> Salvar
            </Button>
            
            <Link href="/cursos" className="ms-2 btn btn-warning" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>

        </Form>
      </Pagina>
    </>
  );
};

export default form;