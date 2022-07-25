/*Reference the required elements in the index.html. */
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money_plus');
const money_minus = document.getElementById('money_minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


/* transactions */
let transactions = [];

function init(){
    list.innerHTML = '';
    
    /*Loop Array from dataTransaction*/
    transactions.forEach(addDataTolist);
    calculateMoney();
}

/*Filter transactions */
function addDataTolist(transactions){
        const symbol = transactions.amount < 0 ?'-':'+';
        console.log(symbol);

        /*check status - or + */
        const status = transactions.amount < 0 ?'minus':'plus';

        /*create tag li*/
        const item = document.createElement('li');
        
        result = formatNumber(Math.abs(transactions.amount));

        item.classList.add(status);
       
        /*add item from array transactions */
        item.innerHTML=`${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>`;

        list.appendChild(item);       
}

//formatNumber
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//create id
function autoID(){
    return Math.floor(Math.random()*1000000);
}


function calculateMoney(){
   
    /*collect array All transactions.amount*/
    const amounts = transactions.map(transactions=>transactions.amount);

    /*Filter Data total*/
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);

    //calculate income
    const income =  amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2);

    //calculate expense
    const expense = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2);


    //display on screen
    balance.innerText=`฿`+formatNumber(total);
    money_plus.innerText=`฿`+formatNumber(income);
    money_minus.innerText=`฿`+formatNumber(expense);
}


//removeData from id transactions
function removeData(id) {
    transactions = transactions.filter(transactions=>transactions.id != id);
    init();
}


//send data to array transactions
function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add your information.');
    }else{
        const data={
            id:autoID(),
            text:text.value,
            amount:+amount.value,
        }
        transactions.push(data);
        addDataTolist(data);
        calculateMoney();
        text.value = '';
        amount.value = '';
    }
}

form.addEventListener('submit',addTransaction);

init();




