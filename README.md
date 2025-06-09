# Personal Portfolio Website

A modern, responsive portfolio website with a sleek dark theme to showcase your skills, projects, and contact information.

## Features

- Dark theme with professional color scheme
- Responsive design that works on all devices
- Interactive navigation menu with smooth scrolling
- Animated typing effect in the hero section
- Skills section with animated progress bars
- Project filtering functionality
- Contact form
- Modern and clean UI
- Dynamic Facebook profile picture integration with caching

## Project Structure

```
Portfolio/
│
├── index.html              # Main HTML file
├── README.md               # Project documentation
│
└── src/
    ├── assets/             # Static assets
    │   └── images/         # Image files
    │
    ├── js/                 # JavaScript files
    │   └── main.js         # Main JavaScript file
    │
    └── styles/             # CSS files
        └── main.css        # Main stylesheet
```

## Getting Started

1. Clone or download this repository
2. Customize the content in `index.html` with your personal information
3. Replace the placeholder images in `src/assets/images/` with your own images
4. Modify the styling in `src/styles/main.css` if desired
5. Update the skills and projects in the HTML to reflect your own skills and projects

## Customization

### Changing Personal Information

Edit the HTML file to update:
- Your name and profession in the hero section
- About Me section content
- Skills and their proficiency levels
- Project details and links
- Contact information

### Profile Picture Configuration

The portfolio now automatically fetches your Facebook profile picture using your Facebook username. The feature:
- Dynamically loads your current Facebook profile picture
- Caches the image to improve load times and reduce API calls
- Provides a refresh button to manually update the image
- Falls back to a placeholder with your initials if the Facebook image cannot be loaded

To customize:
1. Update the Facebook username in `main.js` (currently set to 'TheShadowLord8080')
   ```javascript
   const fbUsername = 'YourFacebookUsername';
   ```
2. If you prefer to use a local image instead, you can disable this feature by removing the Facebook integration code and using the original profile picture element:
   ```html
   <img id="profilePicture" src="src/assets/images/profile.jpg" alt="Profile Picture">
   ```

### Modifying the Typing Animation

To change the text in the typing animation, edit the `textArray` in `src/js/main.js`:

```javascript
const textArray = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Freelancer'];
```

### Adding More Projects

To add more projects, duplicate the project item structure in the HTML:

```html
<div class="project-item" data-category="your-category">
    <div class="project-img">
        <img src="src/assets/images/your-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="btn btn-small">View Demo</a>
            <a href="#" class="btn btn-small">View Code</a>
        </div>
    </div>
</div>
```

## Technologies Used

- HTML5
- CSS3 (with modern features like Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome for icons

## License

This project is open source and available under the [MIT License](LICENSE).