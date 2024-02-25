```bash
root:x:0:0:root:/root:/bin/bash  
svc:x:1000:1000:svc,,,:/home/svc:/bin/bash  
postgres:x:109:117:PostgreSQL administrator,,,:/var/lib/postgresql:/bin/bash  
nagios:x:1001:1001::/home/nagios:/bin/bash
```

## linpeas
```bash
╚ https://book.hacktricks.xyz/linux-hardening/privilege-escalation#services  
:  
/etc/systemd/system/multi-user.target.wants/mariadb.service could be executing some relative path  
:  
/etc/systemd/system/multi-user.target.wants/nagios.service is calling this writable executable: /usr/local/nagios/bin/nagios  
/etc/systemd/system/multi-user.target.wants/nagios.service is calling this writable executable: /usr/local/nagios/bin/nagios  
:  
/etc/systemd/system/multi-user.target.wants/nagios.service is calling this writable executable: /usr/local/nagios/bin/nagios  
:  
  
/etc/systemd/system/multi-user.target.wants/npcd.service is calling this writable executable: /usr/local/nagios/bin/npcd  
:  
/etc/systemd/system/npcd.service is calling this writable executable: /usr/local/nagios/bin/npcd
```

## End all be all
```bash
sudo /usr/local/nagiosxi/scripts/manage_services.sh restart npcd
```