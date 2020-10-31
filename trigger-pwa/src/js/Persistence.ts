import $ from 'jquery';

class Persistence {
    constructor() {
        $('.cd-setting').on('input', (e) => {
            window.localStorage.setItem(e.target.id, $(e.target).val().toString());
        });
        $(document).ready(() => {
            $('.cd-setting').each((i, x) => {
                let id = $('.cd-setting').get()[i].id;
                if (id) {
                    $($('.cd-setting').get()[i]).val(localStorage.getItem(id));
                }
            });
        });
    }
}

export default Persistence