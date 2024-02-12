## Directories
```bash
wfuzz -w /usr/share/wordlists/dirb/big.txt -u http://crafty.htb/FUZZ -t 200 --hc 404,403

gobuster dir -u http://cozyhosting.htb/ -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-small.txt -r

dirsearch -u http://cozyhosting.htb
```

## Subdomains
```bash
gobuster dns -d devvortex.htb -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

wfuzz -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt -u http://devvortex.htb/ -H 'Host: FUZZ.devvortex.htb' -t 50 --hc 301,302
```