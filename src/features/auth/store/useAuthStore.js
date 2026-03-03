import { defineStore } from "pinia";
import apiClient from "../../../services/apiClient";
import router from "../../../router";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user:null,
        accessToken: null, //stored in memory, not localStorage
    }),
    actions: {
        // login
        async login(email, password){
            try{
                const res = await apiClient.post(
                    "/auth/login",
                    {email, password}, 
                    {withCredentials: true}); //only needed if backend sets cookies

                this.user = {
                    id: res.data._id,
                    name: res.data.name,
                    surname: res.data.surname,
                    email: res.data.email,
                    // role: res.data.user.role,
                }

                this.accessToken = res.data.token; //jwt access token
                console.log("login successful",this.user);

                router.push("/"); //redirect to home page
            } catch(error){
                console.error("login failed", error.response?.data?.message || error.message);
                alert(error.response?.data?.message || error.message);
            }
        },
        
        // signup
        async signup(name, surname, email, password){
            try{
                const res = await apiClient.post(
                    "/auth/signup",
                    {email, password, name, surname},
                    {withCredentials: true}
                )

                this.user = {
                    id: res.data._id,
                    name: res.data.name,
                    surname: res.data.surname,
                    email: res.data.email,
                    // role: res.data.user.role,
                }

                this.accessToken = res.data.token
                console.log("signup successful",this.user);

                router.push("/login");
            }catch(error){
                console.error("signup failed", error.response?.data?.message || error.message);
                alert(error.response?.data?.message || error.message);
            }
        },

        // logout
        async logout(){
            try{
                await apiClient.get("/auth/logout", {withCredentials: true});

                this.user = null;
                this.accessToken = null;
                console.log("logout successful");
                router.push("/login");
            }catch(error){
                console.error("logout failed", error.response?.data?.message || error.message);
                alert(error.response?.data?.message || error.message);
            }
        }
  
    }
})

