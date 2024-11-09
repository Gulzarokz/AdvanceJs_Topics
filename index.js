// VariableScoping

// GlobalScoping

// var x = "Gulzar knan";


// function VariableScoping() {
//     console.log(x); // it can be access in the black of the funcaion 
    
// }
// VariableScoping();

// console.log(x);// it can be access any where because it scope is global 

//--------------------------------------------------------------------------------------
// function Scoping
// function scope is created when function is declared 
// variable and function are declared in function are only visible in function scope
//---------------------------------------------------------------------------------------

// function funcaionScoping() {
//     var fs = "it is function scoping";
//     console.log(fs);
    
// }
// funcaionScoping(); 
// console.log(fs); // here it cannot access bcz it function scope can't access outside the function


//--------------------------------------------------------------------------------
//Block Scope 
// black scope is refer to the visibilty of varible and function within block of code .block of code enclose {} .
//---------------------------------------------------------------------------------

function blackScoping() {
    if(true){
        let bs = "it is block scope";
        console.log(bs);
        
    }
    console.log(bs);
    
}
blackScoping();

// console.log(bs);
