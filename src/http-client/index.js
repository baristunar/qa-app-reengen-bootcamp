import {
    appAxios
} from '../utils/appAxios'

export default class HttpClient {
    get(url) {
        return appAxios.get(url)
    }
    post(url, data={}) {
        return appAxios.post(url, data)
    }
    put(url, data={}) {
        return appAxios.put(url, data)
    }
    patch(url, data = {}) {
        return appAxios.patch(url,data)
    }
    delete(url) {
        return appAxios.delete(url)
    }
}
