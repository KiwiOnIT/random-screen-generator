<template>
<head>
    <meta charset="UTF-8">
    <title>Random screen generator</title>
</head>
<body>
    <div class="box">
        <div>
            <p class="center title">
                Random screenshot generator
            </p>
        </div>
        <div>
            <button class="btn center" v-on:click="this.randomScreen()">Click to generate</button>
        </div>
        <div>
            <a class="dynamicLink center link" href="linkFinal" target="_blank" id="linkID"></a>
        </div>
    </div>
</body>
</template>

<script>
export default {
  methods: {
    randomScreen() {
        var lengthChar = 2
        var lengthNum = 3
        var lengthLast = 1
        var char = 'abcdefghijklmnopqrstuvwxyz'
        var num = '0123456789'
        var linkChar = ''
        var linkNum = ''
        var linkLast = ''
        for (var i = 0, n = char.length; i < lengthChar; ++i) {
            linkChar += char.charAt(Math.floor(Math.random() * n));
        }
        for (var j = 0, k = num.length; j < lengthNum; ++j) {
            linkNum += num.charAt(Math.floor(Math.random() * k));
        }
        for (var l = 0, m = char.length; l < lengthLast; ++l) {
            linkLast += char.charAt(Math.floor(Math.random() * m));
        }
        var linkFinal = 'https://prnt.sc/' + linkChar + linkNum + linkLast
        document.getElementById('linkID').innerHTML = linkFinal

        var href = linkFinal;
        var links = document.getElementsByClassName('dynamicLink');
        for (var t = 0; t < links.length; t++) {
            links[t].href = href;
            links[t].innerHTML = href.replace('http://', "");
            links[t].style.visibility = 'visible'
        }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #2b2b2b;
}
.box {
    color: rgb(250, 250, 250);
    width: 800px;
    min-height: 400px;
    padding: 20px;
    border-radius: 3px;
    height: auto;
    background: #393939;
    box-shadow: 0 10px 15px rgba(0,0,0,0.5);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 240px;
}

.center {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
}

.btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    transition-duration: 0.4s;

}

.btn:hover {
	background-color: rgb(23, 148, 7);
}

.link {
    display: block;
    background: #4CAF50;
    padding: 10px;
    width: 190px;
    text-align: center;
    color: #f1f1f1;
    text-decoration: none;
    border-radius: 3px;
    margin-top: 100px;
    font-size: 20px;
    transition-duration: 0.4s;
    visibility: hidden;
}

.link:hover {
    background-color: rgb(23, 148, 7);
}

.title {
    font-size: 32px;
}
</style>
