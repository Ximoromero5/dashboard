let checkbox = $('#checkDarkTheme');

$(checkbox).change(function () {
    if ($(this)[0].checked) {
        transition();
        $(document.documentElement).attr('data-theme', 'dark');
    } else {
        transition();
        $(document.documentElement).attr('data-theme', 'light');
    }

    //Guardamos la configuración en localStorage de momento
    if ($(document.documentElement).attr("data-theme") === 'dark') {
        localStorage.setItem('dark-theme', 'true');
    } else {
        localStorage.setItem('dark-theme', 'false');
    }
});

//Comprobamos el localStorage para ver el modo en el que está el usuario
if (localStorage.getItem('dark-theme') === 'true') {
    $(document.documentElement).attr('data-theme', 'dark');
    $(checkbox).prop('checked', true);
} else {
    $(document.documentElement).attr('data-theme', 'light');
    $(checkbox).prop('checked', false);
}

let transition = () => {
    $(document.documentElement).addClass('transition');
    window.setTimeout(() => {
        $(document.documentElement).removeClass('transition');
    }, 500);
}