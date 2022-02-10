// Use na Zero_bot


case 'button':	
// envia botão (comum)
			sendButMessage(from, selocont, 'TEXTO MAIOR', `texto menor`, [
			
            {              
              buttonId: `XXX1`, //id
              buttonText: {
                displayText:  `Me aperte `, //texto do botão
              },
              type: 1,
            }, //botão 1
            
              {              
              buttonId: `XXX2`, //id
              buttonText: {
                displayText:  `Me aperte 2`, //texto do botão
              },
              type: 1,
            }, //botão 2
            
            {              
              buttonId: `XXX3`, //id
              buttonText: {
                displayText:  `Me aperte 3`, //texto do botão
              },
              type: 1,
            }, //botão 3
            
          ]);                        
            break	



case 'imgbutton':
// envia botão de imagem

buttons = [{buttonId:`BUTTON1`, //id
buttonText:{displayText: 'ME APERTE 1'},type:1},

{buttonId:`BUTTON2`, //id
buttonText:{displayText:'ME APERTE 2' },type:1},

{buttonId:`BUTTON3`, //id
buttonText:{displayText:'ME APERTE 3' },type:1},
               ]

               imageMsg = (await zero.prepareMessageMedia(fs.readFileSync(`./edit/media/image/2.jpeg`), 'imageMessage', {thumbnail: null})).imageMessage // foto 

               buttonsMessage = {
 contentText: `TEXTO MAIOR`,
footerText: `TEXTO MENOR`,
imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: selocont})
               zero.relayWAMessage(prep)
              break	
              
              
              
              
// para fazer os botões responderem, vá até o fim da index (procure na lupa do MT Manager por #button para chegar até lá mais rápido) , e lá você definirá o seu botão.
/* exemplo:
if (selectedButton === 'ID DO SEU BOTÃO'){
reply(`Olá, eu sou um botão!`)
}*/