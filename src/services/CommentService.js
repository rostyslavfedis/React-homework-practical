export class CommentService {
    url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

    getAllComment() {
        return fetch(this.url)
            .then((value) => value.json())
            .then(value => {
                return value
            });

    }
}