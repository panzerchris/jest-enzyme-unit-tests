import React, { Component } from 'react';

export interface SpyOnMethodPrototypeProps {
    children: string;
} 

class SpyOnMethodPrototype extends Component<SpyOnMethodPrototypeProps> {
    constructor(props: any){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return <button onClick={this.handleClick}>Click Me</button>
    }

    handleClick() {
        alert(this.props.children);
    }
}

export default SpyOnMethodPrototype;