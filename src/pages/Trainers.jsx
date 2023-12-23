import React from 'react';
import './Trainers.css';
import Header from '../components/Header';
import HeaderImage from '../images/header_bg_5.jpg';
import {trainers} from '../data';
import Trainer from '../components/Trainer';
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati id sequi officiis totam in nostrum magni eveniet, perspiciatis dolore a architecto similique quasi ratione ex!
      </Header>
      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id,image,name,job,socials})=>{
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  { icon: <SiInstagram/>, link: socials[0]},
                  { icon: <SiTwitter/>, link: socials[1]},
                  { icon: <SiFacebook/>, link: socials[2]},
                  { icon: <SiLinkedin/>, link: socials[3]}
                ]
              }/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
