import React, { useState } from 'react'

const StarRating = (props) => {

    let limit = props.limit || 5
    const [rating, setRating] = useState(props.rating || 2)

    const handleClick = (e) => {
        setRating(e.target.getAttribute('data'))
    }

    return (
        <div>
            {[...new Array(limit).keys()].map((i) => (
                <span data={i+1} onClick={handleClick} key={i} className={i < rating ? "star rated" : "star"}></span>
            ))}
        </div>
    )
}

export default StarRating