# <img height="40" align="left" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/public/shormaster_logo-removebg.png"  alt="Logo" /> ShortMaster - A URL shortener application that not only shorten long url but analyze traffic from the clicks

<img src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/home.png" />

**Before** the advent of `Svelte` and `Sveltekit`, most people built single page application with `Angular`, `React` and `Vue`, I was one of them, I used to build web apps with `Vue.js` most of the time, a little bit `React.js`, until I found out `Svelte`, I couldn't remember how I exactly discover Svelte, but I know I was totally amazed and fall in love with the magic it brings about, short, clean and easy to understand and read syntax / expresssion, built-in store management, well structured folder, the entire system is just terrific, I never thought developing web applications can be so pleasant and enjoyble, everything is so intuitive, and of course I switched to Svelte without any hesitation. I also dived in fullstack application with `Sapper`, a meta-framework built on top of Svelte and is as known as one of the Big Three, the other two are `Next.js` and `Nuxt.js`, then we all know what happened, Rich Harris and Svelte team creates the revoluntionary meta-framework~ `Sveltekit`, and it is so popular that it has become Developers's most loved and used framework. The reason `Sveltekit` is so cool and awesome is because its genius file naming strategy, for example, `+page.svelte` means it is a ui file, does thing on client side after dom is mounted; `+page.server.js` indicates it is a server file, we fetch external data in this file and inject to `+page.svelte`, the ui is fully rendered on server side and is displayed on page. `+server.js` is a standalone api file, it handle CRUD operations such as Create / Read / Update / Delete on api, etc. With Sveltekit building a fully functional web applications has become very easy, with the naming mechanism it makes coding intuitive, Sveltekit takes care of the heavy lifting job for us so we can focus on the creative parts. I used to build SSR web apps with Node/Express, and I fully switched to Sveltekit because of the above mentioned advantages. 

**This** ShortMaster URL shortener applications functionalities and features are all handle on server side, so on client side we only read the data injected from server side and rendering. I personally love server side render because users / visitors always see the fully rendred page in no time, and avoid parts such as loading indicators / skeletons, etc. compared to client side rendering (Single Page Application)

**As** a big fan of Svelte / Sveltekit, I quite often browse svelte.dev to look for answers / solutions / inspirations, and I happed to find out SvelteHack competition, and feel very excited and eagerly to participate this awesome and meaningful event. Because time is not much so I was thinking what type of application is best demonstrating Sveltekit's advanced features. I want this app have features such as theme switcher, multiple languages support, authentication, route gurad, chatbot, and I think an URL shortener application is a good idea, not only short long url but track user info such as ip address, country, city, geolocation, etc. I have been learning Svele/Sveltekit for awhile from official website, articles and youtube, and I already have a blueprint on how to implement these features and functionalities. After a something month the app is accomplished and it is time to present the results that I am proud of and hopefully not only win the prizes but help contribute to Svelte society, I am pretty sure Sveltekit is the No.1 meta-framework, it is better than Next, Nuxt, Remix and many other frameworks based upon my personal experiences. I think people should be aware of the advantages, benefits and power that Svelte / Sveltekit brings about over other frameworks and knowing builing powerful server side render application can be pretty easy and fun, no need to learn and build backend server MVC app with Node, ASP.Net, Python, Ruby, PHP, etc. Sveltekit takes care of it all 🤩😀🥰😉🤗😘😎👍

One thing to mention is that designing an appealing, good-looking User Interface is always a challenge for me, and I think this applies to most of the developers / coders. It took me awhile to determined the layout of the pages, this also involves color, title, subtitle, etc.

## How it works

1. User has to login with one of the social accouns.
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/auth.png" />

2. User will be brought to dashboard page after login.
3. There is a form on the top where user enter a long url, clicking the shorten button, the system then designates a randomly generated six figures (short key) automatically and update the info with a card
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/dashboard.png" />

4. Click the short link in the card section to enter detailed page. 
5. You can see ShortMaster icon in the center of the map in the top.
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/detailed-v1.png" />

6. Copy the shortend url by clicking the copy icon, open a new tab and paste it on the address bar, you will be redirected to the original url, the total clicks will be automatically increased by one, and the ip address, country, city will be collected and user location (whoever clicks the link) will be displayed on the map.
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/detailed-v2.png" />

7. This is pretty much about the main features and functionalities of ShortMaster URL shortener.


### Live Demo

