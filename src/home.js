import React from 'react';
import { Link } from 'react-router-dom';

function Home(props){
    const { location:{state} } = props;
    console.log("location", location);
    return (
        <div className="container">
            home
            {
                (state && state.isLogin) ? <div>Welcome</div> :
                <div>
                <Link to="/login"> login </Link>
                </div>
            }

            {/* <Link to="/detail" onClick={ }> Go To Detail Page</Link> */}
            <button onClick={
                ()=>{
                    fetch('http://localhost:3015/data')
                    .then(res=>res.json())
                    .then(data=>{
                        console.log("datat",data)
                    })
                }
            }> fecth</button>
            
        </div>
    )
}

export default Home;