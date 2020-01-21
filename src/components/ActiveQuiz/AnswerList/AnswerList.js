import React from 'react'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    return (
        <ul style={styleAnswer}>
            <li>
                { props.answers.map((answer, index) => {
                    return(
                        <AnswerItem
                            state={props.state ? props.state[answer.id] : null}
                            key={index}
                            answer={answer}
                            onAnswerClick={props.onAnswerClick}
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

    marginBottom: '5px',
    cursor: 'pointer',
    'hover': {
        background: 'rbga(255, 255, 255, .2)',
        transaction: 'background .3s ease-in-out',
    }
};



export default AnswersList