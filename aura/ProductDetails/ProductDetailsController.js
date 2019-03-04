({
    handleClick: function (component, event, helper) {
        component.set('v.item', event.getSource().get('v.value'));
        helper.handleClick(component);
    },

})