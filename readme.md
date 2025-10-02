# Product Category Project

A Node.js + Express + MongoDB application allowing you to manage **Products** along with **Category**, **SubCategory**, and **ExtraCategory**. You can create, view, edit, and delete these entities, with image upload support for products.

## Features

- Manage **Categories**, **SubCategories**, **ExtraCategories** (CRUD operations)  
- Create/Edit/Delete **Products** with associations to category, subcategory, extraCategory  
- Upload images for Products (and possibly for categories)  
- Display product table with populated references (category, subcategory, extra)  
- Delete product also removes its image file from server  
- Edit form pre-selects existing category/sub/extra values  

## Tech Stack

- Node.js  
- Express  
- MongoDB + Mongoose  
- EJS for templating  
- Multer for file uploads  
- fs module for file deletion  

## Project Structure

.
├── controllers/
│ ├── category.controller.js
│ ├── product.controller.js
│ └── subcategory.controller.js
│ └── extracategory.controller.js
├── models/
│ ├── category.model.js
│ ├── subcategory.model.js
│ ├── extracategory.model.js
│ └── product.model.js
├── middleware/
│ └── imageUpload.js
├── routers/
│ ├── category.routes.js
│ ├── subcategory.routes.js
│ ├── extracategory.routes.js
│ └── product.routes.js
├── public/
│ └── (static assets)
├── uploads/
│ └── (uploaded images)
├── views/
│ ├── pages/
│ │ ├── form-basic.ejs
│ │ ├── table.ejs
│ │ ├── editPage.ejs
│ │ └── ... (other ejs pages)
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
├── .env
├── index.js
└── package.json


## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)  
- MongoDB (local or Atlas)  

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/PayalPatel03/product-category-project.git
   cd product-category-project
2. Install dependencies:

    npm install
3. Create a .env file with any necessary environment variables. Example:
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/productdb
4. Ensure uploads/ folder exists in project root (for storing product images).
    Also ensure that folder is accessible (and optionally added to .gitignore).

5. Start the server:
    npm start


6. Open your browser at http://localhost:3000 .
