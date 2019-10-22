import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
            src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg" 
            alt="car"
            name="altezza"/>
                <div className="users__block">  
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="altezza"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="altezza"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="altezza"
                        min/>
                    <User 
                        src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg"
                        alt="car"
                        name="altezza"
                        min/>
                </div> 
        </div> 

    )
}