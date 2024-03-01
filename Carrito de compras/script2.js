
function thankYou() {
    // Obtener el elemento toast
    var toast = new bootstrap.Toast($("#toast"));
    // Mostrar el toast
    toast.show();
}

    // Función para mostrar los productos en la página
    function showProducts(category) {
        // Vaciar el contenido anterior
        $(".content-grid").empty();
        // Recorrer el array de productos
        for (var i = 0; i < products.length; i++) {
            // Obtener el producto actual
            var product = products[i];
            // Verificar si el producto pertenece a la categoría seleccionada o si la categoría es "all"
            if (product.category == category || category == "all") {
                // Crear un elemento div para el producto
                var productDiv = $("<div></div>");
                // Agregar la clase "product" al div
                productDiv.addClass("product");
                // Agregar el atributo "data-name" al div con el nombre del producto
                productDiv.attr("data-name", product.name);
                // Agregar el atributo "data-price" al div con el precio del producto
                productDiv.attr("data-price", product.price);
                // Agregar el atributo "data-image" al div con la url de la imagen del producto
                productDiv.attr("data-image", product.image);
                // Agregar el atributo "data-category" al div con la categoría del producto
                productDiv.attr("data-category", product.category);
                // Crear un elemento img para la imagen del producto
                var productImg = $("<img>");
                // Agregar la clase "product-image" al img
                productImg.addClass("product-image");
                // Agregar el atributo "src" al img con la url de la imagen del producto
                productImg.attr("src", product.image);
                // Agregar el elemento img al div del producto
                productDiv.append(productImg);
                // Crear un elemento h5 para el nombre del producto
                var productName = $("<h5></h5>");
                // Agregar la clase "product-name" al h5
                productName.addClass("product-name");
                // Agregar el texto del nombre del producto al h5
                productName.text(product.name);
                // Agregar el elemento h5 al div del producto
                productDiv.append(productName);
                // Crear un elemento p para el precio del producto
                var productPrice = $("<p></p>");
                // Agregar la clase "product-price" al p
                productPrice.addClass("product-price");
                // Agregar el texto del precio del producto al p con el símbolo $
                productPrice.text("$" + product.price);
                // Agregar el elemento p al div del producto
                productDiv.append(productPrice);
                // Crear un elemento button para el botón de agregar al carrito
                var productAdd = $("<button></button>");
                // Agregar la clase "btn btn-primary product-add" al button
                productAdd.addClass("btn btn-primary product-add");
                // Agregar el texto "Agregar" al button
                productAdd.text("Agregar");
                // Agregar el elemento button al div del producto
                productDiv.append(productAdd);
                // Agregar el div del producto al grid del contenido
                $(".content-grid").append(productDiv);
            }
        }
    }

    // Función para agregar un producto al carrito
    function addToCart(product) {
        // Verificar si el producto ya está en el carrito
        var found = false;
        for (var i = 0; i < cart.length; i++) {
            // Obtener el producto del carrito
            var cartProduct = cart[i];
            // Comparar el nombre del producto con el del carrito
            if (product.name == cartProduct.name) {
                // Incrementar la cantidad del producto en el carrito
                cartProduct.quantity++;
                // Actualizar el total del carrito
                total += product.price;
                // Indicar que el producto se encontró en el carrito
                found = true;
                // Salir del bucle
                break;
            }
        }
        // Si el producto no se encontró en el carrito
        if (!found) {
            // Crear un objeto con el nombre, el precio, la imagen y la cantidad del producto
            var cartProduct = {
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            };
            // Agregar el objeto al array del carrito
            cart.push(cartProduct);
            // Actualizar el total del carrito
            total += product.price;
        }
        // Mostrar el carrito en la página
        showCart();
    }

    // Función para mostrar el carrito en la página
    function showCart() {
        // Vaciar el contenido anterior
        $(".cart-dropdown-body").empty();
        // Recorrer el array del carrito
        for (var i = 0; i < cart.length; i++) {
            // Obtener el producto del carrito
            var cartProduct = cart[i];
            // Crear un elemento div para el producto del carrito
            var cartItem = $("<div></div>");
            // Agregar la clase "cart-item" al div
            cartItem.addClass("cart-item");
            // Crear un elemento img para la imagen del producto del carrito
            var cartItemImage = $("<img>");
            // Agregar la clase "cart-item-image" al img
            cartItemImage.addClass("cart-item-image");
            // Agregar el atributo "src" al img con la url de la imagen del producto del carrito
            cartItemImage.attr("src", cartProduct.image);
            // Agregar el elemento img al div del producto del carrito
            cartItem.append(cartItemImage);
            // Crear un elemento div para la información del producto del carrito
            var cartItemInfo = $("<div></div>");
            // Agregar la clase "cart-item-info" al div
            cartItemInfo.addClass("cart-item-info");
            // Crear un elemento h6 para el nombre del producto del carrito
            var cartItemName = $("<h6></h6>");
            // Agregar la clase "cart-item-name" al h6
            cartItemName.addClass("cart-item-name");
            // Agregar el texto del nombre del producto del carrito al h6
            cartItemName.text(cartProduct.name);
            // Agregar el elemento h6 al div de la información del producto del carrito
            cartItemInfo.append(cartItemName);
            // Crear un elemento p para el precio del producto del carrito
            var cartItemPrice = $("<p></p>");
            // Agregar la clase "cart-item-price" al p
            cartItemPrice.addClass("cart-item-price");
            // Agregar el texto del precio del producto del carrito al p con el símbolo $
            cartItemPrice.text("$" + cartProduct.price);
            // Agregar el elemento p al div de la información del producto del carrito
            cartItemInfo.append(cartItemPrice);
            // Agregar el div de la información del producto del carrito al div del producto del carrito
            cartItem.append(cartItemInfo);
            // Crear un elemento span para la cantidad del producto del carrito
            var cartItemQuantity = $("<span></span>");
            // Agregar la clase "cart-item-quantity" al span
            cartItemQuantity.addClass("cart-item-quantity");
            // Agregar el texto de la cantidad del producto del carrito al span con el símbolo x
            cartItemQuantity.text("x" + cartProduct.quantity);
            // Agregar el elemento span al div del producto del carrito
            cartItem.append(cartItemQuantity);
            // Agregar el div del producto del carrito al body del carrito desplegable
            $(".cart-dropdown-body").append(cartItem);
        }
        // Actualizar el contador del carrito
        $(".cart-count").text(cart.length);
        // Actualizar el total del carrito
        $(".cart-total").text("Total: $" + total.toFixed(2));
    }

    // Función para vaciar el carrito
    function emptyCart() {
        // Vaciar el array del carrito
        cart = [];
        // Vaciar el total del carrito
        total = 0;
        // Mostrar el carrito en la página
        showCart();
    }

    // Función para mostrar un mensaje de agradecimiento por la compra
    function thankYou() {
        // Crear un elemento div para el mensaje
        var message = $("<div></div>");
        // Agregar la clase "alert alert-success" al div
        message.addClass("alert alert-success");
        // Agregar el atributo "role" al div con el valor "alert"
        message.attr("role", "alert");
        // Agregar el texto "Gracias por su compra, los productos serán entregados en unos días." al div
        message.text("Gracias por su compra, los productos serán entregados en unos días.");
        // Agregar el elemento div al body de la página
        $("body").append(message);
        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            message.remove();
        }, 3000);
    }

    // Función que se ejecuta cuando el documento está listo
    $(document).ready(function() {
        // Generar los productos de prueba
        generateProducts();
         // Función que se ejecuta cuando el documento está listo
    $(document).ready(function() {
        // Generar los productos de prueba
        generateProducts();
        // Mostrar los productos de la categoría "all" por defecto
        showProducts("all");
        // Asignar un evento click a los elementos de la lista de categorías
        $(".sidebar-item").click(function() {
            // Obtener la categoría del elemento clickeado
            var category = $(this).data("category");
            // Remover la clase "active" a todos los elementos de la lista
            $(".sidebar-item").removeClass("active");
            // Agregar la clase "active" al elemento clickeado
            $(this).addClass("active");
            // Mostrar los productos de la categoría seleccionada
            showProducts(category);
        });
        // Asignar un evento click a los botones de agregar al carrito
        $(document).on("click", ".product-add", function() {
            // Obtener el div del producto al que pertenece el botón
            var productDiv = $(this).parent();
            // Obtener el nombre, el precio, la imagen y la categoría del producto
            var name = productDiv.data("name");
            var price = productDiv.data("price");
            var image = productDiv.data("image");
            var category = productDiv.data("category");
            // Crear un objeto con el nombre, el precio, la imagen y la categoría del producto
            var product = {
                name: name,
                price: price,
                image: image,
                category: category
            };
            // Agregar el producto al carrito
            addToCart(product);
        });
        // Asignar un evento click al icono del carrito
        $(".cart-icon").click(function() {
            // Mostrar u ocultar el carrito desplegable
            $(".cart-dropdown").toggle();
        });
        // Asignar un evento click al botón de pagar
        $(".cart-checkout").click(function() {
            // Mostrar un mensaje de agradecimiento por la compra
            thankYou();
            // Vaciar el carrito
            emptyCart();
            // Ocultar el carrito desplegable
            $(".cart-dropdown").hide();
        });
    })});