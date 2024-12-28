import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Particle from "../../Particle";
import smuIcon from "../../images/smu.png"; // Example SMU logo
import udemyIcon from "../../images/udemy.png"; // Example Udemy logo
import finraIcon from "../../images/finra.png"; // Example FINRA logo

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>Certificates</h1>
            </Zoom>
          </div>
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {/* SMU Bootcamp Certificate */}
                    <Col md={4} className="col-sm-12 col-md-4">
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.credly.com/badges/2029b586-6d91-4403-93fb-a4c534830cb9/public_url"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={smuIcon}
                                  alt="SMU"
                                />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              SMU Bootcamp: Full Stack Web Development
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - Southern Methodist University
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* Udemy Java Certificate */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.udemy.com/course/java-the-complete-java-developer-course/?couponCode=ST12MT122624"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={udemyIcon}
                                  alt="Udemy"
                                />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              Java Masterclass: Complete Java Developer Course
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - Udemy
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* FINRA Certificate */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.finra.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>
                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={finraIcon}
                                  alt="FINRA"
                                />
                              </div>
                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>
                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{ fontWeight: 700, color: "#fbd9ad" }}
                            >
                              FINRA Certification
                            </h2>
                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - FINRA
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}
