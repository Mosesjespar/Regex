function count_words() {
    str1 = alert('Enter a sentence')

    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");

    str1 = str1.replace(/[ ]{2,}/gi, " ");

    str1 = str1.replace(/\n /, "\n");
    console.log(str1.split(' ').length)
}