jQuery(function ($) {

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    document.querySelectorAll('.js-jump-top').forEach(element => {
        element.onclick = function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    })
});
