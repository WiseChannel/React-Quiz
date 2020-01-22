import React from 'react';
import {Rout} from 'react-router-dom'

import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Quiz/>
            </Layout>
        )
    }
}

export default App;
