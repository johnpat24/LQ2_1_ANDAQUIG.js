console.log("A. PEPSI COLA");
console.log("B. COCA COLA");
console.log("C. APPLE (PER KG)");
console.log("D. ORANGE (PER KG)");
console.log("E. HOTDOGS (PER KG)");

let item_choice = prompt("choose item\n A \n B \n C\n D\n E\n")

let QTY = (prompt("enter the quantity: "));

let price;

switch (item_choice){
    case 'A':
        price = 10.0 * QTY;
        break;
    case 'B':
        price = 10.5 * QTY;
        break;
    case 'C':
        price = 15.0 * QTY;
        break;
    case 'D':
        price = 10.75 * QTY;
        break;
    case 'E':
        price = 20.0 * QTY;
        break;
    default:
        alert("not match try again");
        throw new Error("invalid choice");
        
alert('total price for ${item_choice} x ${QTY}: $$price.tofixed(2)}');
}



