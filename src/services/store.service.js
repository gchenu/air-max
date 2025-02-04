require('dotenv').config()

const HOST = 'http://localhost:3000/api';

export const getStore = () => {
    return fetch(`${HOST}/shop`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getAllProducts = () => {
    return fetch(`${HOST}/products`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const createOrder = (opts) => {
  return fetch(`${HOST}/order`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(opts)
  })
      .then(res => res.json())
      .catch(err => console.log(err))
}
