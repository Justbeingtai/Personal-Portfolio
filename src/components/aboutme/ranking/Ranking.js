import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Professional Badge</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div
              data-iframe-width="250"
              data-iframe-height="300"
              data-share-badge-id="2029b586-6d91-4403-93fb-a4c534830cb9"
              data-share-badge-host="https://www.credly.com"
              className="badge-frame"
            ></div>
          </Col>
        </Row>
      </Container>
      <style jsx="true">{`
        h1 {
          color: #FBD9AD;
          font-size: 2.5rem;
          text-align: center;
          font-weight: bold;
        }
        .badge-frame {
          margin-top: 20px;
          background: #f9f9f9;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
