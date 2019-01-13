import React, { Component } from 'react';

export interface ComponentPropsProps {
    title: string;
    message: string;
} 

class ComponentProps extends Component<ComponentPropsProps> {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default ComponentProps;