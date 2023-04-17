import React from 'react';
import { Link } from 'react-router-dom';
const Cardtemp = (props) => {
    return <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={props.img} alt="Shoes" className="rounded-xl max-h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>Today's Max Temp: {`${props.max_temp}\u00B0C`} <br/> Min Temp : {`${props.min_temp}\u00B0C`} <br/> <br/><p className='text-4xl'>{`${props.temp}\u00B0C`}</p></p>
  </div>
</div>
    </div>;
}
export default Cardtemp;