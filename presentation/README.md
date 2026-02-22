# Presentation Website

A modern, interactive presentation website built with HTML, CSS, and JavaScript, featuring a portfolio-style hero section.

## Features

- **Hero Slide**: Portfolio-style first slide with:
  - Profile photo
  - Code snippet window
  - QR code for easy website access
  - Animated particle background

- **Navigation**:
  - Arrow keys (←/→ or ↑/↓) to navigate between slides
  - Space bar for next slide
  - Home/End keys for first/last slide
  - Click navigation buttons
  - Slide indicators at the bottom
  - Touch/swipe support for mobile devices

- **UI Elements**:
  - Progress bar showing current position
  - Slide counter
  - Fullscreen toggle
  - Smooth transitions and animations

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Structure

```
bizay_presentation/
├── index.html          # Main HTML file
├── assets/
│   └── profile.jpg     # Profile photo
├── css/
│   └── style.css       # All styling
└── js/
    └── presentation.js # Presentation logic
```

## Customization

### Adding New Slides

1. Add a new slide section in `index.html`:
```html
<section class="slide" data-slide="6">
    <div class="slide-content">
        <div class="slide-header">
            <h2 class="slide-title">Your Title</h2>
            <p class="slide-subtitle">Your Subtitle</p>
        </div>
        <div class="slide-body">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

2. Add a new indicator button:
```html
<button class="indicator" data-slide="6"></button>
```

### Updating Content

- **Profile Photo**: Replace `assets/profile.jpg` with your photo
- **Code Window**: Edit the code snippet in the first slide
- **Website Link**: Update the link in the "Visit My Website" button
- **QR Code**: The QR code is generated automatically from https://bizay.jp

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Particles.js for animated background
- QR Code API for generating QR codes

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Personal project by Bijay Basnet
