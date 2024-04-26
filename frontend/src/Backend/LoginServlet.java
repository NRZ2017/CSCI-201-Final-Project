import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.*;

@WebServlet("/Login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("Hello!");
        PrintWriter pw = response.getWriter();
        String field = request.getParameter("field");
        if(field.equals("signup")) {
            String fname = request.getParameter("fname");
            String lname = request.getParameter("lname");
            String email = request.getParameter("email");
            String uname = request.getParameter("uname");
            String pass = request.getParameter("pass");
            if(checksignUp(fname, lname, email, uname, pass)) {
                pw.println("Success");
            }
            else {
                pw.println("Failure");
            }
        }
    }

    private boolean checksignUp(String fname, String lname, String email, String uname, String pass) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
           } catch (ClassNotFoundException e) {
            e.printStackTrace();
           }
        Connection conn = null;
        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost/UserInfo?user=root&password=MySQL123");
            PreparedStatement ps = conn.prepareStatement("SELECT * FROM LoginInfo WHERE email=?");
            ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
            if(rs.next()) {
                return false;
            }
            else {
                PreparedStatement ps1 = conn.prepareStatement("INSERT INTO LoginInfo (first_name, last_name, username, email, pword) VALUES (?, ?, ?, ?, ?)");
                ps1.setString(1, fname);
                ps1.setString(2, lname);
                ps1.setString(3, uname);
                ps1.setString(4, email);
                ps1.setString(5, pass);
                ps1.executeUpdate();
                return true;
            }
        }catch(SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // protected void doPost(HttpServletRequest request, HttpServletResponse response)
    //         throws ServletException, IOException {
    
    //     response.setContentType("application/json");
    //     response.setCharacterEncoding("UTF-8");

    //     // Get user data from request
    //     Gson gson = new Gson();
    //     User user = gson.fromJson(request.getReader(), User.class);

    //     String username = user.getUsername();
    //     String password = user.getPassword();

    //     PrintWriter out = response.getWriter();

    //     // Check if username or password is missing
    //     if (username == null || username.isBlank() || password == null || password.isBlank()) {
    //         response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
    //         String error = "Username or password missing";
    //         out.write(gson.toJson(error));
    //         return;
    //     }

    //     // Authenticate user
    //     int userID = JDBCConnector.authenticateUser(username, password);

    //     // Handle authentication result
    //     if (userID < 0) {
    //         // Authentication failed
    //         response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    //         out.write(gson.toJson(userID));
    //     } else {
    //         // Authentication successful
    //         response.setStatus(HttpServletResponse.SC_OK);
    //         out.write(gson.toJson(userID));
    //     }
    // }
}
