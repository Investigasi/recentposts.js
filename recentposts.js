// Recent Posts
function recentpostinfoarlina(D) {
	document.write('<ul class="recent_posts_arlina">');
	for(var P = 0; P < numposts; P++) {
		var E, H = D.feed.entry[P],
			L = H.title.$t;
		if(P == D.feed.entry.length) {
			break
		}
		for(var G = 0; G < H.link.length; G++) {
			if("replies" == H.link[G].rel && "text/html" == H.link[G].type) {
				var I = H.link[G].title,
					C = H.link[G].href
			}
			if("alternate" == H.link[G].rel) {
				E = H.link[G].href;
				break
			}
		}
		var J;
		try {
			J = H.media$thumbnail.url
		} catch(M) {
			s = H.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), J = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://cdn.statically.io/img/2.bp.blogspot.com/-Q6S8qhkE33I/V0VwhvhULoI/AAAAAAAAHfQ/VZkkOgl_wX4X59EP31Jpl1swFsj6-n0TQCLcB/s1600/InfoArlina.png"
		}
		var A = H.published.$t,
			O = A.substring(0, 4),
			F = A.substring(5, 7),
			N = A.substring(8, 10),
			B = new Array;
		if(B[1] = "Jan", B[2] = "Feb", B[3] = "Mar", B[4] = "Apr", B[5] = "May", B[6] = "Jun", B[7] = "Jul", B[8] = "Aug", B[9] = "Sep", B[10] = "Oct", B[11] = "Nov", B[12] = "Dec", document.write('<li class="clearfix">'), 1 == showpostthumbnails && document.write('<span class="wrapinfo"><img class="recent_thumb" src="' + J + '"/></span>'), document.write('<b><a href="' + E + '" target ="_top">' + L + "</a></b><br>"), "content" in H) {
			var q = H.content.$t
		} else {
			if("summary" in H) {
				var q = H.summary.$t
			} else {
				var q = ""
			}
		}
		var K = /<\S[^>]*>/g;
		if(q = q.replace(K, ""), 1 == showpostsummary) {
			if(q.length < numchars) {
				document.write("<i>"), document.write(q), document.write("</i>")
			} else {
				document.write("<i>"), q = q.substring(0, numchars);
				var Q = q.lastIndexOf(" ");
				q = q.substring(0, Q), document.write(q + "..."), document.write("</i>")
			}
		}
		var z = "",
			j = 0;
		document.write("<br>"), 1 == showpostdate && (z = z + B[parseInt(F, 10)] + "-" + N + " - " + O, j = 1), 1 == showcommentnum && (1 == j && (z += " | "), "1 Comments" == I && (I = "1 Comment"), "0 Comments" == I && (I = "No Comments"), I = '<a href="' + C + '" target ="_top">' + I + "</a>", z += I, j = 1), 1 == displaymore && (1 == j && (z += " | "), z = z + '<a href="' + E + '" class="url" target ="_top">More -></a>', j = 1), document.write(z), document.write("</li>"), 1 == displayseparator && P != numposts - 1 && document.write("<hr size=0.5>")
	}
	document.write("</ul>")
};