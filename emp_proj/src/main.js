import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from './routers'


createApp(App)
.use(router)
.mount('#app');




// ADD EMPLOYEE
// <-- <template>
// <h2>Add Employee</h2>
// <div>
//     <form>
//         <label>Name</label>
//         <input type="text" placeholder="Enter the employee name"><br><br>

//         <label>Email</label>
//         <input type="email" placeholder="Enter the employee email"><br><br>

//         <label>Salary</label>
//         <input type="number" placeholder="Enter Salary"><br><br>

//     </form>
// </div>
// </template>


// <script>
// </script> -->
