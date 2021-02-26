import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { paperPlane, mapMarker, envelopeOpen, volumeControlPhone, facebookSquare, twitterSquare} from 'react-icons-kit/fa'
import { Title, Description } from '../../components/title/index';
import PreviewIcon from '../../components/icon/index';
import Image from '../../components/image/index';
import logo from '../../assets/images/logos/nucleotidyweblogo.svg';
import InputBox from '../../components/input/index';
import { arrowRightCircle } from 'react-icons-kit/feather/arrowRightCircle'
import './footer.scss';

function Footer() {
    return (
        <div className="footer-wrapper">
            <Container>
                <div className="footer-content-wrapper">
                    <Row>
                        <Col lg={4} sm={6}>
                            <div className="footer-logo-wrapper">
                                <Image Path={logo} Class="footer-logo" />
                                <Description
                                    Class="footer-dec"
                                    Name="Meet Nucleotidy, the sleek and collaborative platform for geneticists. It helps you organize your sequence data as neatly as it was when it still resided within a cell."
                                />
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-contact-us">
                                <Title Class="footer-title" Name="Contact Us" />
                                <div className="footer-details-link">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <span>
                                                    <PreviewIcon icon={mapMarker} />
                                                </span>
                                                <Title
                                                    Class="footer-link"
                                                    Name="c/o Dr. Matthias Zepper, Vollmerweg 40, D-48159 Münster"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span>
                                                    <PreviewIcon icon={envelopeOpen} />
                                                </span>
                                                <Title
                                                    Class="footer-link footer-email"
                                                    Name="hello@nucleotidy.org"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span>
                                                    <PreviewIcon icon={volumeControlPhone} />
                                                </span>
                                                <Title Class="footer-link" Name="+49 251 39456900" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} sm={6}>
                            <div className="footer-about-us">
                                <div className="footer-about-outer">
                                    <Title Class="footer-title" Name="About Us" />
                                    <div className="footer-details-link">
                                        <ul>
                                            <li>
                                                <a href="/">
                                                    <PreviewIcon icon={arrowRightCircle} />
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Home"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <PreviewIcon icon={arrowRightCircle} />
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="About Us"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <PreviewIcon icon={arrowRightCircle} />
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Features"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <PreviewIcon icon={arrowRightCircle} />
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Services"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <PreviewIcon icon={arrowRightCircle} />
                                                    <Title
                                                        Class="footer-link footer-arrow"
                                                        Name="Contact"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <div className="footer-newsletter">
                                <Title Class="footer-title" Name="Have messages delivered to you like a ribosome" />
                                <div className="form-group">
                                    <InputBox
                                        Type="text"
                                        PlaceHolder="Enter email to sign up for our newsletter"
                                        Class="input-search"
                                    />
                                    <span className="search-icon gradient-color">
                                        <PreviewIcon icon={paperPlane} />
                                    </span>
                                </div>
                                <Title Class="footer-social-title" Name="Also expressed elsewhere" />
                                <ul className="social-wrapper">
                                    <li>
                                        <a href="https://www.facebook.com/nucleotidy">
                                            <span>
                                                <PreviewIcon icon={facebookSquare} />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/nucleotidy">
                                            <span>
                                                <PreviewIcon icon={twitterSquare} />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    );
}

export default Footer;
