// Exercise #5: Concatenate the Alphabets
//
// โจทย์
// - สมมุติว่าเรามี Variable ดังต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp"
// - ให้เขียนโปรแกรมที่บอกลำดับตัวอักษรภาษาอังกฤษแต่ละตัว ว่าเป็นตัวอักษรตัวที่เท่าไหร่
//   - โดยมีรูปแบบการเขียนแบบนี้ "Number <ลำดับ> character is <ตัวอักษร>"
// - เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
//   Number 1 character is T
//   Number 2 character is e
//   Number 3 character is c
//   Number 4 character is h
//   Number 5 character is U
//   Number 6 character is p

let companyName = "TechUp";

// Start coding here
// สตริงนับตำแหน่งเริ่มที่ 0 แต่โจทย์ให้แสดงลำดับเริ่มที่ 1
for (let i = 0; i < companyName.length; i++) {
  // companyName[i] คือตัวอักษรตำแหน่งนั้น
  // i + 1 คือลำดับที่ให้แสดงบนหน้าจอ
  console.log("Number " + (i + 1) + " character is " + companyName[i]);
}
