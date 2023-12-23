import React from 'react'
import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import { faqs } from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs_container">
            <SectionHead icon={<FaQuestion/>} title='FAQs'/>
            <div className='faqs_wrapper'>
                {
                    faqs.map(({id,question,answer})=>{
                        return(
                            <FAQ question={question} answer={answer} key={id}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs
