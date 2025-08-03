const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'budgetApp';

const getUserInfo = async (req, res) => {

    const { _id } = req.params;
    const client = new MongoClient(MONGO_URI);
    const userId = parseInt(_id);

    try {
await client.connect();
        const db = client.db(dbName);
        const userInfo = await db.collection('users').findOne({ _id: userId });

         if (!userInfo) {
            return res.status(404).json({
                status: 404,
                message: "Could not find the user."
            });
        }

        res.status(200).json({
            status: 200,
            data: userInfo
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Error retrieving user information.", 
            error: error.message 
        });
    } finally {
        await client.close();
        console.log('MongoDB connection closed.');
    }
};

module.exports = getUserInfo;