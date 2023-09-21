

// its return a promise which fullfill first 

const red = new Promise((res,rej)=>{
    setTimeout(() => {
        rej('red')
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




const testAll = async ()=>{
    const colors = await Promise.any([red,green,yellow])

    console.log(colors)

    // colors.map((color)=>{
    //     console.log(color.value)
    //     console.log(color)
    // })


}

testAll();