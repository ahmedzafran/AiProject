import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './PdfViewer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState('');

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Container className="pdf-container">
      <Row>
        <Col md={8} className="pdf-viewer">
          <Document file="/pdfs/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <p>Page {pageNumber} of {numPages}</p>
            <button onClick={goToPrevPage}>Prev</button>
            <button onClick={goToNextPage}>Next</button>
          </div>
        </Col>
        <Col md={4} className="text-field">
          <textarea rows="5" value={text} onChange={handleTextChange}/>
        </Col>
      </Row>
    </Container>
  );
};

export default PdfViewer;