import React from 'react'

const FinishedQuiz = props => {
    return (
        <div style={style}>
            <ul style={styleUl}>
                <li style={styleLi}>
                    <strong>1. </strong>
                    How are u
                    <i className={'fa fa-times'} />
                </li>
                <li style={styleLi}>
                    <strong>2. </strong>
                    How are u
                    <i className={'fa fa-check'} />
                </li>
            </ul>

            <p>Правильно 4 из 10 </p>
            <div>
                <button>Повторить</button>
            </div>
        </div>

    )
};

const style = {
    padding: '20px',
    color: '#fff',
    border: '2px solid #fff',
    boxSizing: 'border-box',
    margin: '0 10px'
};

const styleUl = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
};

const styleLi = {
    marginLeft: '10px'
};

export default FinishedQuiz