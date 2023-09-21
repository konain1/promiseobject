

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
        rej('yellow')
    }, 2000);
})




const testAll = async ()=>{
    const colors = await Promise.allSettled([red,green,yellow])

    colors.map((color)=>{
        console.log(color.value)
        console.log(color)
    })


}

testAll();