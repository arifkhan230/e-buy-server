# E-BUY Express Server

Welcome to the E-BUY Express server! This server provides endpoints to manage products and orders for an e-commerce platform.

## Precondition

Before running the server locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) database

### Installation

1. Clone the repository:

open your command prompt and clone the repository
git clone https://github.com/arifkhan230/next-level-assignment-2

2. Navigate to the project directory:

   ```sh
   cd your-repo-name
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a .env file in the root directory and add your environment variables.

`NODE_ENV=development
PORT=3000
DATABASE_URL=your_mongodb_connection_string`

### Running the Application

1. To run the server locally, apply the following command:

   ```sh
   npm run start:dev
   ```

# Endpoints

## Products

1. Create a New Product

- Endpoint: /api/products

- Method: POST

- Sample Request Body:

json
{
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}

2. Retrieve a List of All Products

- Endpoint: /api/products
- Method: GET
- Retrieve a Specific Product by ID

3. Endpoint: /api/products/:productId

- Method: GET
- Update Product Information

4. Endpoint: /api/products/:productId

- Method: PUT
- Sample Request Body: Same as for creating a new product

5. Delete a Product

- Endpoint: /api/products/:productId
- Method: DELETE

6. Search a Product

- Endpoint: /api/products?searchTerm=iphone
- Method: GET

## Orders

1. Create a New Order

- Endpoint: /api/orders
- Method: POST
- Request Body:

json
{
"email": "level2@programming-hero.com",
"productId": "5fd67e890b60c903cd8544a3",
"price": 999,
"quantity": 1
}

2. Retrieve All Orders

- Endpoint: /api/orders
- Method: GET

2. Retrieve Orders by User Email

- Endpoint: /api/orders?email=level2@programming-hero.com
- Method: GET
