/**
 * Created by dawid.sobolewski on 19.12.2018.
 */
({
    handleCancelClick : function(component,event, helper){
        component.find("overlayLibrary").notifyClose();

    },
    handleAddClick : function(component, event, helper){
        let item = component.get('v.item');
        let newEvent = $A.get('e.c:basketEvent');
        newEvent.setParams({"product":item})
        newEvent.fire();
        component.find("overlayLibrary").notifyClose();
    }
})