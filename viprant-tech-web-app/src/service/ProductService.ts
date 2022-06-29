function getProducts() {
    var response = fetch('demo/data/products.json').then(res => res.json()).then(d => d.data);
    console.log(response, 'API Product Service Resp');
return response;
}

export {getProducts};
