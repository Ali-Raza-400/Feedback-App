import React from 'react'

const Header = ({text,bgColor,textColor}) => {
    const headerStyles={
        backgroundColor:bgColor,
        color:textColor,
        display:'flex',
        justifyContent:'center'
    }
  return (
        <header style={headerStyles}>
            <div>
                <h2>{text}</h2>
            </div>
        </header>
  )
}
Header.defaultProps={
    text:'Feedback UI',
    bgColor:'#000000',
    textColor:'#ff6095'
}

export default Header