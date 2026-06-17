// Qynexa Admin Panel

const auth = firebase.auth();
const db = firebase.firestore();

// Login Function

function login() {

```
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email, password)

.then((userCredential) => {

    alert("Login Successful!");

    console.log(userCredential.user.email);

})

.catch((error) => {

    alert(error.message);

    console.error(error);

});
```

}

// Add Product Function

function addProduct() {

```
const name = document.getElementById("productName").value;
const description = document.getElementById("description").value;
const price = document.getElementById("price").value;
const offer = document.getElementById("offer").value;
const size = document.getElementById("size").value;
const image = document.getElementById("image").value;

if (
    name === "" ||
    description === "" ||
    price === "" ||
    offer === "" ||
    size === "" ||
    image === ""
) {
    alert("Please fill all fields");
    return;
}

db.collection("products")
.add({
    name: name,
    description: description,
    price: price,
    offer: offer,
    size: size,
    image: image,
    createdAt: new Date()
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

    console.error(error);

});
```

}

// Make functions available globally

window.login = login;
window.addProduct = addProduct;
