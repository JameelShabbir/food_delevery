import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { remove } from '../store/cartSlice';
import Footer from './Footer';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn } from 'mdb-react-ui-kit';
import './css/cart.css';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeToCart = (id) => {
        dispatch(remove(id));
    };

    const calculateTotal = () => {
        let subtotal = 0;

        products.forEach((product) => {
            subtotal += product.price * product.quantity;
        });

        const total = subtotal; // You can add any additional calculations here

        return { subtotal, total };
    };
    const CardComponent = ({ product }) => {
        const [quantity, setQuantity] = useState(1);
        const [totalPrice, setTotalPrice] = useState(product.price);

        const updateTotalPrice = (newQuantity) => {
            setTotalPrice(product.price * newQuantity);
        };

        const incrementValue = () => {
            setQuantity((prevQuantity) => prevQuantity + 1);
            updateTotalPrice(quantity + 1);
        };

        const decrementValue = () => {
            if (quantity > 1) {
                setQuantity((prevQuantity) => prevQuantity - 1);
                updateTotalPrice(quantity - 1);
            }
        };

        return (
            <div className='col-md-4 mb-5 text-center' key={product.id}>
                <Card className='cards border hover-shadow h-100'>
                    <div className='bg-image hover-zoom'>
                        <Card.Img variant='top' src={product.image} className='p-2' height='250' width='90px' />
                    </div>
                    <Card.Body>
                        <hr className='text-success' />
                        <Card.Title style={{ height: '70px' }}>{product.title}</Card.Title>

                        <h3 id='totalPrice'>$.{totalPrice}</h3>
                    </Card.Body>
                    <div className='input-group w-auto justify-content-center align-items-center mb-3'>
                        <input
                            type='button'
                            value=' - '
                            className='button-minus bg-danger border rounded-circle icon-shape icon-sm mx-1 lh-0'
                            onClick={decrementValue}
                        />
                        <input
                            type='number'
                            step='1'
                            max='10'
                            value={quantity}
                            name='quantity'
                            className='quantity-field border-0 text-center w-25'
                            readOnly
                        />
                        <input
                            type='button'
                            value=' + '
                            className='button-plus bg-success border rounded-circle icon-shape icon-sm lh-0'
                            onClick={incrementValue}
                        />
                    </div>
                    {/* ... other card content */}
                    <Card.Footer className='bg-light'>
                        <Button variant='danger' onClick={() => removeToCart(product.id)}>
                            Remove Item
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    };
    const { subtotal, total } = calculateTotal();

    return (
        <>
            <div className='container text-center'>

                <h2 className='my-4 fw-bold'>My Bag</h2>
                <div className=' text-end bg-light p-3 rounded'>
                    <MDBDropdown className='btn-group'>
                        <MDBDropdownToggle split></MDBDropdownToggle>
                        <MDBBtn>Action</MDBBtn>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Information</MDBDropdownItem>
                            <MDBDropdownItem link>Payment Method</MDBDropdownItem>
                            <MDBDropdownItem link>Place order</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
                <hr />
                <p>
                    {products.length <= 0 ? (
                        <div className='p-3 bg-success shadow-sm' style={{ height: 200, borderRadius: 5, color: '#fff' }}>
                            <h1>Your bag is empty!</h1>
                            <p>
                                "Explore unbeatable deals on our finest products! Indulge in quality at a fraction of the cost.
                                Don't miss out on exclusive discounts. Shop now and elevate your shopping experience!"
                            </p>
                            <button type="button" class="btn btn-warning" data-mdb-ripple-init><NavLink to='/' className='text-white fs-6'>Go Home</NavLink></button>
                        </div>
                    ) : (
                        <div className='row justify-content-center'>
                            <h2 className='p-4'>Shop now and elevate your shopping experience</h2>
                            <div className='col-md-8'>
                                <div className='row'>
                                    {products.map((product) => (
                                        <CardComponent key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                            <div className='col-md-4 bg-light shadow border-top border-4 border-success w-full' style={{ height: '400px' }}>
                                .<div className='col'>
                                    <h2 className='mt-5'>CART TOTAL</h2>
                                    <form class="d-flex mt-4 ">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-success" type="submit">Search</button>
                                    </form>
                                    <div className='d-flex w-100 mt-3 justify-content-between'>
                                        <strong>Subtotal</strong>
                                        <b className='text-danger'>$ {subtotal.toFixed(2)}</b>
                                    </div>
                                    <div className='d-flex w-100 mt-3 justify-content-between'>
                                        <strong>Total</strong>
                                        <b className='text-danger'>$ {total.toFixed(2)}</b>
                                    </div>
                                    <Button variant='danger mt-5'>
                                        Proceed To Checkout
                                    </Button>
                                </div>
                            </div>

                        </div>
                    )}
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
