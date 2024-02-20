function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi.net paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "b"),
    new Soru("2-Hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "Npm" }, "c"),
    new Soru("3-.NET Core ile .NET Framework arasındaki temel farklar nelerdir?", { a: ".NET Core, platform bağımsızdır; .NET Framework sadece Windows’ta çalışır", b: ".NET Core, açık kaynaklıdır; .NET Framework kapalı kaynaklıdır", c: ".NET Core, sadece web uygulamaları için kullanılır; .NET Framework masaüstü uygulamaları için kullanılır" }, "a"),
    new Soru("4-JS’de “prototype” zinciri nedir ve nasıl oluşturulur?", { a: " Nesne yönelimli programlama modeli", b: "Nesne örneklerinin birbirine bağlı olduğu yapı", c: "Fonksiyonların birbirine bağlı olduğu yapı" }, "b"),

];