- [https://shortmaster.netlify.app](https://shortmaster.netlify.app)
- [https://shortmaster.vercel.app](https://shortmaster.vercel.app)

The app is working perfectly on Vercel all the time at the beginning but somehow it is not working anymore due to "Serverless Function crash" and I have no clue how that happened and the way to fix it therefore I take alternative approach which is deploying it on `Netlify` and it works great.

  

## Table of Contents

- [Features](#Features)
- [Tech Stack](#Tech_Stack)
- [Routes](#Routes)
- [Third Party APIs](#Third_Party_APIs)
- [Supabase as BAAS](#Supabase_BAAS)
- [Environment Variables](#Environment_Variables)
  

## Features

**Theme Switcher** 

- users are able to select favorite theme, it applies to the entire application, the selected theme is remembered by the application and is stored in cookie,  so when page is refreshed users won't see the flicker, it provies great user experiences thanks to `Sveltekit` powerful server side rendering mechanism. 

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/menu-theme.png">


**Internationalization** 

- Multiple languages supports is essential for a successful web application, being able to serve people around the world is the key to success, therefore, adding `i18n` to the app is crucial. A `sveltekit-i18n` package is leveraged to make this feature come true. 🤗

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/menu-lang.png">

**User account**

- loggedin user's avatar image will be apperaed on the top right corner, when mouse hovered the menu will be opened, submenu such as user name, dashboard, chatbot toggle, logout will be shown.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/menu-user.png">



<!-- **Authentication** 

- _ShortMaster_ applies `Supabase` as a total backend solution. Users are required to login to use the functionality. Each route is protected on server side, if a user is not loggedin, he/she is not allowed to access `/dashboard` route where only authenticated users are accessible. On the other hand, if authenticated users try to access routes such as `/`, `/auth`, they will be redirected to `/dashboard`. Besides, users can easily login with their social accounts which save tons of time and steps because if login / signup with email and password, it requires users head to thier email account to confirm the login / signup procedure and that's why people are liking social accounts login with a click of button. 😀 -->

**OpenAI Powered Chatbot** 

- The advent of `chatGPT` has becoming a phenomonal, it takes chabot to another level, it talks in human manner, understand what we ask, and answer questions beyond our expectations. Therefore an `OpenAI` powered chatbot has become a necessity for a successful app to draw visitors' attention and willing to stay longer on our page. _ShortMaster_ has `OpenAI` powered chatbot built-in, it not only answers questions related to URL shortening, but also other concerns if you would like to just chat with this super AI, all the conversation is stored so that you don't need to restart the conversation all over again once the chat window is closed.😉

**Tracking Capability** 

- When a user click shortend url you paste, _ShortMaster_ collects total clicks from that particular url, and that user's ip address, country, city, latitude, longitude, etc. User location is then displayed on the map in dashoard. This feature let you visualize where the traffic is from and that makes you easily target the audiences to deliver your services.

**Fully Responsive UI** 

- All the pages are fully responsive, no matter what size of the page, or what dimension of the device, _ShortMaster_ always presents the best and good looking user interface.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-home.png">

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-auth.png">

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-dashboard.png">

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/rwd-details.png">



## Tech_Stack  

**Sveltekit** 

- `Sveltekit` is the No.1 meta-framework in Javascript world, it allows developers to work on both forntend and backend functionality to build powerful fullstack applications in an easy and pleasant manner. It has the best, clear, easy to understand folder structure that illustrates the route (client, server and api), it also has the simpliest, cleaniest, most intuitive, easiest to read and understand syntax, template engine, expressions to provide best developer experiences, it is a master piece from **Rich Harris** and **Svelte core team** 🤩🤩🤩

**Supabase** 

- `Supabase` is a backend as a service, it has database, authentication, storage, edge function, etc. It provides simple, clean, easy to read and understand functions / expressions / api to perform CRUD operation. We can go to API Docs page and copy the codes and paste into our project, modify table name and the column data to get job done like piece of cake. It makes developing backend functionality way so much easy, it is the altervative of the popular `firebase` but even better.

**Tailwindcss / Daisyui** 

- `Tailwindcss` is a utility class library, it let developers never leave html, all the styles can be done within tags, it is considered the most popular CSS library . `Daisyui` is a library on top of Tailwindcss, it is a component library and make developing components fairly easy by simply adding a class name to get a beautify component with minimum styles, for example if we need a button, simply add `class="btn"` to get a basic styled button, if we want to customize the color of the button we simply add `class="btn btn-primary"` to get system define primary color, etc. Daisyui makes building beautiful, good-looking UI pretty easy and offers terrific developer experiences 🤗



## Routes

There client route, server routes, api route. Client routes are User interface that displayed text, images, animations, transition, and executes javascript to interact with visitors. Server routes handle tasks on servers side and return the data to pages for rendering. Each page has its own server route, Sveltekit is well known a powerful `SSR` framework, it does all sorts of rendering, and server side render it most used render stategy because with SSR users see the fully rendered page, there will be no loaind indicators shown, it provides the best user experiences

Each client side page has its own server, all the data are fetched on server side and then injected to be rendered on fontend pages.

### Client Route / Page

**Home Page / Landing Page** 

- it is expressed in the form of `/` in codes, it is the root directory of the entire application. The home page is composed of six sections, each section is two column row contains text descriptions and illustration. There is a fixed menu bar at the top, user can login through login menu.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section1.png">
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section2.png">
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section3.png">
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section4.png">
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section5.png">
<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/section6.png">

**Auth Page** 

- `/auth` route as it self-explanins is a page where shows login options that allow users to gain authentication / authorization to access functionality. _**SmartShort**_ provides social accounts login such as `Github`, `Google`, `Facebook` and `Discord` for users to easily complete authentication process with a click of a button.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/auth-v2.png">


**Dashboard Page** 

- `/dashboard` route is where authenticated users enter long url and get shortened url or key~`https://domain/3qlms7`, users can get the shortened key by clicking copy button, once the shortend key is pasted into the address bar users will be taken to the original url.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/dashboard-v3.png">


**Detail Page** 

- `https://domain/3qlms7` route displayed detailed statistics of the click. When the shortened url link you post on social media or in any other pages is clicked, _**ShortMaster**_ collects ip address, country, city, latitude, longitude information and display the location of the person who clicked the link on the map. It helps you visucalize and track who is interested in the content from the link you provide and you can move further to promote your services / products, etc.

<img height="400" src="https://itzgmdgndusfvggjclwk.supabase.co/storage/v1/object/public/general/detailed-v3.png">


**+page.svelte** 

- represents the file is a client side route or page. For instance, a home page dwells in the `src/routes/` directory, any pages other than home page must live within a folder, for example, an About page is defined in `src/routes/about/+page.svelte`.

**+page.svelte.js** 

- This file handle tasks on server of that particular page, it belongs to the server of that particular page. For example, dashboard route `src/routes/dashboard` has `src/routes/dashboard/+page.svelte` as UI page and `src/routes/dashboard/+page.server.js` as server route that fetching third party API and return the data to be displayed in UI.

**+page.js -** This file works both on client and server side, if we `console.log` the messages will appears on browser and terminal console. it is an optional. 

**+layout.page** 

- All of the client side pages are confined by the layout and share same components such as menu bar, header, footer, etc. It is optional.

**+layout.js**

-

**+layout.server.js** 

=

**+server.js**

-


### Server Route


### API Route

API rounte is a standalone server route

Sveltekit has a very powerful routing system on both client and server side. We can create a stand alone API route that not only access by client side but alos outside the application. 
The only one API route `src/routes/api/chat/+server.js` contains `GET` and `POST` API codes to handle requests such as read user prompts from client, send it to `OpenAI` server to acquire responses, save data into database, etc.



## Third_Party_APIs

**Supabase** 

-

**OpenAI** 

-

**IPIFY** 

- ipify auto detect user ip address in the format of version 4, i.e. `101.25.90.123`, it is a handy tool, for further info please visit [https://www.ipify.org/](https://www.ipify.org/)

**IPAPI**

- ipapi is a very powerful api that find all sorts of info of an ip address such as city, region country, time zone, latitude, longitude, etc. The ip address is displayed in the form of version 6, i.e. `2402:7500:4ce:693f:400b:fe1:264b:f036`, it is hard to 



## Supabase_as_BAAS

Supabase plays an important role in this application, it handles all the database CRUD operation including triggers and functions. 

### Database

There are two tables involved in this application, they are `url_shortener_clicks` and `url_shortener_links`

**url_shortener_clicks**
Besides default property such as `id`, `created_at`, this table contains key elements associates with click details such as

_link_id_

This propery has relation with `url_shortener_lilnks` id
- Foreign Key Relation: `link.id -> public.url_shortener_links.id`
- Data Type: int8
- Configureation: Primary Key

_ip_

Ip address of the person who click the short link will be collected
- Data Type: varchar
- Configuration: Allow Nullable

_country_

Country of the person who click the short link will be collected
- Data Type: varchar
- Configuration: Allow Nullable
 
_city_

City of the person who click the short link will be collected
- Data Type: varchar
- Configuration: Allow Nullable

_latitude_

Latitude of the person who click the short link will be collected and user location will be displayed on the map
- Data Type: varchar
- Configuration: Allow Nullable

_longitude_

Longitude of the person who click the short link will be collected and user location will be displayed on the map
- Data Type: varchar
- Configuration: Allow Nullable

_language_

- Data Type: varchar
- Configuration: Allow Nullable

**ulr_shortener_links**

This table contains the following properties

_user_id_

Once user login, his email will be stored in this column, and the user can only see his/her short link data based upon this user_id
- Data Type: text
- Configuration: Primary Key

_key_

Once user enter long url and hit shorten button, the system automatically generate a six random figures and stored in this key property
- Data Type: text
- Configuration: Primary Key && Unique

_long-url_

After user enter a long url, it will be stored in long_url property.
- Data Type: text
- Configuration: Allow Nullable

_total-clicks_ 

This property records total clicks of a short link
- Data Type: numeric
- Default Value: '0'::numeric


**Supabase has some powrful database utilities that does magic tricks, in this applcation a `Trigger` and `Function` is applied.**

Triggers:

- name: increment_total_clicks_trigger
- tablle : url_shortener_clicks
- function: increment_total_clicks_on_links
- events: after insert

Functions:

- name: increment_total_clicks_on_links
- return type: trigger
- definition:
```
begin
  update public.url_shortener_links
  set total_clicks = total_clicks + 1
  where id = new.link_id;
  return new;
end;
```


## Environment_Variables

In order to make the application gets up and running, we need to create a `.env` file under root directory, copy the following codes and paste into it. There are four different third party services leveraged in this application and all of them require API key, they are `supabasebase`, `openai`, `ipify`, `ipapi` respectively. One thing to notify is the abbreviation~ `PUBLIC_`, it means the API is exposed on the browser, it is because we perform _CRUD_ operation on client side and _Sveltekit_ requires the environment variables have to be public.

```
# Supabase Config
PUBLIC_SUPABASE_URL = "Your key"
PUBLIC_SUPABASE_KEY = "Your key"

# development mode
PUBLIC_APP_BASE_URL = "http://localhost:5173"

# production mode
PUBLIC_APP_BASE_URL = "https://shortmaster.netlify.app"

OPENAI_KEY = "Your OpenAI key"

# Get ipv4 address
IPIFY = "https://api.ipify.org"

# Get user city, country, latitude, longitude, etc.
IPAPI = "https://ipapi.co/json/?key=YourAPIKey>"
```

## 安装方式

### 本地部署

1.  **下载本项目**

```shell
git clone https://github.com/GaiZhenbiao/ChuanhuChatGPT.git
cd ChuanhuChatGPT
```

或者，点击网页右上角的 `Download ZIP`，下载并解压完成后进入文件夹，进入`终端`或`命令提示符`。

  

<img  width="200"  alt="downloadZIP"  src="https://user-images.githubusercontent.com/23137268/223696317-b89d2c71-c74d-4c6d-8060-a21406cfb8c8.png">

  

2.  **填写API密钥**

  

以下3种方法任选其一：

  

<details><summary>1. 在图形界面中填写你的API密钥</summary>

  

这样设置的密钥会在页面刷新后被清除。

  

<img  width="760"  alt="image"  src="https://user-images.githubusercontent.com/51039745/222873756-3858bb82-30b9-49bc-9019-36e378ee624d.png"></details>

<details><summary>2. 在直接代码中填入你的 OpenAI API 密钥</summary>

  

这样设置的密钥会成为默认密钥。在这里还可以选择是否在UI中隐藏密钥输入框。

  

<img  width="525"  alt="image"  src="https://user-images.githubusercontent.com/51039745/223440375-d472de4b-aa7f-4eae-9170-6dc2ed9f5480.png"></details>

  

<details><summary>3. 在文件中设定默认密钥、用户名密码</summary>

  

这样设置的密钥可以在拉取项目更新之后保留。

在项目文件夹中新建这两个文件：`api_key.txt` 和 `auth.json`。

  

在`api_key.txt`中填写你的API-Key，注意不要填写任何无关内容。

  

在`auth.json`中填写你的用户名和密码。

  

```

{

"username": "用户名",

"password": "密码"

}

```

  

</details>

  

3.  **安装依赖**

  

```shell

pip install -r requirements.txt

```

  

如果报错，试试

  

```shell

pip3 install -r requirements.txt

```

  

如果还是不行，请先[安装Python](https://www.runoob.com/python/python-install.html)。

  

如果下载慢，建议[配置清华源](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/)，或者科学上网。

  

4.  **启动**

  

```shell

python ChuanhuChatbot.py

```

  

如果报错，试试

  

```shell

python3 ChuanhuChatbot.py

```

  

如果还是不行，请先[安装Python](https://www.runoob.com/python/python-install.html)。

<br  />

  

如果一切顺利，现在，你应该已经可以在浏览器地址栏中输入 [`http://localhost:7860`](http://localhost:7860) 查看并使用 ChuanhuChatGPT 了。

  

**如果你在安装过程中碰到了问题，请先查看[疑难杂症解决](#疑难杂症解决)部分。**

  

<details><summary><h3>或者，使用Docker 运行</h3></summary>

  

#### 拉取镜像

  

```shell

docker pull tuchuanhuhuhu/chuanhuchatgpt:latest

```

  

#### 运行

  

```shell

docker run -d --name chatgpt \

-e my_api_key="替换成API" \

-e USERNAME="替换成用户名" \

-e PASSWORD="替换成密码" \

-v ~/chatGPThistory:/app/history \

-p 7860:7860 \

tuchuanhuhuhu/chuanhuchatgpt:latest

```

  

注：`USERNAME` 和 `PASSWORD` 两行可省略。若省略则不会启用认证。

  

#### 查看运行状态

```shell

docker logs chatgpt

```

  

#### 也可修改脚本后手动构建镜像

  

```shell

docker build -t chuanhuchatgpt:latest .

```

</details>

  
  

### 远程部署

  

<details><summary>如果需要在公网服务器部署本项目，请阅读本部分</summary>

  

### 部署到公网服务器

  

将最后一句修改为

  

```

demo.queue().launch(server_name="0.0.0.0", server_port=7860, share=False) # 可自定义端口

```

### 用账号密码保护页面

  

将最后一句修改为

  

```

demo.queue().launch(server_name="0.0.0.0", server_port=7860,auth=("在这里填写用户名", "在这里填写密码")) # 可设置用户名与密码

```

  

### 配置 Nginx 反向代理

  

注意：配置反向代理不是必须的。如果需要使用域名，则需要配置 Nginx 反向代理。

  

又及：目前配置认证后，Nginx 必须配置 SSL，否则会出现 [Cookie 不匹配问题](https://github.com/GaiZhenbiao/ChuanhuChatGPT/issues/89)。

  

添加独立配置文件：

```nginx

server {

listen 80;

server_name /域名/; # 请填入你设定的域名

access_log off;

error_log off;

location / {

proxy_pass http://127.0.0.1:7860; # 注意端口号

proxy_redirect off;

proxy_set_header Host $host;

proxy_set_header X-Real-IP $remote_addr;

proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

proxy_set_header Upgrade $http_upgrade; # Websocket配置

proxy_set_header Connection $connection_upgrade; #Websocket配置

proxy_max_temp_file_size 0;

client_max_body_size 10m;

client_body_buffer_size 128k;

proxy_connect_timeout 90;

proxy_send_timeout 90;

proxy_read_timeout 90;

proxy_buffer_size 4k;

proxy_buffers 4 32k;

proxy_busy_buffers_size 64k;

proxy_temp_file_write_size 64k;

}

}

```

  

修改`nginx.conf`配置文件（通常在`/etc/nginx/nginx.conf`），向http部分添加如下配置：

（这一步是为了配置websocket连接，如之前配置过可忽略）

```nginx

map $http_upgrade $connection_upgrade {

default upgrade;

'' close;

}

```

  

为了同时配置域名访问和身份认证，需要配置SSL的证书，可以参考[这篇博客](https://www.gzblog.tech/2020/12/25/how-to-config-hexo/#%E9%85%8D%E7%BD%AEHTTPS)一键配置

  

</details>

  

## 疑难杂症解决

  

首先，请尝试拉取本项目的最新更改，使用最新的代码重试。

  

点击网页上的 `Download ZIP` 下载最新代码，或

```shell

git pull https://github.com/GaiZhenbiao/ChuanhuChatGPT.git main -f

```

  

如果还有问题，可以再尝试重装 gradio:

  

```

pip install gradio --upgrade --force-reinstall

```

  

很多时候，这样就可以解决问题。

  

<details><summary><h3><code>No module named '_bz2'</code></h3></summary>

  

> 部署在CentOS7.6,Python3.11.0上,最后报错ModuleNotFoundError: No module named '_bz2'

  

安装python前先下载 `bzip` 编译环境

  

```

sudo yum install bzip2-devel

```

</details>

  

<details><summary><h3><code>openai.error.APIConnectionError</code></h3></summary>

  

> 如果有人也出现了`openai.error.APIConnectionError`提示的报错，那可能是`urllib3`的版本导致的。`urllib3`版本大于`1.25.11`，就会出现这个问题。

>

> 解决方案是卸载`urllib3`然后重装至`1.25.11`版本再重新运行一遍就可以

  

参见：[#5](https://github.com/GaiZhenbiao/ChuanhuChatGPT/issues/5)

  

在终端或命令提示符中卸载`urllib3`

  

```

pip uninstall urllib3

```

  

然后，通过使用指定版本号的`pip install`命令来安装所需的版本：

  

```

pip install urllib3==1.25.11

```

  

参考自：

[解决OpenAI API 挂了代理还是连接不上的问题](https://zhuanlan.zhihu.com/p/611080662)

</details>

  

<details><summary><h3>在 Python 文件里 设定 API Key 之后验证失败</h3></summary>

  

> 在ChuanhuChatbot.py中设置APIkey后验证出错，提示“发生了未知错误Orz”

  

参见：[#26](https://github.com/GaiZhenbiao/ChuanhuChatGPT/issues/26)

</details>

  

<details><summary><h3>一直等待/SSL Error</h3></summary>

  

> 更新脚本文件后，SSLError [#49](https://github.com/GaiZhenbiao/ChuanhuChatGPT/issues/49)

>

> 跑起来之后，输入问题好像就没反应了，也没报错 [#25](https://github.com/GaiZhenbiao/ChuanhuChatGPT/issues/25)

>

> ```

> requests.exceptions.SSLError: HTTPSConnectionPool(host='api.openai.com', port=443): Max retries exceeded with url: /v1/chat/completions (Caused by SSLError(SSLEOFError(8, 'EOF occurred in violation of protocol (_ssl.c:1129)')))

> ```

  

请将`openai.com`加入你使用的代理App的代理规则。注意不要将`127.0.0.1`加入代理，否则会有下一个错误。

  

例如，在Clash配置文件中，加入：

  

```

rule-providers:

private:

type: http

behavior: domain

url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"

path: ./ruleset/ads.yaml

interval: 86400

  

rules:

- RULE-SET,private,DIRECT

- DOMAIN-SUFFIX,openai.com,你的代理规则

```

  

Surge：

  

```

[Rule]

DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/private.txt,DIRECT

DOMAIN-SUFFIX,openai.com,你的代理规则

```

</details>

  

<details><summary><h3>网页提示错误 Something went wrong</h3></summary>

  

> ```

> Something went wrong

> Expecting value: 1ine 1 column 1 (char o)

> ```

  

出现这个错误的原因是`127.0.0.1`被代理了，导致网页无法和后端通信。请设置代理软件，将`127.0.0.1`加入直连。

</details>

  

<details><summary><h3><code>No matching distribution found for openai>=0.27.0</code></h3></summary>

  

`openai`这个依赖已经被移除了。请尝试下载最新版脚本。

</details>

  

## Starchart

  

[![Star History Chart](https://api.star-history.com/svg?repos=GaiZhenbiao/ChuanhuChatGPT&type=Date)](https://star-history.com/#GaiZhenbiao/ChuanhuChatGPT&Date)

  

## Contributors

  

<a  href="https://github.com/GaiZhenbiao/ChuanhuChatGPT/graphs/contributors">

<img  src="https://contrib.rocks/image?repo=GaiZhenbiao/ChuanhuChatGPT"  />

</a>

  

## 捐款

  

🐯请作者喝可乐～

  

<img  width="350"  alt="image"  src="https://user-images.githubusercontent.com/51039745/223626874-f471e5f5-8a06-43d5-aa31-9d2575b6f631.JPG">