import React, {useState} from "react"
import PopupProductView from "./popup-product.view"

export default function PopupProductContainer(props) {
    const {
        triggerProductPopup,
        setTriggerProductPopup,
        productName,
        price,
        desc,
        handleClose
    } = props

    
    React.useEffect(() =>{
        console.log(productName)
        fetchReview(productName)
    },[triggerProductPopup])

    const [productRating, setProductRating] = useState(0)
    const [countReview, setCountReview] = useState(0)
    const fetchReview = async (productName) =>{
        const api = `http://localhost:9090/user/api/getReview?review[productName]=${productName}`;

        const response = await fetch(api, {
            method : 'GET',
            // headers: {
            //     "Content-Type": "application/json"
            // }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        
        let count = 0
        let totalRating = 0
        for (let i = 0; i <response.length; i++){
            for (let j = 0; j<response[i].review.length; j++){
                if(response[i].review[j].productName === productName){
                    console.log("My rating ", response[i].review[j].rating)
                    count+= 1
                    totalRating+=response[i].review[j].rating
                }
            }
        }
        setProductRating(totalRating)
        setCountReview(count)
    }
    
    return (triggerProductPopup) ? (
        <PopupProductView 
            triggerProductPopup={triggerProductPopup}
            setTriggerProductPopup={setTriggerProductPopup}
            productName={productName}
            price={price}
            desc={desc}
            countReview={countReview}
            productRating={productRating}
            handleClose={handleClose}
            
        />
    ) : ""
}