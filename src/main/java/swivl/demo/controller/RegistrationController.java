package swivl.demo.controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import swivl.demo.entities.User;

@RestController
//@RequestMapping("/api/registration")
public class RegistrationController {

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value = {"/temp"}, method = RequestMethod.POST, produces = "application/json",
            consumes = "application/json")
    @ResponseBody
    public Boolean editWinner(@RequestBody User user) {
        System.out.println("cake n glory");
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        return null;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/temp5")
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

        //return "{'cake':'glory'}";
    }

    @GetMapping("/temp2")
    public String tempGet() {
        System.out.println("--------- 2 ------------");
        return "this actually works";
    }

    @RequestMapping("/temp3")
    public String tempGet2() {
        System.out.println("--------- 3 ------------");
        return "this actually works";
    }


}
