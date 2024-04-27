
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/userdata")
public class UserDataServlet extends HttpServlet {
	public String toJson(ArrayList<String> input) {
		String result = "";
		result += "{";
		result += "\"data\": [";
		boolean notFirst = false;
		for (String entry : input) {
			if (notFirst) {
				result += ",";
			}
			result += "{\"key\": \"" + entry + "\", \"value\": \"" + entry + "\"}";
			notFirst = true;
		}
		result += "]";
		result +="}";
		return result;
	}
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	PrintWriter out = response.getWriter();
    	response.setContentType("application/json");
        // gets information from the database
        String user_info = toJson(JDBCConnector.getUserInfo());
        out.println(user_info);
        out.flush();
        out.close(); 
    }
}