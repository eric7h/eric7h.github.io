var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("08/01/2022 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        r = new Date("11/26/2022 18:00:00"),
        o = (now - r) / 1e3 / 60 / 60 / 24,
        i = Math.floor(o),
        n = (now - r) / 1e3 / 60 / 60 - 24 * i,
        s = Math.floor(n);
    1 == String(s).length && (s = "0" + s);
    var l = (now - r) / 1e3 / 60 - 1440 * i - 60 * s,
        g = Math.floor(l);
    1 == String(g).length && (g = "0" + g);
    var d = (now - r) / 1e3 - 86400 * i - 3600 * s - 60 * g,
        c = Math.round(d);
    1 == String(c).length && (c = "0" + c);
    let h = "";
    h = s < 23 && s >= 8 ? `<img class='boardsign' src='https://img.shields.io/badge/eric-思考中-6adea8?style=social&logo=cakephp' title='jia'you~'><br> 本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀 <br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨ ` : `<img class='boardsign' src='https://img.shields.io/badge/F小屋-打烊休息啦-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心的玩耍，嘿嘿~'><br> 本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀 <br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨ `, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = h)
}
setInterval((() => {
    createtime()
}), 1e3);