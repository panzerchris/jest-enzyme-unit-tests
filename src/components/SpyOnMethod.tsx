import React, { Component } from 'react';

export interface SpyOnMethodProps {
    children: string;
} 

class SpyOnMethod extends Component<SpyOnMethodProps> {
    render(){
        return <button onClick={this.handleClick}>Click Me</button>
    }

    handleClick = () => {
        alert(this.props.children);
    }
}

export default SpyOnMethod;