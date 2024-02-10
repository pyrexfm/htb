# 10.10.11.230

## NMAP
```bash
PORT   STATE SERVICE VERSION  
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.3 (Ubuntu Linux; protocol 2.0)  
| ssh-hostkey:    
|   256 43:56:bc:a7:f2:ec:46:dd:c1:0f:83:30:4c:2c:aa:a8 (ECDSA)  
|_  256 6f:7a:6c:3f:a6:8d:e2:75:95:d4:7b:71:ac:4f:7e:42 (ED25519)  
80/tcp open  http    nginx 1.18.0 (Ubuntu)  
|_http-title: Did not follow redirect to http://cozyhosting.htb  
|_http-server-header: nginx/1.18.0 (Ubuntu)  
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

## Subdomains
None

## Directories
```bash
dirsearch -u http://cozyhosting.htb
(...)
[01:23:46] 200 -  148B  - /actuator/sessions
[01:23:46] 200 -    5KB - /actuator/env
[01:23:46] 200 -   15B  - /actuator/health
[01:23:46] 200 -   10KB - /actuator/mappings
[01:23:47] 200 -  124KB - /actuator/beans
(...)
