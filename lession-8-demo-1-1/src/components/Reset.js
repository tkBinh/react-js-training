import React, { Component } from 'react';

class Reset extends Component{

    onReset= () => {
        this.props.onSettingDefault(true);
    }


    render () {
        return (
            <button type="button" className="btn btn-primary martop-50" onClick={this.onReset}>Reset</button>
        );
    }
}

export default Reset;