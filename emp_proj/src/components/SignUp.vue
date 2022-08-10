<template>
    <!-- <button class="m-3 px-2 py-1 bg-gray-300 flex items-start rounded-xl bg-opacity-50">
        <router-link to="/" class="text-xs text-indigo-800 font-bold">Home</router-link>    
    </button> -->

    <div class="my-10 pb-12 mx-96 bg-gray-200 shadow-lg rounded-2xl">
        <h2 class="text-4xl text-indigo-900 font-bold font-serif py-10">Sign Up</h2>
        <div class="register  text-indigo-900 font-bold border-2">
            <table align="center">
                <tr>
                    <td>Name : </td>
                    <td><input type="text" class="w-72 p-2 rounded-xl" v-model="name" placeholder=" Enter Name" /></td>
                </tr><br>
                <tr>
                    <td>Email ID : </td>
                    <td><input type="email" class="w-72 p-2 rounded-xl" v-model="email" placeholder=" Enter Email" /></td>
                </tr><br>
                <tr>
                    <td>Password : </td>
                    <td><input type="password" class="w-72 p-2 rounded-xl" v-model="password" placeholder=" Enter Password" /></td>
                </tr><br>
            </table>
            <button v-on:click="signUp" class="bg-indigo-900 text-white px-4 py-2 rounded-3xl">Sign Up</button>
            
            <div class="mt-10 text-gray-700">
                <p class="text-xs">Already have an account? </p>
                <router-link to="/login" class="text-indigo-700">LOGIN</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name :'SignUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users", {
                email:this.email,
                password:this.password,
                name:this.name
            });

            console.warn(result);
            if(result.status==201)
            {
                // alert("sign up succesfull");
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
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
}
</script>
