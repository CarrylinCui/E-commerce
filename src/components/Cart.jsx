import React, { useEffect, useState } from 'react'
import Item from './Item'
import PicCart from '../assets/emptycart.png'

export default function Cart({ cart, updateCart }) {

    const isEmpty = cart.total_items

    const EmptyCart = () => (
        <div>
            <div className="card text-center" style={{ width: '28em', margin: '0 auto', marginTop: "80px" }}>
                <img src={PicCart} class="card-img-top" alt="NO PICTURE"></img>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold', paddingTop: '50px', paddingBottom: '30px' }} >YOUR CART IS EMPTY.</h5>
                    <a href="/" className="btn btn-dark">START SHOPPING</a>
                </div>
            </div>
        </div>
    )

    const FilledCart = () => (
        <div>
            <div className='card' style={{ float: 'left', width: '950px', marginLeft: '80px', marginTop: '20px' }}>
                <div className='row' style={{ fontWeight: "bold", fontSize: '20px', paddingTop: '18px', paddingBottom: '10px' }}>
                    <div className='col-md-4' style={{ marginLeft: "20px" }}>Item</div>
                    <div className='col-md-2'>Pic</div>
                    <div className='col-md-1' style={{ marginLeft: '-20px' }}>Price</div>
                    <div className='col-md-1' style={{ marginLeft: '100px' }}>Qty</div>
                    <div className='col-md-2' style={{ marginLeft: '60px' }}>Total</div>
                </div>
                {
                    cart.line_items.map((item) => (
                        <Item key={item.id} item={item} updateCart={updateCart} />
                    ))
                }
            </div>
            <div className='card' style={{ float: 'left', marginLeft: '50px', marginTop: '30px', width: "400px" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bold", fontSize: '20px' }}>Order Summary</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Subtotal</h6>
                    <h4 className="card-text" style={{ float: 'right', fontWeight: 'bold' }}>{cart.subtotal.formatted_with_symbol}</h4>
                    <a href="#" className="btn btn-dark" style={{ marginTop: '40px', marginLeft: '100px', width: '200px', fontWeight: 'bold' }}>Checkout Now</a>
                </div>
            </div>
        </div >
    )

    return (
        <div >
            {isEmpty ? <FilledCart /> : <EmptyCart />}
        </div>
    )
}
