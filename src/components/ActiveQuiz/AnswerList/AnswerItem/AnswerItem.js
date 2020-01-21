import React from 'react'

const AnswerItem = props => {

    // if (props.answer.id !== 3) {
    //     styleLi.style.background('rgba(240,87,108,.7)')
    // } else {
    //     styleLi.style.background('rgba(161,240,69,.7')
    // }

    return (
        <li style={styleLi} onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

const styleLi = {
    border: '1px solid white',
    margin: '10px 0',
    padding: '5px',
    borderRadius: '5px',
    'hover': {
        background: 'rgba(255, 255, 255, .2)',
        border: '1px solid white',
        transaction: 'background .3s ease-in-out',
    }
};

// const success = {
//     background: 'rgba(161,240,69.7)'
// }
//
// const error = {
//     background: 'rgba(240,87,108,.7)'
// }

export default AnswerItem