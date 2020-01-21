import React, {Component} from 'react'
// import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
class Quiz extends Component{
    state = {
        quiz: [
            {
                answers: [
                    {text: 'Вопрос 1'},
                    {text: 'Вопрос 2'},
                    {text: 'Вопрос 3'},
                    {text: 'Вопрос 4'},
                ]
            }
        ]
    }

    render() {
        return (
            <div style={style}>
                <h1>Wise</h1>
                <ActiveQuiz
                    style={styleQuiz}
                    answers={this.state.quiz[0].answers}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 100,
    flexGrow: 1,
    background: 'linear-gradient(90deg, #5041b2 0%, #7969e6 100%)',
    color: 'white',
}

const styleQuiz = {
    width: '600px',

}

export default Quiz