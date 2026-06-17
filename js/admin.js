const db = firebase.firestore();

function addProduct() {

const name = document.getElementById("productName").value;
const description = document.getElementById("description").value;
const price = document.getElementById("price").value;
const offer = document.getElementById("offer").value;
const size = document.getElementById("size").value;
const image = document.getElementById("image").value;

db.collection("products").add({
    name: name,
    description: description,
    price: price,
    offer: offer,
    size: size,
    image: image
})
.then(() => {
    alert("Product Added Successfully");
})
.catch((error) => {
    alert(error.message);
});

}
