import React from 'react'

export class Form extends React.Component {
    state = {
        count: 1,
        name: 'Ivan'
    }

    handleChangeName = (ev) => {
        this.setState({ name: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.state.name)
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChangeName}/>
        <button>send form</button>
    </form>
    }
}