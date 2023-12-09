import React, { useState } from 'react';
import './Contact';

const Contact = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" })
    const [date, setDate] = useState(new Date())


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
        // setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);

    }


    return (
        <div className='container mt-5 '>
            <h1 className='text-center'>contact here</h1>

            <div className="row">
                <div className="col-lg-8 m-auto">
                    <form method='submit' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" name='name' className="form-control" id="" onChange={handleChange} value={data.name} placeholder="name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput2" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="" value={data.email} onChange={handleChange} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput3" className="form-label">Phone Number</label>
                            <input type="text" name='phone' value={date.toDateString()} class="form-control" id="" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="" onChange={handleChange} value={data.message} rows="3" name='message'></textarea>
                        </div>


                        <div className="mb-3">
                            <button type="button submit" class="btn btn-primary" >Submit </button>
                        </div>


                    </form>
                    <div className="mb-3">
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <p>{data.message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
