<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div
          class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden"
        >
          <div class="card-img-left d-none d-md-flex">
            <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form @submit.prevent="register">
              <!-- Form fields -->

              <div class="form-floating mb-3">
                <label for="floatingInputUsername">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="floatingInputUsername"
                  placeholder="myusername"
                  required
                  autofocus
                />
              </div>
              <div class="form-floating mb-3">
                <label for="floatingPassword">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div class="form-floating mb-3">
                <label for="floatingInputUsername">Name</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="floatingInputUsername"
                  placeholder="myusername"
                  required
                  autofocus
                />
              </div>

              <div class="form-floating mb-3">
                <label for="floatingInputEmail">Email address</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
              </div>
              <div class="col-md-6 mb-4">
                <h6 class="mb-2 pb-1">Gender:</h6>

                <div
                  v-for="(gender, index) in genders"
                  :key="index"
                  class="form-check form-check-inline"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    :name="radioGroupName"
                    :id="gender.id"
                    :value="gender.value"
                    v-model="selectedGender"
                  />
                  <label :for="gender.id" class="form-check-label">{{
                    gender.label
                  }}</label>
                </div>
                <label for="ageInput">Enter your age:</label>
                <input
                  type="number"
                  id="ageInput"
                  v-model="age"
                  @input="validateAge"
                />
              </div>
              <!-- <div class="form-floating mb-3">
                <input
                  v-model="confirmPassword"
                  type="password"
                  class="form-control"
                  id="floatingPasswordConfirm"
                  placeholder="Confirm Password"
                />
                <label for="floatingPasswordConfirm">Confirm Password</label>
              </div> -->

              <hr class="my-4" />

              <div class="d-grid mb-2">
                <button
                  @click="register"
                  class="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                >
                  <i class="fab fa-google me-2"></i> Register
                </button>
              </div>

              <div class="d-grid">
                <button
                  @click="registerWithFacebook"
                  class="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                >
                  <i class="fab fa-facebook-f me-2"></i> Have an account? Sign
                  In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
 import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      name: "",
      gender: "",
      age:"",

      radioGroupName: "inlineRadioOptions",
      selectedGender: "option1", // Default selected gender
      genders: [
        { id: "femaleGender", value: "option1", label: "Female" },
        { id: "maleGender", value: "option2", label: "Male" },
        // { id: "otherGender", value: "option3", label: "Other" },
      ],
    };
  },
  methods: {
   async register() {
      this.gender = this.selectedGender === "option1" ? 1 : this.selectedGender;

  // Log the values for testing
  console.log(this.name);
  console.log(this.age);
  console.log(this.email);
  console.log(this.username);
  console.log(this.password);
  console.log(this.gender);
  var requestData = {
          name: this.name,
          username: this.username,
          email:this.email,
          age:this.age,
          gender:this.gender,
          password:this.password
        };

        // Gọi API sử dụng Axios
    	var response = await axios.post('http://localhost:8080/auth/register', requestData);
      this.$router.push({ name: "login" });
      console.log(response);

      console.log("Registration logic");
    },
    registerWithGoogle() {
      // Handle Google registration logic here
      console.log("Google registration logic");
    },
    registerWithFacebook() {
      // Handle Facebook registration logic here
      console.log("Facebook registration logic");
    },
  },
};
</script>
  
  <style scoped>
/* Add this CSS to your styles to achieve the styling */

.container {
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
/* fallback for old browsers */
background: #f093fb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
}


.card-wrapper {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  overflow: hidden;
}

.card-img-left {
  flex: 0 0 50%;
  background-image: url("your-background-image.jpg"); /* Set your background image path here */
  background-size: cover;
}

.card-body {
  flex: 0 0 50%;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;
}

.btn-register {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn-google,
.btn-facebook {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  border: 1px solid #ccc;
}

.btn-google:hover,
.btn-facebook:hover {
  background-color: #f8f9fa;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
}

.card-img-left {
  width: 45%;
  background: scroll center
    url("https://source.unsplash.com/WEQbe2jBg40/414x512");
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}
</style>
  