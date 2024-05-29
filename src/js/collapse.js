export default class Collapse{
    constructor(element) {
        this.container = element;
    }


    onBtnClick(event) {
        event.preventDefault();
        const text = this.container.querySelector('.hiddenBlock');
        if (text.style.maxHeight){
            text.style.maxHeight = null;
        } else {
            text.style.maxHeight = text.scrollHeight + "px";
        } 
    }

    init(){
        this.container.querySelector('.button').addEventListener('click', this.onBtnClick.bind(this));
    }
}