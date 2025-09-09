import express from "express";
import cors from "cors";

const app = express();

app.use(cors({origin: "http://localhost:5173"}));

app.get("/", (req, res) => {
	res.json({
		human: "Bonjour !",
		nonHuman: "Hello, I'm a Robot !",
	});
});

app.listen(4000, () => {
	console.log("Server is running");
});
