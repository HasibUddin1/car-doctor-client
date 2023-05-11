import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {

    const { _id,title, img, price } = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions items-center">
                    <p className="text-orange-600 font-bold">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;