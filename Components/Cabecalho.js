import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Acadêmico</Navbar.Brand>                    
                        <Nav className="me-auto">
                            <Nav.Link href="/cursos/">Cursos</Nav.Link>
                            <Nav.Link href="#link">Alunos</Nav.Link>                            
                            <Nav.Link href="#link">Professores</Nav.Link>                            
                            <Nav.Link href="#link">Turmas</Nav.Link>                            
                            <Nav.Link href="#link">Salas</Nav.Link>                            
                            <Nav.Link href="#link">Semestres</Nav.Link>                            
                        </Nav>                    
                </Container>
            </Navbar>
        </>
    )
}

export default Cabecalho