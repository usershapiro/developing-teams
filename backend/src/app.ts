import cors from "cors"
import express from "express"
import appConfig from "./2-utils/appConfig"
import catchAll from "./3-middleware/catch-all"
import routeNotFound from "./3-middleware/route-not-found"
import sanitize from "./3-middleware/sanitize";
import controller from "./6-controllers/controller"

const server = express()
server.use(cors())

server.use(express.json())

server.use("/api",controller)
server.use(sanitize);
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`))