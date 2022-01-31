function getProductByName() {
    // const productURL = "http://127.0.0.1:3030/public/assets/product/";
    const productURL = "http://dev.winetrust.org:3030/public/assets/product/"
    let stringQuery = document.getElementById("productsearchbyname").value;
    fetch(`${productURL}${stringQuery}`)
    .then(data => {
        return data.json()
    })
    .then((results) => { 
        //pass to asset list to display Asset information
        sessionStorage.setItem("assetbyproduct", JSON.stringify(results));
        window.open("../assetlist.html", "_blank");
        /*for(var k in results) {
            if(results[k] instanceof Object) {
                let q = results[k].product.longName
                var v = new RegExp(stringQuery,"g")
                if( q.match(v) ) {
                    console.log(`${results[k].product.longName} :: ${results[k].product.description}`);
                    window.open("../assetlist.html", "_blank");
                }
            }

        }*/
        
    })
    
}

function getAssetByTokenId() {
    // const productURL = "http://127.0.0.1:3030/public/assets/token/";
    const productURL = "http://demo.winetrust.org:3030/public/assets/token/"
    let stringQuery = document.getElementById("assetsearchbyid").value;
    fetch(`${productURL}${stringQuery}`)
    .then(data => {
        return data.json()
    })
    .then((results) => { 
        for(var k in results) {
            if(results[k] instanceof Object) {
                let q = results[k].tokenId
                //console.log(`${q} :: ${stringQuery}`)
                //var v = new RegExp(stringQuery,"g")
                if( stringQuery.localeCompare(q) == 0 ) {
                    console.log(`${results[k].tokenId}` );
                }
            }

        }
        
    })
   
}

