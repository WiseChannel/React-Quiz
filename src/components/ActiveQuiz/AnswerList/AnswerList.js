import React from 'react'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    return (
        <ul style={styleAnswer}>
            <li>
                { props.answers.map((answer, index) => {
                    return(
                        <AnswerItem
                            key={index}
                            answer={answer}
                        />
                    )
                }) }
            </li>
        </ul>
    )
};

const styleAnswer = {
    listStyle: 'none',
    margin: 0,
    padding: '5px 10px',
    border: '1px solid white',
    marginBottom: '5px',
    cursor: 'pointer',
    'hover': {
        background: 'rbga(255, 255, 255, .2)',
        transaction: 'background .3s ease-in-out',
    }
};

export default AnswersList