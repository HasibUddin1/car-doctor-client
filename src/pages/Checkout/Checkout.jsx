import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Checkout = () => {

    const service = useLoaderData()

    const {user} = useContext(AuthContext)

    const { _id,title, price } = service

    const handleBooking = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value

        const order = {
            customerName : name,
            email,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(order)
    }

    return (
        <div>
            <h4>Book Now: {title}</h4>
            <div className="card-body">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" name="amount" defaultValue={price} placeholder="Your Email" className="input input-bordered" readOnly />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-600 border-none" type="submit" value="Confirm Order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;