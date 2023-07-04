import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function product() {
   
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
    }, [])

    useEffect(()=> {
        AOS.init({duration:2000});
      },[]);
    return (
        <>
            <div className="hero" data-aos="zoom-in-up">
                <div className="card text-bg-light" >
                    <img src="https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg"  className="card-img "  alt="background"height="550px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container" data-aos="zoom-out-left"> 
                        
                        </div>
                       
                       
                    </div>
                </div>

            </div>


            <div className="container">
            <div className="col-12 mt-5 my-6">
                        <h1 className=' text-center'>Products</h1>
                        
                    </div>



                <div className="container mt-3"data-aos="fade-up">
                    <div className="row" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

                        {
                            products.map((product, key) =>
                                <div className="col-md-4 mb-4" key={key}>
                                    <Link to={`/products/${product.id}`} className='text-decoration-none'>
                                        <Card className='h-100 text-center p-4'>
                                            <Card.Img variant="top" src={product.thumbnail} height={"250px"} />
                                            <Card.Body>
                                                <Card.Title className='mb-0'>{product.title}</Card.Title>
                                                <Card.Text>{product.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
