fetch("https://raw.githubusercontent.com/thatisuday/indian-cities-database/master/cities.json"
).then((res)=>res.json())
.then((data)=>{
    console.log(data)
})