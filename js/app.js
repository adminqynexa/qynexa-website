db.collection("products")
  .get()
  .then((snapshot) => {

    let output = "";

    snapshot.forEach((doc) => {

      const product = doc.data();

      output += `
        <div class="product-card">
          <img src="${product.image}" width="250">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <p>${product.offer}</p>

          <a href="https://wa.me/91XXXXXXXXXX?text=I want to order ${product.name}">
            <button>Order on WhatsApp</button>
          </a>

        </div>
      `;
    });

    document.getElementById("product-list").innerHTML = output;

  });
