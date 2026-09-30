/**
 * f1kw4l.florals - Official Application Logic
 * "Crafting flowers, capturing emotions"
 * Bunga Kawat Bulu (Pipe Cleaner Florals) - Bandung
 */

// ========================================================
// 1. DATA RESMI 11 BUNGA KAWAT BULU (TERPISAH PER FOTO)
// ========================================================
const OFFICIAL_FLOWERS = [
  {
    id: "lily",
    name: "Lily",
    price: 10500,
    priceTag: "10,5k",
    type: "Bunga Utama",
    image: "assets/flowers/lily.jpg",
    desc: "Bunga Lily kawat bulu merah muda anggun dengan putik kuning cerah."
  },
  {
    id: "tulip",
    name: "Tulip",
    price: 14500,
    priceTag: "14,5k",
    type: "Bunga Utama",
    image: "assets/flowers/tulip.jpg",
    desc: "Bunga Tulip kawat bulu kelopak lembut warna pastel (kuning, pink, biru)."
  },
  {
    id: "daisy",
    name: "Daisy",
    price: 2000,
    priceTag: "2k",
    type: "Bunga & Aksen",
    image: "assets/flowers/daisy.jpg",
    desc: "Bunga Daisy mungil kawat bulu warna fuchsia cerah dengan putik kuning."
  },
  {
    id: "matahari",
    name: "Matahari",
    price: 14500,
    priceTag: "14,5k",
    type: "Bunga Utama",
    image: "assets/flowers/matahari.jpg",
    desc: "Bunga Matahari (Sunflower) mekar cerah kuning keemasan favorit wisuda."
  },
  {
    id: "gerbera",
    name: "Gerbera",
    price: 14000,
    priceTag: "14k",
    type: "Bunga Utama",
    image: "assets/flowers/gerbera.jpg",
    desc: "Bunga Gerbera kawat bulu berhelai rapat manis nuansa pastel pink."
  },
  {
    id: "mawar",
    name: "Mawar",
    price: 15000,
    priceTag: "15k",
    type: "Bunga Utama",
    image: "assets/flowers/mawar.jpg",
    desc: "Bunga Mawar kawat bulu kelopak bertingkat mewah lambang cinta abadi."
  },
  {
    id: "popy",
    name: "Popy",
    price: 15000,
    priceTag: "15k",
    type: "Bunga Utama",
    image: "assets/flowers/popy.jpg",
    desc: "Bunga Poppy kawat bulu ungu lilac anggun dengan kelopak halus."
  },
  {
    id: "akasia",
    name: "Akasia",
    price: 8000,
    priceTag: "8k",
    type: "Dedaunan Aksen",
    image: "assets/flowers/akasia.jpg",
    desc: "Daun Akasia kawat bulu hijau segar bertingkat untuk perimbun buket."
  },
  {
    id: "eucalyptus",
    name: "Eucalyptus",
    price: 2000,
    priceTag: "2k",
    type: "Dedaunan Aksen",
    image: "assets/flowers/eucalyptus.jpg",
    desc: "Daun spiral Eucalyptus kawat bulu aksen hijau alami super estetik."
  },
  {
    id: "single_l",
    name: "Single L",
    price: 2000,
    priceTag: "2k",
    type: "Dedaunan Aksen",
    image: "assets/flowers/single_l.jpg",
    desc: "Daun panjang Single L melengkung rapi untuk framing buket."
  },
  {
    id: "kuncup",
    name: "Kuncup",
    price: 2000,
    priceTag: "2k",
    type: "Bunga & Aksen",
    image: "assets/flowers/kuncup.jpg",
    desc: "Kuncup bunga kawat bulu gradasi merah putih manis pelengkap buket."
  }
];

// ========================================================
// 2. DATA PILIHAN UKURAN BUKET (Sesuai Flyer 2)
// ========================================================
const BOUQUET_SIZES = [
  {
    id: "mini",
    name: "Mini",
    stems: 1,
    desc: "1 tangkai bunga (Cocok untuk kado hemat, souvenir, atau single flower aesthetic)",
    wrappingFee: 10000,
    estimatedBasePrice: 25000
  },
  {
    id: "petite",
    name: "Petite",
    stems: 3,
    desc: "3 tangkai bunga (Kombinasi manis & minimalis untuk sahabat tersayang)",
    wrappingFee: 12000,
    estimatedBasePrice: 45000
  },
  {
    id: "small",
    name: "Small",
    stems: 5,
    desc: "5 tangkai bunga (Ukuran paling populer untuk kado ulang tahun & sidang)",
    wrappingFee: 15000,
    estimatedBasePrice: 75000
  },
  {
    id: "medium",
    name: "Medium",
    stems: 10,
    desc: "10 tangkai bunga (Rimbun & anggun, sangat pas untuk wisuda & anniversary)",
    wrappingFee: 20000,
    estimatedBasePrice: 150000
  },
  {
    id: "large",
    name: "Large",
    stems: 20,
    desc: "20 tangkai bunga (Mewah & mekar megah untuk momen teristimewa)",
    wrappingFee: 25000,
    estimatedBasePrice: 285000
  },
  {
    id: "super_large",
    name: "Super Large",
    stems: 30,
    desc: "30 tangkai bunga (Super rimbun dan spektakuler penuh warna)",
    wrappingFee: 35000,
    estimatedBasePrice: 420000
  },
  {
    id: "xl_jumbo",
    name: "XL to Jumbo",
    stems: 40,
    desc: "40 tangkai bunga (Mahakarya buket kawat bulu jumbo spektakuler)",
    wrappingFee: 45000,
    estimatedBasePrice: 575000
  },
  {
    id: "custom",
    name: "Ukuran Custom",
    stems: 0,
    desc: "Tersedia ukuran custom 📌 (Bebas tentukan sendiri jumlah tangkai sesukamu!)",
    wrappingFee: 20000,
    estimatedBasePrice: 0
  }
];

// ========================================================
// 3. PAKET BUKET JADI REKOMENDASI (PRESET)
// ========================================================
const PRESET_BOUQUETS = [
  {
    id: "preset-1",
    name: "Single Tulip Velvet Mini",
    size: "Mini (1 Tangkai)",
    stemsText: "1 Tangkai Tulip Kawat Bulu + Kertas Wrapping Korea",
    price: 25000,
    image: "assets/flowers/tulip.jpg",
    desc: "Buket single flower minimalis dengan bunga tulip kawat bulu warna favorit dibalut kertas wrapping premium dan pita satin."
  },
  {
    id: "preset-2",
    name: "Petite Daisy & Tulip Sweet",
    size: "Petite (3 Tangkai)",
    stemsText: "1 Tulip + 1 Daisy + 1 Daun Eucalyptus",
    price: 45000,
    image: "assets/flowers/daisy.jpg",
    desc: "Kombinasi 3 tangkai manis nan harmonis, sangat cocok untuk kado sidang atau kejutan kecil untuk orang tersayang."
  },
  {
    id: "preset-3",
    name: "Small Graduation Sunflower Bloom",
    size: "Small (5 Tangkai)",
    stemsText: "2 Matahari + 1 Gerbera + 1 Daisy + 1 Akasia",
    price: 85000,
    image: "assets/flowers/matahari.jpg",
    desc: "Buket bunga matahari kawat bulu bertema wisuda dan kelulusan penuh harapan dan keceriaan."
  },
  {
    id: "preset-4",
    name: "Medium Romantic Rose & Lily",
    size: "Medium (10 Tangkai)",
    stemsText: "4 Mawar + 2 Lily + 2 Poppy + 2 Eucalyptus",
    price: 155000,
    image: "assets/flowers/mawar.jpg",
    desc: "Kombinasi rimbun 10 tangkai bunga kawat bulu bernuansa romantis merah muda dan lilac yang memikat hati."
  },
  {
    id: "preset-5",
    name: "Large Garden Deluxe Symphony",
    size: "Large (20 Tangkai)",
    stemsText: "Campur Mawar, Tulip, Matahari, Gerbera & Dedaunan",
    price: 295000,
    image: "assets/flowers/gerbera.jpg",
    desc: "Buket besar mewah isi 20 tangkai dengan harmoni warna-warni layaknya taman bunga abadi."
  },
  {
    id: "preset-6",
    name: "Royal XL to Jumbo 40 Tangkai",
    size: "XL to Jumbo (40 Tangkai)",
    stemsText: "40 Tangkai Bunga Kawat Bulu Lengkap + Wrapping Mewah",
    price: 580000,
    image: "assets/flowers/popy.jpg",
    desc: "Mahakarya buket ukuran jumbo spektakuler. Hadiah paling berkesan dan abadi selamanya!"
  }
];

// ========================================================
// 4. KONTAK & BRAND RESMI (Sesuai Flyer 3)
// ========================================================
const STORE_INFO = {
  name: "f1kw4l.florals",
  tagline: "Crafting flowers, capturing emotions",
  whatsappNumber: "628138771785", // +62 813-8771-785
  whatsappFormatted: "+62 813-8771-785",
  instagram: "@f1kw4l.florals",
  tiktok: "@f1kw4l",
  location: "Bandung"
};

// Kupon Promo Valid
const PROMO_CODES = {
  "F1KW4L": { discountPercent: 10, name: "Diskon Spesial f1kw4l 10%" },
  "BANDUNG": { discountFixed: 10000, name: "Potongan Rp 10.000" },
  "CRAFTING": { discountPercent: 15, name: "Diskon Promo 15%" }
};

// ========================================================
// 5. APPLICATION STATE
// ========================================================
const state = {
  cart: [],
  appliedPromo: null,
  builder: {
    selectedSizeId: "small",
    selectedStems: {}, // { flowerId: qty }
    wrappingColor: "Korean Soft Pink & White",
    addons: [],
    cardNote: ""
  }
};

// Inisialisasi default stem di builder
OFFICIAL_FLOWERS.forEach(flower => {
  state.builder.selectedStems[flower.id] = 0;
});
// Default 5 tangkai (2 Mawar + 2 Tulip + 1 Daisy)
state.builder.selectedStems["mawar"] = 2;
state.builder.selectedStems["tulip"] = 2;
state.builder.selectedStems["daisy"] = 1;

// ========================================================
// 6. UTILITY FUNCTIONS
// ========================================================
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}

function showToast(message, type = "normal") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>🌸</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function saveCartToStorage() {
  try {
    localStorage.setItem("f1kw4l_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error("Gagal simpan cart:", e);
  }
}

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem("f1kw4l_cart");
    if (data) state.cart = JSON.parse(data);
  } catch (e) {
    state.cart = [];
  }
}

// ========================================================
// 7. RENDER PRICE LIST BUNGA KAWAT BULU (FOTO INDIVIDUAL)
// ========================================================
function renderPriceListSection() {
  const container = document.getElementById("flowers-grid");
  if (!container) return;

  container.innerHTML = OFFICIAL_FLOWERS.map(flower => `
    <article class="flower-card-arch" data-id="${flower.id}">
      <div class="flower-card-media">
        <img 
          src="${flower.image}" 
          alt="Bunga Kawat Bulu ${flower.name}" 
          class="flower-card-img" 
          loading="lazy" 
        />
        <div class="price-tag-craft">${flower.priceTag}</div>
      </div>

      <div class="flower-card-details">
        <span class="flower-type-badge">${flower.type}</span>
        <h3 class="flower-name">${flower.name}</h3>
        <p class="flower-desc-short">${flower.desc}</p>

        <div class="flower-price-row">
          <span class="flower-price-val">${formatRupiah(flower.price)}</span>
          <button type="button" class="btn-add-stem-quick" data-flower-id="${flower.id}">
            + Rangkai Ini
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// ========================================================
// 8. RENDER BOUQUET SIZE OPTIONS
// ========================================================
function renderSizesSection() {
  const container = document.getElementById("sizes-cards-list");
  if (!container) return;

  container.innerHTML = BOUQUET_SIZES.map(size => {
    const badgeText = size.id === "custom" ? "📌" : `${size.stems}`;
    const estText = size.id === "custom" ? "Fleksibel" : `Mulai ${formatRupiah(size.estimatedBasePrice)}`;

    return `
      <div class="size-item-card" data-size-id="${size.id}">
        <div class="size-left-info">
          <div class="size-stem-badge">${badgeText}</div>
          <div>
            <h4 class="size-name-text">${size.name} (${size.id === "custom" ? "Custom" : `${size.stems} tangkai`})</h4>
            <p class="size-desc-text">${size.desc}</p>
          </div>
        </div>
        <div class="size-actions-box">
          <div class="size-price-est">${estText}</div>
          <button type="button" class="btn btn-sm btn-outline select-size-btn" data-size-id="${size.id}">
            Pilih Ukuran
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ========================================================
// 9. RENDER & LOGIC CUSTOM BOUQUET BUILDER (DIY)
// ========================================================
function renderBuilderControls() {
  // 1. Render Size Pills
  const sizePillsContainer = document.getElementById("builder-size-pills");
  if (sizePillsContainer) {
    sizePillsContainer.innerHTML = BOUQUET_SIZES.map(size => {
      const isChecked = size.id === state.builder.selectedSizeId ? "checked" : "";
      const label = size.id === "custom" ? "Custom" : `${size.stems} Tkg`;

      return `
        <label class="size-pill-option">
          <input type="radio" name="builder-size-radio" value="${size.id}" ${isChecked}>
          <span class="size-pill-tag">
            <strong>${size.name}</strong>
            <small>${label}</small>
          </span>
        </label>
      `;
    }).join("");
  }

  // 2. Render Stem Pickers dengan Foto Bunga Terpisah
  const stemPickerContainer = document.getElementById("builder-stem-picker");
  if (stemPickerContainer) {
    stemPickerContainer.innerHTML = OFFICIAL_FLOWERS.map(flower => {
      const qty = state.builder.selectedStems[flower.id] || 0;

      return `
        <div class="stem-pick-card" data-stem-id="${flower.id}">
          <div class="stem-pick-header">
            <img src="${flower.image}" alt="${flower.name}" class="stem-pick-thumb" />
            <div class="stem-pick-meta">
              <span class="stem-pick-name">${flower.name}</span>
              <span class="stem-pick-price">${flower.priceTag} (${formatRupiah(flower.price)})</span>
            </div>
          </div>
          <div class="stem-pick-counter">
            <button type="button" class="btn-stem-qty" data-action="minus" data-id="${flower.id}">-</button>
            <span class="stem-qty-num" id="builder-qty-${flower.id}">${qty}</span>
            <button type="button" class="btn-stem-qty" data-action="plus" data-id="${flower.id}">+</button>
          </div>
        </div>
      `;
    }).join("");
  }

  updateBuilderCalculations();
}

function updateBuilderCalculations() {
  const currentSizeObj = BOUQUET_SIZES.find(s => s.id === state.builder.selectedSizeId) || BOUQUET_SIZES[2];

  let totalStems = 0;
  let flowersSubtotal = 0;
  const stemsBreakdown = [];

  OFFICIAL_FLOWERS.forEach(flower => {
    const qty = state.builder.selectedStems[flower.id] || 0;
    if (qty > 0) {
      totalStems += qty;
      const sub = qty * flower.price;
      flowersSubtotal += sub;
      stemsBreakdown.push({
        name: flower.name,
        qty: qty,
        unitPrice: flower.price,
        subtotal: sub
      });
    }
  });

  const targetStems = currentSizeObj.stems;
  const isCustom = currentSizeObj.id === "custom";

  const counterEl = document.getElementById("stem-counter-display");
  const progressFill = document.getElementById("stem-progress-fill");
  const hintEl = document.getElementById("capacity-hint");

  if (counterEl) {
    counterEl.textContent = isCustom ? `${totalStems} Tangkai (Custom)` : `${totalStems} / ${targetStems} Tangkai`;
  }

  if (progressFill) {
    if (isCustom) {
      progressFill.style.width = "100%";
      progressFill.style.background = "linear-gradient(90deg, #c59b27, #56775d)";
    } else {
      const pct = Math.min(100, Math.round((totalStems / targetStems) * 100));
      progressFill.style.width = `${pct}%`;
      if (totalStems > targetStems) {
        progressFill.style.background = "#ef4444";
      } else if (totalStems === targetStems) {
        progressFill.style.background = "#10b981";
      } else {
        progressFill.style.background = "linear-gradient(90deg, #df547c, #c59b27)";
      }
    }
  }

  if (hintEl) {
    if (isCustom) {
      hintEl.textContent = "Ukuran Custom: Bebas memilih berapa pun tangkai bunga kawat bulu sesukamu!";
      hintEl.style.color = "var(--brand-sage)";
    } else if (totalStems === targetStems) {
      hintEl.textContent = `✓ Sempurna! Kapasitas ukuran ${currentSizeObj.name} (${targetStems} tangkai) telah terpenuhi.`;
      hintEl.style.color = "#10b981";
    } else if (totalStems < targetStems) {
      const sisa = targetStems - totalStems;
      hintEl.textContent = `Masih kurang ${sisa} tangkai lagi untuk memenuhi ukuran ${currentSizeObj.name}.`;
      hintEl.style.color = "var(--brand-craft)";
    } else {
      const lebih = totalStems - targetStems;
      hintEl.textContent = `⚠️ Melebihi kuota ${lebih} tangkai! Disarankan upgrade ukuran buket di atasnya.`;
      hintEl.style.color = "#ef4444";
    }
  }

  const wrappingFee = currentSizeObj.wrappingFee;
  let addonsFee = 0;
  state.builder.addons.forEach(a => addonsFee += a.price);

  const grandTotal = flowersSubtotal + wrappingFee + addonsFee;

  const invSizeName = document.getElementById("invoice-size-name");
  const invStemsCount = document.getElementById("invoice-stems-count");
  const invWrapping = document.getElementById("invoice-wrapping-name");
  const invList = document.getElementById("invoice-stems-list");
  const invFlowersSub = document.getElementById("invoice-flowers-subtotal");
  const invWrappingFee = document.getElementById("invoice-wrapping-fee");
  const rowAddons = document.getElementById("row-invoice-addons");
  const invAddonsFee = document.getElementById("invoice-addons-fee");
  const invGrandTotal = document.getElementById("invoice-grand-total");

  if (invSizeName) invSizeName.textContent = `${currentSizeObj.name} (${currentSizeObj.id === 'custom' ? 'Custom' : `${currentSizeObj.stems} Tangkai`})`;
  if (invStemsCount) invStemsCount.textContent = `${totalStems} Tangkai`;
  if (invWrapping) invWrapping.textContent = state.builder.wrappingColor;

  if (invList) {
    if (stemsBreakdown.length === 0) {
      invList.innerHTML = `<p class="empty-stems-text">Belum ada bunga yang dipilih. Silakan klik (+) pada bunga kawat bulu.</p>`;
    } else {
      invList.innerHTML = stemsBreakdown.map(item => `
        <div class="invoice-stem-item">
          <span>• ${item.name} (x${item.qty})</span>
          <strong>${formatRupiah(item.subtotal)}</strong>
        </div>
      `).join("");
    }
  }

  if (invFlowersSub) invFlowersSub.textContent = formatRupiah(flowersSubtotal);
  if (invWrappingFee) invWrappingFee.textContent = formatRupiah(wrappingFee);

  if (rowAddons && invAddonsFee) {
    if (addonsFee > 0) {
      rowAddons.hidden = false;
      invAddonsFee.textContent = formatRupiah(addonsFee);
    } else {
      rowAddons.hidden = true;
    }
  }

  if (invGrandTotal) invGrandTotal.textContent = formatRupiah(grandTotal);

  return {
    sizeObj: currentSizeObj,
    totalStems,
    flowersSubtotal,
    wrappingFee,
    addonsFee,
    grandTotal,
    stemsBreakdown
  };
}

// ========================================================
// 10. RENDER PRESET BOUQUETS (PAKET JADI)
// ========================================================
function renderPresetBouquets() {
  const container = document.getElementById("preset-bouquets-grid");
  if (!container) return;

  container.innerHTML = PRESET_BOUQUETS.map(preset => `
    <article class="preset-card" data-preset-id="${preset.id}">
      <div class="preset-img-wrap">
        <span class="preset-size-badge">${preset.size}</span>
        <img src="${preset.image}" alt="${preset.name}" class="preset-img" loading="lazy" />
      </div>

      <div class="preset-content">
        <h3 class="preset-title">${preset.name}</h3>
        <div class="preset-stems-desc">🌸 ${preset.stemsText}</div>
        <p class="preset-desc">${preset.desc}</p>

        <div class="preset-bottom-row">
          <span class="preset-price">${formatRupiah(preset.price)}</span>
          <button type="button" class="btn btn-sm btn-primary btn-add-preset" data-preset-id="${preset.id}">
            + Pesan Paket
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// ========================================================
// 11. KERANJANG BELANJA & TOTAL HARGA TRANSAKSI
// ========================================================
const cartDialog = document.getElementById("cart-dialog");

function openCartDialog() {
  if (!cartDialog) return;
  renderCart();
  cartDialog.showModal();
}

function closeCartDialog() {
  if (cartDialog && cartDialog.open) {
    cartDialog.close();
  }
}

if (cartDialog) {
  cartDialog.addEventListener("click", (e) => {
    const rect = cartDialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) cartDialog.close();
  });
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeNav = document.getElementById("cart-count");
  const badgeFloating = document.getElementById("floating-cart-count");
  const textItems = document.getElementById("cart-items-count-text");

  if (badgeNav) badgeNav.textContent = totalCount;
  if (badgeFloating) badgeFloating.textContent = totalCount;
  if (textItems) textItems.textContent = `${totalCount} Buket`;
}

function renderCart() {
  const emptyState = document.getElementById("empty-cart-state");
  const contentWrapper = document.getElementById("cart-content-wrapper");
  const itemsContainer = document.getElementById("cart-items-list");
  if (!emptyState || !contentWrapper || !itemsContainer) return;

  if (state.cart.length === 0) {
    emptyState.style.display = "block";
    contentWrapper.style.display = "none";
    updateCartTotals();
    return;
  }

  emptyState.style.display = "none";
  contentWrapper.style.display = "grid";

  itemsContainer.innerHTML = state.cart.map((cartItem, index) => {
    const itemTotal = cartItem.unitPrice * cartItem.quantity;
    const stemsListText = cartItem.stemsText || "Buket Kawat Bulu Pilihan";
    const noteText = cartItem.cardNote ? `"${cartItem.cardNote}"` : "(Tanpa kartu ucapan)";
    const thumbImg = cartItem.image || "assets/flowers/lily.jpg";

    return `
      <div class="cart-item-card" data-index="${index}">
        <img src="${thumbImg}" alt="${cartItem.title}" class="cart-item-thumb-flower" />
        <div class="cart-item-details">
          <h4 class="cart-item-name">${cartItem.title}</h4>
          <div class="cart-item-size-tag">Ukuran: ${cartItem.sizeName} • Wrapping: ${cartItem.wrappingColor}</div>
          <div class="cart-item-stems-text">💐 Rincian: ${stemsListText}</div>
          ${cartItem.addonsText ? `<div class="cart-item-size-tag">✨ Add-on: ${cartItem.addonsText}</div>` : ""}
          <div class="cart-item-note">💌 Ucapan: ${noteText}</div>

          <div class="cart-item-bottom">
            <div class="qty-stepper">
              <button type="button" class="btn-qty" data-cart-action="minus" data-index="${index}">-</button>
              <input type="number" value="${cartItem.quantity}" min="1" readonly />
              <button type="button" class="btn-qty" data-cart-action="plus" data-index="${index}">+</button>
            </div>
            <div class="cart-item-price">${formatRupiah(itemTotal)}</div>
            <button type="button" class="btn-remove-item" data-cart-action="remove" data-index="${index}">
              🗑️ Hapus
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  updateCartTotals();
}

function updateCartTotals() {
  const summaryQty = document.getElementById("summary-qty");
  const summarySubtotal = document.getElementById("summary-subtotal");
  const summaryShipping = document.getElementById("summary-shipping");
  const summaryDiscount = document.getElementById("summary-discount");
  const summaryGrandTotal = document.getElementById("summary-grand-total");
  const rowDiscount = document.getElementById("row-discount");
  const deliverySelect = document.getElementById("order-delivery");

  let totalQty = 0;
  let subtotal = 0;

  state.cart.forEach(item => {
    totalQty += item.quantity;
    subtotal += item.unitPrice * item.quantity;
  });

  let shippingCost = 20000;
  if (deliverySelect) {
    const selected = deliverySelect.options[deliverySelect.selectedIndex];
    shippingCost = Number(selected.getAttribute("data-cost") || 0);
  }

  let discountAmount = 0;
  if (state.appliedPromo && subtotal > 0) {
    if (state.appliedPromo.discountPercent) {
      discountAmount = Math.round((subtotal * state.appliedPromo.discountPercent) / 100);
    } else if (state.appliedPromo.discountFixed) {
      discountAmount = state.appliedPromo.discountFixed;
    }
  }

  const grandTotal = Math.max(0, subtotal + shippingCost - discountAmount);

  if (summaryQty) summaryQty.textContent = totalQty;
  if (summarySubtotal) summarySubtotal.textContent = formatRupiah(subtotal);
  if (summaryShipping) summaryShipping.textContent = formatRupiah(shippingCost);

  if (rowDiscount) {
    if (discountAmount > 0) {
      rowDiscount.hidden = false;
      if (summaryDiscount) summaryDiscount.textContent = `- ${formatRupiah(discountAmount)}`;
    } else {
      rowDiscount.hidden = true;
    }
  }

  if (summaryGrandTotal) summaryGrandTotal.textContent = formatRupiah(grandTotal);

  return { totalQty, subtotal, shippingCost, discountAmount, grandTotal };
}

// ========================================================
// 12. CHECKOUT KE WHATSAPP (Sesuai Kontak f1kw4l.florals)
// ========================================================
function sendOrderToWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Keranjang Anda masih kosong. Silakan tambahkan buket terlebih dahulu!");
    return;
  }

  const nameInput = document.getElementById("order-name");
  const phoneInput = document.getElementById("order-phone");
  const dateInput = document.getElementById("order-date");
  const addressInput = document.getElementById("order-address");
  const deliverySelect = document.getElementById("order-delivery");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const date = dateInput ? dateInput.value : "";
  const address = addressInput ? addressInput.value.trim() : "";
  const deliveryMethod = deliverySelect ? deliverySelect.options[deliverySelect.selectedIndex].text : "Bandung";

  if (!name) {
    alert("Harap mengisi Nama Pemesan!");
    nameInput?.focus();
    return;
  }
  if (!phone) {
    alert("Harap mengisi Nomor WhatsApp / HP!");
    phoneInput?.focus();
    return;
  }
  if (!date) {
    alert("Harap menentukan Tanggal Pengiriman!");
    dateInput?.focus();
    return;
  }

  const totals = updateCartTotals();

  let itemsListText = "";
  state.cart.forEach((item, idx) => {
    const itemTotal = item.unitPrice * item.quantity;
    const note = item.cardNote ? `"${item.cardNote}"` : "(Tanpa ucapan)";
    const addons = item.addonsText || "-";

    itemsListText += `\n${idx + 1}. *${item.title}* (x${item.quantity})\n`;
    itemsListText += `   • Ukuran: ${item.sizeName}\n`;
    itemsListText += `   • Rincian Bunga: ${item.stemsText}\n`;
    itemsListText += `   • Warna Wrapping: ${item.wrappingColor}\n`;
    itemsListText += `   • Add-on: ${addons}\n`;
    itemsListText += `   • Kartu Ucapan: ${note}\n`;
    itemsListText += `   • Subtotal: ${formatRupiah(itemTotal)}\n`;
  });

  const message =
`🌸 *PESANAN BUKET KAWAT BULU - F1KW4L.FLORALS* 🌸
"Crafting flowers, capturing emotions"
--------------------------------------------------
Halo Kak f1kw4l.florals, saya ingin memesan buket bunga kawat bulu dengan rincian:

👤 *DATA PEMESAN:*
• Nama Pemesan: *${name}*
• No. WhatsApp: *${phone}*
• Tanggal Diperlukan: *${date}*
• Metode Pengiriman: *${deliveryMethod}*
• Alamat Pengiriman: ${address || "Ambil sendiri di Bandung"}

💐 *RINCIAN BUKET YANG DIPESAN:*${itemsListText}
--------------------------------------------------
💰 *RINGKASAN TOTAL HARGA:*
• Total Buket: ${totals.totalQty} buket
• Subtotal: ${formatRupiah(totals.subtotal)}
• Estimasi Ongkir: ${formatRupiah(totals.shippingCost)}
${totals.discountAmount > 0 ? `• Diskon Kupon: -${formatRupiah(totals.discountAmount)}\n` : ""}
👉 *TOTAL PEMBAYARAN: ${formatRupiah(totals.grandTotal)}*
--------------------------------------------------
Mohon info ketersediaan slot pengerjaan dan nomor rekening pembayarannya ya kak. Terima kasih! 🌸✨`;

  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedText}`;
  window.open(waUrl, "_blank");

  showToast("Membuka WhatsApp f1kw4l.florals...", "success");
}

// ========================================================
// 13. EVENT LISTENERS & INITIALIZATION
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  updateCartBadge();
  renderPriceListSection();
  renderSizesSection();
  renderBuilderControls();
  renderPresetBouquets();

  // Date input min today
  const dateInput = document.getElementById("order-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // --- Header Sticky ---
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header?.classList.add("scrolled");
    else header?.classList.remove("scrolled");
  });

  // --- Mobile Menu ---
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-menu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      const open = navMenu.classList.toggle("active");
      mobileBtn.setAttribute("aria-expanded", open);
    });
    navMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Quick Add from Price List Grid ---
  document.getElementById("flowers-grid")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add-stem-quick");
    if (!btn) return;
    const flowerId = btn.getAttribute("data-flower-id");
    if (flowerId) {
      state.builder.selectedStems[flowerId] = (state.builder.selectedStems[flowerId] || 0) + 1;
      const countEl = document.getElementById(`builder-qty-${flowerId}`);
      if (countEl) countEl.textContent = state.builder.selectedStems[flowerId];
      updateBuilderCalculations();
      showToast(`+1 tangkai ${flowerId} ditambahkan ke Custom Builder!`);
      window.location.hash = "#custom-builder";
    }
  });

  // --- Size Section Actions ---
  document.getElementById("sizes-cards-list")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".select-size-btn");
    if (!btn) return;
    const sizeId = btn.getAttribute("data-size-id");
    if (sizeId) {
      state.builder.selectedSizeId = sizeId;
      const radio = document.querySelector(`input[name="builder-size-radio"][value="${sizeId}"]`);
      if (radio) radio.checked = true;
      updateBuilderCalculations();
      window.location.hash = "#custom-builder";
      showToast(`Ukuran buket diatur ke: ${sizeId.toUpperCase()}`);
    }
  });

  // --- Custom Builder: Size Radio Pill Change ---
  document.getElementById("builder-size-pills")?.addEventListener("change", (e) => {
    if (e.target.name === "builder-size-radio") {
      state.builder.selectedSizeId = e.target.value;
      updateBuilderCalculations();
    }
  });

  // --- Custom Builder: Stem Counter (+/-) ---
  document.getElementById("builder-stem-picker")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-stem-qty");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const id = btn.getAttribute("data-id");
    let current = state.builder.selectedStems[id] || 0;

    if (action === "plus") {
      state.builder.selectedStems[id] = current + 1;
    } else if (action === "minus" && current > 0) {
      state.builder.selectedStems[id] = current - 1;
    }

    const countEl = document.getElementById(`builder-qty-${id}`);
    if (countEl) countEl.textContent = state.builder.selectedStems[id];

    updateBuilderCalculations();
  });

  // --- Custom Builder: Wrapping & Addons ---
  document.getElementById("builder-wrapping")?.addEventListener("change", (e) => {
    state.builder.wrappingColor = e.target.value;
    updateBuilderCalculations();
  });

  const addonCheckboxes = [
    { id: "builder-addon-led", name: "Lampu LED Fairy Lights", price: 15000 },
    { id: "builder-addon-boneka", name: "Boneka Teddy Wisuda", price: 20000 },
    { id: "builder-addon-parfum", name: "Parfum Floral Spray", price: 10000 },
    { id: "builder-addon-paperbag", name: "Paper Bag Eksklusif", price: 15000 }
  ];

  addonCheckboxes.forEach(addon => {
    const el = document.getElementById(addon.id);
    if (el) {
      el.addEventListener("change", () => {
        state.builder.addons = addonCheckboxes
          .filter(a => document.getElementById(a.id)?.checked)
          .map(a => ({ name: a.name, price: a.price }));
        updateBuilderCalculations();
      });
    }
  });

  // --- Add Custom Builder Buket to Cart ---
  document.getElementById("btn-add-builder-to-cart")?.addEventListener("click", () => {
    const calc = updateBuilderCalculations();
    if (calc.totalStems === 0) {
      alert("Harap memilih minimal 1 tangkai bunga kawat bulu terlebih dahulu!");
      return;
    }

    const noteInput = document.getElementById("builder-card-note");
    const note = noteInput ? noteInput.value.trim() : "";
    const stemsText = calc.stemsBreakdown.map(s => `${s.qty}x ${s.name}`).join(", ");
    const addonsText = state.builder.addons.map(a => a.name).join(", ");
    const firstStem = OFFICIAL_FLOWERS.find(f => state.builder.selectedStems[f.id] > 0);

    state.cart.push({
      id: Date.now(),
      title: `Buket Custom Bunga Kawat Bulu (${calc.sizeObj.name})`,
      sizeName: calc.sizeObj.name,
      wrappingColor: state.builder.wrappingColor,
      stemsText: stemsText,
      addonsText: addonsText,
      cardNote: note,
      image: firstStem ? firstStem.image : "assets/flowers/lily.jpg",
      unitPrice: calc.grandTotal,
      quantity: 1
    });

    saveCartToStorage();
    updateCartBadge();
    showToast("Buket custom berhasil masuk keranjang!", "success");
    openCartDialog();
  });

  // --- Direct WA from Builder ---
  document.getElementById("btn-direct-wa-builder")?.addEventListener("click", () => {
    const calc = updateBuilderCalculations();
    if (calc.totalStems === 0) {
      alert("Harap memilih minimal 1 tangkai bunga kawat bulu!");
      return;
    }

    const noteInput = document.getElementById("builder-card-note");
    const note = noteInput ? noteInput.value.trim() : "";
    const stemsText = calc.stemsBreakdown.map(s => `• ${s.qty}x ${s.name} = ${formatRupiah(s.subtotal)}`).join("\n");
    const addonsText = state.builder.addons.length > 0 ? state.builder.addons.map(a => a.name).join(", ") : "-";

    const msg =
`🌸 *PESANAN BUKET KAWAT BULU - F1KW4L.FLORALS* 🌸
"Crafting flowers, capturing emotions"
--------------------------------------------------
Halo Kak f1kw4l.florals, saya mau pesan buket custom dengan rincian berikut:

💐 *RINCIAN BUKET:*
• Ukuran: ${calc.sizeObj.name} (${calc.totalStems} Tangkai)
• Bunga yang Dipilih:
${stemsText}
• Warna Wrapping: ${state.builder.wrappingColor}
• Add-on Tambahan: ${addonsText}
• Pesan Kartu Ucapan: "${note || "(Kosong)"}"

💰 *ESTIMASI TOTAL HARGA:*
• Total Bunga: ${formatRupiah(calc.flowersSubtotal)}
• Jasa Rangkai & Wrapping: ${formatRupiah(calc.wrappingFee)}
${calc.addonsFee > 0 ? `• Add-on: ${formatRupiah(calc.addonsFee)}\n` : ""}
👉 *TOTAL BUKET: ${formatRupiah(calc.grandTotal)}*
--------------------------------------------------
Mohon info ketersediaan slot pengerjaan di Bandung ya kak. Terima kasih! 🌸✨`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  });

  // --- Preset Bouquets Add to Cart ---
  document.getElementById("preset-bouquets-grid")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add-preset");
    if (!btn) return;
    const presetId = btn.getAttribute("data-preset-id");
    const preset = PRESET_BOUQUETS.find(p => p.id === presetId);
    if (!preset) return;

    state.cart.push({
      id: Date.now(),
      title: preset.name,
      sizeName: preset.size,
      wrappingColor: "Korean Soft Pink & White",
      stemsText: preset.stemsText,
      addonsText: "",
      cardNote: "Kartu Ucapan Paket",
      image: preset.image,
      unitPrice: preset.price,
      quantity: 1
    });

    saveCartToStorage();
    updateCartBadge();
    showToast(`"${preset.name}" masuk ke keranjang!`, "success");
    openCartDialog();
  });

  // --- Cart Toggle & Drawer ---
  document.getElementById("btn-open-cart")?.addEventListener("click", openCartDialog);
  document.getElementById("floating-cart")?.addEventListener("click", openCartDialog);
  document.getElementById("close-cart-modal")?.addEventListener("click", closeCartDialog);

  // --- Cart Item Actions (+, -, Remove) ---
  document.getElementById("cart-items-list")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.getAttribute("data-cart-action");
    const idx = Number(btn.getAttribute("data-index"));

    if (action === "plus") {
      state.cart[idx].quantity += 1;
    } else if (action === "minus") {
      if (state.cart[idx].quantity > 1) state.cart[idx].quantity -= 1;
      else state.cart.splice(idx, 1);
    } else if (action === "remove") {
      state.cart.splice(idx, 1);
    }

    saveCartToStorage();
    updateCartBadge();
    renderCart();
  });

  // --- Delivery Method Change in Cart ---
  document.getElementById("order-delivery")?.addEventListener("change", () => {
    updateCartTotals();
  });

  // --- Promo Code Application ---
  const promoBtn = document.getElementById("btn-apply-promo");
  const promoInput = document.getElementById("promo-code");
  const promoFeedback = document.getElementById("promo-message");

  if (promoBtn && promoInput) {
    promoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;

      if (PROMO_CODES[code]) {
        state.appliedPromo = PROMO_CODES[code];
        if (promoFeedback) {
          promoFeedback.className = "promo-feedback success";
          promoFeedback.textContent = `✓ Kupon Aktif: ${PROMO_CODES[code].name}`;
        }
        updateCartTotals();
        showToast(`Kupon ${code} berhasil dipasang!`, "success");
      } else {
        state.appliedPromo = null;
        if (promoFeedback) {
          promoFeedback.className = "promo-feedback error";
          promoFeedback.textContent = "✕ Kupon tidak valid. Coba: F1KW4L";
        }
        updateCartTotals();
      }
    });
  }

  // --- Send WhatsApp Checkout ---
  document.getElementById("btn-send-whatsapp")?.addEventListener("click", sendOrderToWhatsApp);

  // --- Flyer Zoom Modal ---
  const pricelistModal = document.getElementById("pricelist-dialog");
  document.getElementById("btn-open-pricelist-modal")?.addEventListener("click", () => {
    pricelistModal?.showModal();
  });
  document.querySelector(".btn-zoom-flyer")?.addEventListener("click", () => {
    pricelistModal?.showModal();
  });
  document.getElementById("close-pricelist-modal")?.addEventListener("click", () => {
    pricelistModal?.close();
  });
  if (pricelistModal) {
    pricelistModal.addEventListener("click", (e) => {
      const rect = pricelistModal.getBoundingClientRect();
      const isIn = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isIn) pricelistModal.close();
    });
  }
});
