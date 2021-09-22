import React, {useState} from 'react'
import ItemsList from './Shop_Items/ItemsList';
import Bag from './Bag/Bag';


const Shop = () => {

    const [products, setProducts] = useState([
        {id: 0, name: 'Kyrie 5', type: 'Sneakers',
            colors: [
                {id: 0, stock: 5, name: 'Red / White', hex: '#A12E3D', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/nike-kyrie-5-cn9519-600_585x585.png']},
                {id: 1, stock: 8, name: 'Wolf Grey / Black', hex: '#ACB2BB', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/nike-kyrie-5-cn9519-001_585x585.png']},
                {id: 2, stock: 2, name: 'Game Royal / White', hex: '#2D5F9F', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/nike-kyrie-5-cn9519-401_585x585.png']}
            ]
        },
        {id: 1, name: 'Air Jordan 34', type: 'Sneakers', 
            colors: [
                {id: 0, stock: 7, name: 'Blue Void', hex: '#A3CAC4', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/air-jordan-34-ar3240-400_585x585.png']},
                {id: 1, stock: 2, name: 'Black / Dark Smoke Grey / Electric Green / Black', hex: '#2A2826', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/006762-air-jordan-34-ar3240-003_286x286.png']},
                {id: 2, stock: 3, name: 'White / Aurora / Metallic Silver', hex: '#EEF0F1', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/air-jordan-34-bq3381-103_286x286.png']}
            ]
        },
        {id: 2, name: 'Nike PG 4', type: 'Sneakers', 
            colors: [
                {id: 0, stock: 1, name: 'Black / University Red / White', hex: '#A4112D', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/009614-nike-pg-4-cd5079-003_286x286.png']},
                {id: 1, stock: 2, name: 'Light Cream / Terra Bush / Racer Blue / Total Orange', hex: '#E43C15', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/009680-nike-pg-4-cd5079-200_286x286.png']},
                {id: 2, stock: 2, name: 'Black / Black / Black', hex: '#333333', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/010097-nike-pg-4-cd5079-005_286x286.png']}
            ]
        },
        {id: 3, name: 'Lebron 15', type: 'Sneakers', 
            colors: [
                {id: 0, stock: 1, name: 'Black / Black / Sail / Bright Crimson', hex: '#05080E', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/nike-lebron-15-aq2363-002_286x286.png']},
                {id: 1, stock: 2, name: 'Wolf Grey / Cool Grey / Metallic Gold', hex: '#909094', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/nike-lebron-15-897648-005_286x286.png']}
            ]
        },
        {id: 4, name: 'KD 13', type: 'Sneakers', 
            colors: [
                {id: 0, stock: 1, name: 'White / Obsidian / Sport Red', hex: '#D8D8D9', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/009880-nike-kd-13-ci9948-101_286x286.png']},
                {id: 1, stock: 2, name: 'Black / White / Wolf Grey', hex: '#161516', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/010306-nike-kd-13-ci9948-004_286x286.png']},
                {id: 2, stock: 2, name: 'White / Summit White / Met Gold', hex: '#A38D6A', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/010055-nike-kd-13-da0895-102_286x286.png']},
                {id: 3, stock: 5, name: 'University Blue / University Red / White', hex: '#75ADE0', images: ['https://d3pnpe87i1fkwu.cloudfront.net/IMG/011447-nike-kd-13-dc0009-400_286x286.png']}
            ]
        }
    ]);

    const [orders, setOrders] = useState([]);

    const addItem = (e, data_order) => {
        e.preventDefault();
        setOrders([...orders, data_order]);
    }

    return (
        <div>
            <header>
                <div className="pagewrapper">
                    <h1>Nath's Sneaker Shop</h1>
                </div>
            </header>
            <Bag orders_data={orders}/>
            <ItemsList items_data={products} shop_add={addItem}/>
        </div>
    )
}

export default Shop
