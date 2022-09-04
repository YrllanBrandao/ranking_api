const middleware = (req,res,next) =>{

    const gamerankingID = req.headers['x-game-ranking-key'];

    console.log(gamerankingID)

    if(gamerankingID === process.env.GAME_TOKEN)
    {
        next();
    }
    else{
        res.status(401).send("unauthorized")
    }

}


module.exports = middleware