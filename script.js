function randomScreen() {
    lengthChar = 2
    lengthNum = 3
    lengthLast = 1
    char = 'abcdefghijklmnopqrstuvwxyz'
    num = '0123456789'
    linkChar = ''
    linkNum = ''
    linkLast = ''
    for (var i = 0, n = char.length; i < lengthChar; ++i) {
        linkChar += char.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = num.length; i < lengthNum; ++i) {
        linkNum += num.charAt(Math.floor(Math.random() * n));
    }
    for (var i = 0, n = char.length; i < lengthLast; ++i) {
        linkLast += char.charAt(Math.floor(Math.random() * n));
    }
    linkFinal = 'https://prnt.sc/' + linkChar + linkNum + linkLast
    document.getElementById('linkID').innerHTML = linkFinal

    var href = linkFinal;
    var links = document.getElementsByClassName('dynamicLink');
    for (var i = 0; i < links.length; i++) {
        links[i].href = href;
        links[i].innerHTML = href.replace('http://', "");
    }
}