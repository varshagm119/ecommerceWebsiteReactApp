import React, { useState } from "react";
import { Badge, Button, Table } from "react-bootstrap";

const CartItems = () => {

        const [data, setData] = useState([

            {
            id:1,
            title: 'Colors',
            
            price: 100,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            
            quantity: 2,
            
            },
            
            {
            id:2,
            title: 'Black and white Colors',
            
            price: 50,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            
            quantity: 3,
            
            },
            
            {
            id:3,
            title: 'Yellow and Black Colors',
            
            price: 70,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            
            quantity: 1,
            
            }
            
            ])

        const removeHandler = id => {
            const updatedItems = data.filter((row) => row.id!==id);
            setData(updatedItems);
        }

    return(
        <div>
            <Badge style={{fontSize: 20 , fontWeight: 'bold'}} bg="light" text="dark">Cart Items</Badge>
            <Table  size="xl">
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(e => {
                        return(
                        <tr key={e.id}>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity}</td> 
                            <Button onClick={() => {removeHandler(e.id)}}>Remove</Button>
                        </tr>)
                    })}
                </tbody>

               
            </Table>
        </div>
    )
};

export default CartItems;