# 247 GYM Backend

Express.js backend server for the 247 GYM fitness website.

## Project Structure

```
backend/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
├── routes/                # API route handlers
│   ├── classes.js        # Classes endpoints
│   ├── trainers.js       # Trainers endpoints
│   ├── memberships.js    # Membership plans endpoints
│   └── contact.js        # Contact form endpoints
├── controllers/          # Business logic (future)
└── models/              # Data models (future)
```

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```
PORT=5000
NODE_ENV=development
```

## Running the Server

### Development (with auto-reload):
```bash
npm run dev
```

### Production:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Classes
- `GET /api/classes` - Get all classes
- `GET /api/classes/:id` - Get single class

### Trainers
- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get single trainer

### Memberships
- `GET /api/memberships` - Get all membership plans
- `GET /api/memberships/:id` - Get single membership

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

### Health Check
- `GET /api/health` - Server health status

## Features

- ✅ Express.js server
- ✅ CORS enabled for frontend communication
- ✅ Static file serving (frontend)
- ✅ RESTful API endpoints
- ✅ Error handling middleware
- ✅ SPA fallback routing

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication & authorization
- Email notifications
- Payment processing
- Admin dashboard
- User management
- Class scheduling system
