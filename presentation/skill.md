# Presentation Website - Technical Documentation

## Project Overview

This is a professional presentation website for Bijay Basnet, showcasing his journey as a Software Engineer from Nepal to Japan. The presentation is built as a single-page web application with a slide-based navigation system, optimized for HD displays (1920x1080) with full responsive support.

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Advanced layouts using Grid and Flexbox
- **Vanilla JavaScript**: ES6+ with class-based architecture
- **Particles.js**: Animated background effects
- **Google Fonts**: Noto Sans JP for Japanese-friendly typography

## Project Structure

```
bizay_presentation/
├── index.html              # Main HTML file with all slides
├── css/
│   └── style.css          # All styles including responsive design
├── js/
│   └── presentation.js    # Presentation controller and navigation
├── assets/
│   ├── hero.jpg           # Profile image for title slide
│   └── profile.jpg        # Profile photo (optional)
└── skill.md               # This documentation file
```

## Presentation Structure

### Slides Overview

The presentation consists of 8 slides:

1. **Title Slide**: Split layout with hero image and presentation title
2. **About Me**: Personal introduction with code window and social links
3. **My Journey**: Timeline from Nepal to Japan with career milestones
4. **Working as an Engineer in Japan**: Tech hiring landscape and job security
5. **AI Adoption Comparison**: Western vs Japanese company approaches
6. **Challenges & Requirements**: Key challenges and competitive factors
7. **Building Connections in Japan**: Community involvement and networking
8. **Thank You**: Final slide with QR code and contact information

### Detailed Slide Content

#### Slide 1: Title Slide
- **Layout**: Two-column grid (image + content)
- **Purpose**: Introduce presentation topic
- **Key Elements**: Hero image, main title, subtitle, presenter info
- **Content**: "The Reality of Working as an Engineer in Japan"

#### Slide 2: About Me
- **Layout**: Two-column grid (text + code window)
- **Purpose**: Personal introduction
- **Key Elements**:
  - Profile photo (optional)
  - Role and company information
  - Code snippet showing personal data as JavaScript object
  - Social media links (LinkedIn, Facebook, GitHub, Twitter)
  - QR code linking to personal website (bizay.jp)

#### Slide 3: My Journey
- **Layout**: Horizontal timeline with cards
- **Purpose**: Career progression visualization
- **Key Elements**:
  - Step 1: Started career in Nepal (YoungInnovations, 2017-2021)
  - Step 2: Japanese Language training (TERAKOYA Academia, Feb-Jun 2021)
  - Step 3: Moved to Japan (2022 - highlighted)
  - Step 4: Working in Japan (RITAWORKS → Rakuten Group)
- **Special Features**: Active/highlight states, responsive arrow connectors

#### Slide 4: Working as an Engineer in Japan
- **Layout**: Three-column grid
- **Purpose**: Overview of Japanese tech job market
- **Key Elements**:
  - Current tech hiring landscape
  - Long-term employment philosophy
  - Job security & stability (highlighted card)

#### Slide 5: AI Adoption Comparison
- **Layout**: Two-column comparison with VS divider
- **Purpose**: Compare Western and Japanese approaches to AI adoption
- **Key Elements**:
  - Western side: "Move Fast & Iterate" (3-step timeline)
  - Japanese side: "Plan Thoroughly, Execute Perfectly" (3-step timeline)
  - Approach characteristics for each
  - Color-coded borders (green for Western, red for Japanese)

#### Slide 6: Challenges & Requirements
- **Layout**: Two-column grid
- **Purpose**: Outline challenges and success factors
- **Key Elements**:
  - Left: 5 key challenges (numbered list)
  - Right: 5 competitive factors (icon-based list)
  - Color-coded headers (red for challenges, green for requirements)

#### Slide 7: Building Connections in Japan
- **Layout**: Two-column grid + CTA footer
- **Purpose**: Highlight community involvement
- **Key Elements**:
  - Left: "Why Community Matters" (4 points with icons)
  - Right: "My Community Involvement" (2 involvement cards):
    - **PHPxTKY & Laravel Live Japan**: PHP/Laravel community organizing
    - **Nepal-Japan IT Forum**: Bridging Nepal-Japan tech communities
  - CTA section: Call for speakers and participants

#### Slide 8: Thank You
- **Layout**: Centered content
- **Purpose**: Closing slide with contact info
- **Key Elements**: Large QR code, website URL (bizay.jp)

## Key Features

### 1. Presentation Frame System
- **Desktop (>1920px width or >1080px height)**: Content constrained to 1920x1080 frame with dark background
- **Smaller screens**: Frame expands to fill entire viewport
- **Purpose**: Ensures consistent presentation format on large displays

### 2. Navigation System
- **Keyboard shortcuts**:
  - Arrow keys (←/→ or ↑/↓): Navigate slides
  - Space: Next slide
  - Home: First slide
  - End: Last slide
- **Touch gestures**: Swipe left/right on mobile devices
- **UI Controls**:
  - Previous/Next buttons (sides)
  - Slide indicators (bottom, clickable)
  - Fullscreen button (top-right)

