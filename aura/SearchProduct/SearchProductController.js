/**
 * Created by dawid.sobolewski on 18.12.2018.
 */
({
    onChange: function (component, event, helper) {
        let category = component.find('select').get('v.value');
        component.set("v.category", category);
    },

    handleClick: function (component, event, helper) {
        let category = component.get('v.category');
        let items = component.get('v.items').filter(item => item.Category__c == category
        );
        component.set('v.filtered', items);
        console.log(items);
        console.log(component.get('v.items'));
        component.set('v.view.flag',true);
        console.log(component.get('v.view'));
        console.log(component.get('v.filtered'));

    }
})