import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : ''
        };
    }

    onHandleChange = (event) => {
        this.setState({
            data : event.target.value
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault(); //Chặn sự kiện submit form
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Form</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={ this.onHandleSubmit }>
                                    <fieldset className="form-group">
                                        <label>Data</label>
                                        <input type="text" className="form-control"
                                               placeholder="Input data"
                                               name = "txtData"
                                               onChange={ this.onHandleChange }
                                        />
                                    </fieldset>
                                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