### 3. Animation System
- **Slide transitions**: Fade and slide effects
- **Particles.js**: Active only on title slide (Slide 1)
- **Japanese pattern overlay**: Seigaiha wave pattern background
- **Entrance animations**: Content slides in on slide change

### 4. Responsive Design Philosophy

The presentation uses a **"scale-to-fit"** approach rather than scrolling:

- **No scrolling**: All content must fit within viewport height at all screen sizes
- **Progressive compression**: Font sizes, padding, and spacing reduce at smaller breakpoints
- **Layout adaptation**: Multi-column layouts become single-column on mobile
- **Content prioritization**: Most important content remains visible at all sizes

### Breakpoints
- **Desktop**: Base styles (1920x1080 optimal)
- **Tablet**: 1024px and below
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below
- **Landscape**: max-height 600px (orientation: landscape)

### Typography Scaling
- **Desktop titles**: 2.5-3.5rem
- **Tablet titles**: 1.8-2.5rem
- **Mobile titles**: 1.4-1.8rem
- **Small mobile titles**: 1.1-1.5rem
- **Body text**: Scales proportionally (typically 40-60% of title size)

## CSS Architecture

### Color Variables
```css
--primary-color: #2563eb (blue)
--primary-dark: #1d4ed8
--secondary-color: #0f172a (dark navy)
--text-color: #333
--text-light: #64748b
--bg-light: #f8fafc
--border-color: #e2e8f0
```

### Layout Patterns

1. **Grid-based slides**: Most slides use CSS Grid for two-column layouts
2. **Flexbox for components**: Cards, timelines, and lists use Flexbox
3. **Absolute positioning**: All navigation controls use absolute positioning within the frame
4. **Overflow control**: `overflow: hidden` on slides prevents scrolling

### Component Patterns

#### Cards
- White background with rounded corners (12-20px)
- Border: 2px solid with color variations
- Box shadow for depth
- Hover effects (transform: translateY)
- Padding scales with screen size

#### Icons
- Emoji-based (accessible, no image dependencies)
- Size scales with viewport (1-3rem)
- Used for visual hierarchy and quick scanning

#### Lists
- Custom checkmark bullets (✓)
- Primary color for checkmarks
- Compact spacing on mobile

## JavaScript Architecture

### PresentationController Class

**Responsibilities**:
- Slide navigation management
- Keyboard event handling
- Touch/swipe gesture detection
- Fullscreen API integration
- Particles.js initialization
- UI state updates (indicators, buttons)

**Key Methods**:
- `init()`: Initialize all systems
- `goToSlide(slideNumber)`: Navigate to specific slide
- `nextSlide()` / `previousSlide()`: Sequential navigation
- `updateUI()`: Sync indicators and button states
- `animateSlide()`: Trigger slide entrance animations
- `toggleParticles()`: Show/hide particles on title slide

**Event Listeners**:
- Navigation buttons (prev/next)
- Slide indicators (click to jump)
- Keyboard shortcuts
- Touch events (swipe detection)
- Fullscreen change events

## Modifying the Presentation

### Adding a New Slide

1. **HTML**: Add new `<section class="slide">` in `index.html`
2. **Data attribute**: Add `data-slide="N"` with next number
3. **Content structure**: Follow existing slide patterns
4. **Indicator**: Add new `<button class="indicator">` in `.slide-indicators`
5. **JavaScript**: Update `totalSlides` count (automatic)
6. **CSS**: Add slide-specific styles if needed

### Editing Slide Content

1. **Text changes**: Edit HTML directly in `index.html`
2. **Links**: Update `href` attributes (maintain `target="_blank" rel="noopener noreferrer"`)
3. **Images**: Replace in `assets/` folder (maintain same filenames or update HTML)
4. **Social links**: Update in Slide 2 `.social-url-item` sections
5. **QR codes**: Update URL parameter in `src` attribute

### Styling Modifications

1. **Colors**: Modify CSS variables in `:root`
2. **Fonts**: Change Google Fonts import and font-family declarations
3. **Layout**: Adjust Grid/Flexbox properties
4. **Responsive**: Always test all breakpoints after changes

### Important Considerations

1. **Content Length**: Keep content concise to fit within frame
2. **Font Sizes**: Maintain hierarchical relationships across breakpoints
3. **Testing**: Always test on multiple screen sizes
4. **Performance**: Minimize DOM operations, use CSS transforms for animations
5. **Accessibility**: Maintain ARIA labels and semantic HTML

## Responsive Design Rules

### General Principles
1. **Content fits within one frame**: Never require vertical scrolling
2. **Progressive disclosure**: Hide less critical content on smallest screens
3. **Touch targets**: Minimum 44x44px for mobile buttons
4. **Readable text**: Minimum 0.45rem (7.2px) font size
5. **White space**: Reduce padding/margins but maintain readability

### Slide-Specific Optimizations

#### Community Slide (Slide 7)
- Most content-heavy slide
- Custom padding adjustments at each breakpoint
- Two involvement cards require aggressive compression
- Single-column layout on mobile (768px and below)
- CTA section maintains visibility at all sizes

