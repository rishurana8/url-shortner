const {} = require("nanoid");

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: 'url is required'})
    }
    const shortID = nanoid(8);  // yeh kya krega ki ek 8 character ki random id generate kr dega 
   await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
   });
   return res.json({id: shortID});
}

module.exports = {
    handleGenerateNewShortURL,
}