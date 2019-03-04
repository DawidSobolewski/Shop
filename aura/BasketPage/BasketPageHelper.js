/**
 * Created by dawid.sobolewski on 19.12.2018.
 */
({
    handleClick: function (component, event, helper) {
        helper.computeTotalPrice(component);
        let modalBody;
        let totalPrice = component.get('v.totalPrice');
        let basket = component.get('v.basket');
        $A.createComponent("c:OverlayOrderConfirmation",{"basket":basket, "totalPrice":totalPrice},
            function (content, status) {
                if (status === "SUCCESS") {
                    modalBody = content;
                    component.find('overlayLib').showCustomModal({
                        header: "Details Order",
                        body: modalBody
                    });
                } else {
                    console.log('Overlay was not create');
                }
            });
    },
    computeTotalPrice : function(component){
        let totalPrice = 0;
        component.get('v.basket').forEach(item=>totalPrice=totalPrice+item.Price__c);
        component.set('v.totalPrice',totalPrice);
    }
})