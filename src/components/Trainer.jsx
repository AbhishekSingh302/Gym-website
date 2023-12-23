import React from 'react';
import Card from '../UI/Card'

const Trainer = ({name,job,image,socials}) => {
  return (
    <Card className="trainer">
        <div className="trainer_img">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer_socails">
                {
                    socials.map(({icon,link}, index)=>{
                        return <a href={link} key={index} target='_blank' rel="noreferrer">{icon}</a>
                    })
                }
            </div>
        </div>
    </Card>
  )
}

export default Trainer
