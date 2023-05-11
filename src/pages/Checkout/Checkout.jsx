import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const service = useLoaderData()

    const { title } = service

    return (
        <div>
            <h4>Book Now: {title}</h4>
            <div className="card-body">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" placeholder="Your Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" className="input input-bordered" />
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