// console.log("Bắt đầu...");
// // Thực hiện timeout trong 1 giây
// const waitTime = 1000;
// while (Date.now() < waitTime + 1000) {
// }
// // abc("Hello");
// console.log("Kết thúc.");
// console.log("         ------------------        ");



console.log("----------Sử dụng callback---------");
console.log("Bắt đầu...");
console.log("Bắt đầu timeout (1 giây)...");
// setTimeout(() => {
//   console.log("Kết thúc timeout. 1s");
// }, 1000);
setTimeout(() => {
  console.log("Kết thúc timeout. 0,5s");
}, 0);
console.log("Kết thúc..");
