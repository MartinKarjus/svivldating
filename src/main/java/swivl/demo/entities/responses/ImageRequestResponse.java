package swivl.demo.entities.responses;


import lombok.Data;
import swivl.demo.entities.BrowserContent;

import java.util.List;

@Data
public class ImageRequestResponse {
    private boolean valid;
    private List<BrowserContent> browserContent;
}
