import React, {Component} from 'react';
import Post from './Post';
export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://media2.24aul.ru/imgs/5916e6b373fce81c1041c330/" alt="first" />

                <Post src="https://lowdaily.ru/wp-content/uploads/2015/01/Mg_1328-2toyota-Altezza.jpg" alt="second" />
        </div>
        )
    }
}