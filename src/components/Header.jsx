import React from 'react'

const Header = ({title,children,image}) => {
  return (
    <header className='header'>
      <div className="header_container">
        <div className="header_container-bg">
            <img src={image} alt="header-bg" />
        </div>
        <div className="header_content">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
