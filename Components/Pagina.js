import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {
    return (
        <>
            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>
            <Container className='mb-5'>
                {props.children}
            </Container>
            <div style={{widht:'100%'}} className='bg secundary position-fixed bottom-0 py-2 text-white text-center'>

            </div>
            

        </>
    )
}

export default Pagina