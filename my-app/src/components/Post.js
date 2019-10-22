import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://a.d-cd.net/5yAAAgBzDuA-960.jpg" 
                    alt="car"
                    name="altezza"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Max
                </div>
                <div className="post__descr">
                Новые фоточки cо сходки
                </div>
            </div>
        )
    }
}