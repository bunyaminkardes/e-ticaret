const bcrypt = require("bcrypt");
const userModel = require("./models/userModel");

const generateFakeUser = async (amount = 10) => {
    for(let i = 0; i < amount; i++) {
        const fakeUser = {
            username : `user${i+1}`,
            password: "123456",
            email: `user${i+1}@gmail.com`
        }
        fakeUser.password = await bcrypt.hash(fakeUser.password, 10);
        const user = new userModel({
            username : fakeUser.username,
            password : fakeUser.password,
            email : fakeUser.email
        });
        try {
            const existingUser = await userModel.findOne({username : user.username});
            if(!existingUser) {
                await user.save();
                console.log(`${i+1}.fake kullanıcı veritabanına eklendi.`);
            }
        }
        catch(error) {
            console.error(error);
        }
    }
};

module.exports = {generateFakeUser}