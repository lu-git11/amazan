import axios from 'axios';
/* Get:
https://fsdi.pockethost.io/api/collections/products/records
*/

export let mockCatalog = [

    {
        'title': 'Apple',
        'category': 'Fruit',
        'price': 2.12,
        'image': "/public/pexels-mali-102104.jpg",
        '_id': 'apple',
    },
    {
        "title": "Lemon",
        "category": "Fruit",
        "price": .79,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "lemon",
    },
    {
        "title": "Berry",
        "category": "Fruit",
        "price": 5.34,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "berry",
    },
    {
        'title': 'Dog',
        'category': 'Animal',
        'price': 25.34,
        'image': "/public/pexels-valeriya-1805164.jpg",
        '_id': 'dog',
    },
    {
        "title": "Cat",
        "category": "Animal",
        "price": 32.30,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "cat",
    },
    {
        "title": "Bird",
        "category": "Animal",
        "price": 25.76,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "bird",
    },
    {
        'title': 'Cowboy',
        'category': 'Hat',
        'price': 37.87,
        'image': "/public/pexels-pixabay-35185.jpg",
        '_id': 'cowboy',
    },
    {
        "title": "Wizard",
        "category": "Hat",
        "price": 15.32,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "wizard",
    },
    {
        "title": "Helmet",
        "category": "Hat",
        "price": 200.99,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "helmet",
    },
    {
        "title": "Cowboy2",
        "category": "Hat",
        "price": 150.09,
        "image": "/public/pexels-mali-102104.jpg",
        "_id": "cowboy2",
    },
];

export let mockCategory = ['Fruit', 'Animal', 'Hat'];

export let mockUser = [

    {
        'username': 'jeff',
        'password': 'password',
    },
];

class DataService {
    SERVER_URL = 'https://fsdi.pockethost.io/api/collections';

    async getCatalog() {
        return mockCatalog;
        /* let response = await axios.get("https://jsonplaceholder.typicode.com/todos);
        return response.data; */
    }

    async getCategories() {
        return mockCategory;
    }

    async saveProd(product) {
        let response = await axios.post(`${this.SERVER_URL}/store_products/records`, product);
        return response.data; 
    }

    async getProducts() {
        let response = await axios.get(`${this.SERVER_URL}/store_products/records`);
        return response.data.items;
        }

    async saveUser(userName, password) {
        let response = await axios.post(this.SERVER_URL + '/store_users/records', {
            user_name: userName,
            password: password,
        });
        return response.data
    }

    async login(userName, password) {
        try {
            let normalized = userName.toLowerCase();
            let response = await axios.get(`${this.SERVER_URL}/store_users/records?filter=(user_name~'${normalized}')`);
            console.log(response.data);

            if (response.data.items.length < 1) {
                return null;
            }

            let user = response.data.items.find(
                u => u.user_name.toLowerCase() === normalized
            );

            if (!user) {
                return null;
            }

            if (user.password === password) {
                return user;
            } else {
                return null;
            }
        } catch (error) {
            console.error("login error", error);
            return null;
        }
        /*return mockUser; */
    }

    // this function will check if the user name is free or not
    // will return true when free
    // will return false when taken
    async checkUser(userName) {
        try {
            let normalized = userName.toLowerCase();
            let response = await axios.get(`${this.SERVER_URL}/store_users/records?filter=(user_name~'${normalized}')`);
            console.log(response.data);

            if (response.data.items.length < 1) {
                return true; // its free
            }

            let existing = response.data.items.find(
                u => u.user_name.toLowerCase() === normalized
            );

            return !existing; // its taken
        } catch (error) {
            console.error("Username taken", error);
            return null;
        }
    }

    async checkProduct(title) {
        try {
            let response = await axios.get(`${this.SERVER_URL}/store_products/records?filter=(title='${title}')`);
            console.log(response.data);

            if (response.data.items.length < 1) {
                return true; // its free
            }

            return false; // its taken
        } catch (error) {
            console.error("Product already exists", error);
            return null;
        }
    }

    async saveProduct(title, category, price, image) {
        let response = await axios.post(this.SERVER_URL + '/store_products/records', {
            title: title,
            category: category,
            price: price,
            image: image,
        });
        return response.data
    }
}

export default new DataService();