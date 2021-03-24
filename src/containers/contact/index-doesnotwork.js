import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import axios from "axios"
import * as qs from "query-string"
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

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
	}

  handleSubmit(event) {
    // Code source https://www.seancdavis.com/blog/how-to-use-netlify-forms-with-gatsby/
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()

      // Loop through this component's refs (the fields) and add them to the
      // formData object. What we're left with is an object of key-value pairs
      // that represent the form data we want to send to Netlify.
      const formData = {}
      Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

 render() {
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
                                <Form ref={this.domRef} method="POST" data-netlify="true" name="Contact Form"  onSubmit={event => this.handleSubmit(event)}>
                                <input type="hidden" name="form-name" value="Contact Form" />
                                    <FormGroup>
                                        <Title Class="form-label" Name="Name *" />
                                        <InputBox
                                            Type="text"
                                            Name="name"
                                            PlaceHolder="Har Gobind Khorana"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="khorana@uag.rna"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="text"
                                            PlaceHolder="CCACCTTCCCCTCCTCCGGCTTTTTCCTCCCAACTCGGGGAGGTCCTTCCCGGTGGCCGCCCTGACGAGGTCTGAGCACCTAGGCGGAGGCGGCGCAGGCTTTTTGTAGTGAGGTTTGCGCCTGCGCAGCGCGCCTGCCTCCGCCATGCACGGGGGTGGCCCCCCCTCGGGGGACAGCGCATGCCCGCTGCGCACCATCAAGAGAGT..."
                                        />
                                    </FormGroup>
                                </Form>
                            </div>
                            <Button
                                Class="button1 btn button2 gradient-color"
                                Name="Deliver your message"
                                Clickble={event => this.handleSubmit(event)}
                                BtnIcon="btn-icon"
                            />
                            {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
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
}

export default Contact;
