# 🍽️ Saffron Restaurant — Portfolio Project 1

A luxury fine-dining restaurant website built with **React + Vite + Tailwind CSS**,
with a PHP backend for reservation handling.

## Stack
- **Frontend:** React 18, Vite 5, Tailwind CSS 3, Framer Motion
- **Backend:** PHP 8+ (reservation API)
- **Fonts:** Cormorant Garamond, DM Sans (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the frontend
```bash
npm run dev
# → http://localhost:5173
```

### 3. Run the PHP API (optional — for live reservation form)
```bash
php -S localhost:8000 -t api/
```
Vite proxies `/api/*` → `http://localhost:8000` automatically.

### 4. Build for production
```bash
npm run build
```
Upload the `dist/` folder to your web host and place the `api/` folder alongside it.

## Project Structure
```
saffron-restaurant/
├── api/
│   └── reserve.php          ← Reservation endpoint (POST)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   ├── Reservation.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Customisation
- Replace Unsplash image URLs with your own photos
- Update restaurant name, address, hours in each component
- Configure MySQL credentials in `api/reserve.php`
- Uncomment the PHPMailer block in `api/reserve.php` to enable email confirmations
