(function(w, libName){
	var esc=function(s){
	    s = s.replace(/\&/g, '&amp;')
	    var escChars = '\'#<>`*-~_=:"![]()nt',c,l=escChars.length,i
	    for(i=0;i<l;i++) s=s.replace(RegExp('\\'+escChars[i], 'g'), function(m){return'&#'+m.charCodeAt(0)+';'})
	    return s
	}, rules = [
            {p:/\r\n/g, r:'\n'},
            {p:/\n\s*```\n([^]*?)\n\s*```\s*\n/g, r:function(m,grp){return'<pre>'+esc(grp)+'</pre>'}},
            {p:/`(.*?)`/g, r:function(m,grp){return'<code>'+esc(grp)+'</code>'}},
            {p:/\n\s*(#+)(.*?)/g, r:function(m,hset,hval){m=hset.length;return'<h'+m+'>'+hval.trim()+'</h'+m+'>'}},
            {p:/\n\s*(.*?)\n={3,}\n/g, r:'\n<h1>$1</h1>\n'},
            {p:/\n\s*(.*?)\n-{3,}\n/g, r:'\n<h2>$1</h2>\n'},
            {p:/___(.*?)___/g, r:'<u>$1</u>'},
            {p:/(\*\*|__)(.*?)\1/g, r:'<strong>$2</strong>'},
            {p:/(\*|_)(.*?)\1/g, r:'<em>$2</em>'},
            {p:/~~(.*?)~~/g, r:'<del>$1</del>'},
            {p:/:"(.*?)":/g, r:'<q>$1</q>'},
            {p:/\!\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r:'<img src="$2" alt="$1">'},
            {p:/\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r:'<a href="$2">$1</a>'},
            {p:/\n\s*(\*|\-)\s*([^\n]*)/g, r:'\n<ul><li>$2</li></ul>'},
            {p:/\n\s*\d+\.\s*([^\n]*)/g, r:'\n<ol><li>$1</li></ol>'},
            {p:/\n\s*(\>|&gt;)\s*([^\n]*)/g, r:'\n<blockquote>$2</blockquote>'},
            {p:/<\/(ul|ol|blockquote)>\s*<\1>/g, r: ' '},
            {p:/\n\s*\*{5,}\s*\n/g, r:'\n<hr>'},
            {p:/\n{3,}/g, r:'\n\n'},
            {p:/\n([^\n]+)\n/g, r:function(m, grp){grp=grp.trim();return /^\<\/?(ul|ol|bl|h\d|p).*/.test(grp.slice(0,9)) ? grp : ('<p>'+grp+'</p>')}},
            {p:/>\s+</g, r:'><'}
	], l = rules.length, i
 
	w[libName] = {
		addRule:function(ruleString, replacement) {rules.push({p:RegExp(ruleString, 'g'),r:replacement})},
		render:function(text) {
		    if(text = text || '') {
		    	text = '\n' + text.trim() + '\n'
			for(var i=0;i<l;i++) text = text.replace(rules[i].p, rules[i].r)
		    }
		    return text
		}
	}
})(self, 'Landmark')