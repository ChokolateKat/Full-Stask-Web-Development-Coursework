import React from 'react'

const RenderList = ({list}) => {
    if (Array.isArray(list)) {
        return(
            list.map(item =>
                <li key = {"List" + item}>{item}</li>)
        )
    }
    console.log('You need an array!')
    return (<div>Something broke!</div>)
}

export default RenderList