import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Titlespan2 } from '../../components/title/index';
import Button from '../../components/button';
import Image from '../../components/image/index';
import AboutImg from '../../assets/images/about/matthias.png';
import './about.scss';

function About() {
    return (
        <section className="about-wrapper gradient-color" id="about">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="about-content-block main-title-wrapper">
                          {/*  <Subtitle
                                Class="sitemain-subtitle"
                                Name="Business solution"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="We gives you the best"
                            />

                            <Description
                                Class="about-dec about-dec-1"
                                Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing"
                            /> */}
                            <Description
                                Class="about-dec"
                                Name="In the course of my PhD project, I have experienced firsthand the struggle of small labs, which don’t have access to core facilities or dedicated support by bioinformaticians, to handle their massive parallel sequencing data appropriately."
                            />
                            <Description
                                Class="about-dec"
                                Name="Hence, I envisioned a user-friendly genomics platform to free small businesses or decentralized labs from the burden of DevOps."
                            />
                            <Titlespan2
                                Class="about-twosub-title"
                                Name="Dr. Matthias Zepper"
                                Label=""
                            />
                            {/* <Button
                                Class="button1 button4 btn"
                                Name="HIRE US NOW"
                                Title="gradient-color"
                                BtnIcon="btn-icon gradient-color1"
                            />  */}
                        </div>
                    </Col>
                    <Col md={1}>
                    </Col>
                    <Col sm={4}>
                        <div className="about-image img-fluid img-profile rounded-circle mx-auto mb-2">
                            <Image Path={AboutImg} Class="about-image" alt="Portrait of Matthias" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
