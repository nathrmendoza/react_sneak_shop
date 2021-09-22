import React, {useState} from 'react'
import ConfirmRemove from './ConfirmRemove';
import BagItem from './BagItem';

const Bag = ({orders_data}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div id="bag" className={(toggle) ? 'active' : ''}>
            <button type="button" className="bag_toggle" onClick={() => setToggle(!toggle)}></button>
            <div className="bag_panel">
                <h3>My Bag</h3>
                <div className="wrap-items">
                    <ul className="items-list">
                        {orders_data.map(e => <BagItem item_data={e}/>)}
                    </ul>
                </div>
                <button type="button" id="checkout_btn">Checkout</button>
            </div>
        </div>
    )
}

export default Bag
