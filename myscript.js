const e = require("express");

let time = document.getElementById("current-time"); 

setInterval(() => {

    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    
}, 1000);

const audio = new Audio();
audio.src = "./assets/beep.mp3";


const orderidarray = [];
const orderitemsarray = [];
const orderpricearray = [];
const orderarray = [];

let i = 0;

function orderbasket (itemname, itemprice) {
    

orderidarray.push(i);    
orderitemsarray.push (itemname);
orderpricearray.push (itemprice);
orderarray.push (itemname, itemprice);

i++;

let orderlist = document.getElementById('orderlist');

const orderitem = document.createElement('li'); 
orderitem.className = 'd-flex justify-content-between align-items-center ms-2 me-2'; 

const orderitempricespan = document.createElement('span');

const orderitemname = document.createTextNode(itemname);
const orderitemprice = document.createTextNode(' ₱' + itemprice);

orderitempricespan.className = 'text-danger'

orderitempricespan.appendChild(orderitemprice);

const deletebutton = document.createElement('button');
const deletebuttontext = document.createTextNode('Remove');

deletebutton.setAttribute('onclick', 'deleteitem('+i+', this)');

deletebutton.appendChild(deletebuttontext);
deletebutton.className = 'btn btn-danger btn-sm m-2';

const orderitemleftsidespan = document.createElement('span');

orderitemleftsidespan.appendChild(orderitemname);

orderitemleftsidespan.appendChild(orderitempricespan);


orderitem.appendChild(orderitemleftsidespan);


orderitem.appendChild(deletebutton);


orderlist.appendChild(orderitem);

console.log(orderidarray);

totalitems(); 
costitems();

}

function totalitems() {
    document.getElementById("totalitems").innerText = orderarray.length;
};

function costitems() {
    if (orderpricearray.length === 0) {
        document.getElementById("totalcost").innerText = 0;
    }
    else {
    document.getElementById("totalcost").innerText = orderpricearray.reduce(sumarray).toFixed(2);
    
    document.getElementById('amount').value = orderpricearray.reduce(sumarray).toFixed(2);

    
    function sumarray(total, sum){
        return total + sum;

        };
};
};



function orderbasketclear() {
    let orderlist = document.getElementById('orderlist');
    document.getElementById('amount').value = 0;
    orderlist.innerHTML = "";
    orderitemsarray.length = 0;
    orderpricearray.length = 0;
    orderarray.length = 0;
    orderidarray.length = 0;
    i = 0;
    totalitems();
    costitems ();
}

function deleteitem(orderid, button){
    const indexnum = orderidarray.indexOf(orderid);
    orderidarray.splice(indexnum, 1);
    orderitemsarray.splice(indexnum, 1);
    orderpricearray.splice(indexnum, 1);
    console.log(orderidarray);   
    totalitems();
    costitems ();
    console.log(button);
    console.log(button.parentElement);
    orderlist.removeChild(button.parentElement);

    if (orderpricearray.length === 0) {
        document.getElementById('amount').value = 0;
    }
}


function calculatorpress(number){
        const calculatorscreendisplay = document.getElementById('calculatorscreen');
        console.log(calculatorscreendisplay.length);
        if (calculatorscreendisplay.value == 0 && number == '00') {
            calculatorscreendisplay = '0.';
        } else if (calculatorscreendisplay.value == 0 && number == '0') {
            calculatorscreendisplay = '0.';
        } else if (calculatorscreendisplay.value == '' && number == '00') {
            calculatorscreendisplay.value = '0';
        } else if (calculatorscreendisplay.value.includes('.') === true && number =='.') {
            calculatorscreendisplay.value = calculatorscreendisplay.value;
        } else {
        calculatorscreendisplay.value += number;
        }

        if (calculatorscreendisplay.value == '.') {
            calculatorscreendisplay.value = '0.';
        }
};


function calculatorcancel () {
    calculatorscreen.value = '';
};