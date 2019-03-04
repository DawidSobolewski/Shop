({
    doInit: function (component) {
        return new Promise((resolve, reject) => {
            let action = component.get("c.getProducts");
            action.setCallback(component, response => {
                    let state = response.getState();
                if (state === "SUCCESS") {
                    resolve(response.getReturnValue());
                } else {
                    reject(response.getError());
                }
            })
            $A.enqueueAction(action);

        })
    },
    handleBasketEvent: function(component, event, helper) {
        let basket = component.get("v.basket");
        let item = event.getParam("product");
        basket.push(item);
        component.set('v.basket', basket);
    }

})