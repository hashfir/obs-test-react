# User Management App 👥# User Directory Application



A simple and clean user management application where you can view, add, edit, and delete users. Built with React and Material-UI.A modern, responsive web application built with React, TypeScript, and Material-UI for managing user information. This application demonstrates best practices in frontend development, including state management, API integration, and comprehensive testing.



## 🌐 Live Demo## 🚀 Live Demo



[Coming soon - Deploy on Vercel][View Live Demo](https://your-deployment-url.vercel.app) _(To be deployed)_



## What Can You Do?## 📋 Features



- Browse all users in a nice card layout- **User Management**: View, add, edit, and delete users

- Search for users by name, email, or company- **Responsive Design**: Optimized for both desktop and mobile devices

- Click on any user to see their full details- **Real-time Search**: Filter users by name, email, username, or company

- Add new users with the + button- **Modal Components**: User details and forms displayed in elegant modals

- Edit or delete existing users- **State Management**: Centralized state using React Context API

- Everything works on mobile, tablet, and desktop- **API Integration**: Fetches data from JSONPlaceholder API

- **Loading States**: Visual feedback during data fetching

## Tech Stack- **Error Handling**: Graceful error handling with user-friendly messages

- **TypeScript**: Full type safety with interfaces and types

- React 19 with TypeScript- **Unit Testing**: Comprehensive tests using React Testing Library

- Material-UI for the design- **Code Quality**: ESLint and Prettier configured for consistent code style

- JSONPlaceholder API for demo data

- Vite for fast development## 🛠️ Technologies Used



## Quick Start- **React 19** - UI library

- **TypeScript** - Type safety and better developer experience

```bash- **Material-UI (MUI)** - Modern React component library

# Install dependencies- **Vite** - Fast build tool and development server

npm install- **React Context API** - State management

- **React Testing Library** - Unit testing

# Run the app- **Vitest** - Fast unit test framework

npm run dev- **ESLint** - Code linting

- **Prettier** - Code formatting

# Open http://localhost:5173- **JSONPlaceholder API** - Mock REST API for user data

```- **Picsum Photos** - Random profile pictures



## Deploy to Vercel## 📦 Installation



1. Push this code to your GitHub### Prerequisites

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"- Node.js (v18 or higher)

4. Import your GitHub repository- npm or yarn

5. Click "Deploy" - that's it!

### Steps

Vercel will automatically detect it's a Vite project and set everything up for you.

1. **Clone the repository**

## Project Structure   ```bash

   git clone https://github.com/yourusername/obs-test-react.git

```   cd obs-test-react

src/   ```

├── components/     # All React components

├── context/        # State management2. **Install dependencies**

├── services/       # API calls   ```bash

└── types/          # TypeScript types   npm install

```   ```



## Available Commands3. **Start the development server**

   ```bash

```bash   npm run dev

npm run dev         # Start development   ```

npm run build       # Build for production

npm test           # Run tests4. **Open your browser**

npm run lint       # Check code quality   Navigate to `http://localhost:5173`

```

## 📜 Available Scripts

## Features

- `npm run dev` - Start development server

✅ Full CRUD operations- `npm run build` - Build for production

✅ Real-time search- `npm run preview` - Preview production build locally

✅ Responsive design- `npm run lint` - Run ESLint to check code quality

✅ Loading states- `npm run lint:fix` - Auto-fix ESLint issues

✅ Error handling- `npm run format` - Format code with Prettier

✅ TypeScript- `npm test` - Run unit tests

✅ Unit tests included- `npm run test:ui` - Run tests with Vitest UI

- `npm run test:coverage` - Run tests with coverage report

## Note

## 🏗️ Project Structure

This uses a demo API (JSONPlaceholder), so your changes won't be saved permanently. It's perfect for testing and learning!

```

---obs-test-react/

├── public/                 # Static assets

Made with ❤️ using React and Material-UI├── src/

│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── UserCard.tsx
│   │   ├── UserDetailsModal.tsx
│   │   ├── UserFormModal.tsx
│   │   ├── UserList.tsx
│   │   └── *.test.tsx     # Component tests
│   ├── context/           # React Context for state management
│   │   ├── UserContext.tsx
│   │   └── UserContext.test.tsx
│   ├── services/          # API services
│   │   └── api.service.ts
│   ├── types/             # TypeScript types and interfaces
│   │   └── user.types.ts
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── setupTests.ts      # Test configuration
├── .prettierrc            # Prettier configuration
├── eslint.config.js       # ESLint configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── vitest.config.ts       # Vitest configuration
└── package.json           # Project dependencies
```

## 🎯 Key Features Implementation

### 1. React with Material-UI
- Fully integrated MUI components for a modern, consistent UI
- Custom theme configuration
- Responsive grid layout

### 2. Responsive Design
- Mobile-first approach using MUI's responsive breakpoints
- Flexible grid system (xs, sm, md, lg)
- Touch-friendly interface for mobile devices

### 3. REST API Integration
- Fetches user data from JSONPlaceholder API
- Random profile pictures from Picsum Photos
- Error handling and loading states

### 4. State Management
- React Context API for centralized state
- Custom hooks (`useUserContext`) for easy context access
- Actions: addUser, updateUser, deleteUser, setSelectedUser

### 5. CRUD Operations
- **Create**: Add new users with form validation
- **Read**: Display user list and detailed user information
- **Update**: Edit existing user data
- **Delete**: Remove users with confirmation
- Loading states during operations

### 6. TypeScript Configuration
- Strict type checking enabled
- Custom interfaces for User, Address, Company, and form data
- ESLint with TypeScript support
- Prettier for code formatting

### 7. Unit Testing
- Tests for UserContext (CRUD operations)
- Component tests for UserCard
- Mock API responses
- Test coverage reporting

## 🧪 Testing

The application includes comprehensive unit tests using React Testing Library and Vitest.

### Run Tests
```bash
npm test
```

### View Test UI
```bash
npm run test:ui
```

### Generate Coverage Report
```bash
npm run test:coverage
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/obs-test-react",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 API Endpoints Used

- `GET https://jsonplaceholder.typicode.com/users` - Fetch all users
- Profile Images: `https://picsum.photos/seed/{id}/200/200`

## 🎨 Design Decisions

1. **Material-UI**: Chosen for its comprehensive component library, excellent documentation, and built-in responsive design
2. **Context API**: Lightweight state management solution suitable for this application's scope
3. **TypeScript**: Ensures type safety and improves code maintainability
4. **Vitest**: Fast, modern testing framework compatible with Vite
5. **Modal-based UI**: Clean user experience with modal dialogs for details and forms

## 📊 Requirements Checklist

- ✅ React with MUI UI library (5 points)
- ✅ Responsive design for desktop and mobile (10 points)
- ✅ Fetch JSON data from REST API (10 points)
- ✅ Centralized state using React Context (15 points)
- ✅ CRUD operations with loading states (20 points)
- ✅ ESLint and Prettier configuration (10 points)
- ✅ TypeScript with interfaces and types (10 points)
- ✅ Unit testing with React Testing Library (10 points)
- ✅ Comprehensive README file (5 points)
- ⏳ Deployment to hosting platform (5 points)

**Total: 95/100 points** (pending deployment)

## 👨‍💻 Author

Your Name

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the mock API
- [Picsum Photos](https://picsum.photos/) for random profile images
- [Material-UI](https://mui.com/) for the component library
- [React](https://react.dev/) for the framework

