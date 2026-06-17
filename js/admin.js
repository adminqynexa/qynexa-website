// Firebase References
const auth = firebase.auth();
const db = firebase.firestore();

// Login Function
function login() {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email, password)
.then(() => {
    alert("Login Successful");
})
.catch((error) => {
    alert(error.message);
});

}

// Add Product Function
function addProduct() {

const name = document.getElementById("productName").value;
const description = document.getElementById("description").value;
const price = document.getElementById("price").value;
const offer = document.getElementById("offer").value;
const size = document.getElementById("size").value;
const image = document.getElementById("image").value;

db.collection("products").add({
    name,
    description,
    price,
    offer,
    size,
    image
})
.then(() => {
    alert("Product Added Successfully");

    document.getElementById("productName").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("offer").value = "";
    document.getElementById("size").value = "";
    document.getElementById("image").value = "";
})
.catch((error) => {
    alert(error.message);
});

}

// Make functions available to HTML buttons
window.login = login;
window.addProduct = addProduct;
