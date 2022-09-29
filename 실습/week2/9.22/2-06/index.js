function highlightWords() {
    const txt = document.getElementById("targetp").innerText;
    let words = txt.split(" ");
    console.log(words);

    let output = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let replacementword;

        // 2. 단어의 길이가 8 이상인 경우 단어를 하이라이트 하세요.
        if (word.length >= 8) {
            replacementword = "<span class='lightext'>" + word + "</span>";
        } else {
            replacementword = word;
        }
        output = output + " " + replacementword + " ";
    }

    return output;
}

document.getElementById("targetp").innerHTML = highlightWords();

// 3. 볼드체인 텍스트를 모두 파란색으로 변경하세요.
function highlight() {
    let words = document.getElementsByTagName("strong");
    console.log("getElementsByTagName: ", words);

    for (let i = 0; i < words.length; i++) {
        words[i].style.color = "blue";
    }
    // let test = words.map((item) => (item.style.color = "blue"));
    // console.log(test);
}

// 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
function returnNormal() {
    let words = document.querySelectorAll("strong");
    console.log("querySelectorAll: ", words);

    for (let i = 0; i < words.length; i++) {
        words[i].style.color = "black";
    }
}
