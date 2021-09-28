package org.generation.nine_cakes.controller.dto;


// DTO = Data Transfer Object
public class ItemDTO {
    private String name;
    private String description;
    private String imageUrl;
    private String category;
    private double price;

    public ItemDTO(String name, String description, String imageUrl, double price, String category) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }


    public String getCategory() {
        return category;
    }



    public double getPrice() {
        return price;
    }

}
