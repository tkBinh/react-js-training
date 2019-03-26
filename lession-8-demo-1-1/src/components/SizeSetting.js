import React, { Component } from 'react';

class SizeSetting extends Component{

    changeSize(value) {
        this.props.onChangeSize(value);
    }

    render () {
        return (
                <div className="card">
                    <div className="card-header bg-dark">
                        <h3 className="card-title text-light">Size: {this.props.fontSize}px</h3>
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-success" onClick={() => this.changeSize(+2)}>+</button>&nbsp;
                        <button type="button" className="btn btn-success" onClick={() => this.changeSize(-2)}>-</button>
                    </div>
                </div>
        );
    }
}

export default SizeSetting;