# Reflected XSS

Here you have a minimal working example of a *reflected XSS* attack.
A naive-server is a search engine (not strictly necessary).
It allows queries from a user, elaborates them and renders the query parameters plus the computed results back to the users.
However, the user's search terms are not escaped! 
So Mallory has the idea to form a malicous link using some JS script as search query.
Then, Mallory sends the link to another person, which is tricked to think that it is a link from the naive-server.
However, the malicious code in the search query redirect the person into another server.

## See it in action

This will bring up the two servers. The naive forum (port 8080) and the malicious Mallory server (port 8081).
```
docker-compose build; docker-compose up -d
```
To see the search engine 
```
localhost:8080
```
You can search anything and you will be redirect to the search result page.
However, check out what happens if you follow the carefully crafted Mallory link.
It seems that it is just linking you to a naive-server research page
```
http://localhost:8080/search/?terms=%3C%2Fdiv%3E%3Cscript%3Edocument.location%3D%22http%3A%2F%2Flocalhost%3A8081%2F%22%3C%2Fscript%3E%3Cdiv%3E
```
Hey, you have been redirected against your will!

