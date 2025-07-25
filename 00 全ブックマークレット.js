{
	// ■使い捨てメール15
	window.open("http://15qm.com/");
	window.open("https://www.guerrillamail.com/jp/");
}

// -------------------------------------------------------------
{
	// ■Twitter
	window.open("https://twitter.com/signup");
}
// -------------------------------------------------------------
{
	// ■Twitter垢作成
	var result = document.evaluate('//*[@id="full-name"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	result.singleNodeValue.value = "おすすめ";
	var result = document.evaluate('//*[@id="password"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	result.singleNodeValue.value = "zxcvbnm12345";
	var result = document.evaluate('//*[@id="email"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	result.singleNodeValue.focus();
}
// -------------------------------------------------------------
{
	// ■楽天bot作成
	window.open("http://bots999.appspot.com/");
}
// -------------------------------------------------------------
{
	// ■アマゾンbot作成
	window.open("http://it--study.appspot.com/amazon_index.html");
}
// -------------------------------------------------------------

{
	// ■follow作成
	const result = document.evaluate('//*[@id="page-container"]/div[5]/div/div/div[1]/div/div/div/div[1]/h2/a/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	const twitterName = result.singleNodeValue.innerHTML;
	window.open('http://bots999.appspot.com/BotsAllOrder?radTarget=0&radInstruction=1&txtData=' + twitterName, 'newWindow');

}
// -------------------------------------------------------------

{
	// ■twilog
	window.open("http://twilog.org/page-register");
}
// -------------------------------------------------------------

{
	// ■ ↑
	// location.href = location.href.replace(/(.+%5C/).+ $ /, '$1');
}
// -------------------------------------------------------------

{
	// ■ →
	javascript: void (location.href = location.href.replace(/(.+)%5C?.+$/, '$1').replace(/(.+)#.+$/, '$1'));
}// -------------------------------------------------------------

{
	// ■全Botに命令
	window.open("http://bots999.appspot.com/BotsAllOrder.jsp");
}// -------------------------------------------------------------

{
	// ■対象ツイートをリツイート
	const path = window.location.pathname;
	const buff = path.toString().split("/status/");
	const id = buff[1].split("?");
	window.open('http://bots999.appspot.com/BotsAllOrder?radTarget=0&radInstruction=4&txtData=' + id[0], 'newWindow');
}// -------------------------------------------------------------

{
	// ■対象ツイートをフォロー
	const path = window.location.pathname;
	const twitterName = path.toString().split("/");
	window.open('http://bots999.appspot.com/BotsAllOrder?radTarget=0&radInstruction=1&txtData=' + twitterName[1], 'newWindow');
}// -------------------------------------------------------------

{
	// ■対象ツイートをアンフォロー
	const path = window.location.pathname;
	const twitterName = path.toString().split("/");
	window.open('http://bots999.appspot.com/BotsAllOrder?radTarget=0&radInstruction=2&txtData=' + twitterName[1], 'newWindow');
}// -------------------------------------------------------------

{
	// ■選択文字をツイート
	const selObj = window.getSelection();
	selObj = encodeURIComponent(selObj);
	window.open('http://bots999.appspot.com/BotsAllOrder?radTarget=0&radInstruction=0&txtData=' + selObj, 'newWindow');
}// -------------------------------------------------------------

{
	// ■InoreaderにYoutubeのRSSの追加

	const path = window.location.pathname;
	if (path.toString().indexOf('/user/') != -1) {

		const user = path.toString().split("/user/")[1];
		if (user.indexOf("/") != -1) {
			user = user.split("/")[0];
		}
		window.open("https://www.youtube.com/feeds/videos.xml?user=" + user, 'newWindow');

	} else if (path.toString().indexOf('/channel/') != -1) {

		const channel = path.toString().split("/channel/")[1];
		if (channel.indexOf("/") != -1) {
			channel = channel.split("/")[0];
		}
		window.open("https://www.youtube.com/feeds/videos.xml?user=" + channel, 'newWindow');

	} else if (path.toString().indexOf('/c/') != -1) {

		const c = path.toString().split("/c/")[1];
		if (c.indexOf("/") != -1) {
			c = c.split("/")[0];
		}
		window.open("https://www.youtube.com/feeds/videos.xml?user=" + c, 'newWindow');

	}
}
// -------------------------------------------------------------

{
	// ■RSS設定ページ
	let selObj = window.getSelection();
	selObj = encodeURIComponent(selObj);
	window.open('https://syon-feed-filter.herokuapp.com/view/' + selObj, 'newWindow');
}

// -------------------------------------------------------------

{
	// ■Google検索
	let selObj = window.getSelection();
	selObj = encodeURIComponent(selObj);
	window.open('https://www.google.co.jp/search?q=' + selObj, 'newWindow');
}

// -------------------------------------------------------------

{
	// Oxford Learner's Dictionaries
	const selectedObj = window.getSelection();
	const selectedText = selectedObj.toString().trim();
	const encodedObj = encodeURIComponent(selectedText);
	window.open('https://www.oxfordlearnersdictionaries.com/definition/english/'
		+ encodedObj, 'newWindow');
}

// -------------------------------------------------------------

{
	// ■選択文字を取得する
	let selObj = window.getSelection();
	selObj = encodeURIComponent(selObj);
	window.alert(selObj);
}

// -------------------------------------------------------------

{
	// ■音楽検索
	window.open("https://www.google.com/?gws_rd=ssl#q=site:baidu.com rar ");
}
// -------------------------------------------------------------

{
	// ■パスワード記憶
	javascript: document.qeuerySelector("form").submit
}

// -------------------------------------------------------------

{
	// ■江部康二ブログを見やすく
	const url = window.location.href;
	window.location = url + "?sp";
}

// -------------------------------------------------------------

{
	// ■Gitpodで開く
	const url = window.location.href;
	window.location = 'https://gitpod.io#' + url;
}

// -------------------------------------------------------------

{
	// ■ GitHistoryを開く
	const url = window.location.href;
	window.location = url.replace('.com', '.githistory.xyz');
}

// -------------------------------------------------------------

{
	// ■ uithubを開く
	const url = window.location.href;
	window.location = url.replace('github', 'uithub');
}

// -------------------------------------------------------------

{
	// ■ GitHubPages ←→ GitHub 変換
	let url = window.location.href;

	if (url.match(/\.github\.io/)) {
		const array = url.match(/https:\/\/(.+)\.github\.io\/(.+?)\//);
		url = "https://github.com/" + array[1] + "/" + array[2] + "/";
	} else if (url.match(/github\.com/)) {
		const array = url.match(/https:\/\/github\.com\/(.+?)\/(.+?)(\/|$)/);
		url = "https://" + array[1] + ".github.io/" + array[2] + "/";
	}
	window.open(url);
}

// -------------------------------------------------------------