#### Journey Slide (Slide 3)
- Horizontal timeline becomes vertical on mobile
- Card min-heights removed at mobile breakpoints
- Arrow indicators rotate 90° in mobile view

#### Comparison Slide (Slide 5)
- Two-column layout maintained longer (until 768px)
- VS divider rotates from vertical to horizontal on mobile
- Timeline items compress significantly

## Browser Compatibility

- **Modern browsers**: Chrome, Firefox, Safari, Edge (ES6+ support required)
- **Fullscreen API**: Vendor-prefixed fallbacks included
- **CSS Grid**: Full support (IE11 not supported)
- **Flexbox**: Full support
- **CSS Custom Properties**: Full support

## Performance Considerations

1. **Particles.js**: Only active on Slide 1, hidden on other slides
2. **Animations**: CSS transitions preferred over JavaScript
3. **Images**: Optimize image sizes (use WebP when possible)
4. **DOM**: Minimal manipulation, use CSS classes for state changes
5. **Events**: Debounced/throttled where appropriate

## Accessibility Features

- **Keyboard navigation**: Full keyboard support
- **ARIA labels**: Navigation buttons have descriptive labels
- **Semantic HTML**: Proper heading hierarchy
- **Focus management**: Visible focus indicators
- **Color contrast**: WCAG AA compliant
- **Alt text**: Images have descriptive alt attributes

## Deployment

### Static Hosting
This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static web hosting service

### Requirements
- No server-side processing needed
- No build step required
- External dependencies loaded via CDN (Particles.js, Google Fonts)

### Files to Deploy
- `index.html`
- `css/style.css`
- `js/presentation.js`
- `assets/` folder (all images)

## Common Modifications

### 1. Changing Personal Information
- **Name**: Search and replace "Bijay Basnet" in HTML
- **Title**: Update in Slide 1 and Slide 2
- **Company**: Update "Rakuten Group Inc." references
- **Location**: Update "Japan" references
- **Social Links**: Update URLs in Slide 2

### 2. Adjusting Timeline (Slide 3)
- Add/remove `.step-card` elements
- Update dates, roles, and companies
- Adjust `.step-arrow` elements between cards
- Test responsive layout after changes

### 3. Modifying Community Involvement (Slide 7)
- Edit `.involvement-card` content
- Add/remove cards (adjust responsive CSS if needed)
- Update links and descriptions
- Maintain card structure for consistent styling

### 4. Changing Color Scheme
```css
/* Update these CSS variables */
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --primary-dark: #1d4ed8;      /* Hover states */
    --secondary-color: #0f172a;   /* Headings */
}
```

### 5. Adjusting Frame Size
If you want different maximum dimensions:
```css
.presentation-frame {
    max-width: 1920px;  /* Change this */
    max-height: 1080px; /* Change this */
}
```

## Troubleshooting

### Content Doesn't Fit in Frame
1. Reduce font sizes in CSS
2. Decrease padding/margins
3. Remove less critical content
4. Use multi-column layout more aggressively
5. Consider splitting into two slides

### Navigation Not Working
1. Check JavaScript console for errors
2. Verify all slides have correct `data-slide` attributes
3. Ensure indicators match number of slides
4. Check for JavaScript syntax errors

### Responsive Issues
1. Test at exact breakpoint (e.g., 768px)
2. Check for missing media query overrides
3. Verify units (rem vs px vs %)
4. Use browser DevTools responsive mode
5. Test on actual devices

### Fullscreen Not Working
1. User gesture required (click/tap)
2. Check browser compatibility
3. Verify Fullscreen API is not blocked
4. Test vendor-prefixed versions

## Best Practices

1. **Always test responsive**: Check all 5 breakpoints after any change
2. **Keep content concise**: One frame, no scrolling
3. **Maintain hierarchy**: Clear visual hierarchy at all sizes
4. **Optimize images**: Use appropriate dimensions and formats
5. **Progressive enhancement**: Core functionality works without JavaScript
6. **Accessibility first**: Test with keyboard and screen readers
7. **Version control**: Commit changes with descriptive messages
8. **Comment complex code**: Especially responsive adjustments

## Future Enhancement Ideas

- Add print stylesheet for handouts
- Implement slide transitions (slide, fade, zoom)
- Add speaker notes feature
- Create slide thumbnails overview
- Add progress bar
- Support for video/audio embeds
- Export to PDF functionality
- Dark mode theme toggle
- Internationalization (multiple languages)
- Analytics integration

## Support & Maintenance

When updating content:
1. Edit HTML content in `index.html`
2. Test locally by opening `index.html` in browser
3. Check responsive behavior at all breakpoints
4. Verify navigation works correctly
5. Test on mobile devices
6. Deploy updated files

For styling changes:
1. Modify `css/style.css`
2. Follow existing patterns and conventions
3. Test all breakpoints
4. Verify no content overflow
5. Check contrast ratios
6. Test across browsers

---

**Version**: 1.0
**Last Updated**: 2026-03-01
**Author**: Bijay Basnet
**Purpose**: Personal presentation about working as an engineer in Japan
