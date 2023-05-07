<template>
  <div class="min-h-screen flex items-center">
    <div class="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="text-base font-semibold label-text">Username</span>
          </label>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="text-sm input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="text-base font-semibold label-text">Password</span>
          </label>
          <input
            v-model="password"
            type="text"
            placeholder="Password"
            class="text-sm input input-bordered"
          />
          <label class="label">
            <a href="#" class="text-s italic label-text-alt link link-hover"
              >Forgot password?</a
            >
          </label>
        </div>
        <div class="form-control">
          <button
            @click="submit"
            class="btn rounded-full border-transparent drop-shadow-med bg-orange-400"
          >
            Login
          </button>
        </div>
        <div class="form-control">
          <label class="scale-[.9] cursor-pointer label justify-center">
            <span class="label-text mr-3">Remember me</span>
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-warning"
            />
          </label>
        </div>
        <div v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: null,
        password: null,
        errors: [],
      };
    },
    methods: {
      checkForm(e) {
        this.errors = [];

        if (!this.username) this.errors.push("Username required.");
        if (!this.password) this.errors.push("Password required.");
        if (this.errors.length) return false;
        return true;
      },
      submit() {
        if (!this.checkForm) return;
      },
    },
  };
</script>
