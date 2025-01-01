# E-Commerce Project

A modern e-commerce application featuring Google OAuth for user authentication, JWT for secure session management, and a full-stack setup with React.js and Node.js.

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**: Dynamic UI with reusable components.
- **Redux**: State management for user authentication and cart functionality.
- **Google OAuth**: Simplified and secure user sign-in.
- **Axios**: For API communication with the backend.

### Backend:
- **Node.js**: Server-side runtime for API development.
- **Express.js**: Web framework for routing and middleware.
- **Google Auth Library**: Handles Google OAuth and ID token validation.
- **JWT**: Secure, token-based user sessions.
- **MongoDB**: Stores user and product data.

---

## 🚀 Features

- **Google Sign-In**: Easy user authentication.
- **JWT Authentication**: Secure session handling.
- **Product Management**: APIs for viewing and managing products.
- **Responsive UI**: Seamless experience across devices.

---

## 📦 Installation

### Prerequisites:
- Node.js and npm installed
- MongoDB instance running
- Google Cloud Console project (for OAuth setup)

## 🧪 API Endpoints

### Authentication:

- **POST** `/auth/login`: Google OAuth login.
- **POST** `/auth/logout`: Logout and clear user session.
- **GET** `/auth/profile`: Fetch the logged-in user's profile.

### Products:

- **GET** `/products`: List all products.
- **GET** `/products/:id`: Get product details.
- **POST** `/products`: Add a product (Admin only).
- **PUT** `/products/:id`: Update product details (Admin only).
- **DELETE** `/products/:id`: Delete a product (Admin only).

---

## 🌟 Future Enhancements

- **Cart Functionality**: Add to cart and checkout workflows.
- **Admin Dashboard**: Manage products and orders.
- **Payment Integration**: Implement Stripe or PayPal.

---

## 🛡️ Security

- Use HTTP-only cookies for storing JWT.
- Validate all inputs and handle errors securely.
- Protect routes using authentication middleware.

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-project.git```


---

## 📞 Support

For questions or issues, feel free to contact:

- **Email**: sudhakaranv17@gmail.com
- **GitHub Issues**: [Issue Tracker](https://github.com/SudhakaranV17/ecommerce-project/issues)


---

Enjoy coding! 🚀