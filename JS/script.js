

var row = document.getElementById("rowId");

axios.get("https://fakestoreapi.com/products").then(function(response){

    response.data.forEach(function(data) {

        cards = response.data;

        console.log(cards);
        
        var col4 = document.createElement("div");
        col4.classList.add("col-md-4");
        col4.classList.add("col-12");

        var box = document.createElement("div");
        box.classList.add("w-100");

        var box2 = document.createElement("div");
        box2.classList.add("w-100");
        box2.classList.add("boxHover");


        var imgElement = document.createElement("img");
        imgElement.src = data.image;
        imgElement.classList.add("imgsize");

        var hoverDiv = document.createElement("div");


        var cartItem = document.createElement("button");
        cartItem.type = "button";
        cartItem.classList.add("cartimg");

        var cartStorage = document.getElementById("cartCount");
        cartStorage.classList.add("cartco");
        

        cartStorage = [];
        cartItem.addEventListener("click", function() {

            

        })

        var cartpic = document.createElement("img");
        cartpic.src = "./pics/Add To Cart.png";

        var wishList = document.createElement("img");
        wishList.src = "./pics/Wish List.png";
        wishList.classList.add("wishlist");

        var title = document.createElement("h6");
        title.innerText = data.title;
        title.classList.add("h6-applesmart");

        var ratingBox = document.createElement("div");
        ratingBox.classList.add("d-flex");
        ratingBox.classList.add("justify-content-center");

        var ratingImg = document.createElement("img");
        ratingImg.src = './pics/rating.png';

        var price = document.createElement("p");
        price.innerText = data.price;
        price.classList.add("p-price");

        col4.appendChild(box);
        box.appendChild(box2);
        box2.appendChild(imgElement);
        box2.appendChild(hoverDiv);
        hoverDiv.appendChild(cartItem);
        cartItem.appendChild(cartpic);
        hoverDiv.appendChild(wishList);
        box.appendChild(title);
        box.appendChild(ratingBox);
        ratingBox.appendChild(ratingImg);
        box.appendChild(price);

        row.appendChild(col4);



    });

})

