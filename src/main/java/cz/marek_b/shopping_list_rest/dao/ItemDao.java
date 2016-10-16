package cz.marek_b.shopping_list_rest.dao;

import cz.marek_b.shopping_list_rest.entity.Item;
import java.util.List;
import javax.ejb.TransactionAttribute;
import static javax.ejb.TransactionAttributeType.REQUIRED;

public interface ItemDao {
    
    List<Item> getAllItems();
    
    Item findById(long id);
    
    @TransactionAttribute(REQUIRED)
    void addItem(Item item);
    
    @TransactionAttribute(REQUIRED)
    void updateItem(Item item);
    
    @TransactionAttribute(REQUIRED)
    void removeItem(long id);
    
}
