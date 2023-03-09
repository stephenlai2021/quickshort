# URL Shortener App

This url shortener application is a production ready app, it is a fullstack app powered by Sveltekit and Supabase. It has a robust authentication system, each page / api route is fully protected. It has a good-looking user interface and fully functional CRUD backend operations. Once user sign in the page redirects to dashboard where we can enter original url in the input box to get the shortened url, it is customized to the authenticated user so we won't be able to see the data that does not belong to us.

## Stack

<!-- Sveltekit - No.1 meta-framework and also the most advanced, smarties  -->
### Sveltekit
- An advanced, smart meta-framework combining frontend and backend tech allowing user building a powerful fullstack web app in one single project rapidly and easily, it takes care of all the heavy-lifting job for us so we can only focus on the creactive parts 🥰

<!-- Supabase - No.1 backend as service, it simplifies backend development  -->
### Supabase 
- A popular backend as a service, it simplifies backend development for us so that we can communicate to Supabase backend with easy to read and understand Javasccript APK pretty quick and easy. The CMS is very developer friendly 🥰

<!-- TailwindCSS - No.1 CSS library, it makes styling so much easy and we  -->
### DaisyUi
- A cool and advanced css library on top of Tailwindcss, it makes styling so much easy and we never leave our html which is amazing 😘

<!-- Vercel - No.1 hosting platform, it is well maintained and has the  -->
### Vercel 
- An advanced, powerful, well maintained hosting platform and has the quickiest response time meaning when we hit the url the page is rendered in the browser almost in no time, this gives the best user experiences, pretty awesome 🥰

## Topics

### Folder Structure 

![Data Structure](https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/projects/url_shortener/url-shortener-src-folder.png)

### Components

### Page Route

- Home Page (Landing Page)
- Login Page (Login/Signup)
- Dashboard Page (User manage CRUD operations)

### Server Route (API Route)

### Authentification

### Data Structure

![Data Structure](https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/projects/url_shortener/url-shortener-data-structure.png)

## Features

### Multilingual (I18N)

QuickShort supports 4 languages, they are 
```
English,
Japanese,
Simplified Chinese,
Traditional Chinese
```

---

### Theme Switcher

We are gonna use `Daisy UI` built-in themes to quickly create this functiona

`Daisy UI` has 29 beautiful and prebuilt themes, and they are 
```
"light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
```

Each theme contains 9 colors in terms of class name, and they are
```
"primary", "secondary", "accent", "neutral", "base-100", "info", "success", "warning", "error"
```

Let us take a look at an exmaple, suppose we want to change color of backround, navbar, btn when we switch theme, I want background of the page to be `base-100`, navbar to be `neutral` and button to be `primary`, 
```
<div id="container" class="bg-base-100">
  <div id="navbar" class="bg-neutral">
    <button class="bg-primary">Action</button>
  </div>
</body>
```

Once we switch theme the color will be adjusted to corresponging color based upon class name (base-100, neutral, primary), etc.

We also have to add a `data-theme=<theme>` attribute within `<html>` tag in `app.html`, i.e.
```
app.html
--------
<html lang="en" data-theme="dark">
...
```
then in our component we can apply a `<select>` and `<option>` element to select theme to change color of text, background, button, etc.

---

### PWA (Progressive Web App)

In order to make our web app running offline, we have to make it a progressive, this requires a `manifest.json` and `service-worker.js` file to make it work

Create a `manifest.json` file
- Visit [SimiCart](https://www.simicart.com/manifest-generator.html/), and follow the step by step instructions to generate a `manifest.json` and corresponding icon files

Create a `service worker` file
- Follow the instructions in [Sveltekit Docs](https://kit.svelte.dev/docs/service-workers)

---

### Checkout

This app allows authenticated use to create 10 short links, meaning user with free tier has at most ten records in the database, if the number is exceeded user will be redirect to checkout page to proceed the payment, if user doesn't want to pay, then all he/she has to do is to maintain the number of link in dashboard within 10 by removing the unwanted item.

Stripe is the chose payment tech because it is widely adopted and is secure.

---

### Google Play Store 

if a native app is preferred, user can download the app in the form of Android App from Play Store. 

How to turn a web app into an Android app

---

## Usage

1. Download this repo and open it with VSCode

2. Open terminal and install all the dependencies with the command
```
npm i
```

3. Create an `.env` file in root directory and add the following codes
```
PUBLIC_SUPABASE_ANON_KEY = Your supabaseKey
PUBLIC_SUPABASE_URL = Your supabaseUrl
```

4. Create a Supabase account

5. Create two tables, 'links' and 'clicks'

- clicks table

![clicks table]()

6. Create the following column in links table
```
long_url,
short_key,
count,
created_at,
user
```

6. Create the following column in clicks table
```
ip
link_id
location
user_agent
```

Run development server
```
npm run dev
```

## Deployment


