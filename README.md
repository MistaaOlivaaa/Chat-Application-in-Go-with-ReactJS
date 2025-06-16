# Real-Time Chat Application

A modern real-time chat application built with React frontend and Go backend, featuring WebSocket communication for instant messaging.

## Features

- 💬 Real-time messaging using WebSocket
- 🎨 Modern and responsive UI
- 😊 Emoji picker support
- ⏰ Message timestamps
- ✅ Message status indicators
- 🎯 Visual distinction between sent and received messages

## Tech Stack

### Frontend
- React 18
- SASS for styling
- emoji-picker-react for emoji support
- WebSocket for real-time communication

### Backend
- Go
- Gorilla WebSocket

## Prerequisites

- Node.js (v14 or higher)
- Go (v1.16 or higher)
- npm or yarn package manager

## Cloning the Repo

```bash

git clone https://github.com/MistaaOlivaaa/Chat-Application-in-Go-with-ReactJS.git


```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Go dependencies:
```bash
go get github.com/gorilla/websocket

```

3. Run the backend server:
```bash
go run main.go
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The frontend application will start on `http://localhost:3000`

## Project Structure

```
.
├── backend/
│   ├── main.go          # Main Go server file
│   └── go.mod           # Go module file
│
└── frontend/
    ├── src/
    │   ├── components/  # React components
    │   ├── styles/      # SASS styles
    │   └── App.js       # Main React component
    └── package.json     # Frontend dependencies
```

## Development

- The backend server handles WebSocket connections on `/ws` endpoint
- Frontend connects to the WebSocket server for real-time communication
- Messages are broadcasted to all connected clients

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.i



