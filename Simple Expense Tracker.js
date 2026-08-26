const bal = document.getElementById("balance");
const dest = document.getElementById("desc");
const amt = document.getElementById("amount");
const btn = document.getElementById("addBtn");
const exlist = document.getElementById("expenseList");
let total = 0;
btn.addEventListener("click" , function ()
{
  const discription=dest.value;
  const value=Number(amt.value);
  
  total=total+value;
  bal.textContent="Balance:₹"+total;
  const li=document.createElement("li");
  li.textContent=discription+":₹"+value;
  exlist.appendChild(li);
  dest.value="";
  amt.value="";
});
