

const BookingTable = ({booking}) => {

    const {date, service, price, img, customerName} = booking

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs" disabled>Pending</button>
            </th>
        </tr>
    );
};

export default BookingTable;