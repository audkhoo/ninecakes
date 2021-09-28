package org.generation.nine_cakes.service;

import org.generation.nine_cakes.repository.ItemRepository;
import org.generation.nine_cakes.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceMySQL implements ItemService{

    private final ItemRepository itemRepository;

    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public Item save(Item item) {
        return this.itemRepository.save(item);
    }

    @Override
    public void delete(int itemId) {
        this.itemRepository.deleteById(itemId);
    }

    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        this.itemRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Item findById(int itemId) {
        Optional<Item> item = this.itemRepository.findById(itemId);
        Item itemResponse = item.get();
        return itemResponse;
    }
}
