import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
                <User 
                    src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg" 
                    alt="car"
                    name="altezza"/>        
            <Palette/>
        </div>
    )
}

export default Profile;