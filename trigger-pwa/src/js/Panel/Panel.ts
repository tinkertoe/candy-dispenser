import $ from 'jquery';

class Panel {
    element: HTMLElement;
    trigger: HTMLElement;
    constructor(elementId: string, triggerId: string) {
        this.element = document.getElementById(elementId);
        this.trigger = document.getElementById(triggerId);

        $(this.element).hide();
        $(this.trigger).on('click', () => this.show());
    }
    show() {
        $('.cd-panel').hide();
        $(this.element).show();
    }
}

export default Panel
