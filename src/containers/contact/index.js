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

    const [sender, setSender] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState({})
    const [state, setState] = useState({})

    const ContactForm = React.createRef()

    const encode = data => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }


    const handleSubmit = (e) => {
        e.preventDefault()

        const contactform = ContactForm.current

        const error = {}
        if (!sender) {
            error.sender = 'First Name field shouldn’t be empty';
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

        fetch('/', {
           method: 'POST',
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
           body: encode({
             'Form-name': contactform.getAttribute('name'),
             ...state,
           }),
         })
           .then(() => navigate(contactform.getAttribute('action')))
           .catch((error) => alert(error))

            setSender('');
            setEmail('');
            setMessage('');
        }
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
                                  method="post"
                                  action="/thanks/"
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
                                            value={sender}
                                            onChange={handleChange}
                                            ChangeValue={setSender}
                                            Class={errors && errors.sender && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="khorana@uag.rna"
                                            value={email}
                                            onChange={handleChange}
                                            ChangeValue={setEmail}
                                            Class={errors && errors.email && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="text"
                                            onChange={handleChange}
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
                                type="submit"
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
