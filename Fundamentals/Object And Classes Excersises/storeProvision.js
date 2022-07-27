function storeProvision(inStore, forDelivery){
    let store = {};

    for(let i = 0; i < inStore.length; i += 2){
        let productInStore = inStore[i];
        store[productInStore] = Number(inStore[i + 1]);
    }

    for(let i = 0; i < forDelivery.length; i += 2){
        let productToDeliver = forDelivery[i];

        if(!store.hasOwnProperty(productToDeliver)){
            store[productToDeliver] = 0
        }

        store[productToDeliver] += Number(forDelivery[i + 1]);
    }
   
    for(let product in store){
        console.log(`${product} -> ${store[product]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )