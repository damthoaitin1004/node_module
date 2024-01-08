function performAsyncTask() {
    const number = Math.random();
    return new Promise((resolve, reject) => {
         number > 0.5 ? resolve(number) : reject(new Error('Thất bại'));
        
    });
  }
  console.log("Bắt đầu");
  performAsyncTask()
    .then(result => {
      console.log("Kết quả:", result);
    })
    .catch(error => {
      console.error("Lỗi:", error.message);
    });
    console.log("...");
  