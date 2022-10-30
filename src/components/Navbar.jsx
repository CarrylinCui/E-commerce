import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = ({ total_items }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="nav-link"
                    style={{
                        margin: 'auto', textShadow: '0px 0px 10px black', color: '#fff', fontFamily: 'cursive',
                        fontSize: '30px'
                    }}
                    href="/">CAFFE NERO</a>
                <div style={{ float: 'right' }}>
                    <a className='nav-link' href='Cart'>
                        <AiOutlineShoppingCart size={30} color='white' />
                        <div style={{
                            float: 'right',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            padding: '1px',
                            background: '#fff',
                            border: '2px solid #000',
                            color: '#000',
                            textAlign: 'center',
                            font: '35px',
                            marginLeft: '7PX',
                            marginRight: '20px'
                        }} > {total_items}
                        </div>
                    </a>
                </div>
            </div>
        </nav >
    )
}

export default Navbar