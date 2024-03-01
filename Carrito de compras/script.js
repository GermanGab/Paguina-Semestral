 // Variables globales
 var products = []; // Array para almacenar los productos
 var cart = []; // Array para almacenar los productos agregados al carrito
 var total = 0; // Variable para almacenar el total del carrito

 // Función para crear un objeto producto con sus propiedades
 function createProduct(name, price, image, category) {
     return {
         name: name,
         price: price,
         image: image,
         category: category
     };
 }

 // Función para generar productos de prueba
 function generateProducts() {
     // Ordenadores
     products.push(createProduct("Ordenador HP Pavilion", 999.99, "https://i.imgur.com/9wXz8Zf.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Lenovo IdeaCentre", 899.99, "https://i.imgur.com/7J6wQ4f.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Acer Aspire", 799.99, "https://i.imgur.com/0x0k3lT.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Dell Inspiron", 699.99, "https://i.imgur.com/1yZ0Y0L.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Asus Vivo", 599.99, "https://i.imgur.com/2QnZtqR.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Apple iMac", 1499.99, "https://i.imgur.com/6m4vQWu.jpg", "ordenadores"));
     products.push(createProduct("Ordenador MSI Trident", 1199.99, "https://i.imgur.com/8w7X6jE.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Alienware Aurora", 1399.99, "https://i.imgur.com/0HfZf1M.jpg", "ordenadores"));
     products.push(createProduct("Ordenador HP Omen", 1099.99, "https://i.imgur.com/9g1y1Zv.jpg", "ordenadores"));
     products.push(createProduct("Ordenador Lenovo Legion", 999.99, "https://i.imgur.com/0cX3G8Q.jpg", "ordenadores"));
     // Laptops
     products.push(createProduct("Laptop HP Pavilion", 699.99, "https://i.imgur.com/0bZ0Z0o.jpg", "laptops"));
     products.push(createProduct("Laptop Lenovo IdeaPad", 599.99, "https://i.imgur.com/1XZy2a1.jpg", "laptops"));
     products.push(createProduct("Laptop Acer Aspire", 499.99, "https://i.imgur.com/6f0fY1f.jpg", "laptops"));
     products.push(createProduct("Laptop Dell Inspiron", 399.99, "https://i.imgur.com/8qy0X2n.jpg", "laptops"));
     products.push(createProduct("Laptop Asus VivoBook", 299.99, "https://i.imgur.com/7z2g0Zd.jpg", "laptops"));
     products.push(createProduct("Laptop Apple MacBook", 1299.99, "https://i.imgur.com/8mZ3s9n.jpg", "laptops"));
     products.push(createProduct("Laptop MSI GL", 999.99, "https://i.imgur.com/1ZyY3xV.jpg", "laptops"));
     products.push(createProduct("Laptop Alienware M15", 1499.99, "https://i.imgur.com/0wZ6r0O.jpg", "laptops"));
     products.push(createProduct("Laptop HP Omen", 1199.99, "https://i.imgur.com/8hY0Z3A.jpg", "laptops"));
     products.push(createProduct("Laptop Lenovo Legion", 1099.99, "https://i.imgur.com/9nZ1x2S.jpg", "laptops"));
     // Smartphone
     products.push(createProduct("Smartphone Samsung Galaxy S20", 799.99, "https://i.imgur.com/8XwZ3wP.jpg", "smartphone"));
     products.push(createProduct("Smartphone Huawei P40", 699.99, "https://i.imgur.com/0yZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone Xiaomi Mi 10", 599.99, "https://i.imgur.com/6yZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone Motorola Moto G9", 199.99, "https://i.imgur.com/7yZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone Nokia 5.3", 149.99, "https://i.imgur.com/8yZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone Apple iPhone 12", 999.99, "https://i.imgur.com/9XwZ3wP.jpg", "smartphone"));
     products.push(createProduct("Smartphone Google Pixel 5", 699.99, "https://i.imgur.com/0zZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone OnePlus 8T", 749.99, "https://i.imgur.com/6zZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone LG Velvet", 599.99, "https://i.imgur.com/7zZ1w2w.jpg", "smartphone"));
     products.push(createProduct("Smartphone Sony Xperia 5", 799.99, "https://i.imgur.com/8zZ1w2w.jpg", "smartphone"));
     // Monitores
     products.push(createProduct("Monitor Samsung 24\"", 149.99, "https://i.imgur.com/0XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor LG 27\"", 199.99, "https://i.imgur.com/1XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Acer 23\"", 129.99, "https://i.imgur.com/2XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Dell 22\"", 99.99, "https://i.imgur.com/3XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Asus 24\"", 149.99, "https://i.imgur.com/4XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Apple 27\"", 999.99, "https://i.imgur.com/5XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor MSI 27\"", 299.99, "https://i.imgur.com/6XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Alienware 25\"", 399.99, "https://i.imgur.com/7XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor HP 24\"", 149.99, "https://i.imgur.com/8XwZ3wP.jpg", "monitores"));
     products.push(createProduct("Monitor Lenovo 23\"", 129.99, "https://i.imgur.com/9XwZ3wP.jpg", "monitores"));
    // Audífonos
products.push(createProduct("Audífonos Samsung Galaxy Buds", 149.99, "https://i.imgur.com/0yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Huawei FreeBuds", 129.99, "https://i.imgur.com/1yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Xiaomi AirDots", 99.99, "https://i.imgur.com/2yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Motorola VerveBuds", 79.99, "https://i.imgur.com/3yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Nokia True Wireless", 69.99, "https://i.imgur.com/4yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Apple AirPods", 199.99, "https://i.imgur.com/5yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Google Pixel Buds", 179.99, "https://i.imgur.com/6yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos LG Tone Free", 159.99, "https://i.imgur.com/7yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Sony WF-1000XM3", 229.99, "https://i.imgur.com/8yZ1w2w.jpg", "audifonos"));
products.push(createProduct("Audífonos Bose QuietComfort", 299.99, "https://i.imgur.com/9yZ1w2w.jpg", "audifonos"));
// Componentes
products.push(createProduct("Componente Intel Core i9", 499.99, "https://i.imgur.com/0XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente AMD Ryzen 9", 449.99, "https://i.imgur.com/1XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Nvidia GeForce RTX 3080", 699.99, "https://i.imgur.com/2XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente AMD Radeon RX 6800 XT", 649.99, "https://i.imgur.com/3XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Corsair Vengeance RGB Pro 16GB", 99.99, "https://i.imgur.com/4XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Samsung 970 EVO Plus 1TB", 149.99, "https://i.imgur.com/5XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Asus ROG Strix Z490-E Gaming", 299.99, "https://i.imgur.com/6XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente MSI MPG X570 Gaming Edge WiFi", 199.99, "https://i.imgur.com/7XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Cooler Master MasterLiquid ML240L RGB", 69.99, "https://i.imgur.com/8XwZ3wP.jpg", "componentes"));
products.push(createProduct("Componente Thermaltake Smart RGB 700W", 79.99, "https://i.imgur.com/9XwZ3wP.jpg", "componentes"));
// Televisores
products.push(createProduct("Televisor Samsung 55\" QLED 4K", 999.99, "https://i.imgur.com/0XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor LG 65\" OLED 4K", 1999.99, "https://i.imgur.com/1XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Sony 49\" LED 4K", 699.99, "https://i.imgur.com/2XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor TCL 43\" LED 4K", 299.99, "https://i.imgur.com/3XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Hisense 50\" LED 4K", 399.99, "https://i.imgur.com/4XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Apple TV 4K", 179.99, "https://i.imgur.com/5XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Roku Ultra 4K", 99.99, "https://i.imgur.com/6XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Amazon Fire TV Stick 4K", 49.99, "https://i.imgur.com/7XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Google Chromecast 4K", 69.99, "https://i.imgur.com/8XwZ3wP.jpg", "televisores"));
products.push(createProduct("Televisor Nvidia Shield TV 4K", 149.99, "https://i.imgur.com/9XwZ3wP.jpg", "televisores"));
// Periféricos
products.push(createProduct("Periférico Logitech G502 Hero", 49.99, "https://i.imgur.com/0XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Razer DeathAdder V2", 69.99, "https://i.imgur.com/1XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Corsair K70 RGB MK.2", 159.99, "https://i.imgur.com/2XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico HyperX Alloy Origins", 109.99, "https://i.imgur.com/3XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Logitech G Pro X", 129.99, "https://i.imgur.com/4XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Razer Kraken X", 49.99, "https://i.imgur.com/5XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Logitech C920 HD Pro", 79.99, "https://i.imgur.com/6XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Razer Kiyo", 99.99, "https://i.imgur.com/7XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Blue Yeti Nano", 99.99, "https://i.imgur.com/8XwZ3wP.jpg", "perifericos"));
products.push(createProduct("Periférico Rode NT-USB", 169.99, "https://i.imgur.com/9XwZ3wP.jpg", "perifericos"));
// Consolas
products.push(createProduct("Consola Sony PlayStation 5", 499.99, "https://i.imgur.com/0XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Microsoft Xbox Series X", 499.99, "https://i.imgur.com/1XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Nintendo Switch", 299.99, "https://i.imgur.com/2XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Sony PlayStation 4", 299.99, "https://i.imgur.com/3XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Microsoft Xbox One S", 299.99, "https://i.imgur.com/4XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Nintendo Wii U", 199.99, "https://i.imgur.com/5XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Sony PlayStation 3", 149.99, "https://i.imgur.com/6XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Microsoft Xbox 360", 99.99, "https://i.imgur.com/7XwZ3wP.jpg", "consolas"));
products.push(createProduct("Consola Nintendo 3DS", 149.99, "https://i.imgur.com/8XwZ3wP.jpg", "consolas"));
 }