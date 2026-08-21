var kruti_array = new Array("ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”","å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹", "¶+",   "d+", "[+k","[+", "x+",  "T+",  "t+", "M+", "<+", "Q+", ";+", "j+", "u+","™k", "™", "ä", "–", "—","©","™","=kk","f=k",  " ",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{k", "{", "=",  "«", "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|", "K", "}","J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "", "nzZ",  "æ", "§", "Á", "xz", "#", ":", "v‚","vks",  "vkS",  "vk",    "v",  "b±", "ƒ",  "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_","´",  "d", "Dk", "D", "[k", "[", "x","Xk", "X", "„", "?k", "?",   "³", "pkS",  "p", "Pk", "P",  "N",  "t", "Tk", "T",  ">", "÷", "¥","ª",  "«",   "V",  "B",   "¬",   "¯", "M+", "<+", "M",  "<", ".k", ".", "r",  "Rk", "R",   "Fk", "F",  ")", "n", "/k", "èk",  "/", "‹", "è", "u", "Uk", "U",   "i",  "Ik", "I",   "Q",    "¶",  "c", "Ck",  "C",  "Hk",  "H", "e", "Ek",  "E", ";",  "¸",   "j",    "y", "Yk",  "Y",  "G",  "o", "Ok", "O", "'k", "'",   "\"k",  "\"",  "l", "Lk",  "L",   "g",  "ˆ", "z", "Œ", "", "Ž",  "",  "‘",  "’",  "“",  "”",   "–",  "˜",  "™","œk", "œ","‚",    "ks",   "kS",   "k",  "h",    "q",   "w",   "`",    "s",    "S", "a",    "¡",    "%",     "W",  "•", "·", "∙", "·", "~j",  "~", "\\","+"," ƒ","^", "*",  "ž", "Ÿ", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]","~ ","@");

var unicode_array = new Array("ॐ","QZ+ validation","sa","a","र्द्ध","Z","\"","\"","'","'", "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९",  "फ़्",  "क़",  "ख़", "ख़्",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ",  "त्त", "त्त्", "क्त",  "दृ",  "कृ","न्न","न्न्","=k","f=", "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह",   "द्द",  "क्ष", "क्ष्", "त्र", "त्र्",  "छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य", "ज्ञ", "द्व", "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र", "र्द्र",  "द्र",   "प्र", "प्र",  "ग्र", "रु",  "रू", "ऑ",   "ओ",  "औ",  "आ",   "अ", "ईं", "ई",  "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ", "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ", "चै",  "च", "च", "क्", "छ", "ज", "ज", "ज्",  "झ",  "झ्", "ञ", "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड़", "ढ़", "ड",   "ढ", "ण", "ण्", "त", "त", "त्", "थ", "थ्",  "द्ध",  "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",    "प", "प", "प्",  "फ", "फ्",  "ब", "ब", "ब्",  "भ", "भ्",  "म",  "म", "म्", "य", "य्",  "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्", "श", "श्",  "ष", "ष्", "स", "स", "स्", "ह", "ीं", "्र", "द्द", "ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्","ऑ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै", "ं",   "ँ",   "ः",   "ॅ",  "ऽ", "ऽ", "ऽ", "ऽ", "्र",  "्", "?", "़",":", "‘",   "’",   "“",   "”",  ";",  "(",    ")",   "{",    "}",   "=", "।", ".", "-",  "µ", "ॐ", ",","् ","/");

function krutiunicode()
{
    var k = document.getElementById("krutitext");
    var u = document.getElementById("unicodetext");
    if (!k || !u) return;

    var kruti_text = k.value;
    var processed_text = '';

    if (kruti_text != "") {
        // Standard replacement loop
        for (var i = 0; i < kruti_array.length; i++) {
            var regex = new RegExp(escapeRegExp(kruti_array[i]), "g");
            kruti_text = kruti_text.replace(regex, unicode_array[i]);
        }

        // Special Krutidev Logic
        kruti_text = kruti_text.replace(/Æ/g, "र्f");

        // Chhoti Ee fix
        var pi = kruti_text.indexOf("f");
        while (pi != -1) {
            var char_next = kruti_text.charAt(pi + 1);
            kruti_text = kruti_text.replace("f" + char_next, char_next + "ि");
            pi = kruti_text.indexOf("f", pi + 1);
        }

        // Reph logic
        var matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ";
        var rpos = kruti_text.indexOf("Z");
        while (rpos > 0) {
            var pphr = rpos - 1;
            while (pphr >= 0 && matras.indexOf(kruti_text.charAt(pphr)) != -1) {
                pphr--;
            }
            var target = kruti_text.substring(pphr, rpos);
            kruti_text = kruti_text.replace(target + "Z", "र्" + target);
            rpos = kruti_text.indexOf("Z", rpos + 1);
        }
    }
    u.value = kruti_text;
    if (typeof updateCharCount === 'function') updateCharCount('unicodetext', 'uni-count');
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
