"use strict"; //execute in strict mode

//This is the JS code for the drop down menu on phone view

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

//This is the end of the JS code for the drop down menu on phone view


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