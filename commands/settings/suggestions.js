//Off
module.exports = ({
  name: "sug-disable",
  code: `$color[RANDOM]
$title[Suggestions]
$description[Successfuly turned off suggestions]
$setServerVar[suggest;false]
$onlyIf[$getServerVar[suggest]==true;:x: You already disabled suggestions!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do that!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})

//On
module.exports = ({
  name: "sug-enable",
  code: `$color[RANDOM]
$title[Suggestions]
$description[Successfuly turned on suggestions!]
$setServerVar[suggest;true]
$onlyIf[$getServerVar[suggest]==false;:x: You already enabled suggestions!]
$onlyIf[$hasPerms[$authorID;admin]==true;:x: Only admin can do that!]
$onlyIf[$message[1]==;]
$onlyIf[$getGlobalUserVar[blocked]==0;:x: You have been blocked from using this bot! Come here ($getVar[support_server]) if you believe it's a mistake]`
})