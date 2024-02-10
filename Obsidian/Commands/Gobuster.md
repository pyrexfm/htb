## Directories
```bash
wfuzz -w /usr/share/wordlists/seclists/Discovery/Web-Content/raft-small-directories-lowercase.txt -u http://cozyhosting.htb/FUZZ -t 200 --hc 404,403

gobuster dir -u http://devvortex.htb/ -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -r
```

## Subdomains
```bash
gobuster dns -d devvortex.htb -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

wfuzz -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt -u http://cozyhosting.htb/ -H 'Host: FUZZ.devvortex.htb' -t 50 --hc 301,302
```