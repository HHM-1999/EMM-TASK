import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function OtherNews() {
    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(3)

    useEffect(() => {
        fetch('https://backoffice.daily-bangladesh.com/api/json/file/generateCategory1.json' )
            .then(res => res.json())
            .then(data => setItems(data.data));
            //  console.log(data)
    }, [])


    const LoadMore = () => {
        setLimit((prevValue) => prevValue + 3)
    }


    return (

        <div className='mt-5'>
            <div className="container">
                <div className="row">
                    {items.slice(0,limit).map((news, i) => {

                        return (
                            <div className="col-lg-4 pb-3">
                                <div className="card" key={news.ContentID}>
                                    <div className="NewsList">
                                        <Link className='card-details' to={news.ContentID} >
                                            <div className="card-body">
                                                <img src={news.ImageThumbPath} className="card-img-top img-fluid" alt="" />
                                                <h1 className="Title">{news.CategoryName}</h1>
                                                <p>{news.ContentBrief}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <button className="btn btn-primary mb-3 d-flex m-auto" onClick={LoadMore}>Read More</button>



            </div>
        </div>

    );
}

export default OtherNews;