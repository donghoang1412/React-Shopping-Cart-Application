import React, { useState } from "react"
import { FaStar } from "react-icons/fa"
import Button from '@material-ui/core'

export default function StarForReviewView(props) {
    const {
        rating,
        setRating,
        hover,
        setHover
    } = props

    

    return (

        <div>

            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        <FaStar
                            size={50}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}

        </div>

    )
}