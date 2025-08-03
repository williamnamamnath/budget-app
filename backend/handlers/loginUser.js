const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt');
const dbName = 'budgetApp';

const loginUser = async (req, res) => {

    const client = new MongoClient(MONGO_URI);
    const db = client.db(dbName);

    try {
    await client.connect();
    console.log('Connected to MongoDB.');
    
    const existingUser = await db.collection('users').findOne({ email });
    if (!existingUser) {
        return res.status(404).json({
            status: 404,
            message: "User not found, please verify your email.",
        }); 
    }

    const { email, password } = req.body;

    if (email === undefined || email === "" || email === null) {
        return res.status(404).json({
            status: 404,
            message: "Email is required.",
        })
    }

    if (password === undefined || password === "" || password === null) {
        return res.status(404).json({
            status: 404,
            message: "Password is required.",
        })
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

        if (!validPassword) {
            return res.status(401).json({
                status: 401,
                message: "Incorrect password",
            });
        }

        const { password: hashedPassword, ...userData } = foundUser;

        res.status(200).json({
            status: 200,
            message: "Login successful",
            user: userData
        });
        console.log("This is userData: ", userData);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: error.message,
        });    
    } finally {
        await client.close();
        console.log('MongoDB connection closed.');
        
    }
};

module.exports = loginUser;