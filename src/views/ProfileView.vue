<template>
  <div class="grid grid-cols-2 bg-slate-800 items-center px-5 sm:px-10 md:px-20 lg:px-40 py-1">
    <div class="grid-item">
      <h1 class="text-white text-sm md:text-lg">Princess Güzellik Merkezi</h1>
    </div>
    <div class="grid-item flex flex-row items-center justify-end md:justify-center gap-3">
      <h1 class="text-white hidden sm:flex">Yunus Fersiz</h1>
      <img src="/profile/johndoe.jpg" alt="" width="75" />
      <img src="/icons/arrow-down.svg" alt="" width="20" :class="{'rotate-180':isRotate}" @click="()=>{isRotate = !isRotate}" class="transition ease-in-out delay-100"/>
    </div>
  </div>

  <div class="w-full bg-main p-5 md:p-6 lg:p-10">

    <div class="container mx-auto md:px-10 lg:px-10 xl:px-24">

      <div class="grid lg:grid-cols-4 gap-0 md:gap-5 lg:gap-10">
        
        <div class="bg-white p-3 border-teal-700 border-t-4">
          <h2 class="text-xl font-semibold mb-2">Yunus Fersiz</h2>
          <span class="text-gray-500">{{userRole?.name}}</span>
          <p class="text-xs text-gray-500 leading-6 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dignissimos alias
            voluptas! Beatae quibusdam minima ut obcaecati, voluptas esse maiores!
          </p>

          <div
            class="flex flex-row bg-gray-100 py-4 px-3 mt-5 justify-between rounded-md items-center"
          >
            <span class="text-gray-500 basis-3/4">Status</span>
            <span class="text-white px-2 py-1 rounded-md basis-1/4" 
            :class="{'bg-lime-600':userRole.service,'bg-slate-300':!userRole.service}">
              {{userRole.service ? 'Active' : 'Passive' }}
            </span>
          </div>



          <div
            class="flex flex-row bg-gray-100 py-4 px-3 mt-2 justify-between rounded-md items-center"
          >
            <span class="text-gray-500 basis-2/4">Member Since</span>
            <span class="text-gray-500 basis-2/4 text-end">Nov 07, 2022</span>
          </div>
        </div>

        <div class="col-span-3 bg-white p-1 md:p-2 lg:p-3 rounded-md">
          <div class="flex-flex-row justify-start items center">
            <img src="/icons/manager.svg" alt="" width="40" class="inline-block" />
            <span class="font-medium ml-2">About</span>
          </div>

          <div class="grid md:grid-cols-2 md:gap-1 text-sm">
            <div class="grid grid-cols-2 mt-2 lg:mt-3">
              <div class="py-2">
                <span>First Name</span>
              </div>

              <div class="py-2">
                <span>Yunus Emre</span>
              </div>
            </div>

            <div class="grid grid-cols-2 mt-2 lg:mt-3">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <div class="grid lg:grid-cols-4 gap-0 md:gap-5 lg:gap-10 mt-10">
        <div class="col-span-1 bg-white p-3 border-teal-700 border-t-4">
            
          <h2 class="text-xl font-semibold mb-2">Team Members</h2>

          <div class="flex flex-row flex-wrap gap-3 justify-center items-center">
              <img src="/profile/teams/team-1.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-2.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-3.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-3.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-4.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-5.jpg" alt="John Doe" class="rounded-xl" width="60">  
              <img src="/profile/teams/team-6.jpg" alt="John Doe" class="rounded-xl" width="60">  
          </div>


 
        </div>

        <div class="col-span-3 bg-white p-1 md:p-2 lg:p-3 rounded-md">
          <div class="flex-flex-row justify-start items center">
            <img src="/icons/info.svg" alt="" width="40" class="inline-block" />
            <span class="font-medium ml-2">Company Info</span>
          </div>

          <div class="grid md:grid-cols-2 md:gap-1 text-sm">
            <div class="grid grid-cols-2 mt-2 lg:mt-3">
              <div class="py-2">
                <span>First Name</span>
              </div>

              <div class="py-2">
                <span>Yunus Emre</span>
              </div>
            </div>

            <div class="grid grid-cols-2 mt-2 lg:mt-3">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>

            <div class="grid grid-cols-2">
              <div class="py-2">
                <span>Last Name</span>
              </div>

              <div class="py-2 text-gray-500">
                <span>Fersiz</span>
              </div>
            </div>
          </div>
        </div>


      </div>


    </div>

  </div>

</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';
import {onMounted,ref} from 'vue';
const isRotate = ref(false)

onMounted(() => {
  //when users refresh it best approach is  refresh token or storing JWT token and relevant data in cookies but my ı use local storage
  const userData = JSON.parse(localStorage.getItem('userData'));
  authStore.setUserData(userData)
})

const authStore = useAuthStore();
const {userRole,userTitle,userCompany} = storeToRefs(authStore)



</script>
<style>
.bg-main {
  background-color: #f7fafc !important;
}
</style>
