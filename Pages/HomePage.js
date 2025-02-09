const BasePage = require("./BasePage");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.logo = "img[alt='Coca Cola Company Logo']";
        this.brandButton = "a[role='button'][href='/in/en/brands']";
        this.discoverButton = "a[data-text='Discover']";
        this.discoverSubMenuButton = "(//li[@class='has-submenu'])[1]";
        this.discoverDropdown = "li[class='has-submenu sublist-is-open'] ul[class='submenu']";
        this.impactButton = "//a[normalize-space()='Impact']";
        this.impactSubMenuButton = "(//li[@class='has-submenu'])[2]";
        this.shopButton = "a[data-text='Shop']";
        this.shopSubMenuButton = "(//li[@class='has-submenu'])[3]";
        this.shopDropdown = "li[class='has-submenu sublist-is-open'] ul[class='submenu']";
        this.carouselSection = ".carousel.panelcontainer.carousel--hero.fade-in-observed";
        this.carouselPagination = "div[aria-label='Choose a slide to display']";
        this.experienceSection = "#title-f9aa045c7c";
        this.sustainabilityNewsSection = "//h2[normalize-space()='Sustainability news']";
        this.ourBrandsSection = "#container-88d356aa78";
        this.footer = "#container-455b66fb21";
        this.header = "(//div[@class='cmp-container'])[3]";
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async verifyingHomePageContent() {
        await this.verifyElement(this.header);
        await this.verifyElement(this.logo);
        await this.verifyElement(this.brandButton);
        await this.verifyElement(this.discoverButton);
        // await this.verifyElement(this.discoverSubMenuButton);
        // await this.hover(this.discoverDropdown);
        // await this.verifyElement(this.discoverDropdown);
        // await this.hoverOut();
        await this.verifyElement(this.impactButton);
        await this.verifyElement(this.impactSubMenuButton);
        await this.verifyElement(this.shopButton);
        // await this.verifyElement(this.shopSubMenuButton);
        // await this.hover(this.shopSubMenuButton);
        // await this.verifyElement(this.shopDropdown);
        // await this.hoverOut();
        // await this.verifyElement(this.carouselSection);
        await this.verifyElement(this.carouselPagination);
        await this.verifyElement(this.experienceSection);
        await this.verifyElement(this.sustainabilityNewsSection);
        await this.verifyElement(this.ourBrandsSection);
        await this.verifyElement(this.footer);
    }
    async verifyBrandsNavigation(){
        await this.navigate("https://www.coca-cola.com/in/en/")
        await this.click(this.brandButton);
        await this.containTextAssertion(".cmp-title__text", "Explore Our Brands");
        await this.verifyElement("#container-f602062bcb");

    }

}

module.exports = HomePage;
