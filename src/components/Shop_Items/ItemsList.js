import React from 'react'
import SingleItem from './SingleItem'

const ItemsList = ({items_data, shop_add}) => {
    return (
        <div className="products">
            {/* <h2>Sneakers</h2> */}
            <div className="items-list">
                {items_data.map(e => <SingleItem key={e.id} item_data={e} additem_func={shop_add} />)}
            </div>
        </div>
    )
}

export default ItemsList
