<template>
    <div class="bg-indigo-900 my-0 py-4 shadow-xl">
        <h1 class="text-white font-bold text-2xl font-serif">EMPLOYEE MANAGEMENT SYSTEM</h1>
    </div>
<Header />
    <div>
        <h2 class="text-4xl text-indigo-900 font-bold font-serif py-6 my-4">Add Employee</h2>
    </div>
    
    <div class="mt-2 font-sans font-bold">
        <table border="1" align="center" class="rounded-xl text-indigo-800">
            <tr>
                <td>Name : </td>
                <td><input type="text" class="w-72 p-2 rounded-xl border-2" v-model="employee.name" name="name" placeholder="Enter Name" /></td>
            </tr><br>
            <tr>
                <td>Age : </td>
                <td><input type="number" class="w-72 p-2 rounded-xl border-2" v-model="employee.age" name="age" placeholder="Enter Age" /></td>
            </tr><br>
            <tr>
                <td>Email-ID : </td>
                <td><input type="email" class="w-72 p-2 rounded-xl border-2" v-model="employee.email" name="email" placeholder="Enter Email-id" /></td>
            </tr><br>
            <tr>
                <td>Contact No.: </td>
                <td><input type="tel" class="w-72 p-2 rounded-xl border-2" v-model="employee.contact" name="contact" placeholder="Enter Contact" /></td>
            </tr><br>
            <tr>
                <td>Address : </td>
                <td><input type="text" class="w-72 p-2 rounded-xl border-2" v-model="employee.address" name="address" placeholder="Enter Address" /></td>
            </tr><br>
        </table>
        <button type="button" v-on:click="addEmployee" class="bg-indigo-900 text-white text-sm px-4 py-2 rounded-3xl"> ADD EMPLOYEE</button>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:'Add',
    components:{
        Header
    },
    data()
    {
        return{
            employee :{
                name:'',
                age:'',
                email:'',
                contact:'',
                address:'',
            }
        }
    },
    methods:{
        async addEmployee()
        {
            console.warn(this.employee)
            const result = await axios.post("http://localhost:3000/employee",{
                name:this.employee.name,
                age:this.employee.age,
                email:this.employee.email,
                contact:this.employee.contact,
                address:this.employee.address,
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'});
            }
            console.warn("result", result)
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>