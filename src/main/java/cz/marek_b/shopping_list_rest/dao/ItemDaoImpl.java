package cz.marek_b.shopping_list_rest.dao;

import cz.marek_b.shopping_list_rest.entity.Item;
import java.util.Date;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class ItemDaoImpl implements ItemDao {

    @PersistenceContext(unitName = "shopping_list_pu")
    private EntityManager em;
    
    @Override
    public List<Item> getAllItems() {
        return em.createNamedQuery(Item.QUERY_SELECT_ALL, Item.class)
            .getResultList();
    }

    @Override
    public Item findById(long id) {
        return em.find(Item.class, id);
    }

    @Override
    public void addItem(Item item) {
        item.setCreated(new Date());
        em.persist(item);
        em.flush();
    }
    
    @Override
    public void updateItem(Item item) {
        em.merge(item);
        em.flush();
    }

    @Override
    public void removeItem(long id) {
        em.remove(findById(id));
        em.flush();
    }
    
}
