const mongoose=require('mongoose')

                            //object extra added whether any errors occurs between the integration of data base and server
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
 //connect is asynchronous method so there is 2 type response produced.if this method resolve "then" worked,if it reject "catch" worked
}).then(()=>{
    console.log("________Mongodb Atlas connected__________");
}).catch(()=>{
    console.log("______Mongodb Atlas Not connected________");
})