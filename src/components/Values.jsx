import React from 'react';
import image from '../images/values.jpg';
import SectionHead from './SectionHead';
import { values } from '../data';
import Card from '../UI/Card';
import { MdOutlineDiamond } from 'react-icons/md';

const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className='values_image'>
                    <img src={image} alt='value'/>
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<MdOutlineDiamond/>} title='Values'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda accusantium sapiente cumque. Temporibus repellat blanditiis earum, magnam cum provident sed itaque laudantium. </p>
                <div className='values_wrapper'>
                    {
                        values.map(({id,icon,title,desc})=>{
                            return <Card className='values_value' key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>      
    </section>
  )
}

export default Values
