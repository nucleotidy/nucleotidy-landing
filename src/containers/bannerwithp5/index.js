import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MiniBrowser } from "@code-hike/mini-browser"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../../components/button';
import { Titlespan, Description, Subtitle } from '../../components/title/index';
import Image from '../../components/image/index';
import BannerImg1 from '../../assets/images/banner/bannerimg.png';
//import PreviewImg1 from '../../assets/images/banner/platformpreview.png';
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
                                  <AnchorLink href={"#features"}>
                                    <Button
                                        Class="button1 button3 btn"
                                        Name="Main features"
                                    />
                                  </AnchorLink >
                                  <AnchorLink href={"#contact"}>
                                    <Button
                                        Class="button1 button4 btn"
                                        Name="Contact us"
                                        Title="gradient-color"
                                        BtnIcon="btn-icon gradient-color1"
                                    />
                                  </AnchorLink >
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
                              <Subtitle
                                  Class="browser-subtitle"
                                  Name="Sorry, we still need some enhancers to express Nucleotidy."
                              />
                              <Description
                                  Class="browser-dec"
                                  Name="Sign up for the newsletter to be notified, when we're ready to elongate or contact Matthias, if you can help to assemble the initiation complex..."
                              />
                              {/* }<Image
                                  Path={PreviewImg1}
                                  Class="banner-img"
                                  Title="Preview of the app"
                                  Alt="A preview of the Nucleotidy app"
                               />*/}
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
