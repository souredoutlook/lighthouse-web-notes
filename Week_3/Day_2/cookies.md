# Cookies - NOM NOM NOM

## Background

> Communication between the browser and our application is done over HTTP, which is stateless, meaning that each request is treated independently of every other and requests can happen in any order.

- Users are used to web applications offering a unique experience for every person
- In order to offer a unique experience we need a way to distinguish each user's HTTP requests.
- Cookies are a feature of HTTP that help us fill this need.
- An HTTP server can tell a client to remember certain keys and values ("cookies") using the Set-Cookie header in an HTTP _response_.

## Concepts and Uses

Basically - the browser requestse a web page => the server sends the page and the cookie. Then on the next request the client sends the cookie back (telling the server their identity and other information.)

Good for remembering what language a person wants to remember to view the website in. Can contain items in a shoping basket, the times you visited and all the links you clicked on a certain website (like leaving a breadcrumb trail on the internet)

What gets saved to the cookie is up to whoever maintains the website.

There is a limit to who can read your cookies (only the same website that saves information to a cookie can read it)

Cookies have pushed their size limitations. Now they store a unique id in the cookie and the data gets stored in the server.

Third party cookies leverage this information now when websites contain bits of other websites.

Ad's are an example of "bits of other websites". Ad's can give you cookies.

Cookies aren't "bad" or "good" but can be abused.

## History and Terminology

- Authentication cookies are the most common method used by web servers to know whether the use is logged in or not (And which account)
  - The security of an authentication cookie is dependant on the web server, the web browser and whether or not the cookie is encrypted.
  - Security vulnerabilities in the cookie may allow a users data to be read by a hacker, or gain access to the website to which the cookie belongs (see cross-site request forgery or cross site scripting)
- Tracking cookies and third-party tracking cookies are commonly used as ways to compile long-term records of individuals browsing histories. All websites targetting European Union member states must gain "informed consent" from users before storing non-essential cookies on their device.
- Cookies can be [read by intermediaries](https://thejh.net/written-stuff/want-to-use-my-wifi?), like Wi-Fi hotspot providers
- Tracking pixels are a thing.

## Cookie Accessibility

- A browser cookie is specific to the domain that created it
- Cookies cannot be set across different domains
- There is a distinction to be made about subdomains.
