const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
    const INPUD_ID1 = "input1";
    const INPUD_ID2 = "input2";
    let keyupTimer;

    function keyUpEvent(inputId) {
      if (keyupTimer) {
        clearTimeout(keyupTimer);
      }

      keyupTimer = setTimeout(copy, 1000, inputId);
    }

    function copy(inputId) {
      console.log(inputId);
      if (inputId === INPUD_ID1) {
        input2.value = input1.value;
      }
      if (inputId === INPUD_ID2) {
        input1.value = input2.value;
      }
    }