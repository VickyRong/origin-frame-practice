let baseUrl = 'http://127.0.0.1:3030';

function request(url,data,method = 'POST'){
    let api = `${baseUrl}/${url}`
    return fetch(api,{
        body:JSON.stringify(data),
        method,
        mode:'cors',      //请求的模式,也可以不设置，浏览器默认模式为cors
    }).then(res=>{
        console.log('服务端：',res)
       return res.json()
    })
}
export default request;