/*
function range(x){
    const array=[]
    return function curried(y,step) {
     if(step<0) step=step*-1
    
        for(x;x<=y;x+=step){
        array.push(x)
        }
        return array
    }
   
        
}

function sum(array){
    var sum=0
    for(const e of array){
        sum+=e
    }
    return sum
}


const rangefrom1=range(1)

console.log(rangefrom1(10,-3))*/

/*
function reverseArray(array){
    let array2=[]
    for(var i=array.length-1;i>=0;i--){
        array2.push(array[i])
    }
    return array2
}

function reverseArrayInPlace(array){
    let array2=[]
    for(var i=array.length-1;i>=0;i--){
        array2.push(array[i])
    }
    array=array2.slice()
    return array
}


console.log(reverseArrayInPlace(arrray))
*/

function arraytoList(array){
   
    let list1={value:array[array.length-1],
                rest:null,}

    for(var i=array.length-2;i>=0;i--){
        list1={
            value:array[i],
            rest:list1,
        }
        console.log(array[i])
    }

    return list1
}

let arrray=[3,4,5,6,7]

let list={
    value:1,
    rest:{
        value:2,
        rest:{
            value:3,
            rest:{
               value:4,
               rest:null}
        }
    }
}

console.log(arraytoList(arrray))
