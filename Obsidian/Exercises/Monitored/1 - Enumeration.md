# 10.10.11.248

## NMAP
```bash
PORT     STATE SERVICE    VERSION  
22/tcp   open  ssh        OpenSSH 8.4p1 Debian 5+deb11u3 (protocol 2.0)  
| ssh-hostkey:    
|   3072 61:e2:e7:b4:1b:5d:46:dc:3b:2f:91:38:e6:6d:c5:ff (RSA)  
|   256 29:73:c5:a5:8d:aa:3f:60:a9:4a:a3:e5:9f:67:5c:93 (ECDSA)  
|_  256 6d:7a:f9:eb:8e:45:c2:02:6a:d5:8d:4d:b3:a3:37:6f (ED25519)  
80/tcp   open  http       Apache httpd 2.4.56  
|_http-title: Did not follow redirect to https://nagios.monitored.htb/  
|_http-server-header: Apache/2.4.56 (Debian)  
389/tcp  open  ldap       OpenLDAP 2.2.X - 2.3.X  
443/tcp  open  ssl/http   Apache httpd 2.4.56 ((Debian))  
| tls-alpn:    
|_  http/1.1  
|_ssl-date: TLS randomness does not represent time  
|_http-server-header: Apache/2.4.56 (Debian)  
| ssl-cert: Subject: commonName=nagios.monitored.htb/organizationName=Monitored/stateOrProvinceName=Dorset/countryName=UK  
| Not valid before: 2023-11-11T21:46:55  
|_Not valid after:  2297-08-25T21:46:55  
|_http-title: Nagios XI  
5667/tcp open  tcpwrapped  
Service Info: Host: nagios.monitored.htb; OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

## GoBuster
```bash
[23:52:35] 302 -  300B  - /%3f/  ->  https://nagios.monitored.htb?/  
[23:52:51] 302 -  316B  - /axis//happyaxis.jsp  ->  https://nagios.monitored.htbaxis/happyaxis.jsp  
[23:52:51] 302 -  321B  - /axis2-web//HappyAxis.jsp  ->  https://nagios.monitored.htbaxis2-web/HappyAxis.jsp  
[23:52:51] 302 -  327B  - /axis2//axis2-web/HappyAxis.jsp  ->  https://nagios.monitored.htbaxis2/axis2-web/HappyAxis.jsp  
[23:52:54] 302 -  349B  - /Citrix//AccessPlatform/auth/clientscripts/cookies.js  ->  https://nagios.monitored.htbCitrix/AccessPlatform/auth/clientscripts/cookies.js  
[23:52:58] 302 -  339B  - /engine/classes/swfupload//swfupload_f9.swf  ->  https://nagios.monitored.htbengine/classes/swfupload/swfupload_f9.swf  
[23:52:58] 302 -  336B  - /engine/classes/swfupload//swfupload.swf  ->  https://nagios.monitored.htbengine/classes/swfupload/swfupload.swf  
[23:52:59] 302 -  324B  - /extjs/resources//charts.swf  ->  https://nagios.monitored.htbextjs/resources/charts.swf  
[23:53:02] 302 -  334B  - /html/js/misc/swfupload//swfupload.swf  ->  https://nagios.monitored.htbhtml/js/misc/swfupload/swfupload.swf

[23:54:18] 302 -  309B  - /nagiosxi/%3f/  ->  https://nagios.monitored.htbnagiosxi/?/  
[23:54:21] 302 -  308B  - /nagiosxi/%2e%2e//google.com  ->  https://nagios.monitored.htbgoogle.com  
[23:54:34] 200 -   32B  - /nagiosxi/api/v1/swagger.json  
[23:54:34] 200 -   32B  - /nagiosxi/api/v1/  
[23:54:34] 200 -   32B  - /nagiosxi/api/v1/swagger.yaml  
[23:54:36] 302 -  325B  - /nagiosxi/axis//happyaxis.jsp  ->  https://nagios.monitored.htbnagiosxi/axis/happyaxis.jsp  
[23:54:36] 302 -  336B  - /nagiosxi/axis2//axis2-web/HappyAxis.jsp  ->  https://nagios.monitored.htbnagiosxi/axis2/axis2-web/HappyAxis.jsp  
[23:54:36] 302 -  330B  - /nagiosxi/axis2-web//HappyAxis.jsp  ->  https://nagios.monitored.htbnagiosxi/axis2-web/HappyAxis.jsp  
[23:54:38] 302 -  358B  - /nagiosxi/Citrix//AccessPlatform/auth/clientscripts/cookies.js  ->  https://nagios.monitored.htbnagiosxi/Citrix/AccessPlatform/auth/clientscripts/cookies.js  
[23:54:43] 302 -  345B  - /nagiosxi/engine/classes/swfupload//swfupload.swf  ->  https://nagios.monitored.htbnagiosxi/engine/classes/swfupload/swfupload.swf  
[23:54:43] 302 -  348B  - /nagiosxi/engine/classes/swfupload//swfupload_f9.swf  ->  https://nagios.monitored.htbnagiosxi/engine/classes/swfupload/swfupload_f9.swf  
[23:54:44] 302 -  333B  - /nagiosxi/extjs/resources//charts.swf  ->  https://nagios.monitored.htbnagiosxi/extjs/resources/charts.swf  
[23:54:46] 302 -  343B  - /nagiosxi/html/js/misc/swfupload//swfupload.swf  ->  https://nagios.monitored.htbnagiosxi/html/js/misc/swfupload/swfupload.swf
```

## FFUF
```bash
about                   [Status: 200, Size: 18495, Words: 3095, Lines: 310, Duration: 91ms]  
help                    [Status: 200, Size: 26749, Words: 5495, Lines: 468, Duration: 96ms]  
tools                   [Status: 200, Size: 26751, Words: 5495, Lines: 468, Duration: 94ms]  
mobile                  [Status: 200, Size: 15978, Words: 2562, Lines: 225, Duration: 92ms]  
admin                   [Status: 200, Size: 26751, Words: 5495, Lines: 468, Duration: 96ms]  
reports                 [Status: 200, Size: 26755, Words: 5495, Lines: 468, Duration: 103ms]  
account                 [Status: 200, Size: 26755, Words: 5495, Lines: 468, Duration: 109ms]  
includes                [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 62ms]  
backend                 [Status: 200, Size: 108, Words: 4, Lines: 5, Duration: 126ms]  
db                      [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 60ms]  
api                     [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 60ms]  
config                  [Status: 200, Size: 26753, Words: 5495, Lines: 468, Duration: 99ms]  
views                   [Status: 200, Size: 26751, Words: 5495, Lines: 468, Duration: 121ms]  
sounds                  [Status: 403, Size: 286, Words: 20, Lines: 10, Duration: 61ms]  
terminal                [Status: 200, Size: 5215, Words: 1247, Lines: 124, Duration: 108ms]
```