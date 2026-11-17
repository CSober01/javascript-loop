// Exercise #6: Reverse the String
//
// โจทย์
// - ข้อนี้เป็นโจทย์เสริม สำหรับคนที่อยากฝึกฝนเพิ่มเติม
// - สมมุติว่าเรามี Variable ดังต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp Thailand"
// - ให้เขียนโปรแกรมในการเรียงตัวอักษรกลับด้าน
//   - เช่น "abcd" จะกลายเป็น "dcba"
// - เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
//   "dnaliahT pUhceT"

let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
// เริ่มจากตัวสุดท้าย แล้วเดินถอยมาทีละตัวจนถึงตัวแรก
for (let i = companyName.length - 1; i >= 0; i--) {
  // นำตัวอักษรตัวนั้นไปต่อท้ายข้อความที่กลับด้านไว้แล้ว
  reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);
