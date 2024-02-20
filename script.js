
// let soru={
//     soruMetni:"Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a:"Node.js",
//         b:"TypeScript",
//         c:"Npm"
//     },
//     dogruCevap:"c",
//     cevabiKontrolEt: function(cevap){
//         return cevap===this.dogruCevap
//     }
// }







const quiz = new Quiz(sorular);
const ui=new UI(); 

ui.btn_start.addEventListener("click", function () {
        ui.quiz_box.classList.add("active");
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove('show');
})

ui.btn_next.addEventListener('click', function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        console.log(quiz.soruGetir());
        quiz.soruIndex+=1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove('show');
    }
    else {
        console.log("Quiz Bitti!");
        ui.skorGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");        
    }
});

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex=0;
    quiz.dogruCevapSayisi=0;
    ui.btn_start.click(); //Click ile replay butonuna tıklandığında farklı bir butona da tıklama işlemini gerçekleştirmiş oluyoruz.
    ui.score_box.classList.remove("active");
});


function optionSelected(option){
    let cevap=option.querySelector("span b").textContent;
    let soru=quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi+=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }
    for(let i=0;i<ui.option_list.children.length;i++){
        ui.option_list.children[i].classList.add('disabled');
    }

    ui.btn_next.classList.add('show');
}

