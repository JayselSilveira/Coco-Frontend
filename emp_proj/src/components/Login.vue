<template>
    <!-- <button class="m-3 px-2 py-1 bg-gray-300 flex items-start rounded-xl bg-opacity-50">
        <router-link to="/" class="text-xs text-indigo-800 font-bold">Home</router-link>    
    </button> -->

    <div class="login my-12 pb-12 mx-96 bg-gray-200 shadow-lg rounded-2xl">
        <h2 class="text-4xl text-indigo-900 font-bold font-serif py-10">Log In</h2>
        <div class="text-indigo-900 font-bold border-2">
            <table align="center">
                <tr>
                    <td>Email ID : </td>
                    <td><input type="email" class="w-72 p-2 rounded-xl" v-model="email" placeholder=" Enter Email" /></td>
                </tr><br>
                <tr>
                    <td>Password : </td>
                    <td><input type="password" class="w-72 p-2 rounded-xl" v-model="password" placeholder=" Enter Password" /></td>
                </tr><br>
            </table>
        </div>

        <button v-on:click="login" class="bg-indigo-900 text-white px-4 py-2 rounded-3xl">Log In</button>
        
        <div class="mt-10 text-gray-700">
            <p class="text-xs">Don't have an account? </p>
            <router-link to="/sign-up" class="text-indigo-700">SIGN UP</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'Login',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length)
            {
                // alert("sign in succesfull");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            console.warn(result)
        }
    },
    mounted()  //directed already signep up users
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
};
</script>
