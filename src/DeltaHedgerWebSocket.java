import org.eclipse.jetty.websocket.WebSocket;

import java.util.Set;

/**
 * Created by barriosj on 6/17/15.
 */
public class DeltaHedgerWebSocket implements WebSocket.OnTextMessage {
    private Connection connection;
    private Set<DeltaHedgerWebSocket> users;



    public DeltaHedgerWebSocket(Set users){
            this.users=users;
    }



    @Override
    public void onMessage(String data) {
            //for each websocket client we are worried about serving do
            for(DeltaHedgerWebSocket user : users){
                try{
                    user.connection.sendMessage(data);
                }
                catch(Exception e){
                    e.printStackTrace();
                }
            }
    }

    @Override
    public void onOpen(Connection connection) {
                this.connection = connection;
                users.add(this);
    }

    @Override
    public void onClose(int closeCode, String message) {
                users.remove(this);
    }
}
