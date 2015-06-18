/**
 * Created by barriosj on 6/17/15.
 */

import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;

import javax.servlet.http.HttpServletRequest;


public class WebSocketDataProvider extends WebSocketServlet {





    @Override
    public WebSocket doWebSocketConnect(HttpServletRequest request, String protocol) {
        return null;
    }
}
