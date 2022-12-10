let productos = [
    {id: '1', name: "Amelie", stock: 10, price: 5000, foto:""},
    {id: '2', name: "Amanda", stock: 10, price: 5000},
    {id: '3', name: "Anastasia", stock: 10, price: 5000},
]

export const gFetch = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 1000);
    })
}