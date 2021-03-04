import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title/index';
import Button from '../../components/button';
import { Featuredata, Featuredata1 } from '../../data/features/index';
import PreviewIcon from '../../components/icon';

import './features.scss';

function Features() {
    return (
        <section className="features-wrapper" id="features">
            <Container>
                <Row>
                    <Col lg={5} md={4}>
                        <div className="features-content-1 main-title-wrapper">
                            <Titlespan2
                                Class="sitemain-subtitle"
                                Name="Business"
                                Label="Solutions"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="We Provide The"
                            />
                            <Title
                                Class="features-title"
                                Name="Our core features"
                            />
                            <Description
                                Class="features-dec"
                                Name="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot."
                            />
                            <Button
                                Class="button1 btn button2 gradient-color"
                                Name="Explore"
                                BtnIcon="btn-icon"
                            />
                        </div>
                    </Col>
                    <Col lg={7} md={8} className="features-block-content">
                        <Row>
                            <Col sm={6} className="features-block1">
                                {Featuredata.map((data, i) => (
                                    <div className={`features-${i} features-content`} key={data.id}>
                                        <div className="features-icon">
                                            <span><PreviewIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="features-content-dec">
                                            <Title Class="features-title" Name={data.title} />
                                            <Description Class="features-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                            <Col sm={6} className="features-block2">
                                {Featuredata1.map((data, i) => (
                                    <div className={`features-${i} features-content`} key={data.id}>
                                        <div className="features-icon">
                                            <span><PreviewIcon icon={data.Icon} /></span>
                                        </div>
                                        <div className="features-content-dec">
                                            <Title Class="features-title" Name={data.title} />
                                            <Description Class="features-dec-content" Name={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;
