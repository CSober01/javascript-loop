// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
// ใช้ while loop เดินทีละร้าน แล้วสร้างข้อความใหม่ใส่ไว้ใน newRestaurants
let i = 0;

while (i < restaurants.length) {
  // ต่อคำว่า Restaurant Name: ไว้หน้าชื่อร้าน แล้วเก็บลง array ใหม่
  newRestaurants.push("Restaurant Name: " + restaurants[i]);
  i = i + 1;
}

console.log(newRestaurants);
