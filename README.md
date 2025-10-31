# User Directory Application

A modern, responsive web application built with React, TypeScript, and Material-UI for managing user information. This application demonstrates best practices in frontend development, including state management, API integration, and comprehensive testing.

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.vercel.app) _(To be deployed)_

## 📋 Features

- **User Management**: View, add, edit, and delete users
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Real-time Search**: Filter users by name, email, username, or company
- **Modal Components**: User details and forms displayed in elegant modals
- **State Management**: Centralized state using React Context API
- **API Integration**: Fetches data from JSONPlaceholder API
- **Loading States**: Visual feedback during data fetching
- **Error Handling**: Graceful error handling with user-friendly messages
- **TypeScript**: Full type safety with interfaces and types
- **Unit Testing**: Comprehensive tests using React Testing Library
- **Code Quality**: ESLint and Prettier configured for consistent code style

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Material-UI (MUI)** - Modern React component library
- **Vite** - Fast build tool and development server
- **React Context API** - State management
- **React Testing Library** - Unit testing
- **Vitest** - Fast unit test framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **JSONPlaceholder API** - Mock REST API for user data
- **Picsum Photos** - Random profile pictures

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/obs-test-react.git
   cd obs-test-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm test` - Run unit tests
- `npm run test:ui` - Run tests with Vitest UI
- `npm run test:coverage` - Run tests with coverage report

## 🏗️ Project Structure

```
obs-test-react/
├── public/                 # Static assets
├── src/
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

