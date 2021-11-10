import HttpClient from "../http-client";
import urls from './urls'

const service = new HttpClient();

export default {
    register : ({username, email, password}) => {
        const body = {
            username,
            email,
            password
        }
        return service.post(urls.user, body);
    },
    login : (email, password) => {
        return service.get(`${urls.user}?email=${email}&&password=${password}`);
    }
}