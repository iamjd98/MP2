let time = document.getElementById("current-time"); 

setInterval(() => {

    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    
}, 1000);

const audio = new Audio();
audio.src = "./assets/beep.mp3";


// <div class="card pt-5 mx-auto">
                // <ul id="order-summary" class="list-unstyled">
                    // <li><img class="m-2" src="./assets/lechon_belly.jpg" alt="lechon Belly" style="width: 20%; height: 20%;"> <span class="fw-bold">Lechon Belly</span>  <span class="fw-bold text-danger">P369</span></li>
                // </ul>
           // </div> 


const orderitemsarray = [];
const orderpricearray = [];
const orderarray = [];

function orderbasket(itemname, itemprice) {

orderitemsarray.push (itemname);
orderpricearray.push (itemprice);
orderarray.push (itemname, itemprice);


let orderlist = document.getElementById('orderlist');

const orderitem = document.createElement('li'); 
orderitem.className = 'd-flex justify-content-between align-items-center ms-2 me-2'; 

const orderitempricespan = document.createElement('span');

const orderitemname = document.createTextNode(itemname);
const orderitemprice = document.createTextNode(' ₱' + itemprice);

orderitempricespan.className = 'text-danger'

orderitempricespan.appendChild(orderitemprice);

orderitem.appendChild(orderitemname);

orderitem.appendChild(orderitempricespan);

orderlist.appendChild(orderitem);

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
    function sumarray(total, sum){
        return total + sum;
    };
};
};

function orderbasketclear() {
    let orderlist = document.getElementById('orderlist');
    orderlist.innerHTML = "";
    orderitemsarray.length = 0;
    orderpricearray.length = 0;
    orderarray.length = 0;
    totalitems();
    costitems ();
}