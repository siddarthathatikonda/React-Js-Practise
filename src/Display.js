import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <div>
                <h2> IM from display component</h2>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
