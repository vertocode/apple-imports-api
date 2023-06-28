module.exports = () => {
    const iphone = require('./data/products/iphone.json')
    const macbook = require('./data/products/macbook.json')
    const macMini = require('./data/products/mac-mini.json')
    const macStudio = require('./data/products/mac-studio.json')

    const users = require('./data/users/users.json')

    return {
        products: [
            ...iphone,
            ...macbook,
            ...macMini,
            ...macStudio
        ],
        users: [
            ...users
        ]
    }
}