let productsName = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5S Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
console.log(productsName);

function add() {
    let productName = document.getElementById("newproduct").value;
    return productsName.push(productName);
    console.log(productsName)
}

let a = add();
console.log(a)

function productsDisplay() {
    let listofGoods = "<table cellspacing='0'><tr><th colspan='2'  style='text-align: left'>Product name</th><th style='text-align: right'>9 Product</th></tr>";
    let editButton = "<button style='background-color: green; color: white; border: 0; border-radius: 10%'>Edit</button>";
    let deleteButton = "<button style='background-color: green; color: white; border: 0; border-radius: 10%'>Delete</button>";
    for (let i = 0; i < productsName.length; i++) {
        let a = "<tr style='background-color: darkgray; height: 40px'>";
        if (i % 2 !== 0) {
            listofGoods += a + "<td style='width: 200px'>" + productsName[i] + "</td><td style='width: 70px'>" + editButton + "</td><td style='width: 70px'>" + deleteButton + "</td>";
        } else {
            listofGoods += "<tr style='height: 40px'><td>" + productsName[i] + "</td><td>" + editButton + "</td><td>" + deleteButton + "</td>";
        }
    }
    return listofGoods + "</table>";
}

document.getElementById("table").innerHTML = productsDisplay();
