const topMenu = document.getElementById('bt-top-menu');
const toggleTopMenuIcon = document.getElementById('bt-toggle-top-menu');

document.addEventListener('click', (e) =>{
    if(toggleTopMenuIcon.contains(e.target)) {
        // click to toggle top menu
        topMenu.classList.toggle('bt-topmenu-expanded');
        topMenu.classList.toggle('hidden');
    }else{
        // click to outside of top menu
        if(topMenu.classList.contains('bt-topmenu-expanded')) {
            topMenu.classList.remove('bt-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
});