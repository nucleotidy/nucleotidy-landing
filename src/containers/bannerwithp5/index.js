import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MiniBrowser } from "@code-hike/mini-browser"
import Button from '../../components/button';
import { Titlespan, Description } from '../../components/title/index';
import Image from '../../components/image/index';
import BannerImg1 from '../../assets/images/banner/bannerimg.png';
import PreviewImg1 from '../../assets/images/banner/platformpreview.png';
import SketchWrapper from '../../components/ssrP5/index';
import sketch from '../../assets/animations/p5/bluematrix.js';
import './banner.scss';

function Banner(props) {

    return (
        <section className={`banner-wrapper ${props.ChangeClass}`} id="home">
            <div className="banner-outer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="banner-content">
                                <Titlespan
                                    Class="banner-main-title"
                                    Label="Meet Nucleotidy"
                                    Name=""
                                />
                                <Description
                                    Class="banner-dec"
                                    Name="the elaborate platform for geneticists."
                                />
                                <div className="banner-btn-wrapper">
                                    <Button
                                        Class="button1 button3 btn"
                                        Name="Main features"
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
                        <Col md={6}>
                          {props.BannerPreview === 'minibrowser' ?
                              <MiniBrowser
                                url="http://www.nucleotidy.bio"
                                style={{ height: "100%", width: "100%" }}
                                //children={browserSteps[state.currentIndex]}
                              >
                              <Image
                                  Path={PreviewImg1}
                                  Class="banner-img"
                                  Title="Preview of the app"
                                  Alt="A preview of the Nucleotidy app"
                               />
                            </MiniBrowser>
                               :
                              <div className="banner-image">
                                  <Image
                                      Path={BannerImg1}
                                      Class="banner-img"
                                  />
                              </div>
                          }
                        </Col>
                    </Row>
                </Container>
                <SketchWrapper sketch={sketch} />
            </div>
        </section>
    );
}

export default Banner;
