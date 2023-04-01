"use strict"; //execute in strict mode


var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

const dateInput = document.querySelector(".user-details .input-box input[type='date']");

dateInput.addEventListener("click", function() {
  this.classList.add("opened");
});

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const amnt = document.getElementsByName("Amount");


//add $ sign to beginning of input
amnt[0].addEventListener("focus", function()
{
    if(amnt[0].value.charAt(0) != '$'){
        amnt[0].value = '$';
    }   
    
});

function onAddWebsite(e) {
  e.preventDefault();
  
  const cate = document.getElementsByName("Category")[0].value;
  const prdr = document.getElementsByName("Purchase")[0].value;
  const date = document.getElementsByName("Date")[0].value;
  amnt[0].value = '$' + parseInt(amnt[0].value.replace(/[$]|[,]/g, '')).toLocaleString('en-US');
  let newAmnt = amnt[0].value;

  //Session storage
  let total = parseInt(sessionStorage.getItem("giveTotal") || 0);
  sessionStorage.setItem("giveTotal", total + parseInt(newAmnt.replace(/[$]|[,]/g, '')));
  
  tbody.innerHTML += `
    <tr>
      <td>${cate}</td>
      <td>${prdr}</td>
      <td>${date}</td>
      <td>${newAmnt}</td>
      <td><button class="deleteBtn">Delete</button></td>
    </tr>
  `;
  sessionStorage.setItem("giveTableRows", tbody.innerHTML);
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
  sessionStorage.setItem("giveTableRows", tbody.innerHTML);
  
  let total = parseInt(sessionStorage.getItem("giveTotal"));
  total -= parseInt(btn.closest("tr").children[3].innerHTML.replace(/[$]|[,]/g, ''));
  sessionStorage.setItem("giveTotal", total);
}

form.addEventListener("submit", onAddWebsite);
table.addEventListener('click', onDeleteRow);

// here is the implementation for the div select.

// let dateBox = document.getElementById("dateBox");

// dateBox.addEventListener("click", function(){
  
// })

//session storage update
window.onload = function updateSession()
{
  tbody.innerHTML = sessionStorage.getItem("giveTableRows") || "";
}




var libertyBtn = document.getElementsByClassName("libertyBtn");

function showCFLpage() {
  window.location.href = "https://www.liberty.edu/business/center-for-financial-literacy/";
}

// the is the functionalites for the social media icons
function showFBpage() {
  window.location.href = "https://www.facebook.com/groups/LibertyCFL/?_ga=2.101789572.488967955.1669654119-816072560.1565226602";
}

function showTWpage() {
  window.location.href = "https://twitter.com/LibertyU_Busi?_ga=2.101985156.488967955.1669654119-816072560.1565226602";
}

function showIGpage() {
  window.location.href = "https://www.instagram.com/lucenterforfinancialliteracy/?_ga=2.268035211.488967955.1669654119-816072560.1565226602";
}

function showLIpage() {
  window.location.href = "https://www.linkedin.com/company/center-for-financial-literacy-liberty-university/?viewAsMember=true";
}