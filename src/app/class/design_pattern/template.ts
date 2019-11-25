abstract class PageTemplate {
    constructor() {
    }
    protected showHeader(){
        return "Header "
    }
    protected shownavigation(){
        return "Nav "
    }
    protected showFooter(){
        return "Footer "
    }
    protected abstract showBody();
    showPage(){
        return this.showHeader() +
        this.shownavigation() +
        this.showBody() +
        this.showFooter();
    }
}

class HomePage extends PageTemplate{
    protected showBody() {
        return "Noi dung cua homepage";
    }
}

class ContentPage extends PageTemplate{
    protected showBody() {
        return "Noi dung cua bai viet";
    }
}

class ContactPage extends PageTemplate{
    protected showBody() {
        return "Noi dung cua lien he";
    }
}