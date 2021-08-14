export default class Exchange {
  static async getExchange(type,amount){
    try{
      const response= await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY.env}/pair/USD/${type}/${amount}`);
    if (!response.ok){
      throw Error(response.statusText);
    }
    return response.json();
    } catch (error) {
      $('div#results').append(`<br><h1>${response.error}<h1><p>I don't know how you broke it but you managed to. Congragradulations???</p>`);
    }
  }
}
