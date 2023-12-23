import React, { useState } from 'react';
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import { testimonials } from '../data';
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const Testimonials = () => {

    const[index, setIndex] = useState(0);
    const {name, quote, job, avatar} = testimonials[index];

    const nextTestimonialHandler = ()=>{
        setIndex(prev => prev+1);
        if(index >= testimonials.length-1){
            setIndex(0);
        }
    }

    const prevTestimonialHandler = ()=>{
        setIndex(prev => prev-1);

        if(index <= 0){
            setIndex(testimonials.length-1);
        }
    }

  return (
    <section className='testimonials'>
      <div className='container  testimonials_container'>
        <SectionHead icon={<FaQuoteLeft/>} title="Testimonials" className="testimonials_head"/>
        <Card className="testimonial">
            <div className='testimonial_avatar'>
                <img src={avatar} alt={name}/>
            </div>
            <p className='testimonail_quote'>{`"${quote}"`}</p>
            <h5>{name}</h5>
            <small className='testimonial_title'>{job}</small>
        </Card>
        <div className="testimonials_btn-container">
            <button className="testimonials_btn" onClick={prevTestimonialHandler}>{<IoIosArrowDropleftCircle/>}</button>
            <button className="testimonials_btn" onClick={nextTestimonialHandler}>{<IoIosArrowDroprightCircle/>}</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
