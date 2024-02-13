	# 10.10.11.245

## NMAP
```bash
PORT   STATE SERVICE VERSION  
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.4 (Ubuntu Linux; protocol 2.0)  
| ssh-hostkey:    
|   256 96:07:1c:c6:77:3e:07:a0:cc:6f:24:19:74:4d:57:0b (ECDSA)  
|_  256 0b:a4:c0:cf:e2:3b:95:ae:f6:f5:df:7d:0c:88:d6:ce (ED25519)  
80/tcp open  http    nginx 1.18.0 (Ubuntu)  
|_http-title: Did not follow redirect to http://surveillance.htb/  
|_http-server-header: nginx/1.18.0 (Ubuntu)  
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel  
  
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .  
Nmap done: 1 IP address (1 host up) scanned in 9.34 seconds
```

## Web Server
- [Craft CMS](https://github.com/craftcms/cms/tree/4.4.14)
	- Twig templating system
	- GraphQL API
	- Connects to MYSQL or Postgres
- Yil (Web Framework)
- NGinx
- PHP

## Dirbuster
````bash
=====================================================================  
ID           Response   Lines    Word       Chars       Payload     
=====================================================================  
  
000000015:   200        9 L      26 W       304 Ch      ".htaccess"    
000001816:   302        0 L      0 W        0 Ch        "admin"     
000005517:   301        7 L      12 W       178 Ch      "css"    
000007795:   301        7 L      12 W       178 Ch      "fonts"     
000009378:   301        7 L      12 W       178 Ch      "images"    
000009464:   301        7 L      12 W       178 Ch      "img"    
000009563:   200        1 L      0 W        1 Ch        "index"     
000010190:   301        7 L      12 W       178 Ch      "js"     
000011077:   302        0 L      0 W        0 Ch        "logout"    
000013306:   200        475 L    1185 W     16228 Ch    "p7"     
000013305:   200        475 L    1185 W     16228 Ch    "p5"     
000013303:   200        475 L    1185 W     16228 Ch    "p3"     
000013300:   200        475 L    1185 W     16228 Ch    "p15"    
000013301:   200        475 L    1185 W     16228 Ch    "p2"     
000013297:   200        475 L    1185 W     16228 Ch    "p1"     
000013298:   200        475 L    1185 W     16228 Ch    "p10"    
000013299:   200        475 L    1185 W     16228 Ch    "p13"    
000019949:   418        63 L     218 W      21327 Ch    "wp-admin"
```
