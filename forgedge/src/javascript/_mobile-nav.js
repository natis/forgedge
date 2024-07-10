// header
const HeaderComponent = (function HeaderComponent() {

	let body = document.querySelector('body');
	let mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
	let showNestedLevelLinks = document.querySelectorAll('.sub-menu-toggle');
	let closedNestedLevel = document.querySelectorAll('.has-sub');

	// Open & close the mobile menu
	function openMenu(e) {
        body.classList.add('mobile-nav-shown');
    }
    function closeMenu(e) {
        body.classList.remove('mobile-nav-shown');
		closedNestedLevel.forEach(el => {
			el.classList.remove('sub-menu-shown');
		});
    }
	function toggleMobileMenu() {
        body.classList.contains('mobile-nav-shown') ? closeMenu() : openMenu();
    }

	// Reveal the mobile sub menu items.
	function toggleMobileNestedLevel(e) {
        const currentlyShown = document.querySelectorAll('.sub-menu-shown');
        currentlyShown.forEach(el => {
            if (e.target.closest('.has-sub') !== el) {
                el.classList.remove('sub-menu-shown');
            }
        });
		e.target.closest('.has-sub').classList.toggle('sub-menu-shown');
    }

    function attachEvents() {
        mobileMenuBtn && mobileMenuBtn.addEventListener('click', () => {
            toggleMobileMenu();
        })
        showNestedLevelLinks && showNestedLevelLinks.forEach(el => {
            el.addEventListener("click", (e) => {
                toggleMobileNestedLevel(e);
            })
        })
        window.addEventListener("resize", () => {
        	closeMenu();
        })
    }



    function init() {
        attachEvents();
    }
    return {
        init: init
    }
}());

window.addEventListener('load', function() {
    HeaderComponent.init();
})