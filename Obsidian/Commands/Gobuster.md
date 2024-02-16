## Subdomains
```bash
gobuster dns -d devvortex.htb -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

wfuzz -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt -u http://nagios.monitored.htb/ -H 'Host: FUZZ.monitored.htb' -t 50 --hc 301,302
```

## Directories
```bash
wfuzz -w /usr/share/wordlists/dirb/big.txt -u http://nagios.monitored.htb/FUZZ -t 200 --hc 404,403

gobuster dir -u http://cozyhosting.htb/ -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -r

ffuf -u "https://nagios.monitored.htb/nagiosxi/FUZZ" -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -r

dirsearch -u http://nagios.monitored.htb
```
