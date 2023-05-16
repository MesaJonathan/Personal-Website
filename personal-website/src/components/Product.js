export default function Product(){
    //const products = ["laptop", "phone", "my balls"];
    const products = [
        {id:1,name:"iphone",price: 300,},
        {id:2,name:"laptop",price: 500,},
        {id:3,name:"razer",price: 50,},
        {id:4,name:"pc",price: 3,},
    ];

    const fruits = ["Apple", "Mango", "Bananana"];

    //for a list of objects
    const prodList = products.map((product) =>(
        <h3 key = {product.id}>{product.name}: ${product.price}</h3>
    ));

    //for a list of individual items
    const fruitList = fruits.map((fruit, index) => (
        <h3 key={index}>
            {fruit}
        </h3>
    ));

    //how to render a list   
    return(
        <div>
            {fruitList}
        </div>
    );
}