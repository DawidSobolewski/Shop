/**
 * Created by dawid.sobolewski on 20.12.2018.
 */
({
    handleClick: function(component){

        let modalBody;
        let basket = component.get("v.basket");
        $A.createComponent("c:OverlayFormPurchased",{"basket":basket},
            function (content, status) {
                if (status === "SUCCESS") {
                    modalBody = content;

                    component.find('overlayLib2').showCustomModal({
                        header: "Details Order",
                        body: modalBody
                    });
                    component.find("overlayLib2").notifyClose();

                } else {
                    console.log('Overlay was not create');
                }
            });
    }
})