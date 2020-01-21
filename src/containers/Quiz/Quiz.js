import React, {Component} from 'react'
// import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component{
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        allQuestions: 'Ответьте на все вопросы',
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswer: 2,
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                question: 'В каком году основали Киев?',
                rightAnswer: 1,
                id: 2,
                answers: [
                    {text: '482', id: 1},
                    {text: '643', id: 2},
                    {text: '1200', id: 3},
                    {text: '834', id: 4},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id:', answerId)

        if (this.state.answerState) {
            // const key = Object.keys(this.state.answerState)[0]
            // if (this.state.answerState[key] === 'success') {
            //     return
            // }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswer === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished');
                    alert('Finished')
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
         } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div style={style}>
                <h1>{this.state.allQuestions}</h1>

                {
                    this.state.isFinished
                        ? <FinishedQuiz/>
                        : <ActiveQuiz
                            style={styleQuiz}
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLenght={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                }

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
};

const styleQuiz = {
    width: '600px',

};

export default Quiz