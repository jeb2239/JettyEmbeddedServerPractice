import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by barriosj on 6/17/15.
 */
public class HelloHandler extends AbstractHandler{    //this is me creating a handler which will
    //then need to be set in the main

    @Override
    public void handle(String target, Request baseRequest, HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException
    {
        response.setContentType("test/html");
        response.setStatus(HttpServletResponse.SC_OK); //send 200 OK back
        baseRequest.setHandled(true); //we can handle this request this is good for error checking
        response.getWriter().println("<h1>hello world<h1>");



    }
}
