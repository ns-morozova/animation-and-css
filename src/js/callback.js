export default class Callback{
    constructor(element){
        this.container = element;
    }

    onBtnClick(event) {
        event.preventDefault();
        const chat = this.container.querySelector('.chat');
        if (chat.style.opacity == '') {
            chat.style.opacity = '1';
            chat.style.zIndex = '1';    
        }
        else {
            chat.style.opacity = '';
            chat.style.zIndex = '';    
 
        }

    }

    init(){
        this.container.querySelector('.round-button').addEventListener('click', this.onBtnClick.bind(this));
        this.container.querySelector('.close').addEventListener('click', this.onBtnClick.bind(this));
        }
}