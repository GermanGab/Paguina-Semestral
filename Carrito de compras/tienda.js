// Lista de productos
const products = [
  //ordenadores
  { id: 1, category: 'ordenadores', name: 'Mini Pc Host Chuwi 12 Gb Ddr5 512 Gb Pcie Ssd Intel N100 Win', price: 3547, image: 'img/ordenadores/o-01.webp'},
  { id: 2, category: 'ordenadores', name: 'Mini Pc 12º Intel Alder Lake N95 16 Gb De Ram 512 Gb Windows', price: 3303, image: 'img/ordenadores/o-02.webp' },
  { id: 3, category: 'ordenadores', name: 'Xtreme Pc Amd Radeon Renoir Ryzen 5 5600g 16gb Ssd 2tb Wifi', price: 6539, image: 'img/ordenadores/o-03.webp' },
  { id: 4, category: 'ordenadores', name: 'Xtreme Pc Intel Quad Core J4125 16gb 500gb Monitor 23.8 Wifi', price: 6029, image: 'img/ordenadores/o-04.webp' },
  { id: 5, category: 'ordenadores', name: 'Mini Pc Intel 12th Gen N95 16gb Ram 512gb Ssd Windows 11 Pro', price: 3480, image: 'img/ordenadores/o-05.webp' },
  { id: 6, category: 'ordenadores', name: 'Dell Optiplex 7040 Core I5 6ta Gen, 128gb Ssd, 8gb', price: 2660, image: 'img/ordenadores/o-06.webp' },
  { id: 7, category: 'ordenadores', name: 'Xtreme Pc Geforce Rtx 3050 Ryzen 5 16gb Ssd 500gb 2tb White', price: 12799, image: 'img/ordenadores/o-07.webp' },
  { id: 8, category: 'ordenadores', name: 'Mini Pc Intel Celeron N3350 4gb Ram 64gb Rom Windows 10 Pro', price: 1893, image: 'img/ordenadores/o-08.webp' },
  { id: 9, category: 'ordenadores', name: 'Pc Gamer Ryzen 7 5700g 32gb Ram Ssd 1t Monitor 27 Fuente 80+', price: 12397, image: 'img/ordenadores/o-09.webp' },
  { id: 10, category: 'ordenadores', name: 'Cpu Completo Dell Optiplex 9020 I5 De 4ta120 Gb Ssd 8gbram', price: 3290, image: 'img/ordenadores/o-10.webp' },

  //laptops
  { id: 11, category: 'laptops', name: 'Laptop Huawei Matebook D15 Core I5 11.5th 8gb +512ssd Color Plateado', price: 10999, image: 'img/laptops/l-01.webp'},
  { id: 12, category: 'laptops', name: 'Laptop Chuwi HeroBook Pro space gray 14.1", Intel Celeron N4020 8GB de RAM 256GB SSD, Intel UHD Graphics 600 1920x1080px Windows 11 Home', price: 4377, image: 'img/laptops/l-02.webp' },
  { id: 13, category: 'laptops', name: 'Laptop Huawei Matebook D 14 I3 12a 8 Gb +256 Gb Win11 Gris', price: 8999, image: 'img/laptops/l-03.webp' },
  { id: 14, category: 'laptops', name: 'Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Gris espacial', price: 13999, image: 'img/laptops/l-04.webp' },
  { id: 15, category: 'laptops', name: 'Laptop Lenovo Ideapad Celeron 4gb + 128ssd + Office Regalo Color Gris', price: 3823, image: 'img/laptops/l-05.webp' },
  { id: 16, category: 'laptops', name: 'Laptop gamer HP VICTUS 15 15-fa1093dx azul 15.6", Intel Core i5 8GB de RAM 512GB SSD, NVIDIA GeForce RTX 3050 144 Hz Windows 11 Home', price: 14368, image: 'img/laptops/l-06.webp' },
  { id: 17, category: 'laptops', name: 'Laptop Lenovo Ideapad 15.6 Ryzen 3 7320u 8gb 256gb ssd', price: 4899, image: 'img/laptops/l-07.webp' },
  { id: 18, category: 'laptops', name: 'Laptop gamer Thunderobot Zero Ultra plata y negra 16", Intel Core i9 13900HX 32GB de RAM 1 TB SSD, Nvidia GeForce RTX 4060 240 Hz 2560x1600px Windows 11 Pro', price: 28650, image: 'img/laptops/l-08.webp' },
  { id: 19, category: 'laptops', name: 'Laptop Asus Tuf 15.6 Core I7-12700h 16 Gb Ram 1tb Ssd Nvidia Geforce Rtx 4070 Windows 11 Home', price: 24989, image: 'img/laptops/l-09.webp' },
  { id: 20, category: 'laptops', name: 'Laptop Dell Inspiron 3515 plateada 15.5", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home', price: 10899, image: 'img/laptops/l-10.webp' },

  //smartphone
  { id: 21, category: 'smartphones', name: 'Realme 11 Pro 5g 8g - 256g Negro Pantalla Curva Oled 120hz Mediatek Dimensity 7050 Cámara Ois De 100mp Batería 5000mah Cargador 67w', price: 5698, image: 'img/smartphone/s-01.webp'},
  { id: 22, category: 'smartphones', name: 'Xiaomi Redmi Note 13 Pro Dual SIM 256 GB negro 8 GB RAM', price: 5096, image: 'img/smartphone/s-02.webp' },
  { id: 23, category: 'smartphones', name: 'Redmagic 9pro Teléfono 5g 12gb Ram 256gb Rom Sleet Snapdragon 8 Gen 3 Smartphone 6.8 Amoled Pantalla Triple Cámaras Batería 6500mah 80w Carga Nfc', price: 13818, image: 'img/smartphone/S-03.webp' },
  { id: 24, category: 'smartphones', name: 'Xiaomi Redmi Note 13 Pro 256gb Dual Sim 8gb Ram 200mpx Verde', price: 4896, image: 'img/smartphone/s-04.webp' },
  { id: 25, category: 'smartphones', name: 'Samsung Galaxy A54 5G 5G Dual SIM 128 GB awesome lime 8 GB RAM', price: 5849, image: 'img/smartphone/s-05.webp' },
  { id: 26, category: 'smartphones', name: 'Nubia Z50s Pro Dual SIM 256 GB caqui 12 GB RAM', price: 10099, image: 'img/smartphone/s-06.webp' },
  { id: 27, category: 'smartphones', name: 'Realme 11 Pro 5g 8g - 256g Negro Pantalla Curva Oled 120hz Mediatek Dimensity 7050 Cámara Ois De 100mp Batería 5000mah Cargador 67w', price: 5923, image: 'img/smartphone/s-07.webp' },
  { id: 28, category: 'smartphones', name: 'Apple iPhone 15 (128 GB) - Azul', price: 14999, image: 'img/smartphone/s-08.webp' },
  { id: 29, category: 'smartphones', name: 'Honor Magic5 Lite Dual SIM 256 GB verde esmeralda 8 GB RAM', price: 4599, image: 'img/smartphone/s-09.webp' },
  { id: 30, category: 'smartphones', name: 'Samsung Galaxy S23 Fe 256gb 8gb Ram Verde', price: 10715, image: 'img/smartphone/s-10.webp' },
];

// Función para mostrar productos
function showProducts(category) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
          <div class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.name}" height="320px" weight="280px" >
              <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">$${product.price.toFixed(2)}</p>
                  <button class="btn btn-primary add-to-cart" data-id="${product.id}">Añadir al carrito</button>
              </div>
          </div>
      `;
      productList.appendChild(card);
  });
}

// Mostrar todos los productos al cargar la página
window.addEventListener('load', () => {
  showProducts('all');
});

// Manejar clic en las categorías
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
      event.preventDefault();
      const category = event.target.dataset.category;
      showProducts(category);
  });
});

// Añadir productos al carrito
document.getElementById('product-list').addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find(product => product.id === productId);
      if (product) {
          addToCart(product);
      }
  }
});

// Función para añadir producto al carrito
function addToCart(product) {
  const shoppingCartItems = document.querySelector('.shopping-cart-items');

  const cartItem = document.createElement('div');
  cartItem.classList.add('card');
  cartItem.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price.toFixed(2)}</p>
          <button class="btn btn-danger remove-btn">Eliminar</button>
      </div>
  `;

  shoppingCartItems.appendChild(cartItem);
  updateCartTotal();
}

// Eliminar productos del carrito
document.querySelector('.shopping-cart-items').addEventListener('click', event => {
  if (event.target.classList.contains('remove-btn')) {
      event.target.closest('.card').remove();
      updateCartTotal();
  }
});

// Actualizar el total del carrito
function updateCartTotal() {
  const shoppingCartItems = document.querySelectorAll('.shopping-cart-items .card');
  let total = 0;
  shoppingCartItems.forEach(item => {
      const priceElement = item.querySelector('.card-text');
      const price = parseFloat(priceElement.textContent.replace('$', ''));
      total += price;
  });
  const totalElement = document.querySelector('.shopping-cart-total');
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Botón de Pagar
document.getElementById('checkout-btn').addEventListener('click', () => {
  alert('Tu compra se ha realizado correctamente');
});
