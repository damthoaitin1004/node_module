function connectSever() {
    const number = Math.random();
    return new Promise((resolve, reject) => {
         number > 0.5 ? resolve("Đã kết nối sever thành công") : reject(new Error('Thất bại'));
    });
  }
  async function fetchDataSeverAsync() {  
    try {
      console.log("Bắt đầu kết nối đến sever...");
      const data = await connectSever(); 
      console.log("Dữ liệu đã được tải:", data);
    } catch (error) {
      console.error("Lỗi khi kết nối server:", error);
    }
  }
  fetchDataSeverAsync();
  console.log("Bắt đầu");

  
  