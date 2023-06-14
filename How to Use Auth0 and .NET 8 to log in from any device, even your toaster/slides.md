---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# How to Use Auth0 and .NET 8 to log in from any device, even your toaster 🍞

Microsoft MVP 💬 | GitHub Star ⭐ | Auth0 Ambassador 🔑

Emanuele Bartolesi

<!-- <div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let'start <carbon:arrow-right class="inline"/>
  </span>
</div> -->

---
transition: slide-left
---

## Technical Requirements 🛠️

- You need to have a registered application with Auth0 and configure its settings
- You need to have a registered API with Auth0 and enable offline access if you want to use refresh tokens
- You need to have a C# development environment and install RestSharp library
- You need to have an internet connection and a browser

---

## What is Auth0? 🔐

- Auth0 is a platform that provides authentication and authorization as a service
- Auth0 allows you to easily integrate various identity providers and protocols into your applications
- Auth0 also offers features such as user management, multifactor authentication, single sign-on, and more

---

## What is Device Flow Authentication? 📱

- Device Flow Authentication is a variant of the OAuth 2.0 protocol that enables input-constrained devices to obtain an access token
- Device Flow Authentication involves two different paths: one on the device requesting authorization and one on the user's browser
- Device Flow Authentication requires the device app to pass along its Client ID to initiate the authorization process and get a device code and a user code

---

## How Device Flow Authentication Works 🛠️

<div class="flex justify-center">
  <img src="https://cdn.auth0.com/docs/media/articles/flows/concepts/auth-sequence-device-auth.png" class="rounded shadow" style="height:500px" />
</div>

---

## How to Implement Device Flow Authentication with Auth0 💻

- Register your application with Auth0 and configure its settings
- Request a device code from the Auth0 Authorization Server using your Client ID
- Display the device code, user code, and verification URI to the user
- Poll the Auth0 Authorization Server for an access token using the device code
- Ask the user to visit the verification URI on their browser and enter the user code
- Redirect the user to the login and consent prompt, if needed
- Respond with an access token (and optionally, a refresh token) when the user authorizes the device
- Use the access token to call your API
- Use the refresh token to request new tokens when the existing ones expire

---

## Code Examples 📝

### Request a device code

```csharp
// Using RestSharp library
var client = new RestClient("https://<YOUR_DOMAIN>/oauth/device/code");
var request = new RestRequest(Method.POST);
request.AddParameter("client_id", "<YOUR_CLIENT_ID>");
request.AddParameter("scope", "<YOUR_SCOPES>");
request.AddParameter("audience", "<YOUR_API_AUDIENCE>");
IRestResponse response = client.Execute(request);
// Parse response.Content for device_code, user_code, verification_uri
// Display them to the user
```

### Poll for an access token

```csharp
// Using RestSharp library
var client = new RestClient("https://<YOUR_DOMAIN>/oauth/token");
var request = new RestRequest(Method.POST);
request.AddParameter("grant_type", "urn:ietf:params:oauth:grant-type:device_code");
request.AddParameter("client_id", "<YOUR_CLIENT_ID>");
request.AddParameter("device_code", "<YOUR_DEVICE_CODE>");
IRestResponse response = client.Execute(request);
// Parse response.Content for access_token and refresh_token
// Use access_token to call your API
// Store refresh_token for later use
```

### Request new tokens with a refresh token

```csharp
// Using RestSharp library
var client = new RestClient("https://<YOUR_DOMAIN>/oauth/token");
var request = new RestRequest(Method.POST);
request.AddParameter("grant_type", "refresh_token");
request.AddParameter("client_id", "<YOUR_CLIENT_ID>");
request.AddParameter("refresh_token", "<YOUR_REFRESH_TOKEN>");
IRestResponse response = client.Execute(request);
// Parse response.Content for access_token and refresh_token
// Use access_token to call your API
// Store refresh_token for later use
```

---

## Benefits of Device Flow Authentication with Auth0 🎁

- You can provide a secure and seamless authentication experience for your users on input-constrained devices
- You can leverage Auth0's features such as social login, multifactor authentication, single sign-on, and more
- You can customize the device code settings, such as character set, format, and length
- You can monitor and troubleshoot your device flow authentication using Auth0's logs and dashboard

---

## References 📚

: [Device Authorization Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/device-authorization-flow)
: [Call Your API Using the Device Authorization Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-device-authorization-flow)
: [Mobile Device Login Flow Best Practices](https://auth0.com/docs/get-started/authentication-and-authorization-flow/mobile-device-login-flow-best-practices)
