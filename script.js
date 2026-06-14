function orderFood(){

alert("Thank you for ordering! Your food is preparing 😊");

}



function bookTable(){


let name=document.getElementById("username").value;


if(name==""){

alert("Please enter your name");

}

else{

alert("Table booked successfully for "+name);

}


}

function placeOrder(){


let food = document.getElementById("foodItem").value;


let quantity = document.getElementById("quantity").value;



if(quantity==""){


alert("Please enter quantity");


}


else{


alert(
"Your order for " + quantity + 
" " + food + 
" placed successfully 😊"
);


}


}

function contactUs(){

alert("Thank you for contacting Spice Garden Restaurant");

}