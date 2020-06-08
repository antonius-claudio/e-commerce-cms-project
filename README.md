# e-commerce-cms
Content Management System for E-Commerce
---

## Demo : https://e-commerce-cms-69dc9.web.app/

## POST /login
> login as administrator / user

**Request Header**
```
no needed
```

**Request Body**
```
{
    "email": "<email user>",
    "password": "<password user>"
}
```

**Response (200 - Ok)**
```
{
  "access_token": "<access token user>",
  "id": <id user>,
  "email": "<email user>",
  "role": "<role user>"
}
```

**Response (400 - Bad Request)~Validation Error**
```
{
  "message": [
    "Email is required!",
    "password is required!"
  ]
}
```

**Response (500 - Internal Server Error)~Failed Save to Database**
```
{
  "message": [
    "Internal server error"
  ]
}
```
---

## GET /products
> administrator / user can get all products if they have access token

**Request Header**
```
{
    access_token: <your access token>
}
```

**Request Body**
```
no needed
```

**Response (200 - Ok)**
```
{
    "id": <id product>,
    "name": "<name product>",
    "image_url": "<url product>",
    "price": <price product>,
    "stock": <stock product>,
    "createdAt": "2020-04-15T16:01:50.807Z",
    "updatedAt": "2020-04-15T16:23:17.010Z"
},{},...
```

**Response (401 - Not Authorized)~Don't have access token**
```
{
  "message": [
    "Don't have access"
  ]
}
```

**Response (500 - Internal Server Error)~Failed Read to Database**
```
{
  "message": [
    "Internal server error"
  ]
}
```
---

## POST /products
> Only role 'Administrator' can create product

**Request Header**
```
{
    access_token: <access token user>
}
```

**Request Body**
```
{
  "name": "<name product>",
  "image_url": "<image_url product>",
  "price": "<price product>",
  "stock": "<stock product>",
}
```

**Response (201 - Created)**~ as role 'Administrator'
```
{
  "id": <id product>,
  "name": "<name product>",
  "image_url": "<image_url product>",
  "price": <price product>,
  "stock": <stock product>,
  "updatedAt": "2020-04-15T17:38:25.406Z",
  "createdAt": "2020-04-15T17:38:25.406Z"
}
```

**Response (401 - Not Authorized)**~ as role 'User'
```
{
  "message": [
    "You'r not Admin"
  ]
}
```

**Response (401 - Not Authorized)**~ don't have access token
```
{
  "message": [
    "Don't have access"
  ]
}
```

**Response (400 - Bad Request)~validation error**
```
{
  "message": [
    "Name is required!",
    "Image is required!",
    "Price is required!",
    "Stock is required!"
  ]
}
```

**Response (500 - Internal Server Error)~Failed Write to Database**
```
{
  "message": [
    "Internal server error"
  ]
}
```
---

## PUT /products
> Only role 'Administrator' can update product

**Request Header**
```
{
    access_token: <access token user>
}
```

**Request Params**
```
/:id
```

**Request Body**
```
{
  "name": "<name product>",
  "image_url": "<image_url product>",
  "price": "<price product>",
  "stock": "<stock product>",
}
```

**Response (200 - Ok)**~ as role 'Administrator'
```
{
  "id": <id product>,
  "name": "<name product>",
  "image_url": "<image_url product>",
  "price": <price product>,
  "stock": <stock product>,
  "updatedAt": "2020-04-15T17:38:25.406Z",
  "createdAt": "2020-04-15T17:38:25.406Z"
}
```

**Response (401 - Not Authorized)**~ as role 'User'
```
{
  "message": [
    "You'r not Admin"
  ]
}
```

**Response (401 - Not Authorized)**~ don't have access token
```
{
  "message": [
    "Don't have access"
  ]
}
```

**Response (400 - Bad Request)~validation error**
```
{
  "message": [
    "Name is required!",
    "Image is required!",
    "Price is required!",
    "Stock is required!"
  ]
}
```

**Response (404 - Not Found)~params error**
```
{
  "message": [
    "Product not found!"
  ]
}
```

**Response (500 - Internal Server Error)~Failed Write to Database**
```
{
  "message": [
    "Internal server error"
  ]
}
```
---

## Delete /products
> Only role 'Administrator' can delete product

**Request Header**
```
{
    access_token: <access token user>
}
```

**Request Params**
```
/:id
```

**Request Body**
```
no needed
```

**Response (200 - Ok)**~ as role 'Administrator'
```
{
  "message": "Success Delete"
}
```

**Response (401 - Not Authorized)**~ as role 'User'
```
{
  "message": [
    "You'r not Admin"
  ]
}
```

**Response (401 - Not Authorized)**~ don't have access token
```
{
  "message": [
    "Don't have access"
  ]
}
```

**Response (404 - Not Found)~params error**
```
{
  "message": [
    "Product not found!"
  ]
}
```

**Response (500 - Internal Server Error)~Failed Write to Database**
```
{
  "message": [
    "Internal server error"
  ]
}
```
---
