import React, {useContext} from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Secrets from '../../img/Secrets.png';
import PurveshDeora from '../../img/Purvesh_Deora.png';
import DrumKit from '../../img/DrumKit.png';
import ReactDashbord from '../../img/ReactDashbord.png'
import GitFireApp from '../../img/GitFireApp.png';
import {themeContext} from '../../Context';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';

import "swiper/css/pagination";
import { Pagination } from "swiper";



const Portfolio = () => {
    const projects = [
        {
            img: Secrets,
            appName: "Secrets Web App",
            href: "https://secrets-web-apps.herokuapp.com"
          },
          {
            img: PurveshDeora,
            appName: "Portfolio",
            href: "https://purveshdeora.netlify.app"
          },
          {
            img: DrumKit,
            appName:"DrumKit",
            href: "https://purveshdeora70.github.io/drumkit-App-JS"
          },
          {
            img: ReactDashbord,
            appName: "React Dashbord Admin",
            href: "https://react-dashbord-admin.netlify.app"
          },
          {
            img: GitFireApp,
            appName: "GitFire App",
            href: "https://firebase-github-apps.netlify.app"
          },
    ]

    const screenSize = useMediaQuery({ query: '(max-width: 480px)' });
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        {screenSize? 
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        grabCursor={true}
        className= {darkMode ? 'dark' : 'light'}
        >
            {projects.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="portfolio-div">
                        <a href={client.href} target="/">
                          <img src={client.img} alt="" />
                          <span>{client.appName}</span>
                        </a>
                        </div>
                    </SwiperSlide>
                )
                })
            }
        </Swiper>
        :
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
        {projects.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="img-container">
                        <a href={client.href} target="/">
                          <img src={client.img} alt="" />
                          <span>{client.appName}</span>
                        </a>
                        </div>
                    </SwiperSlide>
                )
                })
            }
        </Swiper>
        }
    </div>
  )
}

export default Portfolio;