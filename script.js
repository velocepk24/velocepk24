const products = [
    { id: 'f1', name: 'Maroon Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.32 AM.jp.jpeg' },
    { id: 'f2', name: 'Black Gold Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.32 AM.jpe.jpeg' },
    { id: 'f3', name: 'Black Red Pattern Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.32 AM.jpeg' },
    { id: 'f4', name: 'Blue Adidas Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.32 AM.jpeghh.jpeg' },
    { id: 'f5', name: 'Black Nomis Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.33 AM.jpegb.jpeg' },
    { id: 'f6', name: 'Blue Orange Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.33 AM.jpegf.jpeg' },
    { id: 'f7', name: 'Multi-color Pattern Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.33 AM.jpegn.jpeg' },
    { id: 'f8', name: 'Classic Pro Cleats', price: 8499, category: 'Footwear', image: 'WhatsApp Image 2026-06-23 at 11.42.34 AM.jpeg' },
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

let cart = [];
function render(list) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = list.map(p => `
        <div class="item-card">
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price} PKR</p>
            <button class="btn-red" onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        </div>`).join('');
}
function filter(cat) { render(cat === 'All' ? products : products.filter(p => p.category === cat)); }
function addToCart(name, price) { cart.push({name, price}); alert(name + " added!"); }
function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
    document.getElementById('modal-body').innerHTML = `<h2>Cart</h2>` + cart.map((i,idx) => `<p>${i.name} - ${i.price}</p>`).join('') +
    `<button class="btn-blue" onclick="step1()">Continue</button>`;
}
function step1() { document.getElementById('modal-body').innerHTML = `<h2>Details</h2><input id="name" placeholder="Name"><input id="addr" placeholder="Address"><input id="phone" placeholder="Phone"><button class="btn-blue" onclick="step2()">Next</button>`; }
function step2() { document.getElementById('modal-body').innerHTML = `<h2>Payment</h2><p>EasyPaisa: 0332 5348767</p><input type="radio" name="p" value="EP"> EasyPaisa<input type="radio" name="p" value="COD"> COD<button class="btn-blue" onclick="finish()">Order</button>`; }
function finish() { window.open(`https://wa.me/923160916474?text=${encodeURIComponent("Order: " + cart.map(i=>i.name).join(", "))}`, '_blank'); }
render(products);