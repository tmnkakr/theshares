import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res =>res.json())
        .then(data =>setUsers(data))
    },[])
    return (
        <div className="container">
            <h1 className="header text-center">Learn English Courses</h1>

            <p className="paragraph text-center">Discover new work and study opportunities worldwide with a range of online English courses designed to improve your English speaking and writing skills.</p>

            <h1 className="text-center">Courses</h1>
            <h4 className="text-center">Learn new skills, pursue your interests or advance your career with our short online courses.</h4>
            <div className="row">
            <h4 className="">
                {
                    users.map(user =>
                        <div className="info-container">
                            <h5>name:{user.name}</h5>
                            <h5>phone:{user.phone}</h5>
                            <h5>website:{user.website}</h5>
                            <h5>company-name:{user.company.name}</h5>
                            </div>
                    )
                }
            </h4>
            </div>
        </div>
    );
};

export default Home;