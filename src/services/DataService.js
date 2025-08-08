/*import axios from 'axios'; */

export let mockCatalog = [

    {
        'title': 'Apple',
        'category': 'Fruit',
        'price': 2.12,
        'image': "/public/pexels-mali-102104.jpg",
        '_id': 'apple',
    },
    {
        'title': 'Dog',
        'category': 'Animal',
        'price': 25.34,
        'image': "/public/pexels-valeriya-1805164.jpg",
        '_id': 'dog',
    },
    {
        'title': 'Cowboy',
        'category': 'Hat',
        'price': 37.87,
        'image': "/public/pexels-pixabay-35185.jpg",
        '_id': 'cowboy',
    }
];

export let mockCategory = ['Fruit', 'Animal', 'Hat'];

export let mockUser = [

    {
        'username': 'jeff',
        'password': 'password',
    },
];

class DataService {
    async getCatalog(){
        return mockCatalog;
    }

    async getCategories(){
        return mockCategory;
    }

     async saveProd(product){
        /* let response = await axios.post("http://127.0.0.1:8000/api/products", product);
        return response.data; 
        https://jsonplaceholder.typicode.com/todos  */
    }

    async getUser(){
        return mockUser;
    }
}

export default new DataService();