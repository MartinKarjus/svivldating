package swivl.demo.controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import swivl.demo.entities.responses.UploadFileResponse;
import swivl.demo.entities.User;
import swivl.demo.service.FileStorageService;
import swivl.demo.service.exception.FileStorageException;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
@RequestMapping("/api/registration")
public class RegistrationController {


    @Autowired
    private FileStorageService fileStorageService;

    private static int TOTALLY_LEGIT_DB_COUNTER = 10;

    private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = {"/temp5"}, method = RequestMethod.POST, produces = "application/json",
            consumes = "application/json")
    @ResponseBody
    public Boolean editWinner(@RequestBody User user) {
        System.out.println("cake n glory");
        System.out.println(user.getFirstname());
        System.out.println(user.getPassword());
        return null;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/temp")
    public String tempPost(@RequestBody String req) {
        System.out.println("--------- 1 ------------");
        System.out.println(req);


        JSONObject jsonObj = new JSONObject();

        try {
            jsonObj.put("cake", "glory");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        System.out.println(jsonObj.toString());
        return jsonObj.toString();
    }


    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/imageUpload")
    public UploadFileResponse imageUpload(@RequestParam("file") MultipartFile file) throws FileStorageException {
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        return new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }



    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/checkEmailAvailable")
    public User usernameEmailCheck(@RequestBody User user) {
        System.out.println("confirming email: " + user.getEmail());
        return user;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/online")
    public String registrationOnline() {
        JSONObject jsonObj = new JSONObject();
        try {
            jsonObj.put("api", "online");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        System.out.println(jsonObj.toString());
        return jsonObj.toString();
    }


}
