#### Architecture & Technology Stack
This Rick and Morty Character Explorer showcases modern React development patterns and best practices:

- **Framework**: React 18+ with functional components and hooks
- **State Management**: Centralized state pattern using useState and useEffect hooks
- **API Integration**: REST API consumption from the official Rick and Morty API
- **Styling**: Bootstrap 5 for responsive design with custom SCSS for enhanced styling
- **Build System**: Create React App for streamlined development and production builds
- **Component Architecture**: Modular component design with clear separation of concerns

#### Key Features
- **Centralized State Management**: All application state managed in `App.js` with props drilling pattern
- **Real-time Search**: Dynamic character filtering with API integration
- **Smart Pagination**: Circular navigation with intelligent page display
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system
- **Component-Based Architecture**: Six distinct components each with specific responsibilities
- **Error Handling**: Robust error management for API calls

#### Component Architecture
1. **App.js** - Main container managing state (`list`, `page`, `totalPage`, `search`) and API integration
2. **Header.js** - Static title component with custom SCSS styling
3. **Hero.js** - Search input component handling search functionality
4. **Nav.js** - Pagination component with Previous/Next and numbered page buttons
5. **List.js** - Grid container for character cards using Bootstrap layout
6. **Card.js** - Individual character display with character details

#### API Integration Pattern
- **Endpoint**: Rick and Morty API (`https://rickandmortyapi.com/api/character/`)
- **Parameters**: Supports pagination (`?page=${page}`) and search (`?name=${search}`)
- **Response Structure**: `{ results: [], info: { pages: number } }`
- **State Dependencies**: useEffect with `[page, search]` dependency array

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 14+ 
- npm or yarn
- Modern web browser

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rick-morty-character-explorer.git
   cd rick-morty-character-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens the app at http://localhost:3000 with live reloading.

### Available Scripts

```bash
npm start       # Start development server
npm test        # Launch test runner in interactive watch mode
npm run build   # Create optimized production build
npm run eject   # Eject from Create React App (one-way operation)
```

---

## 🗂️ Project Structure

```
/
├── public/
│   ├── index.html          # Main HTML template
│   └── ...                 # Static assets
├── src/
│   ├── components/
│   │   ├── App.js          # Main application container
│   │   ├── Header.js       # Static title header
│   │   ├── Hero.js         # Search input component
│   │   ├── Nav.js          # Pagination component
│   │   ├── List.js         # Character grid container
│   │   └── Card.js         # Individual character card
│   ├── styles/
│   │   ├── index.scss      # Main Bootstrap imports
│   │   └── style.scss      # Custom component styles
│   └── index.js            # Application entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 💡 Usage Examples

### Basic Component Integration
```jsx
// App.js - Main state management pattern
import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
        );
        const data = await response.json();
        setList(data.results);
        setTotalPage(data.info.pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [page, search]);

  return (
    <div>
      <Header />
      <Hero onHandleSearch={setSearch} />
      <Nav 
        actualPage={page} 
        totalPage={totalPage}
        onHandleNext={() => setPage(p => p < totalPage ? p + 1 : 1)}
        onHandlePrev={() => setPage(p => p > 1 ? p - 1 : totalPage)}
      />
      <List res={list} />
    </div>
  );
}
```

### Search Component Implementation
```jsx
// Hero.js - Search functionality
import React from 'react';

const Hero = ({ onHandleSearch }) => {
  return (
    <section className="hero d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search characters..."
              onChange={(e) => onHandleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### Character Card Component
```jsx
// Card.js - Individual character display
import React from 'react';

const Card = ({ character }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
      <div className="card h-100" style={{ width: '18rem' }}>
        <img 
          src={character.image} 
          className="card-img-top" 
          alt={character.name} 
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <strong>Status:</strong> {character.status}<br/>
            <strong>Species:</strong> {character.species}<br/>
            <strong>Origin:</strong> {character.origin.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
```

---

## 🎨 Styling System

### Bootstrap 5 + Custom SCSS
- **Main Bootstrap Import**: `src/index.scss` imports Bootstrap for global styles
- **Custom Styles**: `src/style.scss` for component-specific styling
- **Responsive Grid**: Bootstrap's grid system for mobile-first design
- **Component Classes**: Bootstrap utilities for layout and spacing

### Key Style Patterns
```scss
// Custom dimensions in style.scss
.header {
  height: 15vh;
}

.hero {
  height: 35vh;
}

.card {
  width: 18rem;
}
```

### Bootstrap Integration
```jsx
// Responsive grid classes
<div className="col-12 col-sm-6 col-md-6 col-lg-4">
  
// Bootstrap utilities
<div className="d-flex justify-content-center align-items-center">
  
// Bootstrap components
<div className="card h-100">
```

---

## 📱 Features

- ✅ Real-time character search
- ✅ Smooth pagination with circular navigation
- ✅ Responsive card-based layout
- ✅ Character details display
- ✅ Mobile-first responsive design
- ✅ Bootstrap 5 styling system
- ✅ Centralized state management
- ✅ Error handling for API calls
- ✅ Fast development with live reloading

---

## 🌐 API Reference

### Rick and Morty API
- **Base URL**: `https://rickandmortyapi.com/api/character/`
- **No Authentication Required**: Free and open API
- **Rate Limiting**: No rate limits for reasonable use

### Available Endpoints
```bash
# Get all characters (paginated)
GET /character/?page=1

# Search characters by name
GET /character/?name=rick

# Combined search and pagination
GET /character/?page=2&name=morty
```

### Response Structure
```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
  ]
}
```

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized static files ready for deployment.

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package for easy deployment
- **Traditional Hosting**: Upload `build` folder contents to your web server

### Environment Setup
No environment variables required - the app uses the public Rick and Morty API.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing component architecture pattern
- Maintain the centralized state management approach
- Use Bootstrap classes for styling, custom SCSS only when needed
- Add appropriate error handling for new API calls
- Write clear, descriptive commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- **Issues**: Please use the GitHub issues tab for bug reports and feature requests
- **API Documentation**: Check the [Rick and Morty API docs](https://rickandmortyapi.com/documentation)
- **React Documentation**: Visit the [React docs](https://reactjs.org/docs) for React-specific questions
- **Bootstrap**: Refer to [Bootstrap 5 documentation](https://getbootstrap.com/docs/5.0/) for styling help

---

## 🙏 Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com) for providing the amazing free API
- [Create React App](https://create-react-app.dev) team for the development setup
- [Bootstrap](https://getbootstrap.com) team for the responsive framework
- [React](https://reactjs.org) team for the incredible library
- Adult Swim and Justin Roiland for creating the Rick and Morty universe

---

**Made with ❤️ for Rick and Morty fans and React developers**

*"Wubba Lubba Dub Dub!" - Rick Sanchez*