import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JDBCConnector {

static int USER_ID = 0;

// My machine's SQL password
public static String getPassword() {
	return "root";
}

public static int registerUser(String username, String password, String email) {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
	
	Connection conn = null;
	Statement st = null;
	ResultSet rs = null;
	
	int userID = -1;
	
	try {
        // will probably update with own machine
		conn = DriverManager.getConnection("jdbc:mysql://localhost/UserInfo?user=root&password=" + getPassword());
		st = conn.createStatement();
		rs = st.executeQuery("SELECT * FROM users WHERE username='" + username + "'");
		if(!rs.next()) { // no user with that username
			st = conn.createStatement();
			rs = st.executeQuery("SELECT * FROM users WHERE email='" + email + "'");
			if(!rs.next()) { // no user with that email
				rs.close();
				
				String query = "INSERT INTO users (username, pass, email, balance) VALUES (?, ?, ?, ?)";
				PreparedStatement pstmt = conn.prepareStatement(query);
				pstmt.setString(1, username);
				pstmt.setString(2, password);
				pstmt.setString(3, email);
				pstmt.setInt(4, 50000);

				// Log the generated SQL query
				System.out.println("Generated SQL query: " + pstmt.toString());
				st.execute("INSERT INTO users (username, password, email, balance) VALUES ('" + username + "', '" + password + "', '" + email + "', 50000)");
				System.out.println("got here");
				rs = st.executeQuery("SELECT LAST_INSERT_ID()");
				System.out.println("maybe here");
				rs.next();
				userID = rs.getInt(1);
			}
			else {
				// this email is taken
				userID = -2;
			}
		}
		else {
			userID = -3;
		}
	} catch (SQLException sqle) {
		System.out.println("SOLException in registerUser. "); 
		sqle.printStackTrace();
	} finally {
		try {
			if (rs != null) {
				rs.close();
			}
			if (st != null) {
				st.close();
			}
			if (conn != null) { 
				conn.close();
			}
		} catch (SQLException sqle) {
			System.out. println("sqle: " + sqle.getMessage());
		}
	}
	return userID;
}

public static int authenticateUser(String username, String password) {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
	
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    int userID = -1;
    System.out.println("here 1");

    try {
        conn = DriverManager.getConnection("jdbc:mysql://localhost/UserInfo?user=root&password=" + getPassword());
        System.out.println("got connection");
        String query = "SELECT user_id FROM users WHERE username = ? AND password = ?";
        pstmt = conn.prepareStatement(query);
        pstmt.setString(1, username);
        pstmt.setString(2, password);
        rs = pstmt.executeQuery();
        
        System.out.println("got user: " + username + " and pass: " + password);

        if (rs.next()) {
            userID = rs.getInt("user_id");
        }
        System.out.println("with userid: " + userID);
        
    } catch (SQLException sqle) {
        sqle.printStackTrace();
    } finally {
        try {
            if (rs != null) {
                rs.close();
            }
            if (pstmt != null) {
                pstmt.close();
            }
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    USER_ID = userID;
    return userID;
}

// Ethan: I added this for my friend search implementation, also changed the database to accommodate it
public static ProfileData getProfileInfo(String username) {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/UserInfo?user=root&password=" + getPassword());
		ResultSet rs = null;
		PreparedStatement ps = conn.prepareStatement("SELECT username, fname, lname, email, birthday, bio FROM Users WHERE username=?");
		ps.setString(1, username);
		rs = ps.executeQuery();
		// if user is found
		while (rs.next()) {
			ProfileData curr_profile = new ProfileData(rs.getString("username"), rs.getString("fname"), rs.getString("lname"), "placeholder for password", rs.getString("email"),
					rs.getString("birthday"), rs.getString("bio"));
			return curr_profile;
		}
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (SQLException e) {
		e.printStackTrace();
	}
	// if no user is found
	return null;
}
public static ArrayList<String> getUserInfo() {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/UserInfo?user=root&password=" + getPassword());
		ResultSet rs = null;
		PreparedStatement ps = conn.prepareStatement("SELECT username FROM Users");
		rs = ps.executeQuery();
		ArrayList<String> users = new ArrayList<String>();
		// if user is found
		while (rs.next()) {
			users.add(rs.getString("username"));
		}
		return users;
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (SQLException e) {
		e.printStackTrace();
	}
	// if no user is found
	return null;
}

}

