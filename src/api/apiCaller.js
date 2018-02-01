import axios from 'axios';


export default function callAPI (endpoint, method ='GET', body){
    return axios({
        method : method,
        url : 'https://jsonplaceholder.typicode.com/posts',
        data : body
    }).catch(err => {
        console.log(err);
    })
}