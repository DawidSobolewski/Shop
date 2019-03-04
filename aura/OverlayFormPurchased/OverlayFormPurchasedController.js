/**
 * Created by dawid.sobolewski on 20.12.2018.
 */
({
    handleClick: function (component, event, helper) {
        helper.insertOrder(
            component,
            component.get("v.FirstName"),
            component.get("v.LastName"),
            component.get("v.Email"),
            component.get("v.basket")
        ).then($A.getCallback(response=>{
             component.find("overlayLib3").notifyClose();
            helper.showToast();
        })).catch(e=>alert(e));

    }
})