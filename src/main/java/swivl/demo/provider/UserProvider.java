package swivl.demo.provider;


import org.springframework.stereotype.Repository;
import swivl.demo.entities.BrowserContent;

import java.util.List;

@Repository
public class UserProvider {

    public boolean validUsernamePassword(String username, String password) {
        //todo impl
        return true;
    }


    public boolean validAccessToken(String accessToken) {
        //todo impl
        return true;
    }


    public List<BrowserContent> getContentForToken(String accessToken) {
        return null;
    }

}
