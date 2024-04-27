
import com.google.gson.Gson;

public record ProfileData(String username, String fname, String lname, String password, String email, String birthday, String bio) {
    public String toJson() {
    	Gson gson = new Gson();
    	return gson.toJson(this);
    }
}