//TAB PARA QUANDO CLICAR NA FOTO APARECER A DESCRIÇÃO DOS ANIMAIS
function initTabNav() {     //para isolar a função e não influenciar em outras
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo'); //para que o primeiro item esteja sempre ativo e a página não vazia

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        })
    }
}
initTabNav();