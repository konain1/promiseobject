

const red = new Promise((res,rej)=>{
    setTimeout(() => {
        res('red')
    }, 1000);
})

const green= new Promise((res,rej)=>{
    setTimeout(() => {
        res('green')
    }, 3000);
})

const yellow = new Promise((res,rej)=>{
    setTimeout(() => {
        res('yellow')
    }, 2000);
})


// Promise.all([red,green,yellow]).then((value)=>{
//     console.log(value)
// })

const testAll = async ()=>{
    const colors = await Promise.all([red,green,yellow])

    colors.map((color)=>{
        console.log(color)
    })


}

testAll();