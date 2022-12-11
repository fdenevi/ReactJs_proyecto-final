let productos = [
    {id: '1', 
    name: 'Amelie', 
    stock: 10, 
    price: 3400, 
    foto:"https://drive.google.com/file/d/1hZDfNPXpUC7jyHbEnR1ZBMdgTVdOl4jp/view?usp=sharing", 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '2', 
    name: 'Wanda', 
    stock: 10, 
    price: 5600, 
    foto:'', 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '3', 
    name: 'Catalina', 
    stock: 10, 
    price: 5300, 
    foto:'',
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '4', 
    name: 'Antonia', 
    stock: 10, 
    price: 3400, 
    foto:'', 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '5', 
    name: 'Amanda', 
    stock: 10, 
    price: 5600, 
    foto:'', 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '6', 
    name: 'Emilia', 
    stock: 10, 
    price: 5300, 
    foto:'',
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '7', 
    name: 'Guadalupe', 
    stock: 10, 
    price: 3400, 
    foto:'', 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '8', 
    name: 'Mara', 
    stock: 10, 
    price: 5600, 
    foto:'', 
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},

    {id: '9', 
    name: 'Florencia', 
    stock: 10, 
    price: 5300, 
    foto:'',
    descripcion:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eum velit eaque cupiditate esse, dicta error fuga. Id et explicabo quia nobis optio. Voluptates ipsum alias assumenda cupiditate voluptatem excepturi!'},
]


export const gFetch = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000);
    })
}