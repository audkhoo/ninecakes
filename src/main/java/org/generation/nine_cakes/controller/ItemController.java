package org.generation.nine_cakes.controller;

import org.generation.nine_cakes.component.FileUploadUtil;
import org.generation.nine_cakes.controller.dto.ItemDTO;
import org.generation.nine_cakes.repository.ItemRepository;
import org.generation.nine_cakes.repository.entity.Item;
import org.generation.nine_cakes.service.ItemService;
import org.generation.nine_cakes.service.ItemServiceMySQL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.*;

import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController // Informs Spring Boot that this class will create the REST API
@RequestMapping("/item") // Used to map the web request to the controller methods
public class ItemController {

    final ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    //GetMapping is the route that corresponds to the HTTP GET Method from the client
    //Cross-origin resource sharing (CORS)
    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item>getItems() {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Item findItemById( @PathVariable Integer id) {
        return itemService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        itemService.delete(id);
    }

//    @PutMapping("/{id}")
//    public Item updateItem(@PathVariable("id") Integer id, @RequestBody Item i) {
//        Item itemToUpdate = itemService.findById(id);
//        if (itemToUpdate == null) {
//            return null;
//        }
//
//        // Since isPresent() was true, we can .get() the Person object out of the Optional
//        itemToUpdate = item.ToUpdate.get();
//
//        if (i.getName() != null) {
//            itemToUpdate.setName(i.getName());
//        }
//        if (i.getAge() != null) {
//            itemToUpdate.setAge(i.getAge());
//        }
//        if (i.getEyeColor() != null) {
//            itemToUpdate.setEyeColor(i.getEyeColor());
//        }
//
//        Item updatedItem = this.itemService.save(itemToUpdate);
//        return updatedItem;
//    }
//


//    @PutMapping("/{id}")
//    public ResponseEntity<Item> update (@RequestBody Item item, @PathVariable Integer id, ItemServiceMySQL service) throws ResourceNotFoundException {
//        try{
//            item = service.findById(id).orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + id));
//            itemService.save(item);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
@CrossOrigin
@PutMapping( "/updateAll/{id}" )
public Item update(@PathVariable Integer id,
                   @RequestParam(name="name", required = true) String name,
                   @RequestParam(name="description", required = true) String description,
                   @RequestParam(name="imageUrl", required = true) String imageUrl,
                   @RequestParam(name="category", required = true) String category,
                   @RequestParam(name="price", required = true) double price,
                   @RequestParam("imageFile") MultipartFile multipartFile) throws IOException {

                    String uploadDir1 = "productImages";
                    String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
                    FileUploadUtil.saveFile(uploadDir1, fileName, multipartFile);

                    Item item = itemService.findById( id );
                    item.setName( name );
                    item.setDescription( description );
                    item.setImageUrl(imageUrl);
                    item.setCategory(category);
                    item.setPrice(price);

                    return itemService.save(item);


}


    @CrossOrigin
    @PostMapping("/add")
    public Item save(@RequestParam(name="name", required = true) String name,
                     @RequestParam(name="description", required = true) String description,
                     @RequestParam(name="imageUrl", required = true) String imageUrl,
                     @RequestParam(name="category", required = true) String category,
                     @RequestParam(name="price", required = true) double price,
                     @RequestParam(name="imageFile") MultipartFile multipartFile) throws IOException
    {


        String uploadDir1 = "productImages";
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(uploadDir1, fileName, multipartFile);


        ItemDTO itemDto = new ItemDTO(name, description, imageUrl, price, category);
        return itemService.save(new Item(itemDto));
    }


}