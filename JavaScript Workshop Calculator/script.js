//Variable
//calculator Display 
const calculatorDisplay = document.querySelector('h1');
//inputBtn
const inputBtn = document.querySelectorAll('button');
//clear Button
const clearBtn = document.getElementById('clear-btn');


//Calculate firstNumber and secondNumber                                 
const calculate={
    
    // if secondNumber > 0 firstNumber/secondNumber == 'error'
    "/":(firstNumber,secondNumber)=>secondNumber> 0 ? firstNumber/secondNumber: 'error',

    "*":(firstNumber,secondNumber)=>firstNumber*secondNumber,

    "+":(firstNumber,secondNumber)=>firstNumber+secondNumber,

    "-":(firstNumber,secondNumber)=>firstNumber-secondNumber,

    "=":(firstNumber,secondNumber)=>secondNumber
};


// The 1st number connects the 2nd number operator, such as 10 + 20.
let firstValue = 0; // get number 1
let operatorValue = ''; // get operator
let waitForNext = false; // get the 1st number with operators.


function setNumberValue(number){
    if(waitForNext){
        calculatorDisplay.textContent = number;
        waitForNext = false;
    }else{
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}


function callOperator(operator){
   const currenValue = Number(calculatorDisplay.textContent);

    //ไม่สามารถใส่ operator อีกรอบ ซ้ำได้จนกว่าจะคำนวณเสร็จ
    if(operatorValue && waitForNext){
    operatorValue = operator;
    return;
    }
    // กำหนดค่าเริ่มต้น ถ้าป้อนเป็น 70 ก็จะเก็บไว้ใน firstValue
    if(!firstValue){
        firstValue = currenValue;
    }else{
        const result =calculate[operatorValue](firstValue,currenValue);

            calculatorDisplay.textContent = result;
            firstValue = result;
        //ถ้าค่าที่ส่งมาเป็น error จะทำคำสั่ง reset เป็น 0 
        if(firstValue == 'error'){
            resetAll();
        }
    }
   // ถ้าเก็บตัวเลขที่ 1 กับ ตัวดำเนินการ แล้ว waitForNext จะเป็น True
    operatorValue = operator;
    waitForNext = true;

}


function addDecimal(){

    //If "waitForNext" value is stored, then the condition does not continue.
    if(waitForNext) return;

    //ถ้าหากยังไม่มีการใส่ '.' จะให้แสดง calculatorDisplay.textContent เท่ากับตัวเลขที่เก็บเเละ '.' ต่อท้าย
    if(!calculatorDisplay.textContent.includes(".")){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
    // When enabled, it executes addDecimal and calculatorDisplay with . 
}


//input forEach from button
inputBtn.forEach((input)=>{

    //Numeric keys input 0-9 ---- By function setNumberValue
    if(input.classList.length === 0){
        input.addEventListener('click',()=>setNumberValue(input.value));

    //Arithmetic operator button input  ---- By function callOperator
    }else if (input.classList.contains("operator")){
        input.addEventListener('click',()=>callOperator(input.value));

    //decimal or . ---- By function addDecimal
    }else if(input.classList.contains("decimal")){
        input.addEventListener('click',()=>addDecimal(input.value));
    }
});


//Press the command c and the calculatorDisplay from tag h1 becomes 0 By resetAll
function resetAll(){
    //setting first when call function
    firstValue = 0;
    operator = '';
    waitForNext = false;
    calculatorDisplay.textContent='0';
}
clearBtn.addEventListener('click',()=>resetAll());
