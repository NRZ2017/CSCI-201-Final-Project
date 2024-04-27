import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/search")
public class FriendsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	PrintWriter out = response.getWriter();
    	response.setContentType("application/json");
        String username = request.getParameter("username");
        // gets information from the database
        String profile_info = JDBCConnector.getProfileInfo(username).toJson();
        out.println(profile_info);
        out.flush();
        out.close(); 
    }
}