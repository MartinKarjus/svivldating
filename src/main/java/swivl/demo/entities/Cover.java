package swivl.demo.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Cover {

    @Column(name = "URL")
    private String url;
    @JsonProperty("cloudinary_id")
    @Column (name = "CLOUDINARY_ID")
    private String cloudinaryId;
    @Column (name = "WIDTH")
    private Integer width;
    @Column (name = "HEIGHT")
    private Integer height;

    public Cover(){
    }

    public Cover(String url, String cloudinaryId, Integer width, Integer height) {
        this.url = url;
        this.cloudinaryId = cloudinaryId;
        this.width = width;
        this.height = height;
    }

    public String getUrl() {
        return url;
    }

    public String getCloudinaryId() {
        return cloudinaryId;
    }

    public Integer getWidth() {
        return width;
    }

    public Integer getHeight() {
        return height;
    }

}


