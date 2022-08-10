<template>
    <div class="nav grid-cols-3 py-2 text-indigo-900 font-bold shadow-lg">
        <router-link to="/">Home &nbsp; &nbsp; &nbsp;</router-link>
        <router-link to="/add">Add Employee&nbsp; &nbsp; &nbsp;</router-link>
        <!-- <a href="#">View&nbsp; &nbsp; &nbsp;</a> -->
        <!--<router-link to="./update">Update&nbsp; &nbsp; &nbsp;</router-link> -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        logout()
        {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>


<style>
/* .nav{
    background-color: black;

}

.nav a{
    background-color: black;
    padding: 20px 120px;
    float: left;
    color:cornsilk;
    font-size: 16px;
    text-decoration: none;
} */
</style>