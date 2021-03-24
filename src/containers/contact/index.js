import React, {useState} from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { navigate } from 'gatsby-link'
// import Img from "gatsby-image"
import { Subtitle, Title } from '../../components/title/index';
//import Image from '../../components/image/index';
import InputBox from '../../components/input/index';
import Button from '../../components/button';
//import ContactBackgroundImages from '../../data/contact';
import SketchWrapper from '../../components/ssrP5/index';
import sketch from '../../assets/animations/p5/contactmessages.js';
import '../contact/contact.scss';

// https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js

function Contact() {

    const [state, setState] = useState({});
    const [messagesent, setMessagesent] = useState(false);

    const encode = data => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    setMessagesent(false)
  }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
           method: 'POST',
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
           body: encode({
             'form-name': form.getAttribute('name'),
             ...state,
           }),
         })
           .then(() =>  setMessagesent(true))
           //navigate(form.getAttribute('action')))
           .catch((error) => alert(error))

        }

    return (
        <section className="contact-wrapper" id="contact">
              {/*  <div className="contact-animation-images">
                {ContactBackgroundImages.map((img, index) => (
                    <span key={`contact-img-${index}`} className={`image${index + 1}`}><Image Path={img.img} /></span>
                ))}
            </div> */}
            <Container>
                <Row>
                    <Col sm={0} md={2}>
                      <div className="contact-left">
                            <SketchWrapper sketch={sketch} />
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
                                <Form name="contact"
                                  method="Post"
                                  //action="#contact"
                                  data-netlify="true"
                                  data-netlify-honeypot="bot-field"
                                  onSubmit={handleSubmit}
                                  >
                                  <FormGroup>
                                  <input type="hidden" name="form-name" value="contact" />
                                     <p hidden>
                                       <label>
                                         Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                                       </label>
                                     </p>
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Name *" />
                                        <InputBox
                                            Type="text"
                                            Name="sender"
                                            PlaceHolder="Har Gobind Khorana"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="khorana@uag.rna"
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="text"
                                            onChange={handleChange}
                                            PlaceHolder="CCACCTTCCCCTCCTCCGGCTTTTTCCTCCCAACTCGGGGAGGTCCTTCCCGGTGGCCGCCCTGACGAGGTCTGAGCACCTAGGCGGAGGCGGCGCAGGCTTTTTGTAGTGAGGTTTGCGCCTGCGCAGCGCGCCTGCCTCCGCCATGCACGGGGGTGGCCCCCCCTCGGGGGACAGCGCATGCCCGCTGCGCACCATCAAGAGAGT..."
                                        />
                                    </FormGroup>
                                   <FormGroup>
                                    <Button
                                        Class="button1 btn button2 gradient-color"
                                        Name="Deliver your message"
                                        Type="submit"
                                        Clickble={handleSubmit}
                                        BtnIcon="btn-icon"
                                    />
                                    {messagesent && (
                                      <p style={{ color: "green" }}>Thanks for your message! </p>
                                    )}
                                  </FormGroup>
                                </Form>
                            </div>
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
