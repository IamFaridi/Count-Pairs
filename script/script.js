// Global Variables

let txtfld = document.getElementById('txtfld');

// Global Variables

// On Click Function

function clickedFunction(e) {
    let numArr=[];
    let stringArr = txtfld.value.split(" ");
    numArr=stringArr.map(element=>+element);
    let count = getPair(numArr); //Required Function
    document.getElementById('answer').style.display="block";
    document.getElementById('result').innerText=`Number of pairs in above sequence is ${count}`;
}

// On Click Function


//Required Function

const getPair=(numberArray)=>{
    numberArray.sort((a,b)=>a-b);
    let pairCount=0;
    for (let i = 0; i < numberArray.length;) {
        if (numberArray[i]===numberArray[i+1]) {
            pairCount++;
            i=i+2;
        } else {
            i++;
        }
    }
    return pairCount;
}


/*
comment out above getPair function and uncomment out the below  getPair function to use below one:
*/



// const getPair=(numberArray)=>{
//     let socks={}; 
//     let paircount=0;
//     for(let element of numberArray)
//     {
//         socks[element]=socks[element]+1 || 1; //counting the repetition of every elemnt
//         if (socks[element]%2===0) {
//             paircount+=1;
//         }
//     }
//     return paircount;
// }