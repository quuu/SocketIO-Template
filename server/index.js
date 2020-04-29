const http = require("http").createServer();
const port = 3001;

const io = require("socket.io")(http);

http.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // sample event handler
  socket.on("init", (data, fn) => {
    fn({ success: true });
  });
});
