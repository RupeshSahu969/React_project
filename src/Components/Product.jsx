import React from 'react'

const Product = (props) => {



    return (
        <div className='row mt-3'>
            <div className='col-5'>
                <h2> {props.product.name}
                    <span className='badge bg-secondary'> ₹
                        {props.product.price}
                    </span>
                </h2>
            </div>
            <div className='col-3'>
            <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" 
                        onClick={() => {props.incremetQuantity(props.index)}}
                        >+</button>
                        <button type="button" className="btn btn-warning">
                        {props.product.quantity}
                        </button>
                        <button type="button" className="btn btn-success"
                         onClick={() => {props.decremetQuantity(props.index)}}
                        >-</button>
                    </div>
            </div>
            <div className='col-2'>
            {props.product.quantity  * props.product.price}
            </div>
            <div className='col-2'>
        <button className='btn btn-danger'
          onClick={() => {props.remove(props.index)}}
        >Removie</button>
            </div>
        </div>
    )
}

export default Product
