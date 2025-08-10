

---

````markdown
# 🍽️ Food Donation Backend

This is the backend API for the **Food Donation Platform**, built using **Node.js**, **Express**, **MongoDB**, and **Firebase SDK**.  
It provides endpoints to manage food donations and requests, allowing users to donate food, request food, and manage their own contributions.

---

## 📌 Features

- **User Authentication** using Firebase Admin SDK  
- **Food Management**
  - Add new food donations
  - Update existing food items
  - Delete food donations
  - Fetch all available foods
- **Request Management**
  - Request available food
  - View and manage food requests
- **MongoDB Atlas** for storing all data securely

---

## 🗄️ Database Structure

### **1️⃣ Food Collection (`foods`)**
```json
{
  "_id": "ObjectId",
  "name": "Rice and Curry",
  "quantity": "5 plates",
  "expiryDate": "2025-08-15",
  "location": "Dhaka, Bangladesh",
  "donorEmail": "donor@example.com",
  "image": "https://example.com/photo.jpg",
  "status": "available"
}
````

### **2️⃣ Request Collection (`requests`)**

```json
{
  "_id": "ObjectId",
  "foodId": "ObjectId of donated food",
  "requesterEmail": "requester@example.com",
  "message": "We are an orphanage in need of meals for 20 children",
  "status": "pending"
}
```

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Authentication:** Firebase Admin SDK
* **Environment Management:** dotenv

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/sk-nahid/food-loop-server.git
cd food-loop-server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY="your_firebase_private_key"
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

### 4️⃣ Run the server

```bash
npm start
```

---

## 📡 API Endpoints

### **Food Routes**

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/foods`     | Get all food donations  |
| POST   | `/foods`     | Add a new food donation |
| PUT    | `/foods/:id` | Update food by ID       |
| DELETE | `/foods/:id` | Delete food by ID       |

### **Request Routes**

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | `/requests`     | Get all food requests   |
| POST   | `/requests`     | Request a food donation |
| PUT    | `/requests/:id` | Update request status   |
| DELETE | `/requests/:id` | Delete request by ID    |



## 🔐 Authentication

This backend uses **Firebase Admin SDK** for authentication.
To access protected routes:

1. The client must obtain a Firebase ID token after logging in.
2. Send the token in the `Authorization` header as:

   ```
   Authorization: Bearer <your_firebase_token>
   ```
3. The backend verifies the token before allowing access.

---

## 📄 Example Request

**POST /foods**

```json
{
  "name": "Vegetable Biryani",
  "quantity": "10 plates",
  "expiryDate": "2025-08-20",
  "location": "Chittagong, Bangladesh",
  "donorEmail": "donor@example.com",
  "image": "https://example.com/biryani.jpg",
  "status": "available"
}
```

**POST /requests**

```json
{
  "foodId": "64d4c4f2e8f0a81234567890",
  "requesterEmail": "requester@example.com",
  "message": "Our shelter needs food for 15 people tonight",
  "status": "pending"
}
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Developed by **\[Your Name]**

```

---

If you want, I can also add a **Postman API collection** for this backend so developers can test the routes instantly without manual setup.  
That would make your project even more professional.
```
