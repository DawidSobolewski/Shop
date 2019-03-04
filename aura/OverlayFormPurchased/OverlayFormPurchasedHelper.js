/**
 * Created by dawid.sobolewski on 20.12.2018.
 */
({
    insertOrder: function (component,firstName, lastName, email, basket) {
        return new Promise((resolve, reject) => {
            let action = component.get("c.addOrder");
            action.setParams({
                firstName: firstName,
                lastName: lastName,
                email: email,
                productList: basket
            });
            action.setCallback(this, response =>{
                let state = response.getState();
                if(state==="SUCCESS"){
                    resolve(response.getReturnValue());
                }else{
                    reject(response.getError());
                }
            });
            $A.enqueueAction(action);
        })
    },

    showToast: function () {
        console.log("showToast");
        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Information",
            "message": "New order was created",
            "type": "success"
        });
        toastEvent.fire()
    }
})