const $ = require('jquery');

export default () => {
    // save setting value on change
    $('.cd-setting').on('input', (event) => {
        window.localStorage.setItem(event.target.id, $(event.target).val());
    });

    // restore settings on page load
    $(document).ready(() => {
        $('.cd-setting').each((i, x) => {
            let id = $('.cd-setting').get()[i].id;
            if (id) {
                $($('.cd-setting').get()[i]).val(localStorage.getItem(id));
            }
        });
    });
};