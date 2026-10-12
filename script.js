/* =========================================
   CAFE HAVEN — WEBSITE TEMPLATE
   Customize your business in this file.
   ========================================= */

/* 1. BUSINESS SETTINGS */

const cafeSettings = {
  name: "Café Haven",
  tagline: "Coffee, Comfort & Community",

  phone: "+94770000000",
  whatsapp: "94770000000",
  email: "hello@cafehaven.com",

  address: "Your Street, Your City",
  mapsUrl: "https://maps.google.com/",

  currency: "USD",
  locale: "en-US",

  openingHours: {
    weekdays: "7:00 AM – 9:00 PM",
    saturday: "7:00 AM – 10:00 PM",
    sunday: "8:00 AM – 8:00 PM"
  },

  /* Set to false to hide the opening-status message. */
  showOpeningStatus: true
};


/* 2. MENU PRODUCTS

   To add a product, copy one product object,
   change its details, and add a comma between items.

   Available categories:
   Coffee, Tea, Bakery, Desserts
*/

const products = [
  {
    id: 1,
    name: "Signature Latte",
    category: "Coffee",
    description: "Smooth espresso blended with silky steamed milk.",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    featured: true
  },
  {
    id: 2,
    name: "Classic Cappuccino",
    category: "Coffee",
    description: "Rich espresso topped with soft, airy milk foam.",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=85",
    featured: true
  },
  {
    id: 3,
    name: "Iced Coffee",
    category: "Coffee",
    description: "A refreshing chilled coffee for sunny afternoons.",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85",
    featured: false
  },
  {
    id: 4,
    name: "Fresh Green Tea",
    category: "Tea",
    description: "A gentle, refreshing cup for a quiet moment.",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85",
    featured: false
  },
  {
    id: 5,
    name: "Butter Croissant",
    category: "Bakery",
    description: "A golden, flaky pastry baked for your morning.",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    featured: true
  },
  {
    id: 6,
    name: "Chocolate Muffin",
    category: "Bakery",
    description: "A soft chocolate muffin for your little treat.",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=85",
    featured: false
  },
  {
    id: 7,
    name: "Chocolate Cake",
    category: "Desserts",
    description: "A rich chocolate dessert for sweet moments.",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    featured: true
  },
  {
    id: 8,
    name: "Classic Cheesecake",
    category: "Desserts",
    description: "Creamy cheesecake with a buttery biscuit base.",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85",
    featured: false
  }
];


/* 3. FORMAT PRICES */

function formatPrice(price) {
  try {
    return new Intl.NumberFormat(cafeSettings.locale, {
      style: "currency",
      currency: cafeSettings.currency
    }).format(price);
  } catch (error) {
    return `${cafeSettings.currency} ${Number(price).toFixed(2)}`;
  }
}


/* 4. UPDATE BUSINESS DETAILS */

function updateBusinessDetails() {
  document.querySelectorAll(".business-name").forEach((element) => {
    element.textContent = cafeSettings.name;
  });

  document.title = `${cafeSettings.name} | ${cafeSettings.tagline}`;

  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {
    description.setAttribute(
      "content",
      `${cafeSettings.name} — ${cafeSettings.tagline}. Visit us for great coffee, delicious treats, and a welcoming atmosphere.`
    );
  }

  const address = document.getElementById("cafe-address");

  if (address) {
    address.textContent = cafeSettings.address;
  }

  const phoneLink = document.getElementById("cafe-phone");

  if (phoneLink) {
    phoneLink.textContent = cafeSettings.phone;
    phoneLink.href = `tel:${cafeSettings.phone.replace(/[^\d+]/g, "")}`;
  }

  const emailLink = document.getElementById("cafe-email");

  if (emailLink) {
    emailLink.textContent = cafeSettings.email;
    emailLink.href = `mailto:${cafeSettings.email}`;
  }

  const footerPhone = document.getElementById("footer-phone");

  if (footerPhone) {
    footerPhone.textContent = cafeSettings.phone;
    footerPhone.href = `tel:${cafeSettings.phone.replace(/[^\d+]/g, "")}`;
  }

  const footerEmail = document.getElementById("footer-email");

  if (footerEmail) {
    footerEmail.textContent = cafeSettings.email;
    footerEmail.href = `mailto:${cafeSettings.email}`;
  }

  const directionsLink = document.getElementById("directions-link");

  if (directionsLink) {
    directionsLink.href = cafeSettings.mapsUrl;
  }

  const weekdayHours = document.getElementById("weekday-hours");

  if (weekdayHours) {
    weekdayHours.textContent = cafeSettings.openingHours.weekdays;
  }

  const saturdayHours = document.getElementById("saturday-hours");

  if (saturdayHours) {
    saturdayHours.textContent = cafeSettings.openingHours.saturday;
  }

  const sundayHours = document.getElementById("sunday-hours");

  if (sundayHours) {
    sundayHours.textContent = cafeSettings.openingHours.sunday;
  }

  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  updateWhatsAppLinks();
}


/* 5. WHATSAPP LINKS */

function updateWhatsAppLinks() {
  const whatsappNumber = String(cafeSettings.whatsapp).replace(/\D/g, "");

  const generalMessage = encodeURIComponent(
    `Hello ${cafeSettings.name}! I'd like to know more.`
  );

  const generalLink = `https://wa.me/${whatsappNumber}?text=${generalMessage}`;

  const whatsappButton = document.getElementById("whatsapp-order");

  if (whatsappButton) {
    whatsappButton.href = generalLink;
  }
}


/* 6. OPENING STATUS

   Uses the visitor's local device time.
   The status is approximate because opening-hours
   time zones are not configured in this simple template.
*/

function updateOpeningStatus() {
  const status = document.getElementById("opening-status");

  if (!status || !cafeSettings.showOpeningStatus) {
    if (status) {
      status.hidden = true;
    }
    return;
  }

  status.hidden = false;
  status.textContent = "Please check our opening hours before visiting.";
}


/* 7. CREATE MENU FILTER BUTTONS */

function createMenuFilters() {
  const filterContainer = document.getElementById("menu-filters");

  if (!filterContainer) return;

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  filterContainer.replaceChildren();

  categories.forEach((category, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "menu-filter";
    button.textContent = category;
    button.dataset.category = category;

    if (index === 0) {
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      filterMenu(category);

      filterContainer.querySelectorAll(".menu-filter").forEach((item) => {
        const active = item === button;

        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
    });

    filterContainer.appendChild(button);
  });
}


/* 8. RENDER MENU PRODUCTS */

function renderMenu(productList) {
  const menuGrid = document.getElementById("menu-grid");

  if (!menuGrid) return;

  menuGrid.replaceChildren();

  if (productList.length === 0) {
    const emptyMessage = document.createElement("p");

    emptyMessage.className = "menu-empty";
    emptyMessage.textContent = "No products found in this category.";

    menuGrid.appendChild(emptyMessage);
    return;
  }

  productList.forEach((product) => {
    const card = document.createElement("article");

    card.className = "menu-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "menu-card-image-wrap";

    const image = document.createElement("img");

    image.className = "menu-card-image";
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.alt = `${product.name} image unavailable`;
      image.style.display = "none";
    });

    imageWrap.appendChild(image);

    const content = document.createElement("div");
    content.className = "menu-card-content";

    const category = document.createElement("p");
    category.className = "menu-card-category";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.className = "menu-card-description";
    description.textContent = product.description;

    const bottom = document.createElement("div");
    bottom.className = "menu-card-bottom";

    const price = document.createElement("span");
    price.className = "menu-card-price";
    price.textContent = formatPrice(product.price);

    const orderButton = document.createElement("a");

    orderButton.className = "menu-order-button";
    orderButton.textContent = "Order Now";
    orderButton.href = createProductWhatsAppLink(product);
    orderButton.target = "_blank";
    orderButton.rel = "noopener noreferrer";
    orderButton.setAttribute(
      "aria-label",
      `Order ${product.name} on WhatsApp`
    );

    bottom.append(price, orderButton);
    content.append(category, name, description, bottom);
    card.append(imageWrap, content);
    menuGrid.appendChild(card);
  });
}


/* 9. FILTER MENU */

function filterMenu(category) {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  renderMenu(filteredProducts);
}


/* 10. PRODUCT WHATSAPP ORDER LINK */

function createProductWhatsAppLink(product) {
  const whatsappNumber = String(cafeSettings.whatsapp).replace(/\D/g, "");

  const message = [
    `Hello ${cafeSettings.name}!`,
    `I'd like to ask about: ${product.name}.`,
    `Listed price: ${formatPrice(product.price)}.`,
    "Please confirm availability and the final price."
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}


/* 11. MOBILE NAVIGATION */

function setupMobileNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("main-navigation");

  if (!toggle || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}


/* 12. INITIALIZE WEBSITE */

function initializeCafeWebsite() {
  updateBusinessDetails();
  updateOpeningStatus();
  createMenuFilters();
  renderMenu(products);
  setupMobileNavigation();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCafeWebsite);
} else {
  initializeCafeWebsite();
}
