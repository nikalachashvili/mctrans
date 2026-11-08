const express = require("express");
const mainrRouter = require("./router.js");
const mongoose = require("mongoose");
const path = require("path");
const os = require("os");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ CORS whitelist (შეიტანე აქ რეალური ფრონტების მისამართები)
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5001",
    "http://198.177.120.132",
    "https://mctrans.ge",
    "https://www.mctrans.ge",
    "http://176.221.204.155"
];

// ✅ origin normalize ფუნქცია (www და http/https იგნორით)
function normalizeOrigin(origin) {
    try {
        const url = new URL(origin);
        const hostname = url.hostname.replace(/^www\./, '');
        return `https://${hostname}`;
    } catch (err) {
        return origin; // fallback
    }
}

// ✅ CORS კონფიგურაცია
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // Server-to-server, Postman, etc.

        const normalized = normalizeOrigin(origin);
        const allowed = allowedOrigins.some((allowedOrigin) =>
            normalizeOrigin(allowedOrigin) === normalized
        );

        if (allowed) {
            return callback(null, true);
        } else {
            console.error("❌ Blocked by CORS:", origin);
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

// ✅ Middleware-ები
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // OPTIONS preflight

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// ✅ API: სერვერის IP-მისამართი
app.get("/api/ip", (req, res) => {
    const interfaces = os.networkInterfaces();
    let serverIp = "unknown";

    for (let iface of Object.values(interfaces)) {
        for (let config of iface) {
            if (config.family === "IPv4" && !config.internal) {
                serverIp = config.address;
                break;
            }
        }
        if (serverIp !== "unknown") break;
    }

    res.json({ ip: serverIp });
});

// ✅ API როუტერები
app.use("/api", mainrRouter);

// ✅ React-ის ბილდის ფაილების სერვინგი
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// ✅ MongoDB კავშირი
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });

// ✅ სერვერის გაშვება
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
