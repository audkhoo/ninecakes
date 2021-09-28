
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