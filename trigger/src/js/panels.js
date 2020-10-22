const $ = require('jquery');

export default () => {
    // hide all then show home panel
    $('.cd-panel').hide();
    $('#home').show();

    // setup all the panel buttons

    $('#navbar-item-connection').on('click', () => {
        $('.cd-panel').hide();
        $('#connection').show();
    });

    $('#navbar-item-speech').on('click', () => {
        $('.cd-panel').hide();
        $('#speech').show();
    });

    $('#navbar-item-dispense').on('click', () => {
        $('.cd-panel').hide();
        $('#dispense').show();
    });
};