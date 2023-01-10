let time = document.getElementById("current-time"); 

setInterval(() => {

    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    
}, 1000);


// <div class="card pt-5 mx-auto">
                // <ul id="order-summary" class="list-unstyled">
                    // <li><img class="m-2" src="./assets/lechon_belly.jpg" alt="lechon Belly" style="width: 20%; height: 20%;"> <span class="fw-bold">Lechon Belly</span>  <span class="fw-bold text-danger">P369</span></li>
                // </ul>
           // </div> 

const orderarray = [];

function orderbasket(itemname, itemprice, itemimage) {
orderarray.push(itemname, itemprice, itemimage);


const orderlist = document.getElementById('orderlist');

const orderitem = document.createElement('li');

const orderitempricespan = document.createElement('span');

const orderitemname = document.createTextNode(itemname);
const orderitemprice = document.createTextNode(' ₱' + itemprice);

orderitempricespan.className = 'text-danger'

orderitempricespan.appendChild(orderitemprice);

orderitem.appendChild(orderitemname);

orderitem.appendChild(orderitempricespan);

orderlist.appendChild(orderitem);

const orderitemimgtag = document.createElement('img');

orderitemimgtag.src = itemimage;

orderitemimgtag.className = 'w-25 rounded m-2';

orderlist.appendChild(orderitemimgtag);

};

function totalitems() {
    console.log(orderarray.length);
};