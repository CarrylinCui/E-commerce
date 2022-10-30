import React from 'react'

export default function Product({ product, addToCart }) {
    return (
        <div div className='col-lg-4' >
            <div className="card m-3 text-center" style={{ width: '20rem', }}>
                <img src={product.image.url} className="card-img-top" alt="No Picture" style={{ width: '150px', height: '100px', margin: '0 auto' }} />
                <div className="card-body">
                    <h6 className="card-title" >{product.name}</h6>
                    <p>{product.sku}</p><p></p>
                    <h5 style={{ fontWeight: 'bold' }} >{product.price.formatted_with_symbol}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }} style={{ color: 'grey' }} ></p>
                    <button className="btn btn-dark" onClick={() => addToCart(product.id, 1)}>Add to Shopping Cart</button>
                </div>
            </div>
        </div >
    )
}
