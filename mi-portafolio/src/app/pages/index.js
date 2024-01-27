import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import downloadIcon from "../assets/icons/download.svg";
import githubIcon from "../assets/icons/github.svg";
import linkIcon from "../assets/icons/link.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import bussiness_man from "../assets/images/bussiness_man.png";
import Hero_2 from "../assets/images/Hero_2.png";
import issima_page from "../assets/images/issima_page.png";
import kitchen from "../assets/images/kitchen.jpeg";
import mobile_app from "../assets/images/mobile_app.png";
import perfil_picture from "../assets/images/perfil_picture.jpeg";
import pictures_wall from "../assets/images/pictures_wall.jpeg";


import Download from "../components/donwload";
export default function Index() {
  function download (){
    alert("Downloading Document")
  }
  return (
    <>
      <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"/>
      </Head>
      <div class="main">
        <div class="container">
            <div class="profile">

                <figure class="profile-img">
                    <Image src={perfil_picture} />
                </figure>



                <div class="profile-info">
                    <h1>Ramiro Fernandez</h1>
                    <p>Software Engineer</p>
                    <div class="profile-social">
                        <a href="https://github.com/ramiferrot18" target="_blank">
                            <Image src={githubIcon} alt="github" class="profile-social-img" />
                        </a>
                        <a href="https://twitter.com/ferrot18" target="_blank">
                            <Image src={twitterIcon} alt="twitter" class="profile-social-img" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <Image src={linkedinIcon} alt="linkedin" class="profile-social-img" />
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <Image src={youtubeIcon} alt="youtube" class="profile-social-img" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="facts">
                <div class="fact-item">
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div class="fact-item">
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div class="fact-item">
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>


            <Download/>

            <div class="tabs">
                <button class="tabs-background-item active">
                    <p class="tabs-background-item-text">Portfolio</p>
                </button>
                <button class="tabs-background-item">
                    <p class="tabs-background-item-text">Skills</p>
                </button>

            </div>
            <div class="project-container">
                <div class="content-card-img">
                    <Image class="image" src={Hero_2} />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <Image class="image" src={bussiness_man} />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <Image class="image grayscale" src={pictures_wall} />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <Image class="image" src={kitchen} />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <Image class="image" src={mobile_app} />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <Image class="image grayscale" src={issima_page} />
                    <div class="content-card-img-overlay"></div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}
