const express = require("express");
const middleware = require("../middleware/middleware");
const Ranking = require("./ranking");
const Router = express.Router();

Router.get("/ranking", middleware, (req,res)=>{

    Ranking.findAll().then((ranking)=>{

        res.json(ranking)
    })

})


Router.post("/ranking", middleware, (req,res)=>{

    const {nickname, score} = req.body;


    console.log("========SALVANDO========")
    if(score === undefined || nickname === undefined)  
    {
        res.status(400).send("An error as ocurred!")
    }
    


    Ranking.findOne({
        where:{
            nickname: nickname
        }
    }).then((result) =>{

        if(result === null  || result === undefined)
        {
            
            Ranking.create({
                nickname:nickname,
                score:score
            })
            res.status(200).send("ok")
        }
        else{
            res.status(401).send("this user already exists - try an update")
        }

        

    })  
    .catch((error)=>{

        console.log(error)
    })

})

Router.put("/ranking", middleware, (req,res)=>{

        const {nickname, score} = req.body;
        
    if(score === undefined || nickname === undefined)  
    {
        res.status(400).send("An error as ocurred!")
    }
    


    Ranking.findOne({
        where:{
            nickname: nickname
        }
    }).then((user) =>{

            const oldScore = Number(user.score);
            
            if(user !== undefined || user !== null)
            {
                if(Number(score) >= user.score )
                {
                    user.update({
            
                        score:score
                    })
                    res.status(200).send("UPDATED")
              
                }
                else{
                    res.status(400).send("The score is smaller than the old score")
                }
            }

        

    })  
    .catch((error)=>{

        console.log(error)
    })

})

module.exports = Router;