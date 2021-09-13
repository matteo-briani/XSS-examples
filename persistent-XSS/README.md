# Persistent XSS

Here you have a minimal working example of a *persistent XSS* attack.
A server host a forum/blog, with several users.
Each user has an account, they can input their profile name in the settings (mocked).
But Mallory has a better idea and use a *clever* name instead.

## How to see the attack

```
docker-compose build; docker-compose up -d
```
To see any user page go to 
```
localhost:8080/aRandomUserName
```
Then check out Mallory's profile by following
```
localhost:8080/Mallory
```
Hey, you have been redirected without your will!

## Specs
There are two servers, at port 8080 the naive forum and at 8081 the malicious Mallory server.
Mallory uses a JavaScript script tag instead of her name. 
See the code for details.
