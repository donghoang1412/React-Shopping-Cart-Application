import React from "react"
import './display-cancelled-order.css'
import { Button } from "@material-ui/core";
export default function DisplayCancelled(props) {

    const {
        cancelledOrder,
        saveForCheckout,
        setSaveForCheckout,
        deleteFromCancelled
    } = props;

    const CLASS_PREFIX = "display-cancelled-order__"
    console.log("my cancel order", cancelledOrder)
    return (
        <div className={`${CLASS_PREFIX}root`}>
            {saveForCheckout === undefined ?
                <div>
                    {cancelledOrder.map((data, id) => {
                        return (
                            <table key={id}>
                                <tbody>
                                    <tr>
                                        <th> Product Name</th>
                                        <th> Quantity</th>
                                    </tr>
                                    {data.order.map((order, id) => {
                                        return (
                                            <tr>
                                                <td>{order.productName}</td>
                                                <td>{order.quantity}</td>
                                            </tr>
                                            
                                        )
                                    })}
                                    <tr>
                                        
                                        <p>
                                            <Button variant="contained" color="outlined" onClick={() => deleteFromCancelled(data)}>
                                                Order Again 
                                            </Button>
                                        </p>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })}
                </div>
                : <>
                    {saveForCheckout ? <p> We are saving </p> : <p> Something is wrong</p>}
                </>}

        </div>


    )
}