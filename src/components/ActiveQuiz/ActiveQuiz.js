import React from 'react'
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => {
    return (
        <div style={styleActive}>
            <p style={styleUl}>
            <span>
                <strong>{props.answerNumber}. </strong>
                {props.question}
            </span>
                <small>{props.answerNumber} из {props.quizLenght}</small>&nbsp;
            </p>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
};

const styleActive = {
    padding: '20px',
    color: 'white',
    border: '2px solid #fff',
    borderRadius: '5px',
    margin: '0 10px',
    boxSizing: 'border-box',
    width: '600px',
    height: 'max-content'
};

const styleUl = {
    display: 'flex',
    justifyContent: 'space-between'
};

export default ActiveQuiz