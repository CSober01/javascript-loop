// Exercise #3: Find the Minimum Number
//
// โจทย์
// - สมมุติว่าเรามี Variable ดังต้น studentScores ซึ่งบรรจุคะแนนสอบของนักเรียนในห้อง ดังนี้ [100, 20, 3, 100]
// - ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้อง
// - เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
//   3

let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
// เริ่มจากคะแนนคนแรก แล้วค่อยเทียบกับคนที่เหลือ
minScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  // ถ้าคะแนนช่องนี้น้อยกว่าค่าที่จำไว้ ให้จำค่าใหม่นี้แทน
  if (scores[i] < minScore) {
    minScore = scores[i];
  }
}

// Test code ของแบบฝึกหัดตรวจตัวแปรชื่อ minNumber
let minNumber = minScore;

console.log(minScore);
