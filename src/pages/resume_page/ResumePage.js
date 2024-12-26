import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import pdf from "../../assets/TAI_RESUME.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial setting
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
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
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <div fluid className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
              <div className="resume d-flex justify-content-center mt-4">
                <Document
                  file={pdf} // Use the imported local file for consistency
                  onLoadError={(error) => console.error("Error loading PDF:", error)}
                >
                  <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.8} />
                </Document>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
