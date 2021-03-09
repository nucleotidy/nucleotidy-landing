import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import { useStaticQuery, graphql } from "gatsby";
// import { gsap } from "gsap";
import Button from '../../components/button';
import { Titlespan, Description } from '../../components/title/index';
import Image from '../../components/image/index';
import BannerImg1 from '../../assets/images/banner/bannerimg.png';
//import BannerImg1 from '../../assets/images/chimera/nucleosome/nucleosomeD.png';
import Shape2 from '../../assets/images/banner/bg-wave.svg';
import Shape3 from '../../assets/images/banner/wave.png';
import './banner.scss';
// import './animations.scss';

function Banner(props) {

    return (
        <section className={`banner-wrapper ${props.ChangeClass}`} id="home">
            <div className="banner-outer">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="banner-content">
                                <Titlespan
                                    Class="banner-main-title"
                                    Label="Meet Nucleotidy"
                                    Name=""
                                />
                                <Description
                                    Class="banner-dec"
                                    Name="the nifty platform for geneticists."
                                />
                                <div className="banner-btn-wrapper">
                                    <Button
                                        Class="button1 button3 btn"
                                        Name="Our mission"
                                    />
                                    <Button
                                        Class="button1 button4 btn"
                                        Name="Start product tour"
                                        Title="gradient-color"
                                        BtnIcon="btn-icon gradient-color1"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="banner-image">
                                <Image
                                    Path={BannerImg1}
                                    Class="banner-img"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>

                {(props.ChangeClass === 'demo2' || props.ChangeClass === 'demo3') &&
                    <div className="bottom-img">
                        {props.ChangeClass === 'demo2' ?
                            <Image Path={Shape2} /> :
                            <Image Path={Shape3} />
                        }
                    </div>
                }
            </div>
        </section>
    );
}

export default Banner;
