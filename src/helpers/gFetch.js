export const gFetch = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(id ? productos.find(prod => prod.id === id) : productos)
        }, 2000);
    })
}