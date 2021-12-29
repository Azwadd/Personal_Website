import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Container, Row, Col, Navbar, Nav} from "react-bootstrap";

import "./App.css";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Azwad Shameem",
            headerLinks: [
                { title: "Home", path: '/' },
                { title: "About Me", path: "/about" },
                { title: "Experience", path: "/experience" },
                { title: "Projects", path: "/projects" },
                { title: "Education", path: "/education" },
                { title: "Contact Me", path: "/contact" }
            ],
            home: {
                title: "Azwad Shameem",
                subTitle: "Aspiring Software Developer",
                text: "Check my info out below"
            },
            about: {
                title: "About Me",
            },
            projects: {
                title: "Let's Talk",
            }
        }
    }

    render() {
        return (
            <Router>
                <Container fluid={true} >
                    <Navbar className={"border-bottom"}>
                        <Navbar.Brand>Azwad Shameem</Navbar.Brand>
                        <Nav className={"navbar, navbar-expand-md, sticky-top"}>
                            <Link classname={"nav-link"} to={'/'}>Home</Link>
                            <Link classname={"nav-link"} to={'/about'}>About Me</Link>
                            <Link classname={"nav-link"} to={'/experience'}>Experience</Link>
                            <Link classname={"nav-link"} to={'/projects'}>Projects</Link>
                            <Link classname={"nav-link"} to={'/education'}>Education</Link>
                            <Link classname={"nav-link"} to={'/contact'}>Contact Me</Link>
                        </Nav>
                    </Navbar>
                </Container>
            </Router>
        )
    }
}
