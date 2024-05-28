class HeaderMenuPage {
    getLoginBtn(){
        return cy.get('div #customer_menu_top li a');
    }
}

export default new HeaderMenuPage();
