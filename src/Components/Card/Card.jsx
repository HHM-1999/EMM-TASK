import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Card = ({ cat }) => {

return (
        <>
            <div className="container">
                <div className="row">
                    {cat.map((news) => {
                        
                        return (
                                <div className="col-lg-4 pb-3">
                                    <div className="card" key={news.ContentID}>
                                        <div className="NewsList">
                                            <Link className='card-details' to={news.ContentID} >
                                                <div className="card-body">
                                                    <img src={news.ImageThumbPath} className="card-img-top img-fluid" alt="" />
                                                    <h1 className="Title">{news.CategoryName}</h1>
                                                    <p>{news.ContentBrief }</p>
                                                    <p></p>

                                                </div>

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
               



            </div>




        </>
    );
};

export default Card;
// import React from 'react';


// function setCat(data){
//     <h1>{data.ContentID}</h1>
// }
//  export default setCat;









