import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
            src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg" 
            alt="Maxon"
            name="Max"/>
                <div className="users__block">  
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="annita"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="Greddy35"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="Pushkagonka"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="Egg"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="vedroedet"
                        min/>
                </div> 
        </div> 

    )
}