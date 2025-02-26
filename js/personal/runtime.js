var now = new Date;

function createtime() {
	now.setTime(now.getTime() + 1e3);
	var //e = new Date("10/27/2022 23:32:00"),
		// t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
		// a = (t / 1496e5)
		// .toFixed(6),
		n = new Date("10/27/2022 23:32:00"),
		m = new Date("8/4/2022 21:12:00"),
		s = (now - n) / 1e3 / 60 / 60 / 24,
        s1 = (now - m) / 1e3 / 60 / 60 /24, 
		o = Math.floor(s),
        o1 = Math.floor(s1), 
		r = (now - n) / 1e3 / 60 / 60 - 24 * o,
        r1 = (now - m) / 1e3 / 60 / 60 -24 * o1, 
		i = Math.floor(r);
        i1 = Math.floor(r1); 
	1 == String(i)
		.length && (i = "0" + i);
    1 == String(i1)
        .length && (i1 = "0" + i1); 
	var l = (now - n) / 1e3 / 60 - 1440 * o - 60 * i,
        l1 = (now - m) / 1e3 / 60 - 1440 * o1 - 60 * i1,  
		b = Math.floor(l);
        b1 = Math.floor(l1); 
	1 == String(b)
		.length && (b = "0" + b);
    1 == String(b1)
		.length && (b1 = "0" + b1);
	var d = (now - n) / 1e3 - 86400 * o - 3600 * i - 60 * b, 
        d1 = (now - m) / 1e3 - 86400 * o1 - 3600 * i1 - 60 * b1, 
		c = Math.round(d);
        c1 = Math.round(d1); 
	1 == String(c)
		.length && (c = "0" + c);
    1 == String(c1)
		.length && (c1 = "0" + c1);
	let g = "";
	g = i < 18 && i >= 9 ? `<img class='boardsign' src='https://img.shields.io/badge/F小屋-上班摸鱼中-6adea8?style=social&logo=cakephp' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> <b>本站居然运行了 ${o} 天</span><span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b> <br> <b>我们已经认识了 ${o1} 天</span><span id='runtime'> ${i1} 小时 ${b1} 分 ${c1} 秒 </b></span> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i> <br> <b><font size=2px>我爱你，如鲸向海，如鸟投林。不可避免，退无可退。</font></b> ` : `<img class='boardsign' src='https://img.shields.io/badge/F小屋-打烊休息啦-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> <b>本站居然运行了 ${o} 天</span><span id='runtime'> ${i} 小时 ${b} 分 ${c} 秒 </b> <br> <b>我们已经认识了 ${o1} 天</span><span id='runtime'> ${i1} 小时 ${b1} 分 ${c1} 秒 </b></span> <i id="heartbeat" class='fas fa-heartbeat' style='color:red'></i> <br> <b><font size=2px>我爱你，如鲸向海，如鸟投林。不可避免，退无可退。</font></b> `, document.getElementById("workboard") && (document.getElementById("workboard")
		.innerHTML = g)
}
setInterval((() => {
	createtime()
}), 1e3);