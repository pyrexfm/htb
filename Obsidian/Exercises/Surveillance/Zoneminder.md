## Login request
```
POST /?view=login HTTP/1.1
Host: 127.0.0.1:2222
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 58
Origin: http://127.0.0.1:2222
Connection: close
Referer: http://127.0.0.1:2222/?view=login
Cookie: ZMSESSID=mtgdjqlhilcbga7vh9ce5gi2kh; zmSkin=classic; zmCSS=base
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1

action=login&postLoginQuery=&username=admin&password=admin
```