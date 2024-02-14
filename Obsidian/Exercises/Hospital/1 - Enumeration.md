# 10.10.11.241

## NMAP
```bash
PORT     STATE SERVICE           VERSION  
22/tcp   open  ssh               OpenSSH 9.0p1 Ubuntu 1ubuntu8.5 (Ubuntu Linux; protocol 2.0)  
| ssh-hostkey:    
|   256 e1:4b:4b:3a:6d:18:66:69:39:f7:aa:74:b3:16:0a:aa (ECDSA)  
|_  256 96:c1:dc:d8:97:20:95:e7:01:5f:20:a2:43:61:cb:ca (ED25519)  
53/tcp   open  domain            Simple DNS Plus  
88/tcp   open  kerberos-sec      Microsoft Windows Kerberos (server time: 2024-02-14 06:46:16Z)  
135/tcp  open  msrpc             Microsoft Windows RPC  
139/tcp  open  netbios-ssn       Microsoft Windows netbios-ssn  
389/tcp  open  ldap              Microsoft Windows Active Directory LDAP (Domain: hospital.htb0., Site: Default-First-Site-Name)  
| ssl-cert: Subject: commonName=DC  
| Subject Alternative Name: DNS:DC, DNS:DC.hospital.htb  
| Not valid before: 2023-09-06T10:49:03  
|_Not valid after:  2028-09-06T10:49:03  
443/tcp  open  ssl/http          Apache httpd 2.4.56 ((Win64) OpenSSL/1.1.1t PHP/8.0.28)  
| tls-alpn:    
|_  http/1.1  
| ssl-cert: Subject: commonName=localhost  
| Not valid before: 2009-11-10T23:48:47  
|_Not valid after:  2019-11-08T23:48:47  
|_http-server-header: Apache/2.4.56 (Win64) OpenSSL/1.1.1t PHP/8.0.28  
|_ssl-date: TLS randomness does not represent time  
|_http-title: Hospital Webmail :: Welcome to Hospital Webmail  
445/tcp  open  microsoft-ds?  
464/tcp  open  kpasswd5?  
593/tcp  open  ncacn_http        Microsoft Windows RPC over HTTP 1.0  
636/tcp  open  ldapssl?  
| ssl-cert: Subject: commonName=DC  
| Subject Alternative Name: DNS:DC, DNS:DC.hospital.htb  
| Not valid before: 2023-09-06T10:49:03  
|_Not valid after:  2028-09-06T10:49:03  
1801/tcp open  msmq?  
2103/tcp open  msrpc             Microsoft Windows RPC  
2105/tcp open  msrpc             Microsoft Windows RPC  
2107/tcp open  msrpc             Microsoft Windows RPC  
2179/tcp open  vmrdp?  
3268/tcp open  ldap              Microsoft Windows Active Directory LDAP (Domain: hospital.htb0., Site: Default-First-Site-Name)  
| ssl-cert: Subject: commonName=DC  
| Subject Alternative Name: DNS:DC, DNS:DC.hospital.htb  
| Not valid before: 2023-09-06T10:49:03  
|_Not valid after:  2028-09-06T10:49:03  
3269/tcp open  globalcatLDAPssl?  
| ssl-cert: Subject: commonName=DC  
| Subject Alternative Name: DNS:DC, DNS:DC.hospital.htb  
| Not valid before: 2023-09-06T10:49:03  
|_Not valid after:  2028-09-06T10:49:03  
3389/tcp open  ms-wbt-server     Microsoft Terminal Services  
| rdp-ntlm-info:    
|   Target_Name: HOSPITAL  
|   NetBIOS_Domain_Name: HOSPITAL  
|   NetBIOS_Computer_Name: DC  
|   DNS_Domain_Name: hospital.htb  
|   DNS_Computer_Name: DC.hospital.htb  
|   DNS_Tree_Name: hospital.htb  
|   Product_Version: 10.0.17763  
|_  System_Time: 2024-02-14T06:47:05+00:00  
| ssl-cert: Subject: commonName=DC.hospital.htb  
| Not valid before: 2024-02-13T06:43:51  
|_Not valid after:  2024-08-14T06:43:51  
8080/tcp open  http              Apache httpd 2.4.55 ((Ubuntu))  
| http-cookie-flags:    
|   /:    
|     PHPSESSID:    
|_      httponly flag not set  
| http-title: Login  
|_Requested resource was login.php  
|_http-open-proxy: Proxy might be redirecting requests  
|_http-server-header: Apache/2.4.55 (Ubuntu)  
Service Info: Host: DC; OSs: Linux, Windows; CPE: cpe:/o:linux:linux_kernel, cpe:/o:microsoft:windows  
  
Host script results:  
|_clock-skew: mean: 6h59m59s, deviation: 0s, median: 6h59m59s  
| smb2-security-mode:    
|   3:1:1:    
|_    Message signing enabled and required  
| smb2-time:    
|   date: 2024-02-14T06:47:05  
|_  start_date: N/A
```

## Browser
- [RCMail](https://github.com/roundcube/roundcubemail/tree/master)

## Gobuster (HTTPS)
```bash
=====================================================================  
ID           Response   Lines    Word       Chars       Payload                                                                                                                                            
=====================================================================  
  
000007427:   200        1 L      17 W       16934 Ch    "favicon.ico"                                                                                                                                      
000007237:   503        11 L     44 W       403 Ch      "examples"                                                                                                                                         
000009737:   301        9 L      30 W       343 Ch      "installer"
```

## Gobuster (8080)
8080 allows creating an account (user: kali, password: 2wsxCDE#) and uploading files to uploads directory
```bash
=====================================================================  
ID           Response   Lines    Word       Chars       Payload                                                                                                                                            
=====================================================================  
  
000005517:   301        9 L      28 W       317 Ch      "css"                                                                                                                                              
000007795:   301        9 L      28 W       319 Ch      "fonts"                                                                                                                                            
000009378:   301        9 L      28 W       320 Ch      "images"                                                                                                                                           
000010190:   301        9 L      28 W       316 Ch      "js"                                                                                                                                               
000018777:   301        9 L      28 W       321 Ch      "uploads"                                                                                                                                          
000019078:   301        9 L      28 W       320 Ch      "vendor"
```