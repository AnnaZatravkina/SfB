const mesureWidth = () => {
    return 500;
}

const openItem = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth();

    hiddenContent.width(reqWidth);
}

$(".products-menu__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");

    openItem(item);
});


/*const mesureWidth = (item) => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".products__menu");
    const titlesBlocks = container.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }
};

const closeEveryItemContainer = (container) => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
};

const openItem = (item) => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".products-menu__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".products-menu__title").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products__menu");

    if (itemOpened) {
        closeEveryItemContainer(container);
    } else {
        closeEveryItemContainer(container);
        openItem(item);
    }    
});

$(".products-menu__close").on("click", e => {
    e.preventDefault();

    closeEveryItemContainer($('.products__menu'));
})*/

