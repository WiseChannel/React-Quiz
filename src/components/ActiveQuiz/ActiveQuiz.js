import React from 'react'
import AnswersList from "./AnswerList/AnswerList";

const ActiveQuiz = (props) => {
    return (
        <div style={styleActive}>
            <p style={styleUl}>
            <span>
                <strong>2. </strong>
                Как дела?
            </span>

                <small>4 из 12</small>&nbsp;
            </p>

            <AnswersList
                answers={props.answers}
            />
        </div>
    )
}

const styleActive = {
    padding: '20px',
    color: 'white',
    border: '2px solid #fff',
    borderRadius: '5px',
    margin: '0 10px',
    boxSizing: 'border-box',
    width: '600px',
    height: 'max-content'
}

const styleUl = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default ActiveQuiz