import React, { Component } from 'react';

export interface ExpectToMatchObjectProps {
    options: string[];
    handleClick: () => void;
} 

class ExpectToMatchObject extends Component<ExpectToMatchObjectProps> {
    render(){
        const { options, handleClick } = this.props;

        return (
            <ul>
                {options.map(option => {
                    <li><a onClick={handleClick}>{option}</a></li>
                })}
            </ul>
        )
    }
}

export default ExpectToMatchObject;