# iRESPOND Coaching Website

Professional coaching website for Ivana Bogdanović, built with HTML, CSS, and jQuery.

## Project Structure

```
CoachingWebsite/
├── index.html              # Homepage
├── services.html           # Services page
├── contact.html            # Contact page with form
├── blog.html              # Blog listing page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # jQuery interactions
├── images/
│   ├── ImageNavbarLeft.jpeg    # Navbar logo
│   ├── Brand.jpeg              # Brand reference
│   ├── HomePageLook.jpeg       # Homepage hero image
│   └── color.jpeg              # Color palette reference
└── README.md              # This file
```

## Color Palette

- **Primary Navy**: `#1E3D58` - Main brand color
- **Light Blue**: `#E8F0F8` - Background accents
- **White**: `#FFFFFF` - Base color
- **Cream**: `#F5EFE7` - Secondary background
- **Gold Accent**: `#C7A96B` - Highlight color

## Features

### General Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Sticky navigation bar
- Back-to-top button
- Modern, clean UI design
- Fast loading and optimized

### Homepage (index.html)
- Hero section with professional coaching message
- Circular feature image
- 4 key reasons to choose section with numbered cards
- Contact information display
- Professional layout inspired by provided design

### Services Page (services.html)
- Detailed service offerings:
  - Executive Coaching
  - Career Development Coaching
  - Team Coaching
  - Personal Development Coaching
- Call-to-action sections
- Feature lists for each service

### Contact Page (contact.html)
- Contact form with validation
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Subject (required)
  - Message (required, min 10 characters)
- Contact information display
- Business hours
- Map placeholder
- Social media links

### Blog Page (blog.html)
- Blog post grid layout
- 6 sample blog posts with:
  - Category tags
  - Publication date
  - Author information
  - Excerpt
  - Read more links
- Newsletter subscription form
- Load more functionality

## jQuery Features

### Interactive Elements
- Mobile menu toggle
- Smooth scroll to anchor links
- Form validation and submission
- Scroll-triggered animations
- Hover effects on cards and buttons
- Newsletter subscription
- Back-to-top button with fade-in/out

### Animations
- Fade-in-up on scroll
- Parallax effect on hero section
- Hover transformations
- Button scale effects
- Icon rotations

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### External Libraries (CDN)
- **jQuery 3.7.1**: JavaScript library for DOM manipulation and AJAX
- **Font Awesome 6.4.0**: Icon library
- **Google Fonts**: 
  - Montserrat (300, 400, 500, 600, 700)
  - Playfair Display (400, 700)

## Setup & Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **No build process** required - pure HTML, CSS, and jQuery

## How to Use

### Updating Content

**Contact Information:**
- Edit phone number, email, and address in all HTML files (search for `+381 66 569 6748` and `office@irespond.rs`)

**LinkedIn Link:**
- Update LinkedIn URL in navbar (search for `https://www.linkedin.com`)

**Images:**
- Replace images in the `images/` folder with your own
- Maintain the same file names or update references in HTML files

**Services:**
- Edit service descriptions in `services.html`
- Add or remove service cards as needed

**Blog Posts:**
- Add new blog posts by duplicating the `.blog-card` structure in `blog.html`
- Update images, titles, dates, and content

### Customizing Colors

To change the color scheme, edit these CSS variables in `css/style.css`:
- Primary Navy: `#1E3D58`
- Light Blue: `#E8F0F8`
- Cream: `#F5EFE7`
- Gold Accent: `#C7A96B`

Search and replace these hex codes throughout the CSS file.

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## Contact Form

The contact form includes client-side validation. To make it functional:

1. **Add backend processing** (PHP, Node.js, etc.)
2. **Update form action** in `contact.html`
3. **Configure email service** or database storage

Current implementation shows success message and logs data to console.

## Future Enhancements

- Backend integration for contact form
- Blog post detail pages
- Client testimonials section
- Photo gallery
- Video integration
- Multi-language support
- SEO optimization
- Analytics integration
- Google Maps integration

## Credits

**Developed for**: iRESPOND - Ivana Bogdanović  
**Technology Stack**: HTML5, CSS3, jQuery  
**Design Inspiration**: Provided mockups and brand guidelines  
**Year**: 2025

## Support

For questions or support, contact:
- Email: office@irespond.rs
- Phone: +381 66 569 6748
- Address: Neznanog junaka 3, Dedinje, Belgrade

---

© 2025 iRESPOND. All rights reserved.

