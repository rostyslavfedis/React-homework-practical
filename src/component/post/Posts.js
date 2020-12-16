import React, {Component} from 'react';

class Posts extends Component {
    state = {posts: []}

    componentDidMount() {
        const {userId} = this.props
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value})
            })
    }


    render() {
        const {posts} = this.state

        return (
            <div className={"all-posts"}>
                <span className={'tag'}>All Posts</span>
                {
                    posts.map(value => <div className={'posts'}>{value.userId}-{value.title}</div>)
                }
            </div>
        );
    }
}

export default Posts;