import React from 'react'

const Item = ({ item, updateCart }) => {

    return (
        <div style={{ borderTop: '1px #D3D3D3 solid' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="card-body">
                        <h6 className="card-title">{item.name}</h6>
                        <p className="card-text"><small className="text-muted">{item.sku}</small></p>
                    </div>
                </div>
                <div className="col-md-2 card-body" style={{ marginTop: '10px' }}>
                    <img src={item.image.url} className="img-fluid rounded-start" alt="No Picture"
                        style={{ width: '50px', height: '40px' }} />
                </div>
                <div className="col-md-2 card-body" style={{ marginTop: '20px' }}>
                    <p>{item.price.formatted_with_symbol}</p>
                </div >
                <div className="col-md-2 card-body" style={{ marginTop: '15px' }}>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{ display: 'inline' }}>
                        <button type="button" className="btn btn-light btn-sm " onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
                        <button type="button" className="btn btn-sm">{item.quantity}</button>
                        <button type="button" className="btn btn-light btn-sm " onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
                    </div>
                </div>
                <div className="col-md-2 card-body" style={{ marginTop: '20px', marginRight: '-8px' }}>
                    <p>{item.line_total.formatted_with_symbol}</p>
                </div>
            </div>
        </div>
    )
}

export default Item