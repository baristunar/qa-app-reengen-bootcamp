import HttpClient from "../http-client";
import urls from './urls'

const service = new HttpClient();

export default {
    getCategories: () => {
        return service.get(urls.categories);
    },
    getQuestions: (isSelected) => {
        "/questions?categoryId=34"
        if (selectedCategories) {
            const ids = selectedCategories.filter(c => c.isSelected)
                .map(c => `categoryId=${c.id}`)
                .join("&");
            url = `${urls.categories}?${ids}`
            console.log('url :>> ', url);
        }

        return service.get(urls.questions);
    },
    postQuestion: (body) => {
        return service.post(urls.questions, body);
    },
}