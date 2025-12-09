import { AddProductsCards } from "./ProductsCatalog.js"; 
import { SetShoppingCartProcess } from "./ShoppingCart.js"; 
import { SetBuyProcess } from "./Buy.js";

export {
    main,
    productsContainer,
    mainSectionLoader,
    cartContainer,
    buyContainer
}

// Menu Buttons references
const menuProductsButton = document.querySelector('#menu-products-button');
const menuProductsButtonImage = document.querySelector('#menu-products-button img');
const menuCartButton = document.querySelector('#menu-cart-button');
const menuCartButtonImage = document.querySelector('#menu-cart-button img');
const menuBuyButton = document.querySelector('#menu-buy-button');
const menuBuyButtonImage = document.querySelector('#menu-buy-button img');

// Sections containers references
const main = document.querySelector('main');
const productsContainer = document.querySelector('#products-container');
const cartContainer = document.querySelector('#cart-container');
const buyContainer = document.querySelector('#buy-container');

// Other DOM Elements
const orderByLabel = document.querySelector('#order-by-label');
const manageInventoryButton = document.querySelector('#manage-inventory-button');
const mainSectionLoader = document.querySelector('#main-section-loader');


// ---------------------------------------------------------
// DOM Events

menuProductsButton.addEventListener('click', () => {
    ShowProductsSection();
});

menuCartButton.addEventListener('click', () => {
    ShowCartSection();
});

menuBuyButton.addEventListener('click', () => {
    ShowBuySection();
});


// ---------------------------------------------------------
// FUNCTIONS

// Constants for magic numbers
const INVENTORY_BUTTON_HIDDEN_POSITION = '-222px';
const INVENTORY_BUTTON_VISIBLE_POSITION = '0';

// Helper function to set active menu button
function SetActiveMenuButton(activeButton, activeImage, inactiveButtons, inactiveImages) {
    activeButton.classList.add('menu-button-active');
    activeButton.classList.remove('menu-button');
    
    inactiveButtons.forEach(button => {
        button.classList.add('menu-button');
        button.classList.remove('menu-button-active');
    });
}

function ShowProductsSection() {
    document.title = 'MTO | Productos';

    AddProductsCards();

    manageInventoryButton.style.bottom = INVENTORY_BUTTON_VISIBLE_POSITION;
    orderByLabel.style.display = 'flex';

    SetActiveMenuButton(
        menuProductsButton,
        menuProductsButtonImage,
        [menuCartButton, menuBuyButton],
        [menuCartButtonImage, menuBuyButtonImage]
    );

    menuProductsButtonImage.src = 'Recursos/imagenes/WEBP/IconoProductos-Activo.webp';
    menuCartButtonImage.src = 'Recursos/imagenes/WEBP/IconoCarritoCompras.webp';
    menuBuyButtonImage.src = 'Recursos/imagenes/WEBP/IconoCompra.webp';

    productsContainer.style.display = 'flex';
    cartContainer.style.display = 'none';
    buyContainer.style.display = 'none';
}

function ShowCartSection() {
    document.title = 'MTO | Carro';

    manageInventoryButton.style.bottom = INVENTORY_BUTTON_HIDDEN_POSITION;
    orderByLabel.style.display = 'none';

    SetActiveMenuButton(
        menuCartButton,
        menuCartButtonImage,
        [menuProductsButton, menuBuyButton],
        [menuProductsButtonImage, menuBuyButtonImage]
    );

    menuProductsButtonImage.src = 'Recursos/imagenes/WEBP/IconoProductos.webp';
    menuCartButtonImage.src = 'Recursos/imagenes/WEBP/IconoCarritoCompras-Activo.webp';
    menuBuyButtonImage.src = 'Recursos/imagenes/WEBP/IconoCompra.webp';

    productsContainer.style.display = 'none';
    cartContainer.style.display = 'flex';
    buyContainer.style.display = 'none';

    SetShoppingCartProcess();
}

function ShowBuySection() {
    document.title = 'MTO | Comprar';

    manageInventoryButton.style.bottom = INVENTORY_BUTTON_HIDDEN_POSITION;
    orderByLabel.style.display = 'none';

    SetActiveMenuButton(
        menuBuyButton,
        menuBuyButtonImage,
        [menuProductsButton, menuCartButton],
        [menuProductsButtonImage, menuCartButtonImage]
    );

    menuProductsButtonImage.src = 'Recursos/imagenes/WEBP/IconoProductos.webp';
    menuCartButtonImage.src = 'Recursos/imagenes/WEBP/IconoCarritoCompras.webp';
    menuBuyButtonImage.src = 'Recursos/imagenes/WEBP/IconoCompra-Activo.webp';

    productsContainer.style.display = 'none';
    cartContainer.style.display = 'none';
    buyContainer.style.display = 'flex';

    SetBuyProcess();
}