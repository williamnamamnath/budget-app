const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'budgetApp';

const getUsersInfo = async(req, res) => {

    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        console.log('Connected to MongoDB.');
        
        const db = client.db(dbName);
        const users = await db.collection("users").find({}).toArray();

        if (users.length === 0) {
           return res.status(404).send("No users found.");
        } else {
            return res.status(200).json({
                status: 200,
                data: users
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: 500, message: error.message });
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB.');
    }
};

module.exports = getUsersInfo;