const products = [
    { id: 'p01', name: 'Argentina Home', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 113602.png' },
    { id: 'p02', name: 'Spain Retro', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 113624.png' },
    { id: 'p03', name: 'Portugal Blue', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 113640.png' },
    { id: 'p04', name: 'Portugal Black', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 113701.png' },
    { id: 'p05', name: 'Argentina B/B', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 113738.png' },
    { id: 'p06', name: 'Reze Chainsaw', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113802.png' },
    { id: 'p07', name: 'Reze Laughing', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113821.png' },
    { id: 'p08', name: 'Makima Kiss', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113841.png' },
    { id: 'p09', name: 'Makima Manga', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113859.png' },
    { id: 'p10', name: 'Makima Portrait', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113915.png' },
    { id: 'p11', name: 'Makima Div 4', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113931.png' },
    { id: 'p12', name: 'Makima Woof', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 113953.png' },
    { id: 'p13', name: 'Bleach Manga', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114010.png' },
    { id: 'p15', name: 'Luffy Pirates', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114045.png' },
    { id: 'p16', name: 'Vasto Lorde', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114106.png' },
    { id: 'p17', name: 'Ginjo Smoking', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114133.png' },
    { id: 'p18', name: 'Gojo Satoru', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114149.png' },
    { id: 'p19', name: 'Asta Black', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114210.png' },
    { id: 'p20', name: 'Akaza Upper', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114225.png' },
    { id: 'p21', name: 'Madrid Black', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114241.png' },
    { id: 'p22', name: 'OP Nakama', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114303.png' },
    { id: 'p23', name: 'OP Gear 5', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114342.png' },
    { id: 'p24', name: 'Gold-Flame', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114404.png' },
    { id: 'p25', name: 'Blue Abstract', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114420.png' },
    { id: 'p26', name: 'Red Philippines', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114437.png' },
    { id: 'p27', name: 'Maroon Custom', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114457.png' },
    { id: 'p28', name: 'Madrid Dragon', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114526.png' },
    { id: 'p29', name: 'OP Grey Tee', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114549.png' },
    { id: 'p30', name: 'Black Gear 5', price: 3000, category: 'Anime Merch', image: 'Screenshot 2026-06-14 114608.png' },
    { id: 'p31', name: 'Nekoma Red', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114621.png' },
    { id: 'p32', name: 'Purple White', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114638.png' },
    { id: 'p33', name: 'Blue Brazil', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114706.png' },
    { id: 'p34', name: 'Karasuno #10', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114725.png' },
    { id: 'p35', name: 'Japan Y-3', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114739.png' },
    { id: 'p36', name: 'PXG #99', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114801.png' },
    { id: 'p37', name: 'Japan #10 W', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114820.png' },
    { id: 'p38', name: 'Japan #10 B', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114837.png' },
    { id: 'p39', name: 'Hiori #16', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114903.png' },
    { id: 'p40', name: 'Nagi #7', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114925.png' },
    { id: 'p41', name: 'Team Z #11', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 114943.png' },
    { id: 'p42', name: 'Team W #1', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 115003.png' },
    { id: 'p43', name: 'Barca Concept', price: 3000, category: 'Jerseys', image: 'Screenshot 2026-06-14 115030.png' }
];

function render(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = list.map(p => `
        <div class="item-card">
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price} PKR</p>
            <button class="cat-btn" onclick="show('${p.id}')">View Details</button>
            <button class="btn-red" style="margin-top:10px; width:100%" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        </div>`).join('');
}

function filter(cat) { render(cat === 'All' ? products : products.filter(p => p.category === cat)); }

function show(id) {
    const p = products.find(x => x.id === id);
    const m = document.getElementById('modal');
    m.style.display = 'block';
    m.innerHTML = `<button onclick="this.parentElement.style.display='none'">Close</button>
        <div class="zoom-zone"><img src="${p.image}"></div>
        <h2>${p.name}</h2>
        <button class="btn-red" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        <div id="reviews"><h3>Reviews</h3></div>
        <textarea id="rtext" placeholder="Write a review..."></textarea>
        <button class="cat-btn" onclick="postRev()">Post Review</button>`;
}

function postRev() {
    const txt = document.getElementById('rtext').value;
    if(txt) document.getElementById('reviews').innerHTML += `<div class="review-card">${txt}</div>`;
}

document.getElementById('search').oninput = (e) => {
    const term = e.target.value.toLowerCase();
    render(products.filter(p => p.name.toLowerCase().includes(term)));
};

// --- CHECKOUT LOGIC ---
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}

function saveDetails() {
    const data = {
        name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };
    localStorage.setItem('deliveryData', JSON.stringify(data));
    window.location.href = 'payment.html';
}

function confirmOrder() {
    const delivery = JSON.parse(localStorage.getItem('deliveryData'));
    const payment = document.querySelector('input[name="payment"]:checked')?.value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!payment) return alert("Select a payment method!");
    const items = cart.map(i => i.name).join(", ");
    const msg = `New Order!%0AItems: ${items}%0AName: ${delivery.name}%0APhone: ${delivery.phone}%0AAddress: ${delivery.address}%0APayment: ${payment}`;
    window.location.href = `https://wa.me/923160916474?text=${msg}`;
}

render(products);