let basket = {
    items: [],
    container: null,
    containerItems: null,
    shown: false,
    url: '#',
    init() {
        this.container = document.querySelector('#goodsBox');
        this._getData(this.url)
            .then(basket => {
                this.items = basket.content;
            })
            .then(() => {
                this._render();
                this._handleEvents();
            })
    },
    _render() {
        let html = '';
        this.items.forEach(us => {
            html += `
                        <div class="good">
                            <div class="wrapedImgToCart">
                                <div class="butonBuy">
                                    <button
                                        name="addToCart""
                                        data-id="${us.id}"
                                        data-brand="${us.brand}"
                                        data-src="${us.img}"
                                        data-price="${us.price}">
                                        <img src="../src/assets/icons/cart.png" alt="">
                                        Add to Cart
                                    </button>
                                </div>
                                <img class="fotoBuy" src="${us.img}" alt="">
                            </div>
                            <div class="clothesBrand">
                                <div class="textBrand">
                                    ${us.brand}
                                </div>
                                <div class="price">
                                    ${us.price}
                                </div>
                            </div>
                        </div>
                    
                    `
        })
        this.container.innerHTML = html;
    },
    _handleEvents() {
        this.container.addEventListener('click', this._addToCart.bind(this))
    },
    _addToCart(evt) {
        if (evt.target.name == 'addToCart') {
            this.myCart += [evt.target.dataset.brand, evt.target.dataset.price, evt.target.dataset.img, evt.target.dataset.id]
        }
    }
}
catalog.init();