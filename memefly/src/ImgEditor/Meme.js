import React from 'react'

export const Meme = ({template, onClick}) => {
    console.log("Meme card Template: ", template)
    return (
        <div className='MemeCardContainer'>
        <img 
            key={template.id}  
            src={template.url}  
            alt={template.name} 
            onClick={onClick}
            className='IndividualMemeCards'
        />
        </div>
    );
};