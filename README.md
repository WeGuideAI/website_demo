# HOLYBOTICS - Student Entrepreneurship & Robotics Cell Website

Official web application for **HOLYBOTICS**, the student-run Entrepreneurship and Robotics Cell at **Holy Trinity School, Kanjikode, Kerala**.

---

## 🌟 Key Features

- **Cyber Dark Theme**: High-contrast, futuristic dark theme designed specifically for student robotics & hardware innovators.
- **Multi-Language Support (i18n)**: Instant switching between **English**, **Malayalam (മലയാളം)**, and **Hindi (हिन्दी)** with persistent storage.
- **Product Catalog with Real-Time Search**: Fast client-side search by title, tag, or description with category filtering (Robotics Kits, IoT & Smart Devices, Tools, Learning Kits).
- **Product Specifications Modal**: Shows in-depth specs, "What's in the Box" inventory, and a 1-click inquiry button.
- **Customer Care Integration**: Dedicated customer care desk featuring **`anuj@gmail.com`** with one-click copy and auto-filled mailto order inquiries.
- **Official Location**: Address for **Holy Trinity School, Kanjikode, Pudussery Central, Keralam 678623** with an interactive Google Maps embed and direct navigation links.
- **Responsive & Accessible**: Works seamlessly on mobile phones, tablets, laptops, and wide screens.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
Dependencies are already installed. If running in a fresh clone:
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the live site with hot-module reloading.

### Build for Production
```bash
npm run build
```
Creates an optimized static build in the `dist/` directory ready for deployment on Vercel, Netlify, or GitHub Pages.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
Website/
├── public/
│   └── favicon.svg              # HOLYBOTICS robot & circuit logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav, language selector & mobile drawer
│   │   ├── Hero.jsx             # Hero section with stats & CTA buttons
│   │   ├── About.jsx            # Cell history, vision & 4 core pillars
│   │   ├── ProductCatalog.jsx   # Search bar, category filters & product grid
│   │   ├── ProductModal.jsx     # Detail popup with specs & inquiry generator
│   │   ├── Initiatives.jsx      # Workshops, hackathons & venture pitches
│   │   ├── LocationSection.jsx  # Holy Trinity School map embed & directions
│   │   ├── ContactSection.jsx   # Customer care card (anuj@gmail.com) & form
│   │   └── Footer.jsx           # Footer links, school details & copyright
│   ├── context/
│   │   └── LanguageContext.jsx  # i18n context provider with localStorage
│   ├── data/
│   │   ├── products.js          # Product data (add or edit products here)
│   │   └── translations.js      # English, Malayalam, Hindi dictionary
│   ├── App.jsx                  # Root layout
│   ├── index.css                # Tailwind CSS base and glow effects
│   └── main.jsx                 # React root mount
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ How to Customize

### Adding or Editing Products
Open `src/data/products.js` and add or edit product objects:
```javascript
{
  id: 'hb-07',
  name: {
    en: 'Product Name in English',
    ml: 'ഉൽപ്പന്നത്തിന്റെ പേര് മലയാളത്തിൽ',
    hi: 'उत्पाद का नाम हिंदी में'
  },
  category: 'robotics', // 'robotics' | 'iot' | 'tools' | 'learning'
  price: 999,
  status: 'inStock',   // 'inStock' | 'customOrder'
  badge: 'New Innovation',
  tags: ['Sensor', 'ESP32', 'Automation'],
  shortDesc: {
    en: 'Short description in English...',
    ml: 'മലയാള വിവരണം...',
    hi: 'हिंदी विवरण...'
  },
  specs: ['Spec 1', 'Spec 2'],
  inTheBox: ['Item 1', 'Item 2']
}
```

### Updating Customer Care Contact
To update the customer care email, search for `anuj@gmail.com` across the codebase or update it in `src/data/translations.js` and `src/components/ContactSection.jsx`.

---

## 📍 School & Cell Location
- **Institution**: Holy Trinity School
- **Address**: Kanjikode, Pudussery Central, Keralam 678623
- **Customer Care**: `anuj@gmail.com`

