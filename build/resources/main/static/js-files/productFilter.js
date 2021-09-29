
const filterLinks = document.querySelectorAll(".filerLink");


for(let i= 0 ; i<filterLinks.length ; i++){

    filterLinks[i].addEventListener("click", () => {
    const cakeProducts = document.querySelectorAll(".cake-product");
       
       const filter = filterLinks[i].getAttribute("data-filter");
       console.log(filter);

       cakeProducts.forEach((cake)=>{

           if(filter == "All"){
                cake.style.display = "block";
             }
           else{               
               if (cake.classList.contains(filter)){
                  cake.style.display = "block";                
               }
               else{
                   cake.style.display = "none";      
               }                                   
               }
       })
    });
}

//search filter

const search = document.querySelector(".search-input");
search.addEventListener("keyup", (e)=>{
  const allProducts = document.querySelectorAll(".cake-product");
  e.preventDefault();

  const searchValue = search.value.toLowerCase().trim();
  const initialL =  searchValue.charAt(0).toUpperCase();
  const keyword = initialL.concat(searchValue.slice(1));


  for(i = 0; i< allProducts.length;i++)
  {  console.log(allProducts[i].classList);
    if(allProducts[i].classList.contains(searchValue)||
       allProducts[i].classList.contains(keyword)
      ){
      allProducts[i].style.display = "block";
    }else if (searchValue == ""){
      allProducts[i].style.display = "block";
    }else{
      allProducts[i].style.display = "none";
    }
  }

});