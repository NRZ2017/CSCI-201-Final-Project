package lesliegarcia_CSCI_Assignment4;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // Get user data from request
        Gson gson = new Gson();
        User user = gson.fromJson(request.getReader(), User.class);

        String username = user.getUsername();
        String password = user.getPassword();

        PrintWriter out = response.getWriter();

        // Check if username or password is missing
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            String error = "Username or password missing";
            out.write(gson.toJson(error));
            return;
        }

        // Authenticate user
        int userID = JDBCConnector.authenticateUser(username, password);

        // Handle authentication result
        if (userID < 0) {
            // Authentication failed
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            out.write(gson.toJson(userID));
        } else {
            // Authentication successful
            response.setStatus(HttpServletResponse.SC_OK);
            out.write(gson.toJson(userID));
        }
    }
}
