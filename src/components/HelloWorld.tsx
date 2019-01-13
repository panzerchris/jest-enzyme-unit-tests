import React, { Component } from 'react';

export interface HelloWorldProps {
    name: string;
} 

class HelloWorld extends Component<HelloWorldProps> {
    render(){
        return <p>Hello World! And hello {this.props.name} :)</p>;
    }
}

export default HelloWorld;