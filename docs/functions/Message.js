const {
     WAConnection,
   MessageType,
   Presence,  
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   ChatModification,
} = require('@adiwajshing/baileys');
const zero = new WAConnection;
const fs = require ('fs');

zero.on('chat-update', async (mek) => {

// #selos  #verificados


function seloOn () { 
key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço ativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/imagem/selos/1.jpg`)}}}

function seloOff () { 
key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço desativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/imagem/selos/0.jpg`)}}}

function selotempoonline () { 
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `「 Tempo de atividade: 」\n${runtime(process.uptime())}\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./edit/media/imagem/selos/${mathSelo}.jpg`)}}}

const from = mek.key.remoteJid;
function reply (teks) {
				zero.sendMessage(from, teks, text, {quoted:selocont})
			};
		
			function mentions (teks, memberr, id) {
				(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zero.sendMessage(from, teks.trim(), extendedText, {quoted: selocont, contextInfo: {"mentionedJid": memberr}})
			};
			


module.exports = { reply, mentions, seloOn, seloOff, selotempoonline };		
			
			});
			
