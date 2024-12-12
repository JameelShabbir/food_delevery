import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information </p>
                <div className="multi-fields">
                    <input type="text" required placeholder='First name' />
                    <input type="text" required placeholder='Last name' />
                </div>
                <input type="email" required placeholder='Email address' />
                <input type="text" required placeholder='Street' />
                <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="number" required placeholder='Zip code' />
                    <input type="text" required placeholder='Country' />
                </div>
                <input type="number" placeholder='Contact no..' required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal </p>
                            <p>${getTotalCartAmount()}</p>
                        </div><hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee </p>
                            <p>${(getTotalCartAmount()) ? 2 : 0}</p>
                        </div><hr />
                        <div className="cart-total-details">
                            <p className='total'>Total</p>
                            <p className='total'>${(getTotalCartAmount()) ? getTotalCartAmount() + 2 : 0}</p>
                        </div>
                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>

    )
}

export default PlaceOrder