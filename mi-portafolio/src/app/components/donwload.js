"use client"
import { useState } from "react";
import downloadIcon from "../assets/icons/download.svg";
import Image from "next/image";

function Download() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const simulateDownload = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 3000); 
  };

  return (
    <div className="buttons">
  <button className="btn-primary" onClick={simulateDownload}>
    <div className="btn-content">
      <p>Download CV</p>
      <Image src={downloadIcon} alt="arrow" className="btn-primary-img" />
    </div>
  </button>
  {isModalOpen && (
    <>
      <div className="modal-background"></div>
      <div className="modal">
        Download, wait moment ...
      </div>
    </>
  )}
  <a className="btn-secondary" href="mailto:contact@me.com">
    <div className="btn-content">
      <p>Contact me</p>
    </div>
  </a>
</div>

  );
}

export default Download;
