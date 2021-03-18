import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
// import Img from "gatsby-image"
import { Subtitle, Title } from '../../components/title/index';
//import Image from '../../components/image/index';
//import ContactImg from '../../assets/images/contact/woman.png';
import InputBox from '../../components/input/index';
import Button from '../../components/button';
//import ContactBackgroundImages from '../../data/contact';
import SketchWrapper from '../../components/ssrP5/index';
import sketch from '../../assets/animations/p5/contactmessages.js';
import '../contact/contact.scss';


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const encode = data => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };


    const handleSubmit = () => {
        const error = {}
        if (!name) {
            error.name = 'First Name field shouldn’t be empty';
        }
        if (!email) {
            error.email = 'Email field shouldn’t be empty';
        }
        if (!message) {
            error.message = 'Message field shouldn’t be empty';
        }

        if (error) {
            setErrors(error)
        } else {

            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <section className="contact-wrapper" id="contact">
         <SketchWrapper sketch={sketch} />
              {/*  <div className="contact-animation-images">
                {ContactBackgroundImages.map((img, index) => (
                    <span key={`contact-img-${index}`} className={`image${index + 1}`}><Image Path={img.img} /></span>
                ))}
            </div> */}
            <Container>
                <Row>
                    <Col sm={0} md={2}>
                        <div className="contact-image">
                            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                            <Image Path={ContactImg} Class="logo-img" />*/}
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="contact-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name="It seems, there is a message in the making...?"
                            />
                            {/*
                            <Subtitle
                                Class="site-subtitle2"
                                Name="Call us for any emergency"
                            />
                            <Description
                                Class="contact-dec"
                                Name="+1 123 - 456 - 7890"
                            /> */}
                            <div className="form">
                                <Form method="POST" netlify data-netlify="true" name="contact">
                                <input type="hidden" name="form-name" value="contact" />
                                    <FormGroup>
                                        <Title Class="form-label" Name="Name *" />
                                        <InputBox
                                            Type="text"
                                            Name="name"
                                            PlaceHolder="Har Gobind Khorana"
                                            value={name}
                                            ChangeValue={setName}
                                            Class={errors && errors.name && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="khorana@uag.rna"
                                            value={email}
                                            ChangeValue={setEmail}
                                            Class={errors && errors.email && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="text"
                                            PlaceHolder="CCACCTTCCCCTCCTCCGGCTTTTTCCTCCCAACTCGGGGAGGTCCTTCCCGGTGGCCGCCCTGACGAGGTCTGAGCACCTAGGCGGAGGCGGCGCAGGCTTTTTGTAGTGAGGTTTGCGCCTGCGCAGCGCGCCTGCCTCCGCCATGCACGGGGGTGGCCCCCCCTCGGGGGACAGCGCATGCCCGCTGCGCACCATCAAGAGAGT..."
                                            Class={`textbox ${errors && errors.message && 'error'}`}
                                            value={message}
                                            ChangeValue={setMessage}
                                        />
                                    </FormGroup>
                                </Form>
                            </div>
                            <Button
                                Class="button1 btn button2 gradient-color"
                                Name="Deliver your message"
                                Clickble={handleSubmit}
                                BtnIcon="btn-icon"
                            />
                        </div>
                    </Col>
                    <Col sm={0} md={2}>
                        <div className="contact-right">
                        <br />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
