function pow(x,y){
    let result = 1;
    for (let i=0; i<y; i++){
        result *= x;
    }
    return result;
}
console.log(pow(10,10));
console.log(pow(0,0));
console.log(pow(3,1));