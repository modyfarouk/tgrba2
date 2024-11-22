let tasbeehCount = 0;

function startTasbeeh() {
    tasbeehCount++;
    document.getElementById('tasbeeh-counter').innerText = tasbeehCount;

    // يمكننا إضافة أي صوت هنا لتفعيل التسبيح عند كل عد
    const audio = new Audio('sound/tasbeeh.mp3');
    audio.play();
}

function fetchData() {
    const azkarOutput = document.getElementById("azkar-output");
    const azkar = [
        "سبحان الله",
        "الحمد لله",
        "الله أكبر",
        "لا إله إلا الله",
        "اللهم صل وسلم على نبينا محمد",
        "أستغفر الله",
        "اللهم بارك لنا في رمضان",
        "اللهم اجعلنا من أهل الجنة",
        "اللهم اجعلنا من الذاكرين الله كثيرا والذاكرات",
        "سبحان الله وبحمده سبحان الله العظيم"
    ];
    azkarOutput.innerHTML = azkar.join("<br>");
}

function fetchWudu() {
    const wuduOutput = document.getElementById("wudu-output");
    const wuduSteps = [
        "النية: أبدأ بالنية الطاهرة للوضوء.",
        "غسل اليدين: غسل اليدين ثلاثًا من أطراف الأصابع حتى الكوع.",
        "المضمضة: وضع الماء في الفم وتحريكه.",
        "الاستنشاق: استنشاق الماء عبر الأنف.",
        "غسل الوجه: غسل الوجه بالكامل من الجبهة إلى الذقن.",
        "غسل اليدين: غسل اليدين إلى المرفقين.",
        "مسح الرأس: مسح الرأس بالماء.",
        "غسل القدمين: غسل القدمين بما في ذلك الكعبين."
    ];
    wuduOutput.innerHTML = wuduSteps.join("<br>");
}