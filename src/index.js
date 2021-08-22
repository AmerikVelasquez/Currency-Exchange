import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange.js';

function displayResults(response) {
  if (response.result === 'success'){
    $('div#results').prepend(`<br><h3>The amount you have in this country's currency is${response.conversion_result}</h3>`);
  } else {
    $('div#results').prepend(`<br><h3>This currency is not currently accessible or does not exist</h3>`);
  }
}
async function linkExchange(type, amount) {
  let response = 0;
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
    let amount =$('#amount').val();
    linkExchange(type, amount);
  });
});