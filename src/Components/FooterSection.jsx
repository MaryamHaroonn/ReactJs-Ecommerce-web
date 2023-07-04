import React from 'react'
const footer={
    color: "white",
    backgroundColor: "#fd7e14",
}
const footheading={
    color:"white",
    fontFamily: 'Arial, sans-serif',
}
export default function FooterSection() {
    return (
        <div className='container-fluid p-5 mt-5' style={footer}>
            <div className="row">
        <div className="col">
        <h3 style={footheading}>Online Store</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque eligendi consectetur dignissimos mollitia a reiciendis maiores, tempora dolore reprehenderit laudantium ipsam  </p>
        </div>
        <div className="col">
        <h4 style={footheading}>Useful Link</h4>
        <p style={footheading}>Home</p>
        <p style={footheading}>Categories</p>
        <p style={footheading}>About</p>
        <p style={footheading}>Contact</p>
        </div>
        <div className="col">
        <h4 style={footheading}>Contact</h4>
        <p style={footheading}>maryumharoon@gmail.com</p>
        <p style={footheading}>Mrathore</p>
        <p style={footheading}>Maryam Haroon</p>
        <p style={footheading}>0348*******</p>
        </div>
        <div className="col">
        <h4 style={footheading}>Categories</h4>
        <p style={footheading}>men</p>
        <p style={footheading}>women</p>
        <p style={footheading}>accessories</p>
        <p style={footheading}>grocery</p>
        </div>
            </div>
            <div className="text-light text-center pt-5">All Rights Reserved</div>
            </div>
    )
}