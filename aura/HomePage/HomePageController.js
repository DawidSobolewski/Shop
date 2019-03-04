({
    doInit: function (component, event, helper) {
        helper.doInit(component)
            .then($A.getCallback(response => {
                component.set("v.items", response);
            }))
            .catch(error => console.log(error.message));
    },
    handleBasketEvent: function (component, event, helper) {
        let basket = component.get("v.basket");
        let item = event.getParam("product");
        basket.push(item);
        component.set('v.basket', basket);

    },

    changeToBasketView: function (component, event, helper) {
        component.set("v.view.SearchProductView", false);
        component.set("v.view.AllProductView", false);
        component.set("v.view.BasketPage", true);
    },

    changeToSearchView: function (component, event, helper) {
        component.set("v.view.SearchProductView", true);
        component.set("v.view.AllProductView", false);
        component.set("v.view.BasketPage", false);
    },

    changeAllProductView: function (component, event, helper) {
        component.set("v.view.SearchProductView", false);
        component.set("v.view.AllProductView", true);
        component.set("v.view.BasketPage", false);
    }

})