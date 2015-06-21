import org.eclipse.jetty.plus.servlet.ServletHandler;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.server.nio.SelectChannelConnector;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketHandler;

import javax.servlet.Servlet;
import javax.servlet.http.HttpServletRequest;


/**
 * Created by barriosj on 6/17/15.
 */
public class test {

    public static void main(String[] args) throws Exception
    {

            Server server = new Server(8880); //embedding a jetty server right into main




            //files can be served via Resource_Handler
            ResourceHandler resourceHandler = new ResourceHandler();
            resourceHandler.setDirectoriesListed(true);
            resourceHandler.setWelcomeFiles(new String[]{"index.html"});
            resourceHandler.setResourceBase("/home/barriosj/IdeaProjects/JettyEmbeddedServerPractice/gui");



            //we can add this to our handler list for this specific server
            HandlerList handlerList= new HandlerList();
            //we add the default handler as well so that we can give an error response like 404 etc..
            handlerList.setHandlers(new Handler[]{resourceHandler, new DefaultHandler()});
            server.setHandler(handlerList);


            server.start();
            server.join();



    }
}
