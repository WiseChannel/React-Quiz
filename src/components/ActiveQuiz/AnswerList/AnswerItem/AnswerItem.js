import React from 'react'

const AnswerItem = props => {
    return(
        <li style={styleAnswerItem}>
            {props.answer.text}
        </li>
    )
}

const styleAnswerItem = {

}

export default AnswerItem