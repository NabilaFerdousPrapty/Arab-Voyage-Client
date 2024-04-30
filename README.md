# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Arab Voyage
## Live Link:https://arabvoyage-4a1a4.web.app/
#### Middle East  tourism-focused website

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Dependencies](#dependencies)
4. [Folder Structure](#folder-stracture)
5. [Installation and Setup](#installation-and-setup)
6. [Contributing](#contributing)
7. [License](#license)
8. [About the Author](#about-the-author)


## Introduction
Arab Voyage is a tourism-focused website that offers a unique exploration of the Middle East countries, including Jordan, Saudi Arabia, United Arab Emirates, Iran, Qatar, and Kuwait. Our platform aims to provide travelers with curated information about tourist spots, cultural attractions, and hidden gems across the region.

## Features
- Responsive Design
- Private Routes
- Environment Variables
- Navbar with Login/Register functionality
- Authentication with email/password and social login options
- Registration and Login pages
- Toast/Sweet Alert for notifications
- Homepage with sections such as Banner/Slider, Tourists Spots, Countries, and more
- Add Tourists Spot, My List, Update, and Delete functionalities
- Footer with essential information and social media links
- 404 Page for handling invalid URLs
- Loading Spinner for data loading state
- Dark/Light Theme Toggle

## Dependencies
- React-tooltip
- React-simple-typewriter
- React swiper slider
- React icons
## Folder Structure
```
ArabVoyage/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   │   └── Banner.js
│   │   │
│   │   ├── FAQ/
│   │   │   └── FAQ.js
│   │   │
│   │   ├── Features/
│   │   │   └── Feature.js
│   │   │
│   │   ├── Sponsors/
│   │   │   └── Sponsors.js
│   │   │
│   │   ├── TouristSpots/
│   │   │   └── TouristSpots.js
│   │   │
│   │   ├── Countries/
│   │   │   └── Countries.js
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.js
│   │   │
│   │   ├── Login/
│   │   │   └── Login.js
│   │   │
│   │   ├── Register/
│   │   │   └── Register.js
│   │   │
│   │   ├── AddTouristSpot/
│   │   │   └── AddTouristSpot.js
│   │   │
│   │   ├── MyList/
│   │   │   └── MyList.js
│   │   │
│   │   ├── Update/
│   │   │   └── Update.js
│   │   │
│   │   └── ViewDetails/
│   │       └── ViewDetails.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.js
│   │   │
│   │   ├── NotFound/
│   │   │   └── NotFound.js
│   │   │
│   │   ├── AllTouristSpots/
│   │   │   └── AllTouristSpots.js
│   │   │
│   │   ├── AddTouristSpot/
│   │   │   └── AddTouristSpot.js
│   │   │
│   │   ├── Login/
│   │   │   └── Login.js
│   │   │
│   │   ├── Register/
│   │   │   └── Register.js
│   │   │
│   │   ├── Update/
│   │   │   └── Update.js
│   │   │
│   │   ├── MyList/
│   │   │   └── MyList.js
│   │   │
│   │   └── ViewDetails/
│   │       └── ViewDetails.js
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

```

## Installation and Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for Firebase and MongoDB credentials.
4. Run the application using `npm start`.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.

## License
This project is licensed under the [MIT License](LICENSE).

## About the Author
Arab Voyage was developed by [Your Name]. For inquiries, please contact [nabilaferdousprapty@gmail.com].

