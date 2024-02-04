
IP: 10.129.9.224

# NMAP

22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)  
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))

# GOBUSTER (domains)

===============================================================  
Gobuster v3.6  
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)  
===============================================================  
[+] Url:             http://thetoppers.htb  
[+] Method:          GET  
[+] Threads:         10  
[+] Wordlist:        /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt  
[+] User Agent:      gobuster/3.6  
[+] Timeout:         10s  
[+] Append Domain:   true  
===============================================================  
Starting gobuster in VHOST enumeration mode  
===============================================================  
Found: s3.thetoppers.htb Status: 404 [Size: 21]  
Found: gc._msdcs.thetoppers.htb Status: 400 [Size: 306]  
Progress: 4989 / 4990 (99.98%)  
===============================================================  
Finished  
===============================================================


