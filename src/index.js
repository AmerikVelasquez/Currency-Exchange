import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange.js';

function displayResults(response) {
      $('div#results').prepend(`<br><h3>${response.conversion_result}</h3>`);
}
async function linkExchange(type, amount) {
  let response = null;
  let amount = $("amount");
  switch(type) {
    case "PHP":
    case "JPY":
    case "GBP":
    case "EGP":
    case "PLN":
      response = await Exchange.getExchange(type, amount);
    displayResults(response);
  }
}

$(document).ready(function(){
  $('button').click(function(){
    let type = $('select#option').val();
    let amount =$().val();
    linkExchange(type, amount);
  })
})