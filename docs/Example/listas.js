// vídeo: https://youtu.be/xY_KIiH4Fks


case 'lista':
listMsg = {

 buttonText: 'BOTÃO',

 footerText: 'LEGENDA',

 description: 'TITULO',

 sections: [

                     {
 rows: [
 
{
"title": "opção 1",
"rowId": `${prefix}` + "exemplo1"
                           },
{
"title": "opção 2",
"rowId": `${prefix}` + "exemplo2"
                           },                 
{
"title": "opção 3",
"rowId": `${prefix}` + "exemplo3"
                           },                                     

                        ]
                    }],
 listType: 1
}

zero.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek});
break

case 'exemplo1':
reply (`Item 1 selecionado`);
break
case 'exemplo2':
reply (`Item 2 selecionado`);
break
case 'exemplo3':
reply (`Item 3 selecionado`);
break