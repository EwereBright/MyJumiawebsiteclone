// ==========================================
// PRODUCT DATABASE - Easy to manage products
// ==========================================

const productsDatabase = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro Max 256GB",
        price: 1450000,
        oldPrice: 1550000,
        discount: 6,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=500&h=500&fit=crop"
        ],
        category: "Phones & Tablets",
        brand: "Apple",
        inStock: true,
        flashSale: true,
        description: "Experience the ultimate iPhone with the A16 Bionic chip, 48MP main camera, and all-day battery life. The iPhone 14 Pro Max features a stunning 6.7-inch Super Retina XDR display with ProMotion, Always-On display, and Dynamic Island. It's the most advanced iPhone ever made, built with durability in mind and featuring groundbreaking safety capabilities.",
        specs: [
            "6.7-inch Super Retina XDR display with ProMotion",
            "Dynamic Island feature for alerts and activities",
            "48MP Main camera with second-generation sensor-shift OIS",
            "A16 Bionic chip with 6-core GPU",
            "Up to 29 hours video playback",
            "Face ID enabled for secure authentication",
            "5G capable for superfast downloads",
            "Ceramic Shield front, textured matte glass back",
            "Emergency SOS via satellite"
        ],
        colors: ["Deep Purple", "Space Black", "Silver", "Gold"],
        sizes: ["128GB", "256GB", "512GB", "1TB"]
    },
    {
        id: 2,
        name: "Nike Air Max 270 Running Shoes",
        price: 45000,
        oldPrice: 56250,
        discount: 20,
        rating: 4.2,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop"
        ],
        category: "Fashion",
        brand: "Nike",
        inStock: true,
        flashSale: true,
        description: "The Nike Air Max 270 delivers comfort and style with its large Max Air unit and breathable mesh upper. Perfect for running or casual wear. Inspired by the Air Max 180 and Air Max 93, it features Nike's biggest heel Air unit for maximum impact protection.",
        specs: [
            "Breathable mesh upper for ventilation",
            "Large Max Air unit for responsive cushioning",
            "Rubber outsole for durable traction",
            "Foam midsole for lightweight comfort",
            "Reflective details for visibility",
            "Synthetic leather overlays for durability"
        ],
        colors: ["Black/White", "Blue/White", "Red/White", "Gray"],
        sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"]
    },
    {
        id: 3,
        name: "Canon EOS 4000D DSLR Camera",
        price: 280000,
        oldPrice: null,
        discount: 0,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=500&h=500&fit=crop"
        ],
        category: "Electronics",
        brand: "Canon",
        inStock: true,
        flashSale: false,
        description: "The Canon EOS 4000D is an entry-level DSLR that delivers high-quality images with its 18MP sensor and DIGIC 4+ processor. Perfect for beginners looking to step up from smartphone photography. It features built-in Wi-Fi and NFC for easy sharing.",
        specs: [
            "18MP APS-C CMOS sensor",
            "DIGIC 4+ image processor",
            "Full HD 1080p video recording at 30fps",
            "9-point autofocus system",
            "3-inch LCD screen",
            "Wi-Fi and NFC connectivity",
            "ISO 100-6400 (expandable to 12800)",
            "Up to 3 fps continuous shooting"
        ],
        colors: ["Black"],
        sizes: ["Kit with 18-55mm lens", "Body only"]
    },
    {
        id: 4,
        name: "Apple Watch Series 8 GPS 45mm",
        price: 320000,
        oldPrice: 376000,
        discount: 15,
        rating: 4.6,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1614164189853-5b306d63f5d4?w=500&h=500&fit=crop"
        ],
        category: "Electronics",
        brand: "Apple",
        inStock: true,
        flashSale: true,
        description: "The Apple Watch Series 8 brings advanced health features including temperature sensing for cycle tracking, crash detection, and enhanced workout metrics. It's the perfect companion for an active lifestyle.",
        specs: [
            "45mm Always-On Retina display",
            "Temperature sensing for advanced cycle tracking",
            "Crash Detection for emergencies",
            "Blood Oxygen app for wellness insights",
            "ECG app for heart health",
            "GPS + Cellular option available",
            "Water resistant to 50m",
            "S8 SiP with 64-bit dual-core processor"
        ],
        colors: ["Midnight", "Starlight", "Silver", "Product Red"],
        sizes: ["41mm", "45mm"]
    },
    {
        id: 5,
        name: "Nivea Perfect & Radiant Skincare Set",
        price: 12500,
        oldPrice: null,
        discount: 0,
        rating: 4.3,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a361?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1585386959984-a4155224a361?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop"
        ],
        category: "Health & Beauty",
        brand: "Nivea",
        inStock: true,
        flashSale: false,
        description: "Complete skincare set for radiant and even-toned skin. This comprehensive set includes everything you need for a perfect skincare routine, formulated to give you visibly radiant skin in just 2 weeks.",
        specs: [
            "Gentle cleansing foam with Vitamin C",
            "Even-tone toner for brightness",
            "Day cream with SPF 30 protection",
            "Night cream for deep nourishment",
            "Suitable for all skin types",
            "Dermatologically tested",
            "Free from parabens and mineral oils"
        ],
        colors: ["Standard"],
        sizes: ["1 Set"]
    },
    {
        id: 6,
        name: "Logitech G502 Gaming Mouse",
        price: 35000,
        oldPrice: 53800,
        discount: 35,
        rating: 4.9,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop"
        ],
        category: "Computing",
        brand: "Logitech",
        inStock: true,
        flashSale: true,
        description: "The Logitech G502 HERO features a high-precision HERO 25K sensor, customizable RGB lighting, and 11 programmable buttons. It's the most popular gaming mouse in the world for good reason.",
        specs: [
            "HERO 25K sensor for 1:1 tracking",
            "11 programmable buttons with onboard memory",
            "Adjustable weight system (up to 16g)",
            "RGB lighting with 16.8 million colors",
            "Up to 25,600 DPI",
            "Mechanical switch button tensioning",
            "2.1m braided cable",
            "Compatible with G HUB software"
        ],
        colors: ["Black", "White"],
        sizes: ["Standard"]
    },
    {
        id: 7,
        name: "Infinix Hot 30 Play Smartphone",
        price: 89500,
        oldPrice: 162000,
        discount: 45,
        rating: 4.1,
        reviews: 345,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
        ],
        category: "Phones & Tablets",
        brand: "Infinix",
        inStock: true,
        flashSale: true,
        description: "Large 6.82-inch display, 6000mAh battery, and 50MP camera. Perfect for entertainment and long-lasting performance. Enjoy all-day power with fast charging capabilities.",
        specs: [
            "6.82-inch HD+ display with 90Hz refresh rate",
            "6000mAh battery with 18W fast charging",
            "50MP dual camera with AI lens",
            "8MP selfie camera with flash",
            "4GB RAM, 64GB storage (expandable)",
            "Android 12 with XOS 10.6",
            "Side-mounted fingerprint sensor",
            "Dual speakers with DTS audio"
        ],
        colors: ["Black", "Blue", "Gold"],
        sizes: ["4GB/64GB", "4GB/128GB"]
    },
    {
        id: 8,
        name: "Oraimo Wireless Headphones",
        price: 12500,
        oldPrice: 17800,
        discount: 30,
        rating: 4.4,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop"
        ],
        category: "Electronics",
        brand: "Oraimo",
        inStock: true,
        flashSale: true,
        description: "Premium wireless headphones with deep bass, long battery life, and comfortable over-ear design. Perfect for music lovers and frequent travelers.",
        specs: [
            "40mm dynamic drivers for rich sound",
            "20-hour battery life with fast charging",
            "Bluetooth 5.0 for stable connection",
            "Foldable design for portability",
            "Built-in microphone for calls",
            "Comfortable memory foam ear cushions",
            "3.5mm aux input for wired use",
            "Volume and track controls on ear cups"
        ],
        colors: ["Black", "White", "Blue"],
        sizes: ["Standard"]
    },
    {
        id: 9,
        name: "Samsung 55-inch 4K Smart TV",
        price: 350000,
        oldPrice: 450000,
        discount: 22,
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&h=500&fit=crop"
        ],
        category: "Electronics",
        brand: "Samsung",
        inStock: true,
        flashSale: true,
        description: "Experience stunning 4K resolution with this Samsung Smart TV. Features PurColor technology for vibrant colors and a sleek design that enhances any room.",
        specs: [
            "55-inch 4K Ultra HD display",
            "PurColor for vibrant colors",
            "Smart TV with built-in streaming apps",
            "3 HDMI ports, 2 USB ports",
            "Crystal Processor 4K",
            "HDR10+ support",
            "Slim design with narrow bezels",
            "Voice assistant compatibility"
        ],
        colors: ["Black"],
        sizes: ["55-inch", "65-inch", "75-inch"]
    },
    {
        id: 10,
        name: "Poco C71 Smartphone",
        price: 99990,
        oldPrice: 107291,
        discount: 7,
        rating: 4.3,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1610945264803-c22e62d2a7da?w=300&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1610945264803-c22e62d2a7da?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop"
        ],
        category: "Phones & Tablets",
        brand: "Poco",
        inStock: true,
        flashSale: true,
        description: "Powerful performance with large battery and smooth display. Perfect for gaming and everyday use.",
        specs: [
            "6.88-inch display",
            "5000mAh battery",
            "50MP camera",
            "Octa-core processor",
            "4GB RAM, 64GB storage"
        ],
        colors: ["Black", "Blue"],
        sizes: ["4GB/64GB", "4GB/128GB"]
    }
];

// Flash sale products
const getFlashSaleProducts = () => productsDatabase.filter(p => p.flashSale);

// Get product by ID
function getProductById(id) {
    return productsDatabase.find(p => p.id === parseInt(id));
}

// Get related products
function getRelatedProducts(currentId, category) {
    return productsDatabase.filter(p => p.id !== parseInt(currentId) && p.category === category).slice(0, 5);
}

// Cart management
let cart = JSON.parse(localStorage.getItem('jumiaCart')) || [];

function addToCart(productId, quantity = 1, color = null, size = null) {
    const product = getProductById(productId);
    if (!product) return false;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            color: color,
            size: size
        });
    }
    
    localStorage.setItem('jumiaCart', JSON.stringify(cart));
    updateCartCount();
    return true;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('jumiaCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cartCount', count);
    
    // Update all cart badges on the page
    document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.textContent = count;
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();


});