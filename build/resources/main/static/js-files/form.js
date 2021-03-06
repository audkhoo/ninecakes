let cupcake, weddingCake, classicCake, name, price, description, image, category;

const productManager = new ProductManager();
const textBoxes = document.getElementsByClassName("form-control");
const arrayTextBoxes = Array.from(textBoxes);
const form = document.getElementsByTagName("form");
var productCategory = document.getElementById("product-category");
const textArea = arrayTextBoxes[3];
const uploadBtn = document.getElementById("upload-button");
let validCategory = false;
let validDescription = false;
var storeImage = ""






//REMOVE POP-UP ERROR MESSAGE
productCategory.addEventListener("click", () => {
    productCategory.setCustomValidity("");
    productCategory.reportValidity();
})

textArea.addEventListener("keydown", () =>{
    textArea.setCustomValidity("");
    textArea.reportValidity();
})

// VALIDATE FORM
function validateForm(){
    checkDescription();
    checkCategories();
    checkImage();
    if (validCategory && validDescription && checkImage){

        const confirmUpload = confirm("Are you okay with uploading your final product?");
        if (confirmUpload == true){
            uploadProduct();
            alert("Success!")
            //refresh page
             window.location.reload();
        }
    }
}

function checkCategories(){
    category = document.getElementById("product-category").value;
    var selectedCategory = category.value;
    if (selectedCategory == "select"){
        productCategory.setCustomValidity("please select one category.");
        productCategory.reportValidity();
        validCategory = false;
        return;
    } else{
        validCategory = true;
        return selectedCategory;
    }
}


function checkDescription(){
    description = document.getElementById("product-description");
    if (description.value.length < 1){
        description.setCustomValidity("please type at least 1 character.");
        description.reportValidity();
    } else{
        validDescription = true;
    }
}

function checkImage() {
    var formData = new FormData();
    var file = document.getElementById("product-image").files[0];
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();
    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Please select a valid image file');
        document.getElementById("img").value = '';
        return false;
    }
    return true;
}
function uploadProduct() {

    name = document.getElementById("product-name").value;
    price = document.getElementById("product-price").value;
    description = document.getElementById("product-description").value;

    image = document.getElementById("product-image");

    const imageUrl = image.value.replace
    ("C:\\fakepath\\", "");

    productManager.addProduct(name, description,
    imageUrl, category, price,storeImage);


}

uploadBtn.addEventListener("click", validateForm);

 // select file input
    const input = document.querySelector('#product-image');

    // add event listener
    input.addEventListener('change', () => {
        storeImage = input.files[0];
    });


