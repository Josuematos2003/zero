
/* COMO ENVIAR FOTOS, AUDIOS, VÍDEOS, GIFS E DOCUMENTOS*/


/*isso não vai funcionar se você colar em outro bot*/


case 'enviefoto':
/*envia uma foto que esteja na pasta ./edit/media/imagem*/

await sendMedia(from, 
goImage + 'teste.jpg', /*nome do arquivo*/  'image', /*formato do arquivo*/ {
quoted: mek,
caption: 'SEU TEXTO', /*legenda da sua foto*/
});

/*pronto!*/
break



case 'enviefotourl':
/* envia uma foto pelo link*/

await sendMedia(from, 'https://get.wallhere.com/photo/Albedo-OverLord-Overlord-anime-cleavage-dress-white-dress-horns-wings-Black-wings-gloves-white-gloves-yellow-eyes-black-hair-long-hair-azomo-avamone-1244327.jpg', /*link do arquivo*/  'image', /*formato do arquivo*/ {
quoted: mek,
caption: 'SEU TEXTO', /* legenda da sua foto*/
});

/*pronto!*/
break



case 'envievideo':
/*envia um vídeo que esteja na pasta ./edit/media/video.*/

await sendMedia(from, 
goVideo + 'teste.mp4', /*nome do arquivo*/  'video', /*formato do arquivo*/ {
quoted: mek,
caption: 'SEU TEXTO', /* legenda do seu vídeo*/
});

/*pronto!*/
break



case 'envieaudio':
/*envia um áudio que esteja na pasta ./edit/media/audio.*/

await sendMedia(from, 
goAudio + 'teste.mp3', /*nome do arquivo*/  'audio', /*formato do arquivo*/ {
quoted: mek,
mimetype: Mimetype.mp4Audio,
ptt: true,
});

/*pronto!*/
break



case 'enviegif':
/*envia um gif que esteja na pasta ./edit/media/video 
previsa ser .mp4 pra funcionar*/

await sendMedia(from, 
goVideo + 'teste.mp4', /*nome do arquivo*/  'video', /*formato do arquivo*/ {
quoted: mek,
caption: 'seu texto',
mimetype: Mimetype.gif,
});

/*pronto!*/
break

		
		
case 'enviesticker':
/*envia um sticker que esteja na pasta ./edit/media/sticker.*/

await sendMedia(from, 
goSticker + 'teste.webp', /*nome do arquivo*/  'sticker', /*formato do arquivo*/ {
quoted: mek,
mimetype: Mimetype.sticker,
});

/*pronto!*/
break



case 'enviedocumento':
/*vamos enviar a index como exemplo.
vc não consegue abrir pelo Whatsapp
 terá que ir buscar lá na pasta Whatsapp/documents*/

await sendMedia(from, 
'./index.js', /*nome do arquivo*/  'document', /*formato do arquivo*/ {
quoted: mek,
mimetype: 'document/js', /*formato do arquivo (js no caso)*/
filename: `index.js`,
});

/*pronto!*/
break
		
		
		
		
		
		/* :3 by Tio Momonga */