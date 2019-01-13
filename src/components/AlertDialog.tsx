import React, { Component } from 'react';

export interface AlertDialogProps {
    children: string;
} 

class AlertDialog extends Component<AlertDialogProps> {
    render(){
        return <button onClick={this.handleClick}>Click Me</button>
    }

    handleClick = () => {
        alert(this.props.children);
    }
}

export default AlertDialog;