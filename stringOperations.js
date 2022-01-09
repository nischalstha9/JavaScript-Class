let msg = "Hello World!";
console.log("msg.toUpperCase() =>", msg.toUpperCase());
console.log("msg.length =>", msg.length);
console.log("msg.toLocaleLowerCase() =>", msg.toLocaleLowerCase());
console.log("msg.toLocaleUpperCase() =>", msg.toLocaleUpperCase());


let greet = "     Good Morning"
console.log("greet.trim() => ", greet.trim());
console.log("greet.trim().toUpperCase() => ", greet.trim().toUpperCase());

let user = "nischal nischal";
console.log("user.indexOf('s') =>", user.indexOf("s"));
console.log("user.slice(4) =>", user.slice(4));
console.log("user.slice(0, 4) =>", user.slice(0, 4));
console.log("user.replace('nischal', 'bibek') =>", user.replace("nischal", "bibek"));


let username = "1111111111";
username = username.split("1").join("1111111111");
username = username.split("1").join("1111111111");
username = username.split("1").join("Nischal\n");
console.log(username);
