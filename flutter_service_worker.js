'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "f2afc85cf6862409637891570f790c55",
"version.json": "4a8e75236e4c48c4fdc05b70249c904e",
"index.html": "1e541b298470e60e7c93aea12e386f32",
"/": "1e541b298470e60e7c93aea12e386f32",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"manifest.json": "afa9d54f786512ddba9e77a26980fcdd",
"icons/Icon-maskable-192.png": "8ab81229f129589019093f158e56bbaf",
"icons/Icon-maskable-512.png": "26e8c761b010317f07ddf18908b59701",
"icons/Icon-512.png": "26e8c761b010317f07ddf18908b59701",
"icons/Icon-192.png": "8ab81229f129589019093f158e56bbaf",
"favicon.png": "10a6809be223f4ffeafb11c3ee227166",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "beecfb257bc6403e2e5a9054743033d4",
"assets/AssetManifest.json": "3c667d32ccebe32e9eb0917ed59b1168",
"assets/AssetManifest.bin.json": "02ef780398e74d1766fc7f81ebda751c",
"assets/fonts/MaterialIcons-Regular.otf": "f1199a9cffdb0466909afe2f95bfe46f",
"assets/NOTICES": "b1d37ac139efa9c8decfda4d70c18be8",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/pdf/catechesi24.pdf": "626a8bd4009623a9e8672cf68a71b37e",
"assets/assets/pdf/catechesi18.pdf": "4340fa8fa688a2acb24df01ae1ec73f2",
"assets/assets/pdf/TrattatoVeraDevozione.pdf": "7838435f7169e3a5fc341f7d38c9d214",
"assets/assets/pdf/EsameDiCoscienza.pdf": "60c307ec63690fb78a50c4a8311ebea5",
"assets/assets/pdf/catechesi28.pdf": "9c000ee4865a801366ecdfe7ab6f3c41",
"assets/assets/pdf/catechesi15.pdf": "cf9b6c37698834e1bbc137e0823bb03a",
"assets/assets/pdf/catechesi32.pdf": "a052cea700aa9beb72b38d0e1c03598c",
"assets/assets/pdf/catechesi7.pdf": "ce788752b8ee2318d77480783382088b",
"assets/assets/pdf/catechesi10.pdf": "2f099a772de8164a27fbbe15deffe949",
"assets/assets/pdf/catechesi26.pdf": "66c2ddaaf9d5a61304b12db46cb5dbd3",
"assets/assets/pdf/catechesi14.pdf": "ac2ce5f8b5e2b374abfff8ba37971410",
"assets/assets/pdf/catechesi21.pdf": "6ada36a64397711c13267747b81bf25a",
"assets/assets/pdf/catechesi17.pdf": "fcbaad59a62f97606717d9efe4476ed9",
"assets/assets/pdf/catechesi6.pdf": "ad7aa262675ba82fe467b578559de1f2",
"assets/assets/pdf/Atto_Consacrazione.pdf": "f9acd43058b5a180fca264588ea50e5e",
"assets/assets/pdf/catechesi5.pdf": "3391ad03b7bf84ff32d89c3d16a8942f",
"assets/assets/pdf/catechesi13.pdf": "e4cd0a83992058033023eba070f3a4c6",
"assets/assets/pdf/catechesi27.pdf": "60646d39f0fa13326178d0b7109387c0",
"assets/assets/pdf/catechesi11.pdf": "0742d2f2a70c17aaa5f1f5b12b529dc9",
"assets/assets/pdf/catechesi29.pdf": "3491dc25d158c1a381871797b30178bf",
"assets/assets/pdf/catechesi22.pdf": "2cb48e42a1225b861892caf12d63a9d2",
"assets/assets/pdf/catechesi12.pdf": "58b37f43959c50eda8f935989604e5f6",
"assets/assets/pdf/catechesi19.pdf": "39259f41a938c99cd46b27184b371efe",
"assets/assets/pdf/catechesi3.pdf": "0d7b2d6594bb5ba5e8508aa9151dde1b",
"assets/assets/pdf/catechesi25.pdf": "a8288f55aded3f3beeffef540152f735",
"assets/assets/pdf/catechesi31.pdf": "ce21dbbf0ee4cdcc111007cf7ba051b0",
"assets/assets/pdf/LeMiePreghiere.pdf": "cb1719d82ff318a2d4cd027c6373b713",
"assets/assets/pdf/catechesi9.pdf": "bfd07131ccfef0ba4ed24436277d74dc",
"assets/assets/pdf/catechesi23.pdf": "49a530bb468b7552d21155d77d791990",
"assets/assets/pdf/catechesi2.pdf": "7af745a7f70e36ec905e15b5c1d52c82",
"assets/assets/pdf/catechesi33.pdf": "0dcd59b3d9bef48d34aab9f0ecc39752",
"assets/assets/pdf/catechesi20.pdf": "369862f7183e0da322ea1a6994925d87",
"assets/assets/pdf/catechesi16.pdf": "d69255ee3516265bf2018400c2ac078e",
"assets/assets/pdf/catechesi8.pdf": "a04bb2c5e04bc10e552279170297e63f",
"assets/assets/pdf/catechesi30.pdf": "18b61457f4d98acaf176e2e1759fa99b",
"assets/assets/pdf/catechesi4.pdf": "3605594a4ee1d989a68b8123605d6751",
"assets/assets/images/deposizione.png": "d795b9863e0062b2d8efba08303a0ca5",
"assets/assets/images/vcfe.png": "6f934760c6863dd1d1b2d5d0bbf6d1ff",
"assets/assets/images/incoronazione.png": "c7f53972bedd9990a25ee4d1fb8d0278",
"assets/assets/images/assunta.png": "43ccea3b726d22097299049bc9233377",
"assets/assets/images/angelo.png": "65b73378959cc3fccd5cd0fb49585d01",
"assets/assets/images/discesainferi.png": "e8e1a6f4983905f96820074d50310c16",
"assets/assets/images/annunc1.png": "4712992b188fa6a8f2d1365c7853e0df",
"assets/assets/images/magi.png": "c186008c22da6bd08e3240cb2d7fc282",
"assets/assets/images/egitto.png": "46bbcfe00b6ab6d47921118230ab1551",
"assets/assets/images/mamma.png": "0a9239515f7dde60e1112ce8903e91c2",
"assets/assets/images/ic_launcher.png": "16aa21dca00c2427e52b8efecd84c896",
"assets/assets/images/annunc5.png": "e426aee3e7835ad414cb0ac7858de047",
"assets/assets/images/mamma2.png": "5d9f6a0306f6c341f8593831804b6c33",
"assets/assets/images/cena.png": "fbab5697a15de20f5295fed4f07249d7",
"assets/assets/images/sorriso.png": "b0209e02c88aaace4030d551030d3b4a",
"assets/assets/images/lavanda.png": "33374b492c03d970dbc7b0e26660665f",
"assets/assets/images/ic_launcher_adaptive_fore.png": "9cadb2c2dd83c98c067f53fb67709ce8",
"assets/assets/images/mamma3.png": "982f8f23dfb2a2c6fb5b497f3b4942e7",
"assets/assets/images/annunc4.png": "ad6ed966b1c3fdefbf8278d81ed8a1c7",
"assets/assets/images/mary_jesus.png": "a622bca4d4010b89fab8e6d882067609",
"assets/assets/images/annunc3.png": "92467406e1199d274f0b788e9556cd73",
"assets/assets/images/maria.png": "5b7cb39b1e54bc35c27aa0d5a032a19f",
"assets/assets/images/gesu.png": "8d19ff3ea8cff9cb344148be962a3152",
"assets/assets/images/sluigi.png": "ce0549127998f0738497efc3b428cbc0",
"assets/assets/images/mammaegesu.png": "f8862749d7d8c45c3d90b597f9568d32",
"assets/assets/images/deposizionecroce.png": "ab14aceb82f9facef1511bf65ce551a9",
"assets/assets/images/montagna.png": "1db3b8359a769c08f0614ed0cf75bdee",
"assets/assets/images/nolimetangere.png": "fee82fbd710f53314b86e4cac0356ba8",
"assets/assets/images/demoCat.png": "3ebade82a3837f56987da34321c2b44e",
"assets/assets/images/percorsi.png": "de28fe178735a35776e0aa6cb4f52f14",
"assets/assets/images/mammaegesuoro.png": "760e19e06b28d150baf464c6123b449e",
"assets/assets/images/valdarno_scont.png": "9496b8842495b6e22e1c0a7dcc0d8636",
"assets/assets/images/mammaegesuombre.png": "0731ae0412ac4a5e4fe0db13794823bb",
"assets/assets/images/annunc0.png": "7a9d568b20e46d3627ac412d753729cb",
"assets/assets/images/nascita.png": "c192de61fb68d1299b392ad86c595526",
"assets/assets/images/mammaegesumelagrana.png": "03788dfd63dd37c99a582eaccbb8d6de",
"assets/assets/images/peccato.png": "4f2de9dd2b5c0d20daf1fbe59d78acce",
"assets/assets/images/annunc2.png": "7ce4f81d1ab7bfc0d73bdc7dd4d8bda1",
"assets/assets/images/duebandiere.png": "ed6adacedf49198b23006be94748bb75",
"assets/assets/images/deposizionefocus.png": "f2dea5f8458d12c1bad4faf20015b6df",
"assets/assets/lang/fr/pdf/catechesi1.pdf": "a47f1ea4297cb7761a18bd8818680434",
"assets/assets/lang/fr/sezioni.json": "02c35890a70e71ee2b3272265f6c69e0",
"assets/assets/lang/fr/texts/catechesi31.md": "7806fadab927c2e6b9256e5d9e0b4f93",
"assets/assets/lang/fr/texts/catechesi22.md": "3f805144bd72d1724b8562874789fc41",
"assets/assets/lang/fr/texts/catechesi18.md": "8f6ce0d646981e24f6f1d904471915c3",
"assets/assets/lang/fr/texts/mercier.md": "d65f2e035b6dfa2f932f324d5d309db5",
"assets/assets/lang/fr/texts/catechesi19.md": "24fce0492dbf4b04b11097db07b40816",
"assets/assets/lang/fr/texts/catechesi26.md": "49ec79800d8b94f3bdd3f2c7261f2d38",
"assets/assets/lang/fr/texts/catechesi4.md": "bbf29c3c3bc927b2adce9bd22119a610",
"assets/assets/lang/fr/texts/umilta.md": "4b9a848f2e8dbace5fd79a56515f5e61",
"assets/assets/lang/fr/texts/catechesi5.md": "4129177dc623cf93f876301454f7ae2c",
"assets/assets/lang/fr/texts/lauretane.md": "136847204558dbce69f6727d1be4114f",
"assets/assets/lang/fr/texts/catechesi28.md": "81cce75037bed6ae60aa7d7ff9e1e460",
"assets/assets/lang/fr/texts/catechesi27.md": "f5eca44dbe776561daa66e1988856e98",
"assets/assets/lang/fr/texts/catechesi17.md": "51024e12fcee512511b0d3158c3be8f9",
"assets/assets/lang/fr/texts/catechesi1.md": "de79b9ad3c0a9e75fd42614d9c2761b5",
"assets/assets/lang/fr/texts/catechesi20.md": "4f7be7984f04bb347363b1f5b0a6bef6",
"assets/assets/lang/fr/texts/catechesi15.md": "b7330fa54059eb68b219e36329201ef3",
"assets/assets/lang/fr/texts/catechesi2.md": "cf4813b33309e810c848286bd77054d1",
"assets/assets/lang/fr/texts/catechesi12.md": "2e6e8b6222559b9bbf24020fabf86752",
"assets/assets/lang/fr/texts/consacrazionebreve.md": "05fe2428808104ae04970fa51292c48d",
"assets/assets/lang/fr/texts/catechesi3.md": "9a599da1da978ea9b6dde34d5c3ddcd2",
"assets/assets/lang/fr/texts/catechesi24.md": "491826e20413b153ed0acaaa24da41e0",
"assets/assets/lang/fr/texts/avestella.md": "9ac5564b65cac6b55b23bb89c050d2d9",
"assets/assets/lang/fr/texts/catechesi16.md": "42e7e7cc9d6233c012dee29222ed5500",
"assets/assets/lang/fr/texts/catechesi23.md": "2a648d6a90fa51f3037c85e2e2f05468",
"assets/assets/lang/fr/texts/catechesi14.md": "001fb3d3991705a7cf1ec291b1028e55",
"assets/assets/lang/fr/texts/catechesi33.md": "a66bd84498f0ff10672d4290d99507df",
"assets/assets/lang/fr/texts/catechesi10.md": "5063a82b80d8f9640b9d87079c4ab194",
"assets/assets/lang/fr/texts/consacrazione.md": "5690c27a8ccd5496bcb2c2e6e0d115b0",
"assets/assets/lang/fr/texts/catechesi9.md": "4d5b469799a163fddc2411c32b6d8bdb",
"assets/assets/lang/fr/texts/catechesi30.md": "14ea0bd46130b580878d16650fcea63d",
"assets/assets/lang/fr/texts/catechesi21.md": "e6d544c8fb4452e7521a402a0f4b654b",
"assets/assets/lang/fr/texts/catechesi6.md": "6e880dcdd4cc92d5c2fa8fdaced37acb",
"assets/assets/lang/fr/texts/catechesi7.md": "49d84e4a0134d5491d88d3d0828090e0",
"assets/assets/lang/fr/texts/catechesi29.md": "25bf361341e56663a20d38d809a255f8",
"assets/assets/lang/fr/texts/catechesi32.md": "23ff9854520ef13856b8e45e9e7688ea",
"assets/assets/lang/fr/texts/catechesi11.md": "f629e3133add883c0f23b9a521e0dcb0",
"assets/assets/lang/fr/texts/spirito.md": "6119429a6a9d192b3257d054b999dc45",
"assets/assets/lang/fr/texts/catechesi8.md": "c5980ac161d65ddbf1de5cccc05fe0b3",
"assets/assets/lang/fr/texts/catechesi25.md": "a781fb3a0126b74f4cc9e3385cd2f1cc",
"assets/assets/lang/fr/texts/minuto.md": "5408872c8a51bda76b5b55dcc5aa5320",
"assets/assets/lang/fr/texts/catechesi13.md": "2123db73ff501fe83b17a7ecb903af2e",
"assets/assets/lang/fr/texts/bernardo.md": "e7019583da4d5ea83074f5d57a78c075",
"assets/assets/lang/fr/scelta.json": "df2bd1d65761ec11b806a799da5c8a0e",
"assets/assets/lang/fr/test.json": "1e68ffde3f0e1734bcf43a5822db54f9",
"assets/assets/lang/fr/catechesi.json": "6480a52468e12bf834d0ef558e8616d2",
"assets/assets/lang/en/pdf/catechesi1.pdf": "76136b5f83d32898766cbad7e99fa83c",
"assets/assets/lang/en/sezioni.json": "e4a9d0beccca9c7b81a833d8630a0e8e",
"assets/assets/lang/en/texts/catechesi31.md": "7806fadab927c2e6b9256e5d9e0b4f93",
"assets/assets/lang/en/texts/catechesi22.md": "3f805144bd72d1724b8562874789fc41",
"assets/assets/lang/en/texts/catechesi18.md": "8f6ce0d646981e24f6f1d904471915c3",
"assets/assets/lang/en/texts/mercier.md": "0ffdf1b58b10ce7158a1c210ac55a787",
"assets/assets/lang/en/texts/catechesi19.md": "24fce0492dbf4b04b11097db07b40816",
"assets/assets/lang/en/texts/catechesi26.md": "49ec79800d8b94f3bdd3f2c7261f2d38",
"assets/assets/lang/en/texts/catechesi4.md": "bbf29c3c3bc927b2adce9bd22119a610",
"assets/assets/lang/en/texts/umilta.md": "b3f6473c543c0d75ff159a07e07c618e",
"assets/assets/lang/en/texts/catechesi5.md": "4129177dc623cf93f876301454f7ae2c",
"assets/assets/lang/en/texts/lauretane.md": "5132f0ea9c4b39dfb59fb27f2f455759",
"assets/assets/lang/en/texts/catechesi28.md": "81cce75037bed6ae60aa7d7ff9e1e460",
"assets/assets/lang/en/texts/catechesi27.md": "f5eca44dbe776561daa66e1988856e98",
"assets/assets/lang/en/texts/catechesi17.md": "51024e12fcee512511b0d3158c3be8f9",
"assets/assets/lang/en/texts/catechesi1.md": "a97454421d05cbf950d596c53dca23a1",
"assets/assets/lang/en/texts/catechesi20.md": "4f7be7984f04bb347363b1f5b0a6bef6",
"assets/assets/lang/en/texts/catechesi15.md": "b7330fa54059eb68b219e36329201ef3",
"assets/assets/lang/en/texts/catechesi2.md": "cf4813b33309e810c848286bd77054d1",
"assets/assets/lang/en/texts/catechesi12.md": "2e6e8b6222559b9bbf24020fabf86752",
"assets/assets/lang/en/texts/consacrazionebreve.md": "df235b66a4ce659ab6822f965e0753c4",
"assets/assets/lang/en/texts/catechesi3.md": "9a599da1da978ea9b6dde34d5c3ddcd2",
"assets/assets/lang/en/texts/catechesi24.md": "491826e20413b153ed0acaaa24da41e0",
"assets/assets/lang/en/texts/avestella.md": "bd593fe20827afc351a0947c2595cc3d",
"assets/assets/lang/en/texts/catechesi16.md": "42e7e7cc9d6233c012dee29222ed5500",
"assets/assets/lang/en/texts/catechesi23.md": "2a648d6a90fa51f3037c85e2e2f05468",
"assets/assets/lang/en/texts/catechesi14.md": "001fb3d3991705a7cf1ec291b1028e55",
"assets/assets/lang/en/texts/catechesi33.md": "a66bd84498f0ff10672d4290d99507df",
"assets/assets/lang/en/texts/catechesi10.md": "5063a82b80d8f9640b9d87079c4ab194",
"assets/assets/lang/en/texts/consacrazione.md": "56268d21e3c9ec04d87e269a1c3b43e0",
"assets/assets/lang/en/texts/catechesi9.md": "4d5b469799a163fddc2411c32b6d8bdb",
"assets/assets/lang/en/texts/catechesi30.md": "14ea0bd46130b580878d16650fcea63d",
"assets/assets/lang/en/texts/catechesi21.md": "e6d544c8fb4452e7521a402a0f4b654b",
"assets/assets/lang/en/texts/catechesi6.md": "6e880dcdd4cc92d5c2fa8fdaced37acb",
"assets/assets/lang/en/texts/catechesi7.md": "49d84e4a0134d5491d88d3d0828090e0",
"assets/assets/lang/en/texts/catechesi29.md": "25bf361341e56663a20d38d809a255f8",
"assets/assets/lang/en/texts/catechesi32.md": "23ff9854520ef13856b8e45e9e7688ea",
"assets/assets/lang/en/texts/catechesi11.md": "f629e3133add883c0f23b9a521e0dcb0",
"assets/assets/lang/en/texts/spirito.md": "3490e4fee9c89769f21dcd3320dc9c56",
"assets/assets/lang/en/texts/catechesi8.md": "c5980ac161d65ddbf1de5cccc05fe0b3",
"assets/assets/lang/en/texts/catechesi25.md": "a781fb3a0126b74f4cc9e3385cd2f1cc",
"assets/assets/lang/en/texts/minuto.md": "268222238f07e0a0520b44a0f1430491",
"assets/assets/lang/en/texts/catechesi13.md": "2123db73ff501fe83b17a7ecb903af2e",
"assets/assets/lang/en/texts/bernardo.md": "ce026442b8fa216ca4ec45645826446c",
"assets/assets/lang/en/scelta.json": "5e4f680335d67ff12f6597228335dde8",
"assets/assets/lang/en/test.json": "10ad0038148d58bb19aaf26033b09960",
"assets/assets/lang/en/catechesi.json": "224f834f5e9f95ec0343ca2bed9caebd",
"assets/assets/lang/it/pdf/catechesi1.pdf": "4e9de38f67080d8a6c6d1ccdd69b8fe8",
"assets/assets/lang/it/sezioni.json": "3b4ec314790a27c911847a8bab5b22ca",
"assets/assets/lang/it/texts/catechesi31.md": "7806fadab927c2e6b9256e5d9e0b4f93",
"assets/assets/lang/it/texts/catechesi22.md": "3f805144bd72d1724b8562874789fc41",
"assets/assets/lang/it/texts/catechesi18.md": "8f6ce0d646981e24f6f1d904471915c3",
"assets/assets/lang/it/texts/mercier.md": "0ffdf1b58b10ce7158a1c210ac55a787",
"assets/assets/lang/it/texts/catechesi19.md": "24fce0492dbf4b04b11097db07b40816",
"assets/assets/lang/it/texts/catechesi26.md": "49ec79800d8b94f3bdd3f2c7261f2d38",
"assets/assets/lang/it/texts/catechesi4.md": "bbf29c3c3bc927b2adce9bd22119a610",
"assets/assets/lang/it/texts/umilta.md": "b3f6473c543c0d75ff159a07e07c618e",
"assets/assets/lang/it/texts/catechesi5.md": "4129177dc623cf93f876301454f7ae2c",
"assets/assets/lang/it/texts/lauretane.md": "5132f0ea9c4b39dfb59fb27f2f455759",
"assets/assets/lang/it/texts/catechesi28.md": "81cce75037bed6ae60aa7d7ff9e1e460",
"assets/assets/lang/it/texts/catechesi27.md": "f5eca44dbe776561daa66e1988856e98",
"assets/assets/lang/it/texts/catechesi17.md": "51024e12fcee512511b0d3158c3be8f9",
"assets/assets/lang/it/texts/catechesi1.md": "312bb4f4a3f46c06931adbc403d65981",
"assets/assets/lang/it/texts/catechesi20.md": "4f7be7984f04bb347363b1f5b0a6bef6",
"assets/assets/lang/it/texts/catechesi15.md": "b7330fa54059eb68b219e36329201ef3",
"assets/assets/lang/it/texts/catechesi2.md": "cf4813b33309e810c848286bd77054d1",
"assets/assets/lang/it/texts/catechesi12.md": "2e6e8b6222559b9bbf24020fabf86752",
"assets/assets/lang/it/texts/consacrazionebreve.md": "df235b66a4ce659ab6822f965e0753c4",
"assets/assets/lang/it/texts/catechesi3.md": "9a599da1da978ea9b6dde34d5c3ddcd2",
"assets/assets/lang/it/texts/catechesi24.md": "491826e20413b153ed0acaaa24da41e0",
"assets/assets/lang/it/texts/avestella.md": "bd593fe20827afc351a0947c2595cc3d",
"assets/assets/lang/it/texts/catechesi16.md": "42e7e7cc9d6233c012dee29222ed5500",
"assets/assets/lang/it/texts/catechesi23.md": "2a648d6a90fa51f3037c85e2e2f05468",
"assets/assets/lang/it/texts/catechesi14.md": "001fb3d3991705a7cf1ec291b1028e55",
"assets/assets/lang/it/texts/catechesi33.md": "a66bd84498f0ff10672d4290d99507df",
"assets/assets/lang/it/texts/catechesi10.md": "5063a82b80d8f9640b9d87079c4ab194",
"assets/assets/lang/it/texts/consacrazione.md": "56268d21e3c9ec04d87e269a1c3b43e0",
"assets/assets/lang/it/texts/catechesi9.md": "4d5b469799a163fddc2411c32b6d8bdb",
"assets/assets/lang/it/texts/catechesi30.md": "14ea0bd46130b580878d16650fcea63d",
"assets/assets/lang/it/texts/catechesi21.md": "e6d544c8fb4452e7521a402a0f4b654b",
"assets/assets/lang/it/texts/catechesi6.md": "6e880dcdd4cc92d5c2fa8fdaced37acb",
"assets/assets/lang/it/texts/catechesi7.md": "49d84e4a0134d5491d88d3d0828090e0",
"assets/assets/lang/it/texts/catechesi29.md": "25bf361341e56663a20d38d809a255f8",
"assets/assets/lang/it/texts/catechesi32.md": "23ff9854520ef13856b8e45e9e7688ea",
"assets/assets/lang/it/texts/catechesi11.md": "f629e3133add883c0f23b9a521e0dcb0",
"assets/assets/lang/it/texts/spirito.md": "3490e4fee9c89769f21dcd3320dc9c56",
"assets/assets/lang/it/texts/catechesi8.md": "c5980ac161d65ddbf1de5cccc05fe0b3",
"assets/assets/lang/it/texts/catechesi25.md": "a781fb3a0126b74f4cc9e3385cd2f1cc",
"assets/assets/lang/it/texts/minuto.md": "268222238f07e0a0520b44a0f1430491",
"assets/assets/lang/it/texts/catechesi13.md": "2123db73ff501fe83b17a7ecb903af2e",
"assets/assets/lang/it/texts/bernardo.md": "ce026442b8fa216ca4ec45645826446c",
"assets/assets/lang/it/scelta.json": "5e4f680335d67ff12f6597228335dde8",
"assets/assets/lang/it/test.json": "46cb8215766b64b9825e176894ab9066",
"assets/assets/lang/it/catechesi.json": "f68ee61ef1c5878fe2e8c701dbeb6f28",
"assets/assets/json/assistente.json": "dce0ab0b2e26e959764c0558a30a4b68",
"assets/assets/json/catechesinew.json": "29aecca7dc4bcfb60ee9b7f74cb29320",
"assets/assets/json/utente.json": "c0ef2f83287ce0d1648ae0ea84ce0a39",
"assets/assets/fonts/AppIcons.ttf": "a3253fa796753c15ad26fce4437d9b23",
"assets/assets/fonts/Parisienne-Regular.ttf": "2ef637e29853f2e76ee4393e39dd6fdc",
"assets/AssetManifest.bin": "b2cab5430e5aaf4be57587e26457b8d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_bootstrap.js": "13c6f61cd33962246b588d6efcd07bc1",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
