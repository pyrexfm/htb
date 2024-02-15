## Interactive shell
```bash
python -c 'import pty; pty.spawn("/bin/bash")'

python3 -c 'import pty;pty.spawn("/bin/bash")'  
export TERM=xterm  
stty raw -echo; fg
```

## HTTP Server
```bash
python3 -m http.server 8000
```
