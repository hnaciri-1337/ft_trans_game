import React, { useRef, useState } from 'react';
import { Button } from '@mantine/core';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { RiPingPongFill } from 'react-icons/ri'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { IoMdPerson, IoIosSpeedometer } from 'react-icons/io'
import { GiGlassBall, GiFireworkRocket, GiArtificialIntelligence } from 'react-icons/gi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ImageCrousel from './ImageCrousel';
import { ColorInput } from '@mantine/core';

export default function Home(props: any) {

    const colorAi = useRef<HTMLInputElement>(null);
    const colorPerson = useRef<HTMLInputElement>(null);
    const colorBall = useRef<HTMLInputElement>(null);
    const speedInit = useRef<HTMLInputElement>(null);
    const speedMax = useRef<HTMLInputElement>(null);

    const handleValueChange = (level: number) => {
        props.onAccept(true, colorPerson.current?.value, colorAi.current?.value, colorBall.current?.value, speedInit.current?.value, speedMax.current?.value, level, back);
    };
    const [show, setShow] = useState(false);
    const [back, setBack] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <center>
            <Card style={{ width: 'fit-content', margin: '10vh', height: 'fit-content' }}>
                <ImageCrousel onChange={setBack}/>
                <Card.Body>
                    <Card.Title style={{padding: "2vh"}}>
                        Welcome to hnaciri- ping-pong game
                    </Card.Title>
                    <>
                        <Button color="cyan" radius="xs" uppercase onClick={handleShow} leftIcon={<RiPingPongFill size="1rem" />}>
                             PLAY A GAME
                        </Button>
                        <Modal show={show} onHide={handleClose} centered={true} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>Customize your gameplay</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
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
                                                    <ColorInput placeholder="Pick color" label="ball" ref={colorBall} defaultValue="#FFFFFF"/>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th><center>Ball initial speed</center></th>
                                            <th><center>Ball maximum speed</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
                                                    <IoIosSpeedometer/>
                                                    <Form.Range
                                                        ref={speedInit}
                                                        title="Chose initial speed"
                                                    />
                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                    <GiFireworkRocket/>
                                                    <Form.Range
                                                        ref={speedMax}
                                                        title="Choose maximum"
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
                                                    <ColorInput placeholder="Pick color" label="Humain" ref={colorPerson} defaultValue="#FFFFFF"/>
                                                </center>
                                            </td>
                                            <td>
                                                <center>
                                                    <GiArtificialIntelligence/>
                                                    <ColorInput placeholder="Pick color" label="bot" ref={colorAi} defaultValue="#FFFFFF"/>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th><center>Ai level</center></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <center>
                                                <ButtonGroup>
                                                    <Button color="teal" radius="xs" uppercase onClick={() => handleValueChange(1)}> <AiFillStar /> <AiOutlineStar/> <AiOutlineStar/> </Button>
                                                    <Button color="yellow" radius="xs" uppercase onClick={() => handleValueChange(2)}> <AiFillStar /> <AiFillStar /> <AiOutlineStar/> </Button>
                                                    <Button color="red" radius="xs" uppercase onClick={() => handleValueChange(3)}> <AiFillStar /> <AiFillStar /> <AiFillStar /> </Button>
                                                </ButtonGroup>
                                                </center>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button color="gray" radius="xs" uppercase style={{boxShadow: "0px 0px 2px black", left: "2%", position: "absolute"}} onClick={handleClose}>Cancel</Button>
                                <br />
                                <br />
                            </Modal.Footer>
                        </Modal>
                    </>
                </Card.Body>
            </Card>
        </center>
      );
}
