import React, {Component} from 'react';

class Product extends Component {

    // constructor(props) {
    //     super(props);
    //     this.onAddToCart = this.onAddToCart.bind(this);
    // }

    // onAddToCart(text) {
    //     alert(this.props.children);
    // }

    onAddToCart = () => {
        alert(this.props.children);
    }

    render() {
        return (
                <div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <a className="thumbnail">
                            <img alt="" />
                            <div className="caption">
                                <h3>
                                    { this.props.children }
                                </h3>
                                <p>{ this.props.price }</p>
                                <p>
                                    <a className="btn btn-primary" onClick={ this.onAddToCart }>Mua hàng</a>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>//End element
        );
    }
}

export default Product;
