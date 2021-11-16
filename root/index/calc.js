function onClick1() {
  let f1 = document.getElementsByName("field1");
 let f2 = document.getElementsByName("field2");
 let r = document.getElementById("result2");
 if(parseInt(f1[0].value) * parseInt(f2[0].value)>0){
 var result = parseInt(f1[0].value) * parseInt(f2[0].value);
 }else{
 alert("Error");
 }
 r.innerHTML = result;
 let с = document.getElementById("button1");
 return false;
}
function onClick2() {
  let f1 = document.getElementsByName("field1");
  let f2 = document.getElementsByName("field2");
  let r = document.getElementById("result2");
  r.innerHTML = None;
  f1.innerHTML = None;
  f2.innerHTML = None;
  return false;
}
let amount = 0;
let radios = document.getElementById("myradios");
let check = document.getElementById("check-1");
radios.style.display = "none";
check.style.display = "none";
let r = document.getElementById("result1");
var result = 0;
r.innerHTML = result;
window.addEventListener('DOMContentLoaded', function (event) {
  let f0 = document.getElementsByName("field0");
  let s = document.getElementsByName("myselect");
  let r = document.querySelectorAll(".myradios input[type=radio]");
  let c = document.getElementsByName("check-1");
  f0[0].addEventListener("change", function(event) {
    if(parseInt(this.value)>=0){
       amount = parseInt(this.value);
    }else{
    alert("Error");
    let rr = document.getElementById("result1");
        var result = 0;
        rr.innerHTML = result;
    }
    if (s[0].value == "1") {
      let r = document.getElementById("result1");
      var result = 5000*amount;
      r.innerHTML = result;
    }
    else if (s[0].value == "2") {
      if(r.value == "r1"){
        let rr = document.getElementById("result1");
        var result = 10000*amount;
        rr.innerHTML = result;
      }else if (r.value == "r2") {
        let rr = document.getElementById("result1");
        var result = 30000*amount;
        rr.innerHTML = result;
      }else if (r.value == "r3") {
        let rr = document.getElementById("result1");
        var result = 50000*amount;
        rr.innerHTML = result;
      }
    }
    else if(s[0].value == "3") {
      if(c[0].checked){
        let r = document.getElementById("result1");
        var result = 150000*amount;
        r.innerHTML = result;
      }else{
        let r = document.getElementById("result1");
        var result = 100000*amount;
        r.innerHTML = result;
      }
    }

  });

  s[0].addEventListener("change", function(event) {
    let select = event.target;
    let radios = document.getElementById("myradios");
    let check = document.getElementById("check-1");
    // Можно использовать getElementsByClassName()
    if (select.value == "1") {
      radios.style.display = "none";
      check.style.display = "none";
      let r = document.getElementById("result1");
      var result = 5000*amount;
      r.innerHTML = result;
    }
    else if (select.value == "2") {
      radios.style.display = "block";
      check.style.display = "none";
      let r = document.getElementById("result1");
      var result = "Выберите тип сайта";
      r.innerHTML = result;
    }
    else if(select.value == "3") {
      radios.style.display = "none";
      check.style.display = "block";
      let r = document.getElementById("result1");
      var result = 100000*amount;
      r.innerHTML = result;
    }
  });

  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      if(r.value == "r1"){
        let r = document.getElementById("result1");
        var result = 10000*amount;
        r.innerHTML = result;
      }else if (r.value == "r2") {
        let r = document.getElementById("result1");
        var result = 30000*amount;
        r.innerHTML = result;
      }else if (r.value == "r3") {
        let r = document.getElementById("result1");
        var result = 50000*amount;
        r.innerHTML = result;
      }
    });
  });

  c[0].addEventListener("change", function(event) {
    if(this.checked){
      let r = document.getElementById("result1");
      var result = 150000*amount;
      r.innerHTML = result;
    }else{
      let r = document.getElementById("result1");
      var result = 100000*amount;
      r.innerHTML = result;
    }
  });

});
"use strict"

  var $popOverlay = $(".popup-overlay");
  var $popWindow = $(".popWindow");
  var $popupMainWindow = $(".popup-main-window");
  var $popThankYouWindow = $(".thank-you-window");
  var $popClose = $(".close-btn");
  var $popOpen = $("#for-popup-form");

  $(function() {
  // Close Pop-Up after clicking on the button "Close"
  $popClose.on("click", function() {
  history.replaceState(null, null, ' ');
  $popOverlay.fadeOut();
  $popWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  });

  // Close Pop-Up after clicking on the Overlay
  $(document).on("click", function(event) {
  if ($(event.target).closest($popWindow).length) return;
  history.replaceState(null, null, ' ');
  $popOverlay.fadeOut();
  $popWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  event.stopPropagation();
  });

  //сохраним в localstorage данные формы
  // localStorage.setItem("name", $('[name = "popup-name"]'));
  // localStorage.setItem("email", $('[name = "popup-email"]'));
  // localStorage.setItem("textarea", $('[name = "popup-message"]'));

  // popup form
  $(".popup-form").submit(function() {
      var th = $(this);
      $(".popup-submit").prop('disabled', true);
      $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/ilUvvUbaiZq",
      data: th.serialize(),
      })
      //.done(function() {
      // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
      $popupMainWindow.fadeOut();
      $popThankYouWindow.fadeIn();
      // очищаем форму
      setTimeout(function() {
      $(".popup-submit").prop('disabled', false);
      th.trigger("reset");
      }, 1000);
      //});
      return false;
      });
  });

  $(document).ready(function() {
  $popOpen.click(function(){
  window.location.hash = "#popup";
  $popOverlay.fadeIn();
  $popupMainWindow.fadeIn();
  return false;
  });
  });

  $(window).on('hashchange', function (event) { //при клике на "назад" скрывать форму
  if(window.location.hash == "#popup"){
  $popOverlay.fadeIn();
  $popupMainWindow.fadeIn();
  }
  else{
  if(window.location.hash != "#popup") {
  $popOverlay.fadeOut();
  $popupMainWindow.fadeOut();
  $popThankYouWindow.fadeOut();
  }
  }
  });
