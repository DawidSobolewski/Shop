public with sharing class ApexController {

    @AuraEnabled
    public static List<Item__C> getProducts() {
        List<Item__C> productsList = [SELECT Name__C, Description__C, Price__C,Category__c, Image__c FROM Item__C];
        if (productsList.isEmpty()) {
            throw new AuraHandledException('There is no products available');
        }
        return productsList;
    }


    private static Contact addContact(String firstName, String lastName, String email) {
        System.debug(lastName + firstName + email);
        Contact contact = new Contact(FirstName = firstName, LastName = lastName, Email = email);
        System.debug(JSON.Serialize(contact));
        try {
            insert contact;
        } catch (DmlException e) {
            System.debug('An unexpected error has occured : ' + e.getMessage());
        }
        return contact;
    }

    @AuraEnabled
    public static Item_Order__c addOrder(List<Item__c> productList, String firstName, String lastName, String email) {

        Contact contact = addContact(firstName, lastName, email);

        Item_Order__c order = new Item_Order__c(Contact__c = contact.Id);
        try {
            insert order;
        } catch (DmlException e) {
            System.debug('An unexpected error has occured : ' + e.getMessage());
        }
        assignItemsToOrder(order, productList);

        return order;
    }

    private static void assignItemsToOrder(Item_Order__c itemOrder, List<Item__c> items) {
        system.debug(json.serialize(items));
        List <Basket_Item__c> basketItems = new List <Basket_Item__c>();

        for (Item__c item : items) {
            basketItems.add(new Basket_Item__c(Item__c = item.id, Item_Order__c = itemOrder.id));
        }
        System.debug(basketItems);
        try {
            insert basketItems;
        } catch (DmlException e) {
            System.debug('An unexpected error has occured');
        }

    }
}