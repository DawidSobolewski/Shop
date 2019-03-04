({
    handleClick: function (component) {
        let modalBody;
        let item = component.get("v.item");
        $A.createComponent("c:OverlayProductDetails", {"item": item},
            function (content, status) {
                if (status === "SUCCESS") {
                    modalBody = content;
                    component.find('overlayLib').showCustomModal({
                        header: "Details Product",
                        body: modalBody
                    });
                }else{
                    console.log('Overlay was not create');
                }
            });
    }
})