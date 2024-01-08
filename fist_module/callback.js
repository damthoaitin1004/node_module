function addAsync(a, b, c04) {
    const result = a + b;
    c04(result);
  }   

  function handleResult(result) {
    console.log("Kết quả của phép tính là:", result);
  }

  console.log("Bắt đầu tính toán...");
  addAsync(3, 5, handleResult);
  console.log("Kết thúc");