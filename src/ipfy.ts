export class Ipfy {
  static ipfyEndpoint = {
    ipV4: {
      text: "https://api.ipify.org",
      json: {
        options: {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        url: "https://api.ipify.org?format=json"
      },
    },
  }
  static async getGlobalIp() {
    try {
      const response = await fetch(
        Ipfy.ipfyEndpoint.ipV4.json.url, 
        Ipfy.ipfyEndpoint.ipV4.json.options
      );
      const data = await response.json();
      return data.ip;  
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch IP address from API");
    }
  }
}