import axios from "axios";

const userClient = axios.create({
  baseURL: "http://localhost:5000"
});

export const userApi = {
  async login(body: { email: string; password: string }) {
    try {
      return await userClient.post("/loginIn", body).then((response)=> {
        if(response.status == 200){
          console.log(`Welcome, ${response.data.name}`);
        }
        return response.status
      } );
    } catch (e) {
      console.log("Unable to sign in");
    }
  }
};
