import React, {useState} from 'react'

const SingleItem = ({item_data, additem_func}) => {
    
    const [selectedStock, setStock] = useState(item_data.colors[0].stock);
    const [order, setOrder] = useState({name : item_data.name, image : item_data.colors[0].images[0], colorway : item_data.colors[0].name, quantity : 0});

    const setNewImage = () => {
        var imagelink = item_data.colors.map(e => {
            if (e.name === order.colorway) {
                return e.images[0]
            }
            return null
        });
        setOrder({...order, image : imagelink[0]});
        console.log(imagelink[0]);
    }

    return (
        <div className="single-item">
            <div className="wrap">
                <div className="color-select-container">
                    {item_data.colors.map(color => {
                        return (
                            <div key={color.id} className="colorway-select">
                                <input type='radio' name={item_data.name+'-colorway'} id={item_data.name+'-'+color.name} value={color.name} data-stock={color.stock}
                                    onChange={(e) => {setOrder({...order, colorway : e.target.value, image : color.images[0]}); setStock(e.target.getAttribute("data-stock"));}}/>
                                <div className="button-wrap">
                                    <label htmlFor={item_data.name+'-'+color.name} style={{backgroundColor : color.hex}} title={color.name}></label>
                                    <span className="shadow" style={{backgroundColor : color.hex}}></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <aside>
                    <img src={order.image} alt="thumb" />
                </aside>
                
                <article>
                    <h3>{item_data.name}</h3>
                    <span className="colorway">{order.colorway}</span>
                </article>
                
                <div className="order_cta">
                    <form>
                        <span>Stock: {selectedStock}</span>
                        <div className="wrap_cta">
                            <input type="number" max={selectedStock} min="0" value={order.quantity} onChange={e => (setOrder({...order, quantity : e.target.value}))}/>
                            <button type="submit" onClick={e => {additem_func(e,order)}}></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
