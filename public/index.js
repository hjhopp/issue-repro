(function() {
    window.addEventListener("submit", function(e) {
        e.preventDefault();

        fetch("/test", {
            method : "post",
            body : {}
        });
    });
})();