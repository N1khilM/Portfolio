"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../components/Navbar.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-transparent py-10">
      {/* Centered Download Button */}
      <div className="mb-6">
        <a
          href="/resume.pdf"
          download="/resume.pdf"
          className="inline-flex items-center justify-center px-6 py-2 text-foreground bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </div>

      {/* PDF Document */}
      <div className="flex justify-center">
        <Document file="/resume.pdf">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      {/* Centered Download Button Again */}
      <div className="mt-6">
        <a
          href="/resume.pdf"
          download="/resume.pdf"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-2 text-foreground bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ResumeNew;
