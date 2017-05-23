// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
  robot.hear(/hola/i, function(msg) {
  return msg.send("Hola, chico!");
   });

//  var squirrels;
//squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

//module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  //return robot.respond(/hi|hello/i, function(msg) {
    //return msg.send("Howdy!");
  //});

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  //return robot.hear(/ship it/i, function(msg) {
    //return msg.send(msg.random(squirrels));
//  });
//};


ackbars = [
  "http://i.imgur.com/OTByx1b.jpg",
  "http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg",
  "http://6.asset.soup.io/asset/0610/8774_242b_500.jpeg",
  "http://files.g4tv.com/ImageDb3/279875_S/steampunk-ackbar.jpg",
  "http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg",
  "http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg",
  "http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg",
  "http://static.fjcdn.com/pictures/Its_2031a3_426435.jpg",
  "http://www.millionaireplayboy.com/mpb/wp-content/uploads/2011/01/1293668358_bottom_trappy.jpeg",
  "http://31.media.tumblr.com/tumblr_lqrrkpAqjf1qiorsyo1_500.jpg",
  "https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/",
  "http://i.qkme.me/356mr9.jpg",
  "http://24.media.tumblr.com/e4255aa10151ebddf57555dfa3fc8779/tumblr_mho9v9y5hE1r8gxxfo1_500.jpg",
  "http://farm2.staticflickr.com/1440/5170210261_fddb4c480c_z.jpg",
  "http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28",
  "http://31.media.tumblr.com/tumblr_lmn8d1xFXN1qjs7yio1_500.jpg"
]

module.exports = (robot) ->
  robot.hear /it['’]?s a trap\b/i, (msg) ->
    msg.send msg.random ackbars

/*module.exports = function(robot) {
  robot.respond /define( me)? (.*)/i, (msg) ->
    word = msg.match[2]

    if process.env.PEARSON_API_KEY == undefined
      msg.send "API keys not set up properly. Sorry!"
      return

    query = {apikey: process.env.y4loGKVGPfPp9nb8ytTV3CG6Jwa7bfqX, headword: word}
    msg.http("https://api.pearson.com:443/v2/dictionaries/laad3/entries")
      .query(query)
      .get() (err, res, body) ->
        if err
          msg.send "Error: Unable to reach server"
          return
        if res.statusCode isnt 200
          msg.send "Error #{res.statusCode} - Too many words?"
          return

        definitions = JSON.parse(body)
        message = ""
        if definitions.count <= 0
          msg.send "Word \"#{word}\" not found!"
          return

        parsed_definitions = []
        message = "#{word}:\n"
        for result in definitions.results
          if result.headword.toUpperCase() == word.toUpperCase()
            part_of_speech = result.part_of_speech

            continue if result.senses == null

            senses = result.senses[0]
            definition = senses.definition
            example = if senses.examples then senses.examples[0].text else null

            continue if definition == undefined

            parsed_definition = "- (#{part_of_speech}) #{definition}"
            parsed_definition += ": #{example}" if example
            parsed_definitions.push parsed_definition

        if parsed_definitions.length <= 0
          msg.send "Word \"#{word}\" not found!"
          return

        message += parsed_definitions.join "\n"
        msg.send message

} */


/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/