import { defineStore } from 'pinia'
import { ref,watch} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const router = useRouter();
  const userData= ref("");
  const userRole = ref("");
  const userCompany = ref("");
  const userTitle = ref("");
  const authErrorMsgs = ref([]);

  //set base url
  const api = axios.create({
    baseURL:"https://api.randevucenter.com/api/v1"
  });

  //generate a cancelToken
  const source = axios.CancelToken.source();

  // Configure Each HTTP requests before sending
  api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken');
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  })
 

  const login = async (email, password) => {


    try {
      const response = await api.post('/auth/login',

        {
          email: email,
          password: password
        },

        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // Correct content type header
          },
          timeout: 5000,
          cancelToken:source.token
        },
  
      );

      if (
        response.status === 200 &&
        response.data.access_token &&
        response.data.access_token.token
      ) {
        clearAuthErrs();
        localStorage.setItem('accessToken', response.data.access_token.token)
        localStorage.setItem('userData',JSON.stringify(response.data))

        userData.value = response.data;
        isAuthenticated.value = true;

        router.push({name:'profile'})
        console.log(response)
      } 
      else {
        isAuthenticated.value = false;
      }
      
      console.log(response)

    } 
    
    catch (error) {

      // Handle cancellation here if needed
      if(axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } 

      // Authentication error
      if (error.response && error.response.status === 401){
        console.error(error);
        clearAuthErrs();
        authErrorMsgs.value = [...error.response.data.errors]
       }

       //other errors
      else{
        console.error(error);
      }
    }
  }

  const logout = () => {
    isAuthenticated.value = false;
    localStorage.setItem('accessToken',null);
    localStorage.setItem('userData',null);
    userData.value = "";
    userRole.value = "";
    authErrorMsgs.value = "";
  }

  const watchUserData = watch(userData,(newValue)=>{
    userRole.value = newValue.user.role;
    userTitle.value = newValue.user.title;
    userCompany.value = newValue.user.company;
    console.log(userRole.value,"userRole")
    console.log(userTitle.value,"userTitle")
    console.log(userCompany.value,"userCompany")
  });

  const clearAuthErrs= () => {
    authErrorMsgs.value = []
  }

  const setUserData = (data)=>{
    userRole.value = data.user.role;
    userCompany.value = data.user.company;
    userTitle.value = data.user.title;
  }

  return {
    isAuthenticated,
    login,
    logout,
    watchUserData,
    authErrorMsgs,
    clearAuthErrs,
    userRole,
    userCompany,
    userTitle,
    setUserData
  }
})
