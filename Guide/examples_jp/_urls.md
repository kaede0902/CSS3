## URLS

* Attach and newest sample code:
https://www.thebookofcss3.com

* Blog of the author:
https://www.broken-links.com

* Source code of this JP book
https://www.oreilly.co.jp/books/9784873117256

* the next web

## Basics
* DPR: device pixel rate
    * iPhone5s: 640x1136, DPR:2
    * Nexus5  : DPR:3 (9x9px)

## media

@media (特徴: value) {
    rule1:
    rule2:
}
ex
    @media (min-width:400px) {
        h1 {
            background: url('600pxImg.png');
        }
    }

### resolution
@media (resolution: val) {
    rules...
}
by  DPI: dot/inch
    DPCM dot/cm
    DPPX dot/px

E {background-image: url('lower.png);}
@media (min-resolution:1.5dppx) {
    background-image: url('higher.png';)
    background-size: 100% 100%;
}
* IEでは1.5dpxをx96して144dpiを指定する。
* safariは-webkit....px..ratioで2を指定

### orientation
* Display is horizontal(-) or vertical(|).
    * landscape or portrait(|)
ex
    li {
        float: left;
    }
    @media (orientation: portrait) {
        li {
            float: none;
        }
    }

## aspect ratio
* width/heightのレート
    * aspect-raito: check the ratio of Browser
    * device-aspect-raito: check the ratio of Device.
ex: over 16:9 device
    @media (min-device-aspect-ratio: 16:9) {
        rules....
    }

## selector
a [rel = 'friend'] { color: red;}
のように指定する。

rel = 'freind met'のように複数ある場合は

a[rel ~= 'friend']で部分一致を使う

langは'-'区切りで'|'で指定する