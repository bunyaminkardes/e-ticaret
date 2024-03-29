const bcrypt = require("bcrypt");
const userModel = require("./models/userModel");
const productModel = require("./models/productModel");

const fakeUsers = [
    {
        username : '0bunyamin0',
        password : '123456',
        email : 'testEmail1@gmail.com'
    },
    {
        username : '1efe1',
        password : '123456',
        email : 'testEmail2@outlook.com'
    },
    {
        username : '2atakan2',
        password : '123456',
        email : 'testEmail3@hotmail.com'
    },
    {
        username : '3enes3',
        password : '123456',
        email : 'testEmail4@windowslive.com'
    },
    {
        username : '4dogukan4',
        password : '123456',
        email : 'testEmail5@yahoo.com'
    }
];

const fakeProducts = [
    {
        name: 'nvidia rtx 4090ti',
        brand: 'nvidia',
        description: 'çok çok çok çok çok güçlü bir ekran kartı yemin ederim bak.',
        category: 'elektronik eşya',
        price: 20000,
        image: '',
        stock: true,
        seller: 'satıcı1'
    },
    {
        name: 'nvidia rtx 4080ti',
        brand: 'nvidia',
        description: 'çok çok çok çok güçlü bir ekran kartı yemin ederim bak.',
        category: 'elektronik eşya',
        price: 18000,
        image: '',
        stock: true,
        seller: 'satıcı1'
    },
    {
        name: 'nvidia rtx 4070ti',
        brand: 'nvidia',
        description: 'çok çok çok güçlü bir ekran kartı yemin ederim bak.',
        category: 'elektronik eşya',
        price: 16000,
        image: '',
        stock: true,
        seller: 'satıcı2'
    },
    {
        name: 'nvidia rtx 4060ti',
        brand: 'nvidia',
        description: 'çok çok güçlü bir ekran kartı yemin ederim bak.',
        category: 'elektronik eşya',
        price: 14000,
        image: '',
        stock: true,
        seller: 'satıcı2'
    },
    {
        name: 'nvidia rtx 3080ti',
        brand: 'nvidia',
        description: 'çok güçlü bir ekran kartı yemin ederim bak.',
        category: 'elektronik eşya',
        price: 17000,
        image: '',
        stock: true,
        seller: 'satıcı3'
    }
];

const generateFakeData = async () => {
    for (let i = 0; i < fakeUsers.length; i++) {
        fakeUsers[i].password = await bcrypt.hash(fakeUsers[i].password, 10);
        const user = new userModel({
            username: fakeUsers[i].username,
            password: fakeUsers[i].password,
            email: fakeUsers[i].email,
        });
        try {
            const existingUser = await userModel.findOne({ username: user.username });
            if (!existingUser) {
                await user.save();
                console.log('fake kullanıcı veritabanına eklendi.');
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    for (let i = 0; i < fakeProducts.length; i++) {
        const product = new productModel({
            name: fakeProducts[i].name,
            brand: fakeProducts[i].brand,
            description: fakeProducts[i].description,
            category: fakeProducts[i].category,
            price: fakeProducts[i].price,
            image: fakeProducts[i].image,
            stock: fakeProducts[i].stock,
            seller: fakeProducts[i].seller,
        });
        try {
            await product.save();
            console.log('fake ürün veritabanına eklendi.');
        }
        catch(error) {
            console.error(error);
        }
    }
};

module.exports = { generateFakeData }