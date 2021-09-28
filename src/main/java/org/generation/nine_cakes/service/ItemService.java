package org.generation.nine_cakes.service;

import org.generation.nine_cakes.repository.entity.Item;

import java.util.List;
public interface ItemService {

    Item save (Item item);

    void delete(int itemId);

    List<Item> all();

    Item findById(int itemId);

}
