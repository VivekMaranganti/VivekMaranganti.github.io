//https://stackoverflow.com/questions/6348207/making-a-paragraph-in-html-contain-a-text-from-a-file

var txtFile = new XMLHttpRequest();
txtFile.open("GET", "fingerprints.txt", true);
txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4 && txtFile.status == 200) {
	allText = txtFile.responseText;
    }
    document.getElementById('div').innerHTML = allText;
