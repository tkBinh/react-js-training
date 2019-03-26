import React, {Component} from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    id: 1,
                    name: 'Iphone XS Max',
                    price: '1500$',
                    status: true
                },
                {
                    id: 2,
                    name: 'Samsung Galaxy S10',
                    price: '1000$',
                    status: true
                },
                {
                    id: 3,
                    name: 'Oppo XXX',
                    price: '5500$',
                    status: false
                }
            ],
            isActive : true
        }
    }

    render() {
        let elements = this.state.products.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>
                        <span className="label label-success">{product.price}</span>
                    </td>
                </tr>
            )
        });

        this.onSetState = () => {
            this.setState({
                isActive : !this.state.isActive
            });
        }

        return (
            <div>
                <nav className="navbar navbar-inverse bg-danger">
                    <div className="container-fluid">
                        <a className="navbar-brand">Props</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên SP</th>
                                    <th>Giá</th>
                                </tr>
                                </thead>
                                <tbody>
                                {elements}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-warning" onClick={ this.onSetState }>
                                Active : { this.state.isActive === true ? 'true' : 'false' }
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                );
                }
                }

                export default App;
