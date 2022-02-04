async function connectMetamask() {
    // alert("connecting to Metamask");
    if(typeof window.ethereum !== 'undefined') {
        //alert(`Metamask is installed`)
        let accounts = await ethereum.request({method: 'eth_requestAccounts'});
        let account = accounts[0];
        alert(`account ${account}`)
    }
}

function getProductByName() {
    // const productURL = "http://127.0.0.1:3030/public/assets/product/";
    // const productURL = "https://dev.winetrust.org/db/public/assets/product/"
    const productURL = "https://staging.winetrust.org/db/public/assets/product/"
    let stringQuery = document.getElementById("productsearchbyname").value;
    console.log(`${productURL}${stringQuery}`)
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
    // const productURL = "https://dev.winetrust.org/db/public/assets/token/"
    const productURL = "https://staging.winetrust.org/db/public/assets/product/"
    let stringQuery = document.getElementById("assetsearchbyid").value;
    fetch(`${productURL}${stringQuery}`)
    .then(data => {
        return data.json()
    })
    .then((results) => { 
        for(var k in results) {
            if(results[k] instanceof Object) {
                let q = results[k].tokenId
                console.log(`${q} :: ${JSON.stringify(results)}`)
                //var v = new RegExp(stringQuery,"g")
                /*if( stringQuery.localeCompare(q) == 0 ) {
                    console.log(`${results[k].tokenId}` );
                }*/
            }

        }
        
    })
   
}

