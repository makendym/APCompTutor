# AP Comp Tutor

A modern coding environment for practicing AP Computer Science problems, featuring a resizable interface similar to LeetCode.

## Features

- **Resizable Interface**
  - Description panel with adjustable width
  - Code editor with adjustable height
  - Search bar for problem queries
  - Smooth drag-to-resize functionality

- **Code Editor**
  - Monaco Editor integration
  - Syntax highlighting for Java
  - Dark theme support
  - Auto-formatting

- **Problem Management**
  - Real-time problem description display
  - Method signature generation
  - Parameter and return type visualization
  - Class structure overview

## Tech Stack

- **Frontend**
  - React
  - Material-UI
  - Monaco Editor
  - React-Resizable

- **Backend**
  - Node.js
  - Express
  - Axios for API communication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/makendym/APCompTutor.git
cd apcomptutor
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Start the development servers:

```bash
# Start backend server (from backend directory)
npm start

# Start frontend server (from frontend directory)
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
apcomptutor/
├── frontend/
│   ├── src/
│   │   ├── screens/
│   │   │   └── ChatGPT/
│   │   │       ├── ChatGPT.jsx
│   │   │       ├── style.css
│   │   │       └── resizable.css
│   │   └── ...
│   └── ...
└── backend/
    ├── src/
    │   └── ...
    └── ...
```

## Usage

1. **Problem Description**
   - View the problem statement in the left panel
   - Resize the panel by dragging the handle between panels
   - Scroll through method descriptions and parameters

2. **Code Editor**
   - Write your solution in the code editor
   - Resize the editor height by dragging the handle
   - Use the provided method signatures as a starting point

3. **Search Bar**
   - Enter your prompt in the search bar
   - Submit to generate new problem descriptions
   - View the generated problem structure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Monaco Editor for the code editing experience
- Material-UI for the component library
- React-Resizable for the resizable interface 