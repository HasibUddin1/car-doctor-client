import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const service = useLoaderData()

    const { title } = service

    return (
        <div>
            <h4>Book Now: {title}</h4>
        </div>
    );
};

export default Checkout;