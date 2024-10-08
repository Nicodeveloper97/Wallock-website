( function() {
    const titleQuestions = [...document.querySelectorAll('.questiontitle')];

    console.log(titleQuestions)

    titleQuestions.forEach (question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questionpadding--add');

            question.children[0].classList.toggle('questionarrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    })
})();
