function nowggReload() {
    if(window.top.location.href == 'about:blank') {
        const element = window.top.document.querySelector('iframe').contentWindow.document.getElementById('ifr').contentWindow.document.querySelector('img[__uv-attr-src="/6/play/_next/static/media/cloudy-rename.ee5b2c65.svg"]');
        if(element) {
            window.top.document.querySelector('iframe').contentWindow.document.getElementById('ifr').contentWindow.location.reload();
        }
    }
    else {
        const element = window.top.document.querySelector('iframe').contentWindow.document.querySelector('img[__uv-attr-src="/6/play/_next/static/media/cloudy-rename.ee5b2c65.svg"]');
        if(element) {
            window.top.document.querySelector('iframe').contentWindow.location.reload();
        }
    }
}


setInterval(nowggReload, 500); 
