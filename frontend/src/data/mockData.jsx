/* -------------------- MENU CATEGORIES -------------------- */
export const menuCategories = [
  { id: "appetizers", name: "Appetizers", icon: "🥗" },
  { id: "mains", name: "Main Course", icon: "🍽️" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "beverages", name: "Beverages", icon: "☕" }
];

/* -------------------- MENU ITEMS -------------------- */
export const menuItems = [
  {
    id: 1,
    name: "Artisan Sourdough",
    category: "appetizers",
    price: 12,
    image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?auto=format&fit=crop&w=800&q=80",
    description: "Freshly baked sourdough with herbs",
    featured: true
  },
  {
    id: 2,
    name: "Gourmet Danish",
    category: "appetizers",
    price: 8,
    image: "https://images.unsplash.com/photo-1572715376701-98568319fd0b?auto=format&fit=crop&w=800&q=80",
    description: "Buttery pastry with fruit filling",
    featured: true
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    category: "appetizers",
    price: 10,
    image: "https://images.unsplash.com/photo-34702496?auto=format&fit=crop&w=800&q=80",
    description: "Healthy multigrain artisan bread",
    featured: true
  },
  {
    id: 4,
    name: "Grilled Salmon",
    category: "mains",
    price: 28,
    image: "https://images.unsplash.com/photo-1580802841960-bb47baa91eac?auto=format&fit=crop&w=800&q=80",
    description: "Fresh Atlantic salmon with seasonal vegetables",
    featured: false
  },
  {
    id: 5,
    name: "Prime Ribeye Steak",
    category: "mains",
    price: 45,
    image: "https://images.unsplash.com/photo-1560130937-3ab6bdf27a58?auto=format&fit=crop&w=800&q=80",
    description: "Premium cut with truffle butter",
    featured: false
  },
  {
    id: 6,
    name: "Chocolate Tart",
    category: "desserts",
    price: 14,
    image: "https://images.unsplash.com/photo-33033815?auto=format&fit=crop&w=800&q=80",
    description: "Rich dark chocolate with gold leaf",
    featured: false
  },
  {
    id: 7,
    name: "Tiramisu",
    category: "desserts",
    price: 12,
    image: "https://images.unsplash.com/photo-1561350600-6606486921f5?auto=format&fit=crop&w=800&q=80",
    description: "Classic Italian dessert",
    featured: false
  },
  {
    id: 8,
    name: "Espresso",
    category: "beverages",
    price: 5,
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?auto=format&fit=crop&w=800&q=80",
    description: "Bold Italian espresso",
    featured: false
  }
];

/* -------------------- ORDERS -------------------- */
export const orders = [
  { id: "ORD001", customerName: "John Doe", items: 3, total: 65, status: "Pending", date: "2025-01-15" },
  { id: "ORD002", customerName: "Jane Smith", items: 2, total: 48, status: "Completed", date: "2025-01-15" },
  { id: "ORD003", customerName: "Mike Johnson", items: 5, total: 120, status: "Pending", date: "2025-01-14" }
];

/* -------------------- RESERVATIONS -------------------- */
export const reservations = [
  { id: "RES001", customerName: "Sarah Wilson", date: "2025-01-20", time: "19:00", guests: 4, status: "Confirmed" },
  { id: "RES002", customerName: "Tom Brown", date: "2025-01-21", time: "20:00", guests: 2, status: "Pending" },
  { id: "RES003", customerName: "Emily Davis", date: "2025-01-22", time: "18:30", guests: 6, status: "Confirmed" }
];

/* -------------------- STAFF -------------------- */
export const staff = [
  { id: 1, name: "Chef Antonio", role: "Head Chef", image: "https://images.unsplash.com/photo-1681270543584-8e541a1bb056?auto=format&fit=crop&w=800&q=80", experience: "15 years" },
  { id: 2, name: "Chef Maria", role: "Pastry Chef", image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80", experience: "10 years" },
  { id: 3, name: "Chef David", role: "Sous Chef", image: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&w=800&q=80", experience: "8 years" }
];

/* -------------------- GALLERY -------------------- */
export const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?auto=format&fit=crop&w=800&q=80", alt: "Restaurant Interior" },
  { id: 2, url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", alt: "Dining Area" },
  { id: 3, url: "https://images.unsplash.com/photo-1729394405518-eaf2a0203aa7?auto=format&fit=crop&w=800&q=80", alt: "Private Dining" },
  { id: 4, url: "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg", alt: "Bar Area" },
  { id: 5, url: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg", alt: "Ambiance" },
  { id: 6, url: "https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?auto=format&fit=crop&w=800&q=80", alt: "Kitchen" }
];

/* -------------------- TESTIMONIALS -------------------- */
export const testimonials = [
  { id: 1, name: "Rachel Green", text: "The best dining experience! Every dish is a masterpiece.", rating: 5 },
  { id: 2, name: "Ross Geller", text: "Absolutely incredible food and service. Highly recommend!", rating: 5 },
  { id: 3, name: "Monica Bing", text: "A culinary journey like no other. Will definitely return!", rating: 5 }
];

/* -------------------- DASHBOARD STATS -------------------- */
export const stats = [
  { label: "Total Orders", value: 1248, icon: "📦" },
  { label: "Revenue", value: 45890, icon: "💰" }, // changed to number
  { label: "Reservations", value: 156, icon: "📅" },
  { label: "Happy Customers", value: 2340, icon: "😊" }
];
