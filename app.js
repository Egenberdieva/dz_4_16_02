// const obj = {
//     name: "John",
//     age: "20",
// }
// console.log(obj);

// const data =JSON.stringify(obj);
// console.log(data);

// console.log(JSON.parse(data));

const btn = document.querySelecto(".btn");

btn.addEventListener("click", ()=> {
    const request = new XMLHtppRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", ()=> {
         console.log(JSON.parse(request.response));
         const data =JSON.parse(request.response);
         document.querySelector(".name").innerHTML = data.name;
         document.querySelector(".age").innerHTML = data.age;
    })
});