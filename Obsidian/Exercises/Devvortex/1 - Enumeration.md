# 10.10.11.242

## NMAP
```bash
PORT   STATE SERVICE VERSION  
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.9 (Ubuntu Linux; protocol 2.0)  
| ssh-hostkey:    
|   3072 48:ad:d5:b8:3a:9f:bc:be:f7:e8:20:1e:f6:bf:de:ae (RSA)  
|   256 b7:89:6c:0b:20:ed:49:b2:c1:86:7c:29:92:74:1c:1f (ECDSA)  
|_  256 18:cd:9d:08:a6:21:a8:b8:b6:f7:9f:8d:40:51:54:fb (ED25519)  
80/tcp open  http    nginx 1.18.0 (Ubuntu)  
|_http-title: DevVortex  
|_http-server-header: nginx/1.18.0 (Ubuntu)  
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```


## Dirbuster
```bash
[00:10:07] Starting:    
[00:10:08] 301 -  178B  - /js  ->  http://devvortex.htb/js/  
[00:10:13] 200 -    7KB - /about.html  
[00:10:22] 200 -    9KB - /contact.html  
[00:10:23] 301 -  178B  - /css  ->  http://devvortex.htb/css/  
[00:10:28] 301 -  178B  - /images  ->  http://devvortex.htb/images/  
[00:10:28] 403 -  564B  - /images/  
[00:10:29] 403 -  564B  - /js/
```

