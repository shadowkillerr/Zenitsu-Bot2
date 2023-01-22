const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true

//aumto functioner
//global.autoTyping = true //auto tying in gc (true to on, false to off)
//global.autoRecord = true //auto recording (true to on, false to off)

global.Owner = ['94717069879'] //ur number 
global.OwnerNumber = ['94717069879']
global.ownertag = ['94717069879']
global.BotName = "𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃" //ur bot name 
global.packname = "𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃" //ur sticker pack name
global.author = "DAHAM PANSILU😁" 
global.OwnerName = "DAHAM PANSILU😁" //ur name
global.BotSourceCode = "https://youtube.com/@user-kt2jq3dw8f" //ur website link
global.SupportGroupLink = "https://chat.whatsapp.com/IACf9S5GZ2A6rAGojwzxDE" //ur group link 
global.sessionName = "session"

// Prefix //
global.prefa = ['.'] 


global.location = "Anuradhapura,Sri Lanka"
global.reactmoji = "🦈"
global.themeemoji = "🙂"
global.vidmenu = { url: 'https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg' }
global.websitex = "https://youtube.com/@user-kt2jq3dw8f"
global.lolhuman = "SHADOW KILLER"


global.BotLogo = fs.readFileSync("https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg")
global.Thumb = fs.readFileSync("https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg")
global.Thumb1 = fs.readFileSync("https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpgg")
global.ErrorPic = fs.readFileSync("https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Group Admins* can use this command *Dear*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner* can use this command, Yeah!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Okey ?!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: ' Wait Crow...',
    nolink: 'Please provide me *link*, Uff!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!, Haha',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert  Uff! This is not a NSFW enabled group!, Uff!,'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 20,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapi.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '39788fed50',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
