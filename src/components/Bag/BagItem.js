import React from 'react'

const BagItem = ({item_data}) => {
    return (
        <li className="item">
            <aside><img src={item_data.image} alt="thumb"/></aside>
            <article>
                <h5>{item_data.name}</h5>
                <span className="colo">{item_data.colorway}</span>
                <span className="quan">x{item_data.quantity}</span>
            </article>
            <div className="cta_btns">
                <button className="remove_btn">-</button>
                <button className="add_btn">+</button>
            </div>
        </li>
    )
}

export default BagItem
