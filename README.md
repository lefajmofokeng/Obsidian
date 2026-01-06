# Obsidian

## Overview
A modern, interactive web component built with HTML, CSS, and JavaScript that presents services in an accordion-style layout with synchronized image previews. This component demonstrates professional UI/UX patterns for showcasing service offerings with smooth animations and responsive design.

<img width="1920" height="1068" alt="obsidian" src="https://github.com/user-attachments/assets/3c437951-272a-48e6-bc4f-a00d0498eebc" />


## Live Preview

[Preview Live Demo](https://lefajmofokeng.github.io/Obsidian)

## Technical Implementation

### Core Technologies
- **HTML5**: Semantic structure with custom data attributes
- **CSS3**: Custom properties, flexbox, grid, and CSS transitions
- **Vanilla JavaScript**: DOM manipulation without external dependencies
- **Responsive Design**: Mobile-first approach with media queries

### Architecture Patterns
- **Component-Based Design**: Self-contained, reusable UI component
- **Namespace Isolation**: All CSS classes prefixed with `sd-` to prevent conflicts
- **Accessibility-First**: Semantic HTML structure and keyboard-navigable accordion
- **Performance Optimized**: Efficient DOM queries and event delegation

### Key Features
1. **Synchronized Visual Feedback**: Accordion items are paired with corresponding high-resolution images
2. **Smooth Animations**: CSS transitions for accordion expansion and image fading
3. **Responsive Grid System**: Adapts from two-column to single-column layout on mobile
4. **Clean Visual Hierarchy**: Typography and spacing optimized for readability
5. **Interactive Elements**: Hover states, click feedback, and visual indicators

## Implementation Details

### CSS Architecture
- Custom CSS properties for consistent theming
- BEM-like naming convention with custom namespace
- Mobile-first responsive breakpoints
- Hardware-accelerated animations using `transform` and `opacity`

### JavaScript Functionality
- Pure vanilla JavaScript implementation
- Event delegation pattern for performance
- State management for active accordion items
- Dynamic height calculation for accordion content

### Image Management
- Lazy loading ready structure
- Smooth crossfade transitions between images
- Responsive image handling with `object-fit: cover`
- High-quality Unsplash and Pexels integration

## Ideal Use Cases

### Primary Implementation
- **Service-Based Businesses**: Architecture firms, design agencies, consulting services
- **Portfolio Websites**: Showcasing project categories or skill sets
- **Product Feature Displays**: Highlighting different product capabilities
- **Educational Platforms**: Course or module exploration interfaces

### Technical Applications
- **Design System Component**: Can be integrated into larger design systems
- **CMS Integration**: Structured content that can be managed via headless CMS
- **E-commerce Platforms**: Product category exploration
- **Progressive Web Apps**: Offline-capable service showcases

## Development Insights

### Code Quality Features
- **Conflict Prevention**: Custom namespace prefix eliminates CSS conflicts
- **Maintainable Structure**: Clear separation of concerns between HTML, CSS, and JS
- **Performance Considerations**: Efficient DOM updates and animation performance
- **Browser Compatibility**: Uses widely supported CSS and JavaScript features

### Customization Potential
- Easy theming through CSS custom properties
- Extendable accordion item structure
- Configurable animation timing
- Scalable image management system

## Setup and Usage

### Local Development
1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required

### Integration into Existing Projects
1. Copy the HTML structure into your project
2. Include the CSS with namespace awareness
3. Add the JavaScript functionality
4. Update image URLs and content as needed

## Technical Requirements
- Modern web browser with ES6+ support
- No external dependencies required
- Internet connection for Google Fonts and external images (can be self-hosted)

## Design Principles
- **Visual Consistency**: Harmonious spacing, typography, and color palette
- **User Experience**: Intuitive interaction patterns with clear feedback
- **Performance**: Optimized animations and efficient resource loading
- **Accessibility**: Keyboard navigation and screen reader compatibility

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

This component demonstrates professional frontend development practices while providing a practical, reusable solution for service presentation across various digital platforms.
