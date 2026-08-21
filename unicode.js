var array_from = new Array(
"‘",   "’",   "“",   "”",   "(",    ")",   "{",    "}",   "=", "।",  "?",  "-",  "µ", "॰", ",", ".", "् ", "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९", "x", "फ़्",  "क़",  "ख़",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ", "त्त्",   "त्त",     "क्त",  "दृ",  "कृ", "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष्", "क्ष", "त्र्", "त्र","ज्ञ","छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य","द्व", "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र",  "द्र",   "प्र",   "ग्र", "रु",  "रू","्र", "ओ",  "औ",  "आ",   "अ",   "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ", "क्",  "क",  "क्क",  "ख्",   "ख",    "ग्",   "ग",  "घ्",  "घ","ङ", "चै",   "च्",   "च",   "छ",  "ज्", "ज",   "झ्",  "झ",   "ञ", "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड",   "ढ",  "ण्", "ण",  "त्",  "त",  "थ्", "थ",  "द्ध",  "द", "ध्", "ध",  "न्",  "न",  "प्",  "प",  "फ्", "फ",  "ब्",  "ब", "भ्",  "भ",  "म्",  "म", "य्",  "य",  "र",  "ल्", "ल",  "ळ",  "व्",  "व", "श्", "श",  "ष्", "ष",  "स्",   "स",   "ह", "ऑ",   "ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै","ं",   "ँ",   "ः",   "ॅ",    "ऽ",  "् ", "्" )

var array_to = new Array(
"^", "*",  "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]","-","~ ", "å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹","Û","¶",   "d",    "[k",  "x",  "T",  "t",   "M+", "<+", "Q",  ";",    "j",   "u", "Ù",   "Ùk",   "ä",    "–",   "—", "à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{", "{k",  "«", "=","K", "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|","}","J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý",   "æ", "ç", "xz", "#", ":","z", "vks",  "vkS",  "vk",    "v",   "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_", "D",  "d",    "ô",     "[",     "[k",    "X",   "x",  "?",    "?k",   "³", "pkS",  "P",    "p",  "N",   "T",    "t",   "÷",  ">",   "¥", "ê",      "ë",      "V",  "B",   "ì",       "ï",     "M",  "<",  ".", ".k", "R",  "r",   "F", "Fk",  ")",    "n", "/",  "/k",  "U", "u",  "I",  "i",   "¶", "Q",   "C",  "c",  "H",  "Hk", "E",   "e", "¸",   ";",    "j",  "Y",   "y",  "G",  "O",  "o","'", "'k",  "\"", "\"k", "L",   "l",   "g",  "v‚",    "‚",    "ks",   "kS",   "k",     "h",    "q",   "w",   "`",    "s",    "S", "a",    "¡",    "%",     "W",   "·",   "~ ", "~")

function unicodekruti() {
    var u = document.getElementById("unicodetext");
    var k = document.getElementById("krutitext");
    if (!u || !k) return;

    var modified_substring = u.value;

    if (modified_substring != "") {
        // Normalization
        modified_substring = modified_substring.replace(/क़/g, "क़");
        modified_substring = modified_substring.replace(/ख़/g, "ख़");
        modified_substring = modified_substring.replace(/ग़/g, "ग़");
        modified_substring = modified_substring.replace(/ज़/g, "ज़");
        modified_substring = modified_substring.replace(/ड़/g, "ड़");
        modified_substring = modified_substring.replace(/ढ़/g, "ढ़");
        modified_substring = modified_substring.replace(/ऩ/g, "ऩ");
        modified_substring = modified_substring.replace(/फ़/g, "फ़");
        modified_substring = modified_substring.replace(/य़/g, "य़");
        modified_substring = modified_substring.replace(/ऱ/g, "ऱ");

        // Chhoti Ee logic
        var position_of_f = modified_substring.indexOf("ि");
        while (position_of_f != -1) {
            var character_before_f = modified_substring.charAt(position_of_f - 1);
            modified_substring = modified_substring.replace(character_before_f + "ि", "f" + character_before_f);
            position_of_f = position_of_f - 1;

            while ((modified_substring.charAt(position_of_f - 1) == "्") && (position_of_f != 0)) {
                var repl_str = modified_substring.charAt(position_of_f - 2) + "्";
                modified_substring = modified_substring.replace(repl_str + "f", "f" + repl_str);
                position_of_f = position_of_f - 2;
            }
            position_of_f = modified_substring.indexOf("ि", position_of_f + 2);
        }

        // Reph logic
        var matras = "ािीुूृेैोौं:ँॅ";
        var position_of_reph = modified_substring.indexOf("र्");
        while (position_of_reph != -1) {
            var search_pos = position_of_reph + 2;
            var character_next = modified_substring.charAt(search_pos);

            while (matras.indexOf(character_next) != -1) {
                search_pos++;
                character_next = modified_substring.charAt(search_pos);
            }

            var target_cluster = modified_substring.substring(position_of_reph + 2, search_pos);
            modified_substring = modified_substring.replace("र्" + target_cluster, target_cluster + "Z");
            position_of_reph = modified_substring.indexOf("र्", position_of_reph + 1);
        }

        // Character Mapping
        for (var i = 0; i < array_from.length; i++) {
            var regex = new RegExp(array_from[i], "g");
            modified_substring = modified_substring.replace(regex, array_to[i]);
        }
    }
    k.value = modified_substring;
    if (typeof updateCharCount === 'function') updateCharCount('krutitext', 'kru-count');
}
