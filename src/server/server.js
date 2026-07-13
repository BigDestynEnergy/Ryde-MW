import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:  ["http://localhost:5173"]
}));


app.use(express.json());

app.get("/main/", (req, res) => {
    const people = [
        {id: 1, name: "Destyn Banda"},
        {id: 2, name: "Tobias Bonaventure Mkandawire"},
        {id: 3, name: "Bernard Mhango"},
        {id: 4, name: "Chisomo Mphamba"},
         {id: 5, name: "Khumbo Wines"},
          {id: 6, name: "Mayamiko Chiwaula"},
           {id: 7, name: "Shiraz Maundala"},
            {id: 8, name: "Newton Lupwiya"},
             {id: 9, name: "Hackim Chinemba"},
              {id:10 , name: "Joshua Mpinganjira"},
    ];
   res.json(people)

});

app.post("/main", (req, res) => {
    const {email, password } = req.body;

    console.log(`Existing user: ${email}\nPassword: ${password}`);

    res.json({
        success: true,
        message: "Login received"
    });
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});