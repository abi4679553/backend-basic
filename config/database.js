const ConnectDb = async (mongoose) =>{
    try{
        await mongoose.Connect(process.env.MONGO_URI);
        console.log("database connected successfully")


    }
    catch (error){
        console.error("backend connectin is error")

    }

}
module.exports = ConnectDb;