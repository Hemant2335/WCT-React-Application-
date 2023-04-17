import React from 'react';
import { Link } from 'react-router-dom';
const Cardwind = (props) => {
    return <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl max-h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>It describes how fast the air is moving past a certain point. Today the Wind Speed Will be <br/><br/><p className='text-4xl'>{`${props.wind} km/hr`}</p></p>
  </div>
</div>
    </div>;
}
export default Cardwind;