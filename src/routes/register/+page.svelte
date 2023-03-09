<script>
  import { t } from "$lib/i18n/translations";
</script>

<div class="h-screen grid place-content-center">
  <div class="mt-10 mx-auto">
    <div
      class="card bg-white/5 backdrop-blur-lg border border-neutral/10 rounded-2xl p-5 w-[300px]"
    >
      <div class="text-center flex justify-center">
        <div class="p-4 border rounded-full border-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
      <!-- <form action="?/login" method="POST"> -->
      <form>
        <button
          class="py-4 px-4 rounded-full w-full mt-5 btn-github bg-secondary"
          formaction="?/login&provider=github"
        >
          <a href="/dashboard">{$t('common.btn-github')}</a>
        </button>
      </form>

      <hr class="border border-white/10 my-5" />

      <!-- <form method="POST" action="?/register"> -->
      <form>
        <div class="form-group">
          <label for="email">{$t('common.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@gmail.dev"
          />
        </div>
        <div class="form-group mt-2">
          <label for="password">{$t('common.password')}</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>        
        <!-- <button class="py-4 px-4 rounded-full bg-primary w-full my-5 text- btn-action" type="submit">
          {$t('common.register')}
        </button> -->
        <button class="py-4 px-4 rounded-full bg-primary w-full my-5 text- btn-action">
          <a href="/dashboard">
            {$t('common.register')}
          </a>
        </button>
      </form>
      <a class="text-center btn-action2" href="/login">
        <button>{$t('common.register-hint')}</button>        
      </a>
    </div>
  </div>
</div>

<style>
  .btn-github {
    width: 100%;
    margin-bottom: 10px;
  }

  .btn-action {
    margin-top: 30px;
    width: 100%;
  }
</style>
