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

//module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
  //robot.hear(/hola/i, function(msg) {
  //return msg.send("Hola, chico!");
   //});

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


module.exports = (robot) ->
  robot.respond /define( me)? (.*)/i, (msg) ->
    word = msg.match[2]

    if process.env.PEARSON_API_KEY == y4loGKVGPfPp9nb8ytTV3CG6Jwa7bfqX
      msg.send "API keys not set up properly. Sorry!"
      return

    query = {apikey: process.env.PEARSON_API_KEY, headword: word}
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