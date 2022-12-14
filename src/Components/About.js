import React from 'react';

const About = () => {

    return (
        <>
            <div className="container">
                <h1 class="h1 text-center">About Page</h1>
                <p>
                    It's a crud application based on react js.
                    Probably I had used some react js hooks
                    like useState, useEffect and react-router-dom features like
                    Link, useNavigate, useParams.
                    Also used json-server and axios for different purpose.
                    Like json-server is used to connect created database in db.json file with our crud app.
                    axios is basically used to fetch those data present in database db.json file with the help of
                    async and await function.
                </p>
            </div>
        </>

    );
};


export default About;