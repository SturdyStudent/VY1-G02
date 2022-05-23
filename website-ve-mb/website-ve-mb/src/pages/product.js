import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { axiosConfig } from '../axiosConfig';

function Product() {
    const url = `${axiosConfig}getFlights`;
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