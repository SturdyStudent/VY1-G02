import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Product() {
    const url = "http://localhost:3001/api/partner/getFlights";
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(response => {
            setProduct(response.data);
        })
    }, [url])
  return (
    <div>product</div>
  )
}

export default Product