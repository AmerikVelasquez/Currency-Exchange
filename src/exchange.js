export default class Exchange {
  static async getExchange(type,amount){
    try{
      const response= await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${type}/${amount}`);
    if (!response.ok){
      throw Error(response.statusText);
    }
    return response.json();
    } catch (error) {
     return error.message;
    }
  }
}
