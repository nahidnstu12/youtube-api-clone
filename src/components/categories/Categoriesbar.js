import React, { useState } from 'react'
import './_categoriesbar.scss'

const Categoriesbar = () => {
    const [activeElement,setActiveElement] = useState('All');

    const handleActiveElement = (val) => setActiveElement(val)

    const keywords = ['All', 'React Js', 'Next Js', 'Cricket', 'Science Fiction','Use Of Api','Vue js','Redux',
    'Music','Algorithm Art ','E-commerce','Guitar','Bengali Songs','Coding','Poems','Islam']

    return (
        <div className="category">
            {keywords.map((word,i)=> 
            <div key={i} className={activeElement === word ?"category__element active" : "category__element"}
            onClick={()=>handleActiveElement(word)}
            >
                {word}
            </div>
            )}
        </div>
    )
}

export default Categoriesbar
