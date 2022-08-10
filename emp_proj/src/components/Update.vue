<template>
    <div class="bg-indigo-900 my-0 py-4 shadow-xl">
        <h1 class="text-white font-bold text-2xl font-serif">EMPLOYEE MANAGEMENT SYSTEM</h1>
    </div>
<Header />
    <div>
        <h2 class="text-4xl text-indigo-900 font-bold font-serif py-4 my-4">Update Employee Details</h2>
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
        <button type="button" v-on:click="updateEmployee" class="bg-indigo-900 text-white text-sm px-4 py-2 rounded-3xl">Update</button>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default{
    name:'Update',
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
        async updateEmployee()
        {
            console.warn(this.employee)
            const result = await axios.put("http://localhost:3000/employee/"+this.$route.params.id,{
                name:this.employee.name,
                age:this.employee.age,
                email:this.employee.email,
                contact:this.employee.contact,
                address:this.employee.address,
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
            console.warn("result", result)
        } 
    },
    async mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }

        const result = await axios.get('http://localhost:3000/employee/'+this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result)
        this.employee=result.data
    }
}
</script>