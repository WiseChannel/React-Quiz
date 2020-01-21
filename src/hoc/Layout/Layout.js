import React, {Component} from 'react'

class Layout extends Component{
    render() {
        return(
            <div style={styleDiv}>
                <main style={styleMain}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

const styleDiv = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
}

const styleMain = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
}

export default Layout