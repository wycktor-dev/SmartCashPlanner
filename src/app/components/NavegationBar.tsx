import { Container, Nav, Navbar } from "react-bootstrap"

const NavegationBar: React.FC = () => {

return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">SmartCash</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/list">Lista</Nav.Link>
                    <Nav.Link href="/statistics">Estatísticas</Nav.Link>
                    <Nav.Link href="/settings">Configurações</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}

export { NavegationBar }