import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    return <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl max-h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className= {`btn btn-primary ${props.dis}`} ><Link to={props.link}>Click Here</Link></button>
    </div>
  </div>
</div>
    </div>;
}
export default Card;