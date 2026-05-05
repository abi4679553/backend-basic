const listen =(app)=>{
app.listen(process.env.PORT, () => {
    console.log("backend running")
})}

module.exports = listen;