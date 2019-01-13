import React, { Component } from 'react';

export interface ComponentStateState {
    title: string;
    message: string;
} 

class ComponentState extends Component<{}, ComponentStateState> {
    state = {
        title: 'elrond',
        message: 'this is a state',
    }

    render(){
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default ComponentState;