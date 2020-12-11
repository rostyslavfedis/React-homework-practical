export default class PostServise {
    url = 'https://jsonplaceholder.typicode.com/posts';

    async users() {
        return await fetch(this.url)
            .then(value => value.json());
    }

    async user(id) {
        return await fetch(this.url + `/${id}`)
            .then(value => value.json());
    }


};