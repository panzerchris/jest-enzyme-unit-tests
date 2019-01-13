import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

export interface HelloWorldWrapperProps {
    name: string;
} 

class HelloWorldWrapper extends Component<HelloWorldWrapperProps> {
    render(){
        return (
            <div className="hello-world-wrapper">
                <HelloWorld name={this.props.name} />
            </div>
        )
    }
}

export default HelloWorldWrapper;