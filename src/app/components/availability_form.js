'use client';
import { useState } from "react";

export default function AvailabilityForm() {
    const [values, setValues] = useState({});
    const [showprice, setShowPrice] = useState({show: false, price: 0});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = name === 'days' && event.target.value < 1 ? 1: event.target.value;
        
        setValues(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPrice({show: true, price: 10 * values.days})
    }
    return (
        <div className="flex flex-col justify-center items-center px-8">
            <form onSubmit={handleSubmit}>
                <fieldset className="border border-[#012641] rounded-md text-[18px] grid grid-cols-4 gap-8 p-4 my-6 mx-16">
                    <select className="form-select bg-white px-5 py-2 border border-[#012641] rounded-md" defaultValue={''} name="cars" id="cars" value={values.cars} onChange={handleChange} required>
                        <option className="opacity-75" value="" disabled hidden>Select Car</option>
                        <option value="toyota">Toyota</option>
                        <option value="suzuki">Suzuki</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input className="form-input bg-white px-5 py-2 border border-[#012641] rounded-md" type="text" name="city" value={values.city} onChange={handleChange} placeholder="Enter City" required/>
                    <input className="form-input bg-white ps-5 pe-2 py-2 border border-[#012641] rounded-md" type="number" name="days" value={values.days} onChange={handleChange} placeholder="No. of Days" required/>
                    <button className="bg-[#60B3D1] text-[18px] text-white px-2 py-2 rounded-md hover:opacity-80">Check Availability</button>
                </fieldset>
            </form>
            <div className={showprice.show?"block": "hidden"}>
                <div className="flex justify-center items-center border border-[#012641] rounded-md text-[18px] grid grid-cols-4 gap-8 p-4 my-6 mx-16">
                    <h1>Price: {showprice.price}</h1>
                </div>
            </div>
        </div>
    );
};
