import React from 'react'
import {Container, Nav, Navbar, Dropdown, DropdownButton} from 'react-bootstrap'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import "./navbar.css"

export default class navbar extends React.Component{
    render(){
        return(
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid={true}>
                            <Navbar.Brand href="#home">Azwad Shameem</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className={"justify-content-end"}>
                                <Nav>
                                    <DropdownButton
                                        align={"end"}
                                        key={"down"}
                                        id={`dropdown-button-drop-${"down"}`}
                                        drop={"down"}
                                        variant="secondary"
                                        title={""}>
                                        <Dropdown.Item eventKey="1">Home</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Router>
        )
    }
}