var MyCart = (function(){

    var details = [];
    var sum = 0;
    var value1;
    var value2;
    var w,x,y,z;
    var price1,price2;

    const renderDetails = () => {
        console.log(details);
        
        document.querySelector("#container").innerHTML = `
            ${details.map(({image,heading,seller,flipkartIcon,price,offer,delivery,policy,save,remove},index) => `
            <div id="div${++index}"><div class="image${index}"><img src="${image}"></div>
                <div class="heading"><p>${heading}<p></div>
                <div class="delivery"><p>${delivery}</p></div>
                <div class="policy"><p>${policy}</p></div>
                <div class="seller"><p>${seller}    <img src="${flipkartIcon}"></p></div>
                <div class="button"><button onclick="MyCart.minusButton${index}()" id="minus" type="button"> - </button><input onchange="MyCart.changePrice()" id="input${index}" type="text" value="1"><button onclick="MyCart.plusButton${index}()" id="plus" type="button">+</button></div>
                <div class="amount"><h5>Rs. ${price}</h5></div>
                <div class="offer"><p>${offer}</p></div>
                <div class="save"><h6>${save}</h6></div>
                <div class="remove"><h6>${remove}</h6></div></div>
                <hr id="hr${index}">
            `)}
        `
        
        totalAmount();
    } 

    const changePrice = () => {
        value1 = Number(document.querySelector("#input1").value);
        value2 = Number(document.querySelector("#input2").value);
        console.log(value1,value2);
        details[0].price = value1 * price1;
        details[1].price = value2 * price2;
        console.log(value1,value2,details[0].price,details[1].price);
        renderDetails();
        document.querySelector("#input1").value = value1;
        document.querySelector("#input2").value = value2;
        
    }

    const plusButton1 = () => {
        w = Number(document.querySelector("#input1").value);
        w = w + 1;   
        details[0].price = price1 * w;
        console.log(details[0].price,w);
        renderDetails();
        document.querySelector("#input1").value = w;
    }
    const plusButton2 = () => {
        x = Number(document.querySelector("#input2").value);
        x = x + 1;   
        details[1].price = price2 * x;
        console.log(details[1].price,x);
        renderDetails();
        document.querySelector("#input2").value = x;
        console.log(w);
    }

    const minusButton1 = () => {
        y = Number(document.querySelector("#input1").value);
        if(y > 1){
            y = y - 1;   
            details[0].price = price1 * y;
            console.log(details[0].price,y);
            renderDetails();
            document.querySelector("#input1").value = y;
        }
        
    }

    const minusButton2 = () => {
        z = Number(document.querySelector("#input2").value);
        if(z > 1){
            z = z - 1;   
            details[1].price = price2 * z;
            console.log(details[1].price,z);
            renderDetails();
            document.querySelector("#input2").value = z;
        }
        
    }

    const totalAmount = () => {
       sum = details.reduce((acc,{price}) => acc + price,0);
       console.log(sum);
       renderAmount();
    }

    const renderAmount = () => {
        document.querySelector(".price").innerHTML = `<p>Rs. ${sum}<p>`;
        document.querySelector(".priceFinal").innerHTML = `<h5>Rs. ${sum}<h5>`;
    }

    
    const fetchDetails = () => {
        fetch('https://jsonblob.com/api/916a88c0-f996-11ea-a18d-7346a626f7c6').then(response => response.json()).then(json => {details = [...json]
        price1 = details[0].price;
        price2 = details[1].price;
        console.log(price1,price2);    
        renderDetails();
        })
        
    }

    const init = () => {
        fetchDetails();
    }

    return {
        init,fetchDetails,renderDetails,totalAmount,renderAmount,sum,changePrice,plusButton1,plusButton2,minusButton1,minusButton2
    }

})();

MyCart.init();
