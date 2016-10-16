package cz.marek_b.shopping_list_rest.resource;

import cz.marek_b.shopping_list_rest.dao.ItemDao;
import cz.marek_b.shopping_list_rest.entity.Item;
import java.util.List;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/shoppingList")
@RequestScoped
public class ShoppingListResource {
    
    @Inject
    private ItemDao itemDao;
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Item> getAllItems() {
        return itemDao.getAllItems();
    }
    
    @GET
    @Path("/item")
    @Produces(MediaType.APPLICATION_JSON)
    public Item getItem(@QueryParam("id") long id) {
        return itemDao.findById(id);
    }
    
    @PUT
    @Path("/item")
    @Consumes(MediaType.APPLICATION_JSON)
    public void addItem(Item item) {
        itemDao.addItem(item);
    }
    
    @DELETE
    @Path("/item")
    public void deleteItem(@QueryParam("id") long id) {
        System.out.println("id: " + id);
        itemDao.removeItem(id);
    }
    
    @POST
    @Path("/item")
    @Consumes(MediaType.APPLICATION_JSON)
    public void updateItem(Item item) {
        System.out.println(item);
        itemDao.updateItem(item);
    }
    
}
