const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB ulanishi
async function connectToDb() {
    try {
        await connect(process.env.MONGO_URL);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
}
connectToDb();

// Routes
const { roles } = require("./routes/roleRoute");
app.use("/roles", roles);

const { stuff } = require("./routes/stuffRoute");
app.use("/stuff", stuff);

const { stuffRoleRouter } = require("./routes/stuffroleRoute");
app.use("/stuffRole", stuffRoleRouter);

const { group6 } = require("./routes/group6Route");
app.use("/group6", group6);

const { groupStuffRouter } = require("./routes/groupstuffRoute");
app.use("/groupstuff", groupStuffRouter);

const { branches } = require("./routes/branchRoute");
app.use("/branches", branches);

const { stages } = require("./routes/stageRoute");
app.use("/stages", stages);

const { lesson } = require("./routes/lessonRoute");
app.use("/lesson", lesson);

const { studentRouter } = require("./routes/student.route");
app.use("/studentRouter", studentRouter);

const { studentGroupRouter } = require("./routes/studentgroupRoute");
app.use("/studentGroupRouter", studentGroupRouter);

const { studentLessonRouter } = require("./routes/studentlessonRoute");
app.use("/studentlesson", studentLessonRouter);

const { lidStatuses } = require("./routes/lidRoute");
app.use("/lid_status", lidStatuses);

const { reasonLids } = require("./routes/reason_lidRoute");
app.use("/reason_lid", reasonLids);

const { lidRouter } = require("./routes/lid11Route");
app.use("/lidRouter", lidRouter);

const { paymentRouter } = require("./routes/payment.route");
app.use("/paymentRouter", paymentRouter);
// Swagger sozlamalari
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            version: "1.0.0",
            description: "API documentation using Swagger",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});