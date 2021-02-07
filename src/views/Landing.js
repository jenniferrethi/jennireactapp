/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import Typing from 'react-typing-animation';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";


// index page sections
import Download from "./IndexSections/Download.js";
import Resume from "../Jennifer_Rethi.pdf";
//import { init } from 'emailjs-com';





class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  onResumeClick() {
    window.open(Resume);
  }

  //init("user_3ybXZ2APhZsQ2RTfCWt23");

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-25">
              <div className="shape shape-style-1 shape-pink">
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="10">
                    <h1 className="display-3 text-white">
                        Jenni Rethi
                    </h1>
                      <h3 className="lead text-white">
                        Bachelors of Science in Computer Science, Minor in Business @ UT Austin
                      </h3>
                      <p className="text-white">
                        Hey there! I'm Jenni. I enjoy front end web development & cloud solution development. In general, I like understanding how things work & experimenting with technology :). I believe in the value of learning, teaching, hard work, dedication and positivity.</p>
                    </Col>
                  </Row>
                </div>
                <div className="col-5">
                    <img className="img-fluid floating"
                      alt=""
                      src={require("assets/img/personal/coffee.jpg")}
                    />
                </div>
              </Container>
              {/* SVG separator
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
          </div>
          <section className="section section-sm bg-gradient-white">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-dark text-center">My experience</h2>
                  <p className="lead text-dark">
                    <b>Full stack web development</b> - Angular, React.js, .NET Core</p>
                  <p className="lead text-dark">
                    <b>CI/CD Pipeline development</b> - Azure Pipelines (YAML, ARM, Powershell, CLI)</p>
                  <p className="lead text-dark">
                    <b>Azure development</b> - Functions, App Service, Azure Kubernetes Service
                  </p>
                  <p className="lead text-dark">
                    <b>Languages</b> - Java, C#, Python
                  </p>
                  <br></br>
                  <br></br>
                  <a onClick={this.onResumeClick}> <img className="img-fluid floating"
                    alt=""
                    width="15%"
                    height="25%"
                    src={require("assets/img/icons/resume.png")}
                  /> </a>
                <h5 className="text-dark mt-3">Resume</h5>
                </Col>
              </Row>
              {/* SVG separator */}
              <Row className="text-center justify-content-center">
              <Col lg="2">

              </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Contact me</h4>
                      <p className="mt-0">
                        I'd love to hear from you.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
