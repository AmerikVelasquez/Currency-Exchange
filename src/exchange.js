export default class Exchange {
  static async getExchange(){
    try{
      const response= await fetch(`https://v6.exchangerate-api.com/v6/key=${API_KEY.env}`);
    if (!response.ok){
      throw Error(response.statusText);
    }
    return response.json();
    } catch (error) {
      return error.message;
    }
  }
}