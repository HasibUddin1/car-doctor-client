import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([])

    const [asc, setAsc] = useState(true)

    const searchRef = useRef(null)

    const [searchText, setSearchText] = useState('')

    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearchText(searchRef.current.value)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${searchText}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc, searchText])

    return (
        <div>
            <div className="text-center mb-10 space-y-5">
                <h1 className="text-orange-600 text-3xl font-bold">Service</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                <div className="w-1/2 mx-auto">
                    <div className="form-control">
                        <div className="input-group">
                            <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => setAsc(!asc)}
                >{asc ? 'Price: Low to High' : 'Price: High to Low'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-9/12 mx-auto mb-10">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;