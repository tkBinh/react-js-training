import React, { Component } from 'react';

class ColorPicker extends Component{

    constructor(props) {
        super(props);
        this.state = {
            colors: [ 'red', 'green', 'blue', '#ccc' ]
        };
    }

    showColor(color) {
        return {
            backgroundColor : color
        };
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render () {
        let elementColors = this.state.colors.map((color, index) => {
            return <span key={index} style={ this.showColor(color) }
                className={ this.props.color === color ? 'active' : '' }
                onClick={ () => this.setActiveColor(color) }
            >
            </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header bg-success">
                        <h3 className="card-title">Chọn màu</h3>
                    </div>
                    <div className="card-body">
                        { elementColors }
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;