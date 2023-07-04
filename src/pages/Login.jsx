import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default function Login() {
  
        
  return (
    <>
    <div className="container  mt-3">
      <section data-aos="fade-down" className='d-flex justify-content-between'>
        <div className="left_data mt-3" style={{width:"100%"}}>
        <h3 className='text-center col-lg-6'>Log In</h3>
        <Form>
     
      <Form.Group className="mt-3 col-lg-6" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
      
      <Form.Group className="mt-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className="col-lg-6 mt-3  "style={{background:"rgb(214 51 132)"}}  type="submit">
        Submit
      </Button>
    </Form>
    
</div>
        <div className="right_data  ">
          <div className="download_img " style={{width:"100%"}}>
            <img  src="https://www.videojeeves.com/assets_website/images/industry/ecommerce-videos/2.jpg" style={{maxWidth:300}} alt="" />

          </div>
        </div>
        </section>
        </div>
      </>

  )
}

  
