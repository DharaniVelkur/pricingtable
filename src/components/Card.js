import React from "react";
import './card.css';
function Card(props) {
  return (
    <div className="container">
      <div className="card m-2 " >
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.freepluspro}
          </h5>
          <h1 className="text-center">
            ${props.money}<span>/month</span>
          </h1>
          <hr />
          <ul className="contents">
          <li><i className={props.li1}></i>{props.content1}</li>
          <li><i className={props.li1}></i>{props.content2}</li>
          <li><i className={props.li1}></i>Unlimited Public Projects</li>
          <li><i className={props.li1}></i>Community Access</li>
          <li className={props.content4}><i className={props.li5}></i>Unlimited Private Projects</li>
          <li className={props.content4}><i className={props.li6}></i>Dedicated Phone Support</li>
          <li className={props.content4}><i className={props.li7}></i>{props.content3}</li>
          <li className={props.content5}><i className={props.li8}></i>Monthly Status Reports</li>
          </ul>
          
          <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase cursor-pointer">Buy Now</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
