const btnElement = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');
function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  /* i used toFixed because JS is wacky with numbers */
  totalSpan.innerText = totalValue.toFixed(2);
}

btnElement.addEventListener('click', calculateTotal);
