## Interactive shell
```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'

python3 -c 'import pty;pty.spawn("/bin/bash")'  
export TERM=xterm  
ctrl + z  
stty raw -echo; fg
```

