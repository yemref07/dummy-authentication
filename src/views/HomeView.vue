<template>
  <main>
    <div class="grid md:grid-cols-2 md:min-h-screen">
      <div class="flex flex-col bg-image-1 justify-center items-start text-white px-5 md:px-10 lg:px-20">
        <h1 class="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-5 mt-10">
          Dummy Login Screen
        </h1>
        <p class="text-base sm:text-sm md:text-md lg:text-xl mb-10 md:mb-0">
          This website is for educational purposes only and does not intend to infringe on any
          copyrights or licenses.
        </p>

        <div class="icons-container">
          <a href="" target="_blank">
            <img src="/social-media-icons/twitter3.svg" alt="twitter" class="w-5 md:w-7 inline-flex" />
          </a>
          <a href="" target="_blank">
            <img src="/social-media-icons/linkedin.svg" alt="linkedin" class="w-5 md:w-7 inline-flex" />
          </a>
          <a href="" target="_blank">
            <img src="/social-media-icons/instagram.svg" alt="instagram" class="w-5 md:w-7 inline-flex" />
          </a>
          <a href="" target="_blank">
            <img src="/social-media-icons/facebook.svg" alt="facebook" class="w-5 md:w-7 inline-flex" />
          </a>
        </div>
      </div>
      <div class="flex flex-col bg-zinc-900 justify-center items-center">
        <img src="/logos/logo.svg" alt="" class="w-56" />
        <div class="flex flex-row mt-5 gap-2">
          <a href="">
            <img src="/social-media-icons/google.svg" alt="" width="40" />
          </a>
          <a href="">
            <img src="/social-media-icons/linkedin2.svg" alt="" width="40" />
          </a>
        </div>
        <p class="text-sm text-white mt-5">or use your email</p>

        <form class="w-1/2">

          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input v-model.trim="email" type="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="info@demo.com.tr" required />
            <span class="text-rose-700 text-xs" v-if="errorMsgs.email">{{ errorMsgs.email }}</span>
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
              password</label>

            <input v-model.trim="password" type="password" id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required />

            <span class="text-rose-700 text-xs" v-if="errorMsgs.password">
            {{
              errorMsgs.password
            }}
            </span>

            <ul v-if="authErrorMsgs.length > 0">
              <li class="text-rose-700 text-xs my-3 text-center" v-for="(item, index) in authErrorMsgs" :key="index">
                {{ item.message }}
              </li>
            </ul>

          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" v-model="remember"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required />
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button type="submit" @click="loginAcc"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'
import { ref,watchEffect } from 'vue'

const authStore = useAuthStore()
const { authErrorMsgs } = storeToRefs(authStore)

const email = ref('')
const remember = ref(false)
const password = ref('')
const errorMsgs = ref({
  email: '',
  password: ''
})
const isValid = ref(false)

const watchInputs = watchEffect(()=>{
    if(email.value === "" || password.value === ""){
      authStore.clearAuthErrs();
    }
  })


const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email.match(emailRegex)) return true
  else {
    return false
  }
}

const passwordValidation = (password) => {
  const passwordRegex = /^.{6,12}$/
  if (password.match(passwordRegex)) {
    return true
  } else {
    return false
  }
}

const checkValidation = () => {
  isValid.value = false

  if (!emailValidation(email.value)) {
    console.log('email not valid', emailValidation(email.value), email.value)
    isValid.value = false
    errorMsgs.value.email = 'Its not an valid email'
  }

  if (!passwordValidation(password.value)) {
    isValid.value = false
    errorMsgs.value.password = 'Its not an valid password'
  }

  if (passwordValidation(password.value) && emailValidation(email.value)) {
    errorMsgs.value.password = ''
    errorMsgs.value.email = ''
    isValid.value = true
  }
}

const loginAcc = (e) => {
  e.preventDefault()
  checkValidation()
  if (isValid.value) {
    authStore.login(email.value, password.value)
  }
}
</script>

<style>
.bg-image-1 {
  background: url(/loginScreen/bg1.jpg);
  min-height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.icons-container {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icons-container a {
  margin-right: 15px;
}
</style>
