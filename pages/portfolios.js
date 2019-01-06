import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Portfolio from './portfolio';
import {Link} from '../routes'

class portfolios extends React.Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = response.data
        } catch (err) {
            console.error(err)
        }

        return { posts: posts.splice(0, 10) }
    }

    renderPosts(posts){
        return posts.map((post,index) =>{
            return (
                <li key={index}>
                <Link route={`/portfolio/${post.id}`}>
                    <a>{post.title}</a>
                </Link>
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props
        console.log(this.props)
        return (
            <BaseLayout>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default portfolios;