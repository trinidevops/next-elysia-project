import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGODB_URL || "" ).catch((error) => {
	console.log("Error connecting to database:", error);
});

const client = mongoose.connection.getClient().db("myDB");

export { client };

