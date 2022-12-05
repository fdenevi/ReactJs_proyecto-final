let productos = [
    {id: 1, name: "Amelie", stock: 100, price: 5000, foto:""},
    {id: 2, name: "Amanda", stock: 100, price: 5000},
    {id: 3, name: "Anastasia", stock: 100, price: 5000},
]

export const gFetch = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos)
        }, 3000);
    })
}