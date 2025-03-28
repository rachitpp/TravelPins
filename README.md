# 🌍 TravelPins - Track Your Global Adventures! 🧭

A modern **Travel Tracking Web App** where users can:  
✅ Mark cities they've visited on an interactive map 🗺️  
✅ Record specific dates and notes for each trip 📝  
✅ View a list of all their visited cities 📍  
✅ Explore details of each adventure with personal notes 🔍  
✅ Use **current location detection** to quickly add your position 📍  

---

## 🚀 Features  
✔️ **Interactive Map** – Visualize all your travels in one place  
✔️ **City Collection** – Maintain a list of all cities you've visited  
✔️ **Travel Notes** – Add memories and experiences for each location  
✔️ **Location Detection** – Mark your current position with one click  
✔️ **Modern UI** – Sleek design with animations and responsive layout  

---

## 🛠️ Tech Stack  
- **Frontend:** React, React Router, Tailwind CSS  
- **Map Interface:** Leaflet.js  
- **State Management:** React Context API  
- **Data Storage:** LocalStorage for client-side persistence  
- **Geolocation API:** Used to detect user location  

---
## Live Demo  
[View the Live Project](https://travelpins-explore.netlify.app)  

---

## 💻 Installation  
Follow these steps to set up the project locally:  

1️⃣ **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/travelpins.git
   cd travelpins
   ```

2️⃣ **Install dependencies**  
   ```sh
   npm install
   # or
   yarn install
   ```

3️⃣ **Start the development server**  
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4️⃣ **Open your browser**  
   Navigate to `http://localhost:5173/`

---

## 🔄 Data Persistence
TravelPins uses the browser's localStorage to save your travel data directly in your browser. This means:
- Your data stays on your device
- No account creation is necessary
- Data persists between browser sessions
- No internet connection required after initial load

---

## 🌐 Deployment
This application is built to work entirely on the frontend with no backend requirements. To deploy:

1️⃣ **Build the project**  
   ```sh
   npm run build
   # or
   yarn build
   ```

2️⃣ **Deploy the contents**  
   Upload the `dist` folder to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Acknowledgements

- This project was created as a practice application for demonstrating React skills
- Map data is provided by OpenStreetMap contributors 