const productList = document.getElementById("product-list");

db.collection("products").get().then((snapshot) => {

productList.innerHTML = "";

snapshot.forEach((doc) => {

const p = doc.data();

productList.innerHTML += `
<div class="product-card">

<img src="${p.image}" alt="${p.name}" width="250">

<h3>${p.name}</h3>

<p>${p.description}</p>

<h2>₹${p.price}</h2>

<p>${p.offer}</p>

<p>Sizes: ${p.size}</p>

<a href="https://wa.me/919999999999?text=I%20want%20to%20order%20${encodeURIComponent(p.name)}" target="_blank">
<button>Order on WhatsApp</button>
</a>

</div>
`;

});

});
