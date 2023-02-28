import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { RiPingPongFill } from 'react-icons/ri'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { IoMdPerson } from 'react-icons/io'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { GiGlassBall } from 'react-icons/gi'

export default function Home(props: any) {

    const colorAi = useRef<HTMLInputElement>(null);
    const colorPerson = useRef<HTMLInputElement>(null);
    const colorBall = useRef<HTMLInputElement>(null);

    const handleValueChange = () => {
        props.onAccept(true, colorPerson.current?.value, colorAi.current?.value, colorBall.current?.value);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <center>
            <Card style={{ width: 'fit-content', margin: '10vh' }}>
                <Card.Img
                    src="/background/1.jpg"
                    alt="My image"
                    style={{ height: "40vh", width: "40vw"}}
                />
                <Card.Body>
                    <Card.Title style={{padding: "2vh"}}>
                        Welcome to hnaciri-  ping-pong game
                    </Card.Title>
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            <RiPingPongFill/> PLAY A GAME
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Customize your gameplay</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control type="text" placeholder="Enter your name" />
                                <hr />
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th><center>Ball color</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
                                                    <GiGlassBall/>
                                                    <Form.Control
                                                        ref={colorBall}
                                                        type="color"
                                                        id="playerColor"
                                                        defaultValue="#FFFFFF"
                                                        title="Choose your color"
                                                    />
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th><center>Your Racket color</center></th>
                                            <th><center>AI Racket color</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
                                                    <IoMdPerson/>
                                                    <Form.Control
                                                        ref={colorPerson}
                                                        type="color"
                                                        id="playerColor"
                                                        defaultValue="#FFFFFF"
                                                        title="Choose your color"
                                                    />
                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                    <GiArtificialIntelligence/>
                                                    <Form.Control
                                                        ref={colorAi}
                                                        type="color"
                                                        id="aiColor"
                                                        defaultValue="#FFFFFF"
                                                        title="Choose your color"
                                                    />
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" onClick={() => handleValueChange()}>
                                   Go
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </Card.Body>
            </Card>
        </center>
      );
}
