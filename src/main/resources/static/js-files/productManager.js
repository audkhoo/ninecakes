// Template for new product additions using class
function displayProductDetails(product){
    document.getElementById("modalName").innerHTML = product.name;
    document.getElementById("modalDescription").innerHTML = product.description;
    document.getElementById("img-popup").src = product.imageUrl;
    document.getElementById("modalPrice").innerHTML = `from $${product.price}`;
}

class ProductManager {

    constructor() {
        this._products = []; 
    }

    addProduct(name, description, imageUrl, category, price, imageObject) {
        var productController = this;


        console.log(name, imageObject);
        const formData = new FormData();

        /*(key,value) pair
        key (e.g 'name') needs to match with the @RequestParam from the PostMapping in your ItemController.java class
        value is the parameter that is passed from the productForm.js (e.g New T-Shirt)
        */
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('imageUrl', imageUrl);
        formData.append('price', price);
        formData.append('imageFile',imageObject);

       console.log(...formData);


        fetch('http://localhost:8080/item/add', {
//          fetch('https://ninecakes.herokuapp.com/item/add', {
             method: 'POST',
             body: formData
             })
             .then(response => response.json())
             .then(data => {
                 console.log('Success:', data);
                 alert("Successfully added to Product")
             })
             .catch((error) => {
                 console.error('Error:', error);
                 alert("Error adding item to Product")
             });

    //this._products.push(product);
    }


    //array containing product cards

//
//function displayProductDetails(item)
//{
//    document.querySelector("#modalName").innerText = item.oName;
//    document.querySelector("#modalImg").src = item.oImageUrl;
//    document.querySelector("#modalStyle").innerText = item.oStyle;
//    document.querySelector("#modalPrice").innerText = item.oPrice;
//
//}
displayItem()
    {
        var productController = this;
        productController._products = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        fetch('http://127.0.0.1:8080/item/all')
//          fetch('https://ninecakes.herokuapp.com/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        category: item.category,
                        imageUrl: item.imageUrl,
                        price: item.price

                   };
                    productController._products.push(itemObj);
              });

              productController.renderProductPage();
              console.log("Render method");

            })
            .catch(function(error) {
                console.log(error);
            });
    }


     renderProductPage() {
       console.log("!!!");
        const productHTMLList = [];
        // to loop through array, replaces for loop
        this._products.forEach((element, index) => {
            element.id = index;
            //Append the cards created to the #row id
            const productHTML = createHTMLCard(index, element);
            productHTMLList.push(productHTML);
             console.log(productHTML);
            console.log(productHTMLList);
        }
        );


        const pHTML = productHTMLList.join("\n");
        console.log(pHTML);

        document.querySelector("#product-wrapper").innerHTML = pHTML;
   
        //displayProductDetail - event handler function                 
        for (let j = 0; j < this._products.length; j++) {
            
            //Pass in the individual item object into the event handler so I can make use of each property in the item
            const product = this._products[j];
            document.getElementById(j).addEventListener("click", function() {displayProductDetails(product)});
        };

}

//constructor()
//    {
//        this._items = [];       //create an array to store the details of product items
//    }
//
//    //method to add the items into the array
//    addItem(name, description, category, imageUrl, price, imageObject)
//    {
    // POST HTTP Method





    }
//}

const createHTMLCard = (index, product) => `
<div class="col-6 col-md-4 cake-product ${product.category}">
    <div id = "${index}" class="card card-hover border-0 px-2 mb-3 ">
        <a href="#" data-toggle="modal" data-target="#cake-modal">
            <img class="card-img-top" src="${product.imageUrl}"
            alt="cake">
            <div class="card-body">
                <h5 class="card-title text-center card-text-font card-design">${product.name}</h5>
                <p class="card-text text-center card-text-font card-font-size-price">from $${product.price}</p>
            </div>
        </a>
    </div>
</div>
`
//}
//}
//function displayProductModal(product) {
//    document.getElementById("modalName").innerHTML = product.category;
////    document.getElementById("modalDescription").innerHTML = index;
//    document.getElementById("img-popup").src = product.imageURL;
//    document.getElementById("modalPrice").innerHTML = `from $${product.price}`;
//    document.getElementById("modalPrice").innerHTML = `from $${product.name}`;
//}


//function displayProductDetails(item)
//{
//    document.querySelector("#modalName").innerText = item.name;
//    document.querySelector("#modalImg").src = item.imageUrl;
//    document.querySelector("#modalStyle").innerText = item.style;
//    document.querySelector("#modalPrice").innerText = item.price;
//
//}



