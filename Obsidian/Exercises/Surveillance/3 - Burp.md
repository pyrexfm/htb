
```
GET /admin/login HTTP/1.1
Host: surveillance.htb
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Connection: close
Cookie: CraftSessionId=uc3vo5q5mpsthaj889ghkgjnds; CRAFT_CSRF_TOKEN=f14006806023dc8d5140e73524c5b68504cd9c70c44585a01110cbaed2757f60a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22CRAFT_CSRF_TOKEN%22%3Bi%3A1%3Bs%3A40%3A%22Fb7GxnW-eYWrKXkeHMHx-0bPoeZEcDFM2suEo1-D%22%3B%7D
Upgrade-Insecure-Requests: 1
```

```
POST /index.php?p=admin%2Factions%2Fusers%2Flogin&v=1707785845334 HTTP/1.1
Host: surveillance.htb
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: application/json, text/plain, */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: http://surveillance.htb/admin/login
Content-Type: application/json
X-Requested-With: XMLHttpRequest
X-Registered-Asset-Bundles: ,craft\web\assets\login\LoginAsset,craft\web\assets\cp\CpAsset,craft\web\assets\tailwindreset\TailwindResetAsset,craft\web\assets\axios\AxiosAsset,craft\web\assets\d3\D3Asset,craft\web\assets\elementresizedetector\ElementResizeDetectorAsset,craft\web\assets\garnish\GarnishAsset,yii\web\JqueryAsset,craft\web\assets\jquerytouchevents\JqueryTouchEventsAsset,craft\web\assets\velocity\VelocityAsset,craft\web\assets\jqueryui\JqueryUiAsset,craft\web\assets\jquerypayment\JqueryPaymentAsset,craft\web\assets\datepickeri18n\DatepickerI18nAsset,craft\web\assets\picturefill\PicturefillAsset,craft\web\assets\selectize\SelectizeAsset,craft\web\assets\fileupload\FileUploadAsset,craft\web\assets\xregexp\XregexpAsset,craft\web\assets\fabric\FabricAsset,craft\web\assets\iframeresizer\IframeResizerAsset
X-Registered-Js-Files: ,http://surveillance.htb/cpresources/1ee84e9/tailwind_reset.js?v=1697574393,http://surveillance.htb/cpresources/36829225/axios.js?v=1697574393,http://surveillance.htb/cpresources/1086baca/d3.js?v=1697574393,http://surveillance.htb/cpresources/d1a8b721/element-resize-detector.js?v=1697574393,http://surveillance.htb/cpresources/d448a8c9/jquery.js?v=1697574393,http://surveillance.htb/cpresources/82b5dc63/jquery.mobile-events.js?v=1697574393,http://surveillance.htb/cpresources/877101b6/velocity.js?v=1697574393,http://surveillance.htb/cpresources/68d90560/garnish.js?v=1697574393,http://surveillance.htb/cpresources/deaf38df/jquery-ui.js?v=1697574393,http://surveillance.htb/cpresources/82e60301/jquery.payment.js?v=1697574393,http://surveillance.htb/cpresources/bebdd9df/picturefill.js?v=1697574393,http://surveillance.htb/cpresources/6fb3ecb/selectize.js?v=1697574393,http://surveillance.htb/cpresources/c0d4ee74/jquery.fileupload.js?v=1697574393,http://surveillance.htb/cpresources/b50564df/xregexp-all.js?v=1697574393,http://surveillance.htb/cpresources/406b3277/fabric.js?v=1697574393,http://surveillance.htb/cpresources/1be7b37d/iframeResizer.js?v=1697574393,http://surveillance.htb/cpresources/ab39c83/cp.js?v=1697574393,http://surveillance.htb/cpresources/bf6704d6/login.js?v=1697575314
X-CSRF-Token: oO1gYmwwvSOG3TyhLKujQ7VsMPrkOga9ZxXz-qzHL0y2ZBLD5xaYUeaPVyUUXuoO44Rr02fzyCb9IXiCyQpk7Qhwqb_Pg2kBhBdnhogntRU=
Content-Length: 59
Origin: http://surveillance.htb
Connection: close
Cookie: CraftSessionId=uc3vo5q5mpsthaj889ghkgjnds; CRAFT_CSRF_TOKEN=f14006806023dc8d5140e73524c5b68504cd9c70c44585a01110cbaed2757f60a%3A2%3A%7Bi%3A0%3Bs%3A16%3A%22CRAFT_CSRF_TOKEN%22%3Bi%3A1%3Bs%3A40%3A%22Fb7GxnW-eYWrKXkeHMHx-0bPoeZEcDFM2suEo1-D%22%3B%7D

{"loginName":"admin","password":"adssaads","rememberMe":""}
```