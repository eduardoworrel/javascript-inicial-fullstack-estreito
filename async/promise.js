
function nossoJson(httpResponse){
    const p = new Promise((resolve,reject) =>{
        //recebe a resposta e transoforma em json
        const result = JSON.parse(httpResponse.body);
        resolve(result)
    })
    return p();
}
const nossoFetch = new Promise((resolve,reject) =>{
    const r = new XMLHttpRequest()
    r.send("https://qualquer.com")
    
    const resposta = {
        httpStatus:200,
        body: "[{\"nome\":\"eduardo\"}]"
    }
    resolve(
        {
            json: ()=>{
                nossoJson(resposta)
            }
        }
    )
})


nossoFetch()
.then((obj)=>{
    return obj.json()
})
.then((data)=>{
    // data == [{nome:eduardo}]
})