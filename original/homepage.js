async function init() {

var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

var utcoffsets = {
asiakabul: "+270",
europetirane: "+120",
africaalgiers: "+60",
pacificpagopago: "-660",
europeandorra: "+120",
africaluanda: "+60",
americaanguilla: "-240",
antarcticacasey: "+660",
antarcticadavis: "+420",
antarcticadumontdurville: "+600",
antarcticamawson: "+300",
antarcticamcmurdo: "+720",
antarcticapalmer: "-180",
antarcticarothera: "-180",
antarcticasyowa: "+180",
antarcticatroll: "+120",
antarcticavostok: "+360",
americaantigua: "-240",
americaargentinabuenosaires: "-180",
americaargentinacatamarca: "-180",
americaargentinacordoba: "-180",
americaargentinajujuy: "-180",
americaargentinalarioja: "-180",
americaargentinamendoza: "-180",
americaargentinariogallegos: "-180",
americaargentinasalta: "-180",
americaargentinasanjuan: "-180",
americaargentinasanluis: "-180",
americaargentinatucuman: "-180",
americaargentinaushuaia: "-180",
asiayerevan: "+240",
americaaruba: "-240",
antarcticamacquarie: "+600",
australiaadelaide: "+570",
australiabrisbane: "+600",
australiabrokenhill: "+570",
australiadarwin: "+570",
australiaeucla: "+525",
australiahobart: "+600",
australialindeman: "+600",
australialordhowe: "+630",
australiamelbourne: "+600",
australiaperth: "+480",
australiasydney: "+600",
europevienna: "+120",
asiabaku: "+240",
americanassau: "-240",
asiabahrain: "+180",
asiadhaka: "+360",
americabarbados: "-240",
europeminsk: "+180",
europebrussels: "+120",
americabelize: "-360",
africaportonovo: "+60",
atlanticbermuda: "-180",
asiathimphu: "+360",
americalapaz: "-240",
americakralendijk: "-240",
europesarajevo: "+120",
africagaborone: "+120",
americaaraguaina: "-180",
americabahia: "-180",
americabelem: "-180",
americaboavista: "-240",
americacampogrande: "-240",
americacuiaba: "-240",
americaeirunepe: "-300",
americafortaleza: "-180",
americamaceio: "-180",
americamanaus: "-240",
americanoronha: "-120",
americaportovelho: "-240",
americarecife: "-180",
americariobranco: "-300",
americasantarem: "-180",
americasaopaulo: "-180",
indianchagos: "+360",
asiabrunei: "+480",
europesofia: "+180",
africaouagadougou: "0",
africabujumbura: "+120",
asiaphnompenh: "+420",
africadouala: "+60",
americaatikokan: "-300",
americablancsablon: "-240",
americacambridgebay: "-360",
americacreston: "-420",
americadawson: "-420",
americadawsoncreek: "-420",
americaedmonton: "-360",
americafortnelson: "-420",
americaglacebay: "-180",
americagoosebay: "-180",
americahalifax: "-180",
americainuvik: "-360",
americaiqaluit: "-240",
americamoncton: "-180",
americanipigon: "-240",
americapangnirtung: "-240",
americarainyriver: "-300",
americarankininlet: "-300",
americaregina: "-360",
americaresolute: "-300",
americastjohns: "-150",
americaswiftcurrent: "-360",
americathunderbay: "-240",
americatoronto: "-240",
americavancouver: "-420",
americawhitehorse: "-420",
americawinnipeg: "-300",
americayellowknife: "-360",
atlanticcapeverde: "-60",
americacayman: "-300",
africabangui: "+60",
africandjamena: "+60",
americapuntaarenas: "-180",
americasantiago: "-240",
pacificeaster: "-360",
asiashanghai: "+480",
asiaurumqi: "+360",
indianchristmas: "+420",
indiancocos: "+390",
americabogota: "-300",
indiancomoro: "+180",
africabrazzaville: "+60",
africakinshasa: "+60",
africalubumbashi: "+120",
pacificrarotonga: "-600",
americacostarica: "-360",
europezagreb: "+120",
americahavana: "-240",
americacuracao: "-240",
asiafamagusta: "+180",
asianicosia: "+180",
europeprague: "+120",
africaabidjan: "0",
europecopenhagen: "+120",
africadjibouti: "+180",
americadominica: "-240",
americasantodomingo: "-240",
americaguayaquil: "-300",
pacificgalapagos: "-360",
africacairo: "+120",
americaelsalvador: "-360",
africamalabo: "+60",
africaasmara: "+180",
europetallinn: "+180",
africaaddisababa: "+180",
atlanticstanley: "-180",
atlanticfaroe: "+60",
pacificfiji: "+720",
europehelsinki: "+180",
europeparis: "+120",
americacayenne: "-180",
pacificgambier: "-540",
pacificmarquesas: "-570",
pacifictahiti: "-600",
indiankerguelen: "+300",
africalibreville: "+60",
africabanjul: "0",
asiatbilisi: "+240",
europeberlin: "+120",
europebusingen: "+120",
africaaccra: "0",
europegibraltar: "+120",
europeathens: "+180",
americadanmarkshavn: "0",
americanuuk: "-120",
americascoresbysund: "0",
americathule: "-180",
americagrenada: "-240",
americaguadeloupe: "-240",
pacificguam: "+600",
americaguatemala: "-360",
europeguernsey: "+60",
africaconakry: "0",
africabissau: "0",
americaguyana: "-240",
americaportauprince: "-240",
europevatican: "+120",
americategucigalpa: "-360",
asiahongkong: "+480",
europebudapest: "+120",
atlanticreykjavik: "0",
asiakolkata: "+330",
asiajakarta: "+420",
asiajayapura: "+540",
asiamakassar: "+480",
asiapontianak: "+420",
asiatehran: "+270",
asiabaghdad: "+180",
europedublin: "+60",
europeisleofman: "+60",
asiajerusalem: "+180",
europerome: "+120",
americajamaica: "-300",
asiatokyo: "+540",
europejersey: "+60",
asiaamman: "+180",
asiaalmaty: "+360",
asiaaqtau: "+300",
asiaaqtobe: "+300",
asiaatyrau: "+300",
asiaoral: "+300",
asiaqostanay: "+360",
asiaqyzylorda: "+300",
africanairobi: "+180",
pacificenderbury: "+780",
pacifickiritimati: "+840",
pacifictarawa: "+720",
asiapyongyang: "+540",
asiaseoul: "+540",
asiakuwait: "+180",
asiabishkek: "+360",
asiavientiane: "+420",
europeriga: "+180",
asiabeirut: "+180",
africamaseru: "+120",
africamonrovia: "0",
africatripoli: "+120",
europevaduz: "+120",
europevilnius: "+180",
europeluxembourg: "+120",
asiamacau: "+480",
europeskopje: "+120",
indianantananarivo: "+180",
africablantyre: "+120",
asiakualalumpur: "+480",
asiakuching: "+480",
indianmaldives: "+300",
africabamako: "0",
europemalta: "+120",
pacifickwajalein: "+720",
pacificmajuro: "+720",
americamartinique: "-240",
africanouakchott: "0",
indianmauritius: "+240",
indianmayotte: "+180",
americabahiabanderas: "-300",
americacancun: "-300",
americachihuahua: "-360",
americahermosillo: "-420",
americamatamoros: "-300",
americamazatlan: "-360",
americamerida: "-300",
americamexicocity: "-300",
americamonterrey: "-300",
americaojinaga: "-360",
americatijuana: "-420",
pacificchuuk: "+600",
pacifickosrae: "+660",
pacificpohnpei: "+660",
europechisinau: "+180",
europemonaco: "+120",
asiachoibalsan: "+480",
asiahovd: "+420",
asiaulaanbaatar: "+480",
europepodgorica: "+120",
americamontserrat: "-240",
africacasablanca: "+60",
africamaputo: "+120",
asiayangon: "+390",
africawindhoek: "+120",
pacificnauru: "+720",
asiakathmandu: "+345",
europeamsterdam: "+120",
pacificnoumea: "+660",
pacificauckland: "+720",
pacificchatham: "+765",
americamanagua: "-360",
africaniamey: "+60",
africalagos: "+60",
pacificniue: "-660",
pacificnorfolk: "+660",
pacificsaipan: "+600",
europeoslo: "+120",
asiamuscat: "+240",
asiakarachi: "+300",
pacificpalau: "+540",
asiagaza: "+180",
asiahebron: "+180",
americapanama: "-300",
pacificbougainville: "+660",
pacificportmoresby: "+600",
americaasuncion: "-240",
americalima: "-300",
asiamanila: "+480",
pacificpitcairn: "-480",
europewarsaw: "+120",
atlanticazores: "0",
atlanticmadeira: "+60",
europelisbon: "+60",
americapuertorico: "-240",
asiaqatar: "+180",
europebucharest: "+180",
asiaanadyr: "+720",
asiabarnaul: "+420",
asiachita: "+540",
asiairkutsk: "+480",
asiakamchatka: "+720",
asiakhandyga: "+540",
asiakrasnoyarsk: "+420",
asiamagadan: "+660",
asianovokuznetsk: "+420",
asianovosibirsk: "+420",
asiaomsk: "+360",
asiasakhalin: "+660",
asiasrednekolymsk: "+660",
asiatomsk: "+420",
asiaustnera: "+600",
asiavladivostok: "+600",
asiayakutsk: "+540",
asiayekaterinburg: "+300",
europeastrakhan: "+240",
europekaliningrad: "+120",
europekirov: "+180",
europemoscow: "+180",
europesamara: "+240",
europesaratov: "+240",
europeulyanovsk: "+240",
europevolgograd: "+180",
africakigali: "+120",
indianreunion: "+240",
americastbarthelemy: "-240",
atlanticsthelena: "0",
americastkitts: "-240",
americastlucia: "-240",
americamarigot: "-240",
americamiquelon: "-120",
americastvincent: "-240",
pacificapia: "+780",
europesanmarino: "+120",
africasaotome: "0",
asiariyadh: "+180",
africadakar: "0",
europebelgrade: "+120",
indianmahe: "+240",
africafreetown: "0",
asiasingapore: "+480",
americalowerprinces: "-240",
europebratislava: "+120",
europeljubljana: "+120",
pacificguadalcanal: "+660",
africamogadishu: "+180",
africajohannesburg: "+120",
atlanticsouthgeorgia: "-120",
africajuba: "+120",
africaceuta: "+120",
atlanticcanary: "+60",
europemadrid: "+120",
asiacolombo: "+330",
africakhartoum: "+120",
americaparamaribo: "-180",
arcticlongyearbyen: "+120",
africambabane: "+120",
europestockholm: "+120",
europezurich: "+120",
asiadamascus: "+180",
asiataipei: "+480",
asiadushanbe: "+300",
africadaressalaam: "+180",
asiabangkok: "+420",
asiadili: "+540",
africalome: "0",
pacificfakaofo: "+780",
pacifictongatapu: "+780",
americaportofspain: "-240",
africatunis: "+60",
europeistanbul: "+180",
asiaashgabat: "+300",
americagrandturk: "-240",
pacificfunafuti: "+720",
africakampala: "+180",
europekiev: "+180",
europesimferopol: "+180",
europeuzhgorod: "+180",
europezaporozhye: "+180",
asiadubai: "+240",
europelondon: "+60",
americaadak: "-540",
americaanchorage: "-480",
americaboise: "-360",
americachicago: "-300",
americadenver: "-360",
americadetroit: "-240",
americaindianaindianapolis: "-240",
americaindianaknox: "-300",
americaindianamarengo: "-240",
americaindianapetersburg: "-240",
americaindianatellcity: "-300",
americaindianavevay: "-240",
americaindianavincennes: "-240",
americaindianawinamac: "-240",
americajuneau: "-480",
americakentuckylouisville: "-240",
americakentuckymonticello: "-240",
americalosangeles: "-420",
americamenominee: "-300",
americametlakatla: "-480",
americanewyork: "-240",
americanome: "-480",
americanorthdakotabeulah: "-300",
americanorthdakotacenter: "-300",
americanorthdakotanewsalem: "-300",
americaphoenix: "-420",
americasitka: "-480",
americayakutat: "-480",
pacifichonolulu: "-600",
pacificmidway: "-660",
pacificwake: "+720",
americamontevideo: "-180",
asiasamarkand: "+300",
asiatashkent: "+300",
pacificefate: "+660",
americacaracas: "-240",
asiahochiminh: "+420",
americatortola: "-240",
americastthomas: "-240",
pacificwallis: "+720",
africaelaaiun: "+60",
asiaaden: "+180",
africalusaka: "+120",
africaharare: "+120",
europemariehamn: "+180"
}

var languages = {
af: "Afrikaans",
az: "Azərbaycan",
id: "Bahasa Indonesia",
ms: "Bahasa Malaysia",
bs: "Bosanski",
ca: "Català",
cs: "Čeština",
da: "Dansk",
de: "Deutsch",
et: "Eesti",
en: "English",
enin: "English (India)",
engb: "English (UK)",
es: "Español (España)",
es419: "Español (Latinoamérica)",
esus: "Español (US)",
eu: "Euskara",
fil: "Filipino",
fr: "Français",
frca: "Français (Canada)",
gl: "Galego",
hr: "Hrvatski",
zu: "IsiZulu",
is: "Íslenska",
it: "Italiano",
sw: "Kiswahili",
lv: "Latviešu valoda",
lt: "Lietuvių",
hu: "Magyar",
nl: "Nederlands",
no: "Norsk",
uz: "O‘zbek",
pl: "Polski",
ptpt: "Português",
pt: "Português (Brasil)",
ro: "Română",
sq: "Shqip",
sk: "Slovenčina",
sl: "Slovenščina",
srlatn: "Srpski",
fi: "Suomi",
sv: "Svenska",
vi: "Tiếng Việt",
tr: "Türkçe",
be: "Беларуская",
bg: "Български",
ky: "Кыргызча",
kk: "Қазақ Тілі",
mk: "Македонски",
mn: "Монгол",
ru: "Русский",
sr: "Српски",
uk: "Українська",
el: "Ελληνικά",
hy: "Հայերեն",
iw: "עברית",
ur: "اردو",
ar: "العربية",
fa: "فارسی",
ne: "नेपाली",
mr: "मराठी",
hi: "हिन्दी",
as: "অসমীয়া",
bn: "বাংলা",
pa: "ਪੰਜਾਬੀ",
gu: "ગુજરાતી",
or: "ଓଡ଼ିଆ",
ta: "தமிழ்",
te: "తెలుగు",
kn: "ಕನ್ನಡ",
ml: "മലയാളം",
si: "සිංහල",
th: "ภาษาไทย",
lo: "ລາວ",
my: "ဗမာ",
ka: "ქართული",
am: "አማርኛ",
km: "ខ្មែរ",
zhcn: "中文 (简体)",
zhtw: "中文 (繁體)",
zhhk: "中文 (香港)",
ja: "日本語",
ko: "한국어"
}








var countries = {
dz: "Algeria",
ar: "Argentina",
au: "Australia",
at: "Austria",
az: "Azerbaijan",
bh: "Bahrain",
by: "Belarus",
be: "Belgium",
bo: "Bolivia",
ba: "Bosnia and Herzegovina",
br: "Brazil",
bg: "Bulgaria",
ca: "Canada",
cl: "Chile",
co: "Colombia",
cr: "Costa Rica",
hr: "Croatia",
cy: "Cyprus",
cz: "Czechia",
dk: "Denmark",
do: "Dominican Republic",
ec: "Ecuador",
eg: "Egypt",
sv: "El Salvador",
ee: "Estonia",
fi: "Finland",
fr: "France",
ge: "Georgia",
de: "Germany",
gh: "Ghana",
gr: "Greece",
gt: "Guatemala",
hn: "Honduras",
hk: "Hong Kong",
hu: "Hungary",
is: "Iceland",
in: "India",
id: "Indonesia",
iq: "Iraq",
ir: "Ireland",
il: "Israel",
it: "Italy",
jm: "Jamaica",
jp: "Japan",
jo: "Jordan",
kz: "Kazakhstan",
ke: "Kenya",
kw: "Kuwait",
lv: "Latvia",
lb: "Lebanon",
ly: "Libya",
li: "Liechtenstein",
lt: "Lithuania",
lu: "Luxembourg",
my: "Malaysia",
mt: "Malta",
mx: "Mexico",
me: "Montenegro",
ma: "Morocco",
np: "Nepal",
nl: "Netherlands",
nz: "New Zealand",
ni: "Nicaragua",
ng: "Nigeria",
mk: "North Macedonia",
no: "Norway",
om: "Oman",
pk: "Pakistan",
pa: "Panama",
pg: "Papua New Guinea",
py: "Paraguay",
pe: "Peru",
ph: "Philippines",
pl: "Poland",
pt: "Portugal",
pr: "Puerto Rico",
qa: "Qatar",
ro: "Romania",
ru: "Russia",
sa: "Saudi Arabia",
sn: "Senegal",
rs: "Serbia",
sg: "Singapore",
sk: "Slovakia",
si: "Slovenia",
za: "South Africa",
kr: "South Korea",
es: "Spain",
lk: "Sri Lanka",
se: "Sweden",
ch: "Switzerland",
tw: "Taiwan",
tz: "Tanzania",
th: "Thailand",
tn: "Tunisia",
tr: "Turkey",
ug: "Uganda",
ua: "Ukraine",
ae: "United Arab Emirates",
gb: "United Kingdom",
us: "United States",
uy: "Uruguay",
ve: "Venezuela",
vn: "Vietnam",
ye: "Yemen",
zw: "Zimbabwe"
}

function initCleanDocument(names) {
        var element = document.documentElement;
        for (var i = element.attributes.length - 1; i >= 0; i--) {
            element.removeAttribute(element.attributes[i].name);
        }
        for (var i = 0; i < names.length; i++) {
            var elements = document.getElementsByTagName(names[i]);
            if (elements.length === 0)
                document.documentElement.appendChild(document.createElement(names[i]));
        }
        window.stop();
		linkCss();
        createLoadingIllusion();
        //injectPage();
}

var documentElements = ['html']

initCleanDocument(documentElements);

//var templateurl = chrome.runtime.getURL('homepagetemplate.html');


/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.querySelector("html").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", templateurl, true);
xhttp.send();

*/

function createLoadingIllusion() {

document.querySelector("html").insertAdjacentHTML('afterbegin', `<title>YouTube</title>`);

var whitetimeout = Math.floor(Math.random() * (800 - 600) + 600);

setTimeout(function() {

document.querySelector('html').insertAdjacentHTML('afterbegin', `<style id="gt-css-injection">html { background-color: #FFFFFF; }</style>`);

}, whitetimeout);

}

function linkCss() {

	document.querySelector('html').insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="/yts/cssbin/www-core-vflt4ZGY7.css" name="www-core" class="css-httpswwwyoutubecomytscssbinwwwcorevflt4ZGY7css" id="gt-css-injection"><link rel="stylesheet" href="/yts/cssbin/www-home-c4-vflIw8IlQ.css" name="www-home-c4" class="css-httpswwwyoutubecomytscssbinwwwhomec4vflIw8IlQcss" id="gt-css-injection"><link rel="stylesheet" href="/yts/cssbin/www-pageframe-vfl1hU8te.css" name="www-pageframe" class="css-httpswwwyoutubecomytscssbinwwwpageframevfl1hU8tecss" id="gt-css-injection"><link rel="stylesheet" href="/yts/cssbin/www-guide-vflJFFhnq.css" name="www-guide" class="css-httpswwwyoutubecomytscssbinwwwguidevflJFFhnqcss" id="gt-css-injection"><link rel="canonical" href="https://www.youtube.com/" id="gt-css-injection"><link rel="alternate" media="handheld" href="https://m.youtube.com/" id="gt-css-injection"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.youtube.com/" id="gt-css-injection"><link rel="manifest" href="/manifest.json" id="gt-css-injection"><link rel="search" type="application/opensearchdescription+xml" href="https://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search" id="gt-css-injection"><link rel="shortcut icon" href="https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico" type="image/x-icon" id="gt-css-injection"><link rel="icon" href="/yts/img/favicon_32-vfl8NGn4k.png" sizes="32x32" id="gt-css-injection"><link rel="icon" href="/yts/img/favicon_48-vfl1s0rGh.png" sizes="48x48" id="gt-css-injection"><link rel="icon" href="/yts/img/favicon_96-vfldSA3ca.png" sizes="96x96" id="gt-css-injection"><link rel="icon" href="/yts/img/favicon_144-vflWmzoXw.png" sizes="144x144" id="gt-css-injection"><link rel="publisher" href="https://plus.google.com/115229808208707341778" id="gt-css-injection"><link rel="alternate" href="android-app://com.google.android.youtube/http/www.youtube.com/" id="gt-css-injection"><link rel="alternate" href="ios-app://544007664/vnd.youtube/www.youtube.com/" id="gt-css-injection">`);

}

function getSapisidhash()
{
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
	/* SHA-1 (FIPS 180-4) implementation in JavaScript                    (c) Chris Veness 2002-2019  */
	/*                                                                                   MIT Licence  */
	/* www.movable-type.co.uk/scripts/sha1.html                                                       */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


	/**
	 * SHA-1 hash function reference implementation.
	 *
	 * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
	 * intended to aid understanding of the algorithm rather than for production use.
	 *
	 * While it could be used where performance is not critical, I would recommend using the ‘Web
	 * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
	 * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
	 *
	 * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
	 *     csrc.nist.gov/groups/ST/toolkit/examples.html
	 */
	class Sha1 {

		/**
		 * Generates SHA-1 hash of string.
		 *
		 * @param   {string} msg - (Unicode) string to be hashed.
		 * @param   {Object} [options]
		 * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
		 *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
		 * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
		 *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
		 * @returns {string} Hash of msg as hex character string.
		 *
		 * @example
		 *   import Sha1 from './sha1.js';
		 *   const hash = Sha1.hash('abc'); // 'a9993e364706816aba3e25717850c26c9cd0d89d'
		 */
		static hash(msg, options) {
			const defaults = { msgFormat: 'string', outFormat: 'hex' };
			const opt = Object.assign(defaults, options);

			switch (opt.msgFormat) {
				default: // default is to convert string to UTF-8, as SHA only deals with byte-streams
				case 'string':   msg = utf8Encode(msg);       break;
				case 'hex-bytes':msg = hexBytesToString(msg); break; // mostly for running tests
			}

			// constants [§4.2.1]
			const K = [ 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6 ];

			// initial hash value [§5.3.1]
			const H = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];

			// PREPROCESSING [§6.1.1]

			msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

			// convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
			const l = msg.length/4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
			const N = Math.ceil(l/16);  // number of 16-integer-blocks required to hold 'l' ints
			const M = new Array(N);

			for (let i=0; i<N; i++) {
				M[i] = new Array(16);
				for (let j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
					M[i][j] = (msg.charCodeAt(i*64+j*4+0)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16)
							| (msg.charCodeAt(i*64+j*4+2)<< 8) | (msg.charCodeAt(i*64+j*4+3)<< 0);
				} // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
			}
			// add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
			// note: most significant word would be (len-1)*8 >>> 32, but since JS converts
			// bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
			M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14]);
			M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;

			// HASH COMPUTATION [§6.1.2]

			for (let i=0; i<N; i++) {
				const W = new Array(80);

				// 1 - prepare message schedule 'W'
				for (let t=0;  t<16; t++) W[t] = M[i][t];
				for (let t=16; t<80; t++) W[t] = Sha1.ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);

				// 2 - initialise five working variables a, b, c, d, e with previous hash value
				let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4];

				// 3 - main loop (use JavaScript '>>> 0' to emulate UInt32 variables)
				for (let t=0; t<80; t++) {
					const s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
					const T = (Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
					e = d;
					d = c;
					c = Sha1.ROTL(b, 30) >>> 0;
					b = a;
					a = T;
				}

				// 4 - compute the new intermediate hash value (note 'addition modulo 2^32' – JavaScript
				// '>>> 0' coerces to unsigned UInt32 which achieves modulo 2^32 addition)
				H[0] = (H[0]+a) >>> 0;
				H[1] = (H[1]+b) >>> 0;
				H[2] = (H[2]+c) >>> 0;
				H[3] = (H[3]+d) >>> 0;
				H[4] = (H[4]+e) >>> 0;
			}

			// convert H0..H4 to hex strings (with leading zeros)
			for (let h=0; h<H.length; h++) H[h] = ('00000000'+H[h].toString(16)).slice(-8);

			// concatenate H0..H4, with separator if required
			const separator = opt.outFormat=='hex-w' ? ' ' : '';

			return H.join(separator);

			/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

			function utf8Encode(str) {
				try {
					return new TextEncoder().encode(str, 'utf-8').reduce((prev, curr) => prev + String.fromCharCode(curr), '');
				} catch (e) { // no TextEncoder available?
					return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
				}
			}

			function hexBytesToString(hexStr) { // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
				const str = hexStr.replace(' ', ''); // allow space-separated groups
				return str=='' ? '' : str.match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
			}
		}


		/**
		 * Function 'f' [§4.1.1].
		 * @private
		 */
		static f(s, x, y, z)  {
			switch (s) {
				case 0: return (x & y) ^ (~x & z);          // Ch()
				case 1: return  x ^ y  ^  z;                // Parity()
				case 2: return (x & y) ^ (x & z) ^ (y & z); // Maj()
				case 3: return  x ^ y  ^  z;                // Parity()
			}
		}


		/**
		 * Rotates left (circular left shift) value x by n positions [§3.2.5].
		 * @private
		 */
		static ROTL(x, n) {
			return (x<<n) | (x>>>(32-n));
		}

	}


	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


	function gethash()
	{
		function getCookie(cname)
		{

			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');

			for(var i = 0; i <ca.length; i++) {

				var c = ca[i];
				while (c.charAt(0) == ' ') {
				  c = c.substring(1);
				}
				if (c.indexOf(name) == 0)
				{
				  return c.substring(name.length, c.length);
				}

			}

			return "";

		}

		var time = (Math.round(new Date() / 1000));
		var xorigin = "https://www.youtube.com";
		var sapisid = getCookie("SAPISID");

		var hash = Sha1.hash(time + " " + sapisid + " " + xorigin);

		return ("SAPISIDHASH " + time + "_" + hash);

	}

	return gethash();
}






function generateAuthInformation(browse, guide, notifcount, notif, notifmode, accmenu)
{

    var innertubeapikey = ytconfigdata.INNERTUBE_API_KEY;

    var hl = ytconfigdata.HL;
    var gl = ytconfigdata.GL;
    var clientver = ytconfigdata.INNERTUBE_CONTEXT_CLIENT_VERSION;
    var remotehost = ytconfigdata.INNERTUBE_CONTEXT.client.remoteHost;
    var visitordata = ytconfigdata.VISITOR_DATA;
    var useragent = ytconfigdata.INNERTUBE_CONTEXT.client.userAgent;
    var clientname = ytconfigdata.INNERTUBE_CONTEXT.client.clientName;
    var os = ytconfigdata.INNERTUBE_CONTEXT.client.osName;
    var osversion = ytconfigdata.INNERTUBE_CONTEXT.client.osVersion;
    var ogurl = ytconfigdata.INNERTUBE_CONTEXT.client.originalUrl;
    var platform = ytconfigdata.INNERTUBE_CONTEXT.client.platform;
    var clientformfactor = ytconfigdata.INNERTUBE_CONTEXT.client.clientFormFactor;
    var timezone = ytconfigdata.INNERTUBE_CONTEXT.client.timeZone;
    var browsername = ytconfigdata.INNERTUBE_CONTEXT.client.browserName;
    var browserversion = ytconfigdata.INNERTUBE_CONTEXT.client.browserVersion;
    var grafturl = window.location.href;
    var lockedsafetymode = ytconfigdata.INNERTUBE_CONTEXT.user.lockedSafetyMode;
    var usessl = ytconfigdata.INNERTUBE_CONTEXT.request.useSsl;
    var clicktracking = ytconfigdata.INNERTUBE_CONTEXT.clickTracking.clickTrackingParams;
	/*
    if (document.querySelector("html").getAttribute("dark") == true)
        {

            var theme = "USER_INTERFACE_THEME_DARK";
        }
    else
    {

        var theme = "USER_INTERFACE_THEME_LIGHT";

    }
	*/

	var theme = "USER_INTERFACE_THEME_LIGHT";


    //var screenheight = document.querySelector("body").clientHeight;
    //var screenwidth = document.querySelector("body").clientWidth;

	var screenheight = 69;
	var screenwidth = 420;

    if (timezone) {

    var utc = (function() {

        for (var i = 0; i < 12; i++)
        {

           var utctime = timezone.replace("/", "").replace(/\.|\,|\-|\_/g, "").replace(" ", "").toLowerCase().trim();


        }

        return utcoffsets[utctime];

    })();

    }

    var screendensityfloat = window.devicePixelRatio;

    var payload = (`{
  "context": {
    "client": {
      "hl": "` + hl + `",
      "gl": "` + gl + `",
      "remoteHost": "` + remotehost + `",
      "deviceMake": "",
      "deviceModel": "",
      "visitorData": "` + visitordata + `",
      "userAgent": "` + useragent + `",
      "clientName": "` + clientname + `",
      "clientVersion": "` + clientver + `",
      "osName": "` + os + `",
      "osVersion": "` + osversion + `",
      "originalUrl": "` + ogurl + `",
      "platform": "` + platform + `",
      "clientFormFactor": "` + clientformfactor + `",
      "userInterfaceTheme": "` + theme + `",
      ` + (timezone ? `"timeZone": "` + timezone + `",` : ``) + `
      "browserName": "` + browsername + `",
      "browserVersion": "` + browserversion + `",
      "screenWidthPoints": ` + screenwidth + `,
      "screenHeightPoints": ` + screenheight + `,
      "screenPixelDensity": 1,
      "screenDensityFloat": ` + screendensityfloat + `,
      "utcOffsetMinutes": ` + utc + `,
      "mainAppWebInfo": {
        "graftUrl": "` + grafturl + `",
        "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER",
        "isWebNativeShareAvailable": false
      }
     },
    "user": {
      "lockedSafetyMode": ` + lockedsafetymode + `
    },
    "request": {
      "useSsl": ` + usessl + `,
      "internalExperimentFlags": [],
      "consistencyTokenJars": []
    },
    "clickTracking": {
      "clickTrackingParams": "` + clicktracking + `"
    },
    "adSignalsInfo": {
      "params": [
        {
          "key": "dt",
          "value": "1623439544078"
        },
        {
          "key": "flash",
          "value": "0"
        },
        {
          "key": "frm",
          "value": "0"
        },
        {
          "key": "u_tz",
          "value": "-240"
        },
        {
          "key": "u_his",
          "value": "6"
        },
        {
          "key": "u_java",
          "value": "false"
        },
        {
          "key": "u_h",
          "value": "1080"
        },
        {
          "key": "u_w",
          "value": "1920"
        },
        {
          "key": "u_ah",
          "value": "1040"
        },
        {
          "key": "u_aw",
          "value": "1920"
        },
        {
          "key": "u_cd",
          "value": "24"
        },
        {
          "key": "u_nplug",
          "value": "0"
        },
        {
          "key": "u_nmime",
          "value": "0"
        },
        {
          "key": "bc",
          "value": "31"
        },
        {
          "key": "bih",
          "value": "938"
        },
        {
          "key": "biw",
          "value": "1403"
        },
        {
          "key": "brdim",
          "value": "-8,-8,-8,-8,1920,0,1936,1056,1420,938"
        },
        {
          "key": "vis",
          "value": "1"
        },
        {
          "key": "wgl",
          "value": "true"
        },
        {
          "key": "ca_type",
          "value": "image"
        }
      ]
    }
    }` + (notifcount ? `` : `,`) + (browse ? `"browseId": "FEwhat_to_watch"` : (guide ? `"fetchLiveState":true` : (notifcount ? `` : (notif ? `"notificationsMenuRequestType":"` + notifmode + `"` : ``)))) + `}`);

    var jsonpayload = JSON.parse(payload);



    return jsonpayload;

}




async function action(action)
{

    var innertubeapikey = ytconfigdata.INNERTUBE_API_KEY;
    var visitorid = ytconfigdata.INNERTUBE_CONTEXT.client.visitorData;
    var clientver = ytconfigdata.INNERTUBE_CONTEXT_CLIENT_VERSION;

    var sapisid = await getSapisidhash();

    var authinfo = ytconfigdata;

    var sessionindex = ytconfigdata.SESSION_INDEX;





    if (action == "browse")
    {

    var authinformation = await generateAuthInformation(true, false, false, false, "", false);

    var response = await fetch(("https://www.youtube.com/youtubei/v1/browse?key=" + innertubeapikey),
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
                ...((authinfo.LOGGED_IN) && {"Authorization": sapisid}),
                ...((authinfo.LOGGED_IN) && {"X-Goog-AuthUser": sessionindex}),
				'X-YOUTUBE-CLIENT-NAME': '1',
				'X-YOUTUBE-CLIENT-VERSION': clientver,
                'X-GOOG-VISITOR-ID': visitorid,
                ...((authinfo.DELEGATED_SESSION_ID ? true: false) && {"X-Goog-PageId": authinfo.DELEGATED_SESSION_ID}),
        },
        redirect: 'follow',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: JSON.stringify(authinformation)
    });

    }

    else if (action == "guide")
    {

    var authinformation = await generateAuthInformation(false, true, false, false, "", false);

            var response = await fetch(("https://www.youtube.com/youtubei/v1/guide?key=" + innertubeapikey),
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
                ...((authinfo.LOGGED_IN) && {"Authorization": sapisid}),
                ...((authinfo.LOGGED_IN) && {"X-Goog-AuthUser": sessionindex}),
				'X-YOUTUBE-CLIENT-NAME': '1',
				'X-YOUTUBE-CLIENT-VERSION': clientver,
                'X-GOOG-VISITOR-ID': visitorid,
                ...((authinfo.DELEGATED_SESSION_ID ? true: false) && {"X-Goog-PageId": authinfo.DELEGATED_SESSION_ID}),
        },
        redirect: 'follow',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: JSON.stringify(authinformation)
    });

    }
    else if (action == "notifcount")
    {

    var authinformation = await generateAuthInformation(false, false, true, false, "", false);

    var response = await fetch(("https://www.youtube.com/youtubei/v1/notification/get_unseen_count?key=" + innertubeapikey),
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
                ...((authinfo.LOGGED_IN) && {"Authorization": sapisid}),
                ...((authinfo.LOGGED_IN) && {"X-Goog-AuthUser": sessionindex}),
				'X-YOUTUBE-CLIENT-NAME': '1',
				'X-YOUTUBE-CLIENT-VERSION': clientver,
                'X-GOOG-VISITOR-ID': visitorid,
                ...((authinfo.DELEGATED_SESSION_ID ? true: false) && {"X-Goog-PageId": authinfo.DELEGATED_SESSION_ID}),
        },
        redirect: 'follow',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: JSON.stringify(authinformation)
    });



    }
    else if (action == "notifmenu")
    {

    var authinformation = await generateAuthInformation(false, false, false, true, "", false);

            var response = await fetch(("https://www.youtube.com/youtubei/v1/notification/get_notification_menu?key=" + innertubeapikey),
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
                ...((authinfo.LOGGED_IN) && {"Authorization": sapisid}),
                ...((authinfo.LOGGED_IN) && {"X-Goog-AuthUser": sessionindex}),
				'X-YOUTUBE-CLIENT-NAME': '1',
				'X-YOUTUBE-CLIENT-VERSION': clientver,
                'X-GOOG-VISITOR-ID': visitorid,
                ...((authinfo.DELEGATED_SESSION_ID ? true: false) && {"X-Goog-PageId": authinfo.DELEGATED_SESSION_ID}),
        },
        redirect: 'follow',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: JSON.stringify(authinformation)
    });
    }




    return response.json();

}


var loggedin;

function defineLoggedin() {

	var waitforconfig = setInterval(function() {

		if (ytconfigdata) {

			clearInterval(waitforconfig);

			if (!ytconfigdata.LOGGED_IN) {

				loggedin = false;

			} else {

				loggedin = true;

			}

		}

	}, 10);

}

defineLoggedin();

var ownchannelid;

var scriptsdoneloading;

async function genPage(pbj, guidedata) {

	console.log(pbj);

	//console.log(youtubeidata);

	console.log(guidedata);

	function genMast() {

		var redcheck = pbj[1].response.responseContext.serviceTrackingParams[1].params[2];

		if (redcheck == "False") {

			var red = false;

		} else {

			var red = true;

		}

		var hl = ytconfigdata.HL;

		if (hl != "en" ) {

			var isen = false;

		} else {

			var isen = true;

		}

		/*

		if (!loggedin) {

			var pfp = "";

		} else {

			var pfp = youtubeidata.topbar.desktopTopbarRenderer.topbarButtons[3].topbarMenuButtonRenderer.avatar.thumbnails[0].url;

		}

		*/

		var pfp = "https://www.youtube.com/yts/img/pixel-vfl3z5WfW.gif";

		var template = (`<div id="masthead-positioner">  <div id="ticker-content">


  </div>
  <div id="yt-masthead-container" class="clearfix yt-base-gutter">  <button id="a11y-skip-nav" class="skip-nav" data-target-id="main" tabindex="3">
Skip navigation
  </button>
<div id="yt-masthead"><div class="yt-masthead-logo-container ">  <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-text yt-uix-button-empty yt-uix-button-has-icon appbar-guide-toggle appbar-guide-clickable-ancestor" type="button" onclick=";return false;" id="appbar-guide-button" aria-label="Guide" aria-controls="appbar-guide-menu"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-appbar-guide yt-sprite"></span></span></button>
  <div id="appbar-main-guide-notification-container"></div>
<span id="yt-masthead-logo-fragment"><a href="/" class="masthead-logo-renderer yt-uix-sessionlink      spf-link " data-sessionlink="itct=CAUQsV4iEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" id="logo-container" title="YouTube Home">  <span class="` + (red ? `logo` : `logo-red`) + ` masthead-logo-renderer-logo yt-sprite" title="YouTube Home"></span>` + (isen ? `` : `<span class="content-region">` + (hl.toUpperCase()) + `</span>`) + `
</a></span></div>` + (loggedin ? `<div id="yt-masthead-user" class="yt-uix-clickcard"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-opacity yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=mhsb" id="upload-btn" title="Upload" data-tooltip-text="Upload" aria-labelledby="yt-uix-tooltip7-arialabel"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-material-upload yt-sprite"></span></span></a>
    <div class="notifications-container "><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon sb-notif-off yt-uix-gen204" type="button" onclick=";return false;" id="sb-button-notify" aria-label="Notifications" aria-haspopup="true" data-gen204="bell=jingled"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-bell yt-sprite"></span></span><span class="yt-uix-button-content"> </span></button></div>
    <span id="yt-masthead-account-picker" class="yt-uix-clickcard" data-card-action="yt.www.masthead.handleAccountPickerClick" data-card-class="yt-masthead-account-picker-card yt-masthead-multilogin">
    <button class="yt-uix-button yt-uix-button-size-default yt-masthead-user-icon yt-uix-clickcard-target" type="button" onclick=";return false;" aria-haspopup="true" aria-label="Account profile photo that opens list of alternate accounts" data-orientation="vertical" data-position="bottomleft" data-position-fixed="true" data-force-position="true" id="kbd-nav-441856"><span class="yt-uix-button-content">  <span class="video-thumb  yt-thumb yt-thumb-27">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img width="27" height="27" src="` + pfp + `" alt="" aria-hidden="true">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span></button>



  </span>

</div><div id="yt-masthead-content"><form id="masthead-search" class="  search-form consolidated-form  vve-check" action="/results" onsubmit="if (document.getElementById('masthead-search-term').value == '') return false;" data-clicktracking="CAIQ7VAiEwj515vhguPNAhVLo34KHZZGBvMojh4" data-visibility-tracking="CAIQ7VAiEwj515vhguPNAhVLo34KHZZGBvMojh4"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (document.getElementById('masthead-search-term').value == '') return false; document.getElementById('masthead-search').submit(); return false;;return true;" dir="ltr" id="search-btn" tabindex="2"><span class="yt-uix-button-content">Search</span></button><div id="masthead-search-terms" class="masthead-search-terms-border " dir="ltr"><input id="masthead-search-term" autocomplete="off" autofocus="" onkeydown="if (!this.value &amp;&amp; (event.keyCode == 40 || event.keyCode == 32 || event.keyCode == 34)) {this.onkeydown = null; this.blur();}" class="search-term masthead-search-renderer-input yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" placeholder="Search" title="Search" aria-label="Search" dir="ltr" spellcheck="false" style="outline: none;"></div></form></div></div></div>` : `<div id="yt-masthead-signin"><a href="//www.youtube.com/upload" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-opacity yt-uix-button-size-default yt-uix-button-has-icon yt-uix-tooltip yt-uix-button-empty" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=mhsb" id="upload-btn" title="Upload"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-material-upload yt-sprite"></span></span></a><div class="signin-container "><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary" type="button" onclick=";window.location.href=this.getAttribute('href');return false;" role="link" href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_button%26next%3D%252F%26hl%3Den&amp;hl=en"><span class="yt-uix-button-content">Sign in</span></button></div></div><div id="yt-masthead-content"><form id="masthead-search" class="  search-form consolidated-form  vve-check" action="/results" onsubmit="if (document.getElementById('masthead-search-term').value == '') return false;" data-clicktracking="CAEQ7VAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-visibility-tracking="CAEQ7VAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button" type="submit" onclick="if (document.getElementById('masthead-search-term').value == '') return false; document.getElementById('masthead-search').submit(); return false;;return true;" id="search-btn" dir="ltr" tabindex="2"><span class="yt-uix-button-content">Search</span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><input id="masthead-search-term" autocomplete="off" autofocus="" onkeydown="if (!this.value &amp;&amp; (event.keyCode == 40 || event.keyCode == 32 || event.keyCode == 34)) {this.onkeydown = null; this.blur();}" class="search-term masthead-search-renderer-input yt-uix-form-input-bidi" name="search_query" value="" type="text" tabindex="1" placeholder="Search" title="Search" aria-label="Search"></div></form></div></div></div>`) + `<div id="masthead-appbar-container" class="clearfix"><div id="masthead-appbar"><div id="appbar-content" class="">      <div id="appbar-nav" class="appbar-content-hidable">
<ul class="appbar-nav-menu"><li>    <h2 class="epic-nav-item-heading " aria-selected="true">
      Home
    </h2>
</li><li>    <a href="/feed/trending" class="yt-uix-button   spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;ved=CKgBEMMtGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" aria-selected="false"><span class="yt-uix-button-content">Trending</span></a>
</li>` + (loggedin ? `<li>    <a href="/feed/subscriptions" class="yt-uix-button   spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;ved=CNMBEMMtGAIiEwj515vhguPNAhVLo34KHZZGBvMojh4" aria-selected="false"><span class="yt-uix-button-content">Subscriptions</span></a>
</li>` : ``) + `</ul>  </div>

</div></div></div>

</div>`)/*)*/;

return template;

	}

	function genHome() {

		var shelves = (``);

		var oldiloop = pbj[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.length;

		for (i = 0; i < 8; i++) {

			var shelfroot = pbj[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[i].itemSectionRenderer.contents[0].shelfRenderer;
			
			var sectionname = (``);

			if (typeof shelfroot.title != 'undefined') {

			if (typeof shelfroot.title.runs != 'undefined') {
                
                for (c = 0; c < shelfroot.title.runs.length; c++) {
                    
                    sectionname += shelfroot.title.runs[c].text;
                    
                }

			} else {

				var sectionname = shelfroot.title.simpleText;

			}
			
			}

			var videoitems = (``);

			if (typeof shelfroot.content.horizontalListRenderer != 'undefined') {

				var listrendererroot = shelfroot.content.horizontalListRenderer;

			} else {

				var listrendererroot = shelfroot.content.horizontalMovieListRenderer;

			}

			for (o = 0; o < listrendererroot.items.length; o++) {

				var title = (``);

				if (typeof listrendererroot.items[o].gridRadioRenderer == 'undefined') {

			    //try {

				if (typeof listrendererroot.items[o].gridVideoRenderer != 'undefined') {

					var vidroot = listrendererroot.items[o].gridVideoRenderer;

				} else {

					var vidroot = listrendererroot.items[o].gridMovieRenderer;

				}

				//console.log(vidroot);

				var vidid = vidroot.videoId;
                    
                if (typeof vidroot.lengthText != 'undefined') {

				var lengthtext = vidroot.lengthText.simpleText;
                    
                } else {
                    
                    var lengthtext = false;
                    
                }
                    
                //var title = (``);

				for (e = 0; e < vidroot.title.runs.length; e++) {

					title += vidroot.title.runs[e].text;

				}

				var curl = vidroot.longBylineText.runs[0].navigationEndpoint.browseEndpoint.canonicalBaseUrl;

				var cid = vidroot.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId;
                    
                var cname = (``);
                    
                for (d = 0; d < vidroot.longBylineText.runs.length; d++) {
                    
                    cname += vidroot.longBylineText.runs[d].text;
                    
                }

				if (typeof vidroot.ownerBadges != 'undefined') {

					 if (typeof vidroot.ownerBadges[0] != 'undefined') {

						 if (typeof vidroot.ownerBadges[0].verifiedBadge != 'undefined') {

							 if (typeof vidroot.ownerBadges[0].verifiedBadge.tooltip != 'undefined') {

								 if (vidroot.ownerBadges[0].verifiedBadge.tooltip == "Verified") {

									 var isverified = true;

								 } else {

									 var isverified = false;

								 }

							 } else {

								 var isverified = false;

							 }

						 } else {

							 var isverified = false;

						 }

					 } else {

						 var isverified = false;

					 }

				} else {

					var isverified = false;

				}

			if (typeof vidroot.viewCountText != 'undefined') {

				if (typeof vidroot.viewCountText.simpleText != 'undefined') {

				var viewcount = vidroot.viewCountText.simpleText;

				} else {

					var viewcount = (``);

					for (q = 0; q < vidroot.viewCountText.runs.length; q++) {

						viewcount += vidroot.viewCountText.runs[q].text;

					}

				}

			} else {

				var viewcount = false;

			}

			var islivevideo;
			islivevideo = false;
			
			var hasbadges;

			if (typeof vidroot.badges != 'undefined') {

				hasbadges = true;

			for (r = 0; r < vidroot.badges.length; r++) {

				if (typeof vidroot.badges[r].liveBadge != 'undefined') {

					islivevideo = true;

					break;

				}

			}

			}



			if (typeof vidroot.publishedTimeText != 'undefined') {

				var publishedtime = vidroot.publishedTimeText.simpleText;

			} else {

				var publishedtime = false;

			}

			var ytlockupmeta;

			if (!viewcount && !publishedtime) {

				ytlockupmeta = (``);

			} else {

				ytlockupmeta = (`<div class="yt-lockup-meta ">
                    <ul class="yt-lockup-meta-info">` + (viewcount ? `<li>` + viewcount + `</li>` : ``) + (publishedtime ? `<li>` + publishedtime + `</li>` : ``) + `</ul></div>`);

			}

				var videointhemaking = (`<li class="yt-shelf-grid-item yt-uix-shelfslider-item">
    <div class="yt-lockup yt-lockup-grid yt-lockup-video vve-check clearfix" data-context-item-id="` + vidid + `" data-visibility-tracking="CJABEJQ1GAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh5Ap5r5ldCqh_1r">
        <div class="yt-lockup-dismissable">
            <div class="yt-lockup-thumbnail contains-addto">
                <a aria-hidden="true" href="/watch?v=` + vidid + `" class=" yt-uix-sessionlink      spf-link " data-sessionlink="itct=CJABEJQ1GAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4yCmctaGlnaC10cnZaD0ZFd2hhdF90b193YXRjaA">
                    <div class="yt-thumb video-thumb"><span class="yt-thumb-simple">
  <img height="110" alt="" width="196" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="https://www.youtube.com/yts/img/pixel-vfl3z5WfW.gif" data-thumb="https://i.ytimg.com/vi/` + vidid + `/mqdefault.jpg">` + (lengthtext ? `
<span class="video-time" aria-hidden="true">` + lengthtext + `</span>` : ``) + `</span>
                    </div>
                </a> <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-expanded="false" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-haspopup="true" onclick=";return false;"><span class="yt-uix-button-arrow yt-sprite"></span>
                <ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid">
                    <li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;" data-video-ids="` + vidid + `"><span class="addto-watch-queue-menu-text">Play next</span></li>
                    <li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;" data-video-ids="` + vidid + `"><span class="addto-watch-queue-menu-text">Play now</span></li>
                </ul>
                </button>
                </span>

                <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup ` + (loggedin ? `addto-button` : `addto-button-sign-in`) + ` video-actions spf-nolink hide-until-delayloaded addto-watch-later-button yt-uix-tooltip" type="button" onclick=";return false;" role="button" title="Watch Later" data-video-ids="` + vidid + `"></button>
                <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-video-ids="` + vidid + `" data-style="tv-queue"></button>
            </div>
            <div class="yt-lockup-content">
                <h3 class="yt-lockup-title "><a href="/watch?v=` + vidid + `" class=" yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-sessionlink      spf-link " data-sessionlink="itct=CJABEJQ1GAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4yCmctaGlnaC10cnZaD0ZFd2hhdF90b193YXRjaA" title="` + title + `" aria-describedby="description-id-668298" dir="ltr">` + title + `</a><span class="accessible-description" id="description-id-668298"> - Duration: ` + lengthtext + `.</span></h3>
                <div class="yt-lockup-byline yt-ui-ellipsis yt-ui-ellipsis-2"><a href="` + curl + `" class="g-hovercard yt-uix-sessionlink       spf-link " data-ytid="` + cid + `" data-sessionlink="itct=CJABEJQ1GAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4">` + cname + `</a>&nbsp;` + (isverified ? `<span class="yt-uix-tooltip yt-channel-title-icon-verified yt-sprite" title="Verified"></span>` : ``) + `</div>
                ` + ytlockupmeta + (hasbadges ? `<div class="yt-lockup-badges"><ul class="yt-badge-list "><li class="yt-badge-item">` + (islivevideo ? `<span class="yt-badge  yt-badge-live">Live now</span>` : ``) + `</li></ul></div>` : ``) + `
            </div>
        </div>
    </div>
</li>`);

videoitems += videointhemaking;

			//} catch(e) {console.log(o);};

				} else {

					var playlistroot = listrendererroot.items[o].gridRadioRenderer;

					var ismix;

					if (typeof playlistroot.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer != 'undefined') {

						if (playlistroot.thumbnailOverlays[0].thumbnailOverlayBottomPanelRenderer.icon.iconType == 'MIX') {

							ismix = true;

						} else {

							ismix = false;

						}

					} else {

						ismix = false;

					}

					var ptitle = playlistroot.title.simpleText;

					var pcreator = playlistroot.longBylineText.simpleText;

					var pid = playlistroot.playlistId;

					var pvidinitial = playlistroot.navigationEndpoint.watchEndpoint.videoId;

					if (ismix) {

					var lockupurl = "http://youtube.com/watch?v=" + pvidinitial + "&amp;list=" + pid + "&start_radio=1";

					} else {

						var lockupurl = "http://www.youtube.com/playlist?list=" + pid;

					}
                    
                    var pvideoamount = (``);
                    
                    for (r = 0; r < playlistroot.videoCountShortText.runs.length; r++) {
                        
                        pvideoamount += playlistroot.videoCountShortText.runs[r].text;
                        
                    }

					var radiointhemaking = (`<li class="yt-shelf-grid-item yt-uix-shelfslider-item">
    <div class="clearfix yt-lockup yt-lockup-grid yt-lockup-playlist">
        <div class=yt-lockup-dismissable>
            <div class=yt-lockup-thumbnail><a class="spf-link yt-uix-sessionlink yt-pl-thumb-link" data-sessionlink="ei=PGRXWeTIOPDB-AO07KjoBg&feature=c4-overview&ved=CN8CENsqGAAiEwjk1orq2-fUAhXwIH4KHTQ2Cm0omxw" href="` + lockupurl + `"><span class=yt-pl-thumb><span class="video-thumb yt-thumb yt-thumb-196"><span class=yt-thumb-default><span class=yt-thumb-clip><img alt=""aria-hidden=true data-thumb="https://i.ytimg.com/vi/` + pvidinitial + `/mqdefault.jpg" data-ytimg=1 onload=window.__ytRIL&&__ytRIL(this) src="http://youtube.com/yts/img/pixel-vfl3z5WfW.gif" width="196"> <span class=vertical-align></span> </span></span></span><span class=sidebar><span class="yt-pl-sidebar-content yt-valign"><span class=yt-valign-container><span class=formatted-video-count-label><b>` + pvideoamount + `</b> videos </span><span class="yt-sprite yt-pl-icon ` + (ismix ? `yt-pl-icon-mix` : `yt-pl-icon-reg`) + `"></span> </span></span></span><span class=yt-pl-thumb-overlay><span class=yt-pl-thumb-overlay-content><span class="yt-sprite play-icon"></span> <span class=yt-pl-thumb-overlay-text>Play all </span></span></span><span class=yt-pl-watch-queue-overlay><span class="video-actions dark-overflow-action-menu thumb-menu"><button class="hide-until-delayloaded no-icon-markup spf-nolink yt-uix-button yt-uix-button-empty yt-uix-button-has-icon addto-watch-queue-menu flip yt-uix-button-dark-overflow-action-menu yt-uix-button-reverse yt-uix-button-size-default"onclick=return!1 type=button aria-expanded=false aria-haspopup=true><span class="yt-sprite yt-uix-button-arrow"></span><ul class="hid watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu"><li class="addto-watch-queue-menu-choice addto-watch-queue-play-now overflow-menu-choice yt-uix-button-menu-item"data-action=play-now data-list-id=` + pid + ` onclick=return!1 role=menuitem><span class=addto-watch-queue-menu-text>Play now</span></ul></button> </span><button class="hide-until-delayloaded no-icon-markup spf-nolink yt-uix-button yt-uix-button-empty yt-uix-button-has-icon addto-button addto-queue-button addto-tv-queue-button video-actions yt-uix-button-default yt-uix-button-size-small yt-uix-tooltip"onclick=return!1 type=button data-list-id=` + pid + ` data-style=tv-queue title=Queue></button></span></span></a></div>
            <div class=yt-lockup-content>
                <h3 class=yt-lockup-title><a class="spf-link yt-uix-sessionlink yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-tile-link" data-sessionlink="ei=PGRXWeTIOPDB-AO07KjoBg&ved=CN8CENsqGAAiEwjk1orq2-fUAhXwIH4KHTQ2Cm0omxw" href="http://youtube.com/playlist?list=` + pid + `" aria-describedby=description-id-92234 dir=ltr title="` + ptitle + `">` + ptitle + `</a><span class=accessible-description id=description-id-92234> - Playlist</span></h3>
                <!--<div class="yt-ui-ellipsis yt-ui-ellipsis-2 yt-lockup-byline"><a class="spf-link yt-uix-sessionlink g-hovercard" data-sessionlink="ei=PGRXWeTIOPDB-AO07KjoBg" href=http://youtube.com/user/markiplierGAME data-ytid=UC7_YxT-KID8kRbqZo7MyscQ>Markiplier</a> <span class="yt-sprite yt-channel-title-icon-verified yt-uix-tooltip" aria-label=Verified data-tooltip-text=Verified></span></div>-->
                <div class=yt-lockup-meta>
                    <ul class=yt-lockup-meta-info>
                        <li>` + pcreator + `</ul>
                </div>
            </div>
        </div>
        <div class="hid yt-lockup-notifications-container" style=height:110px></div>
    </div>`);

	videoitems += radiointhemaking;













				}



			}

			var randomnum = Math.floor(100000 + Math.random() * 900000);

			var islink;

			var shelflink;

			var hasannotation;

			var constructedannotation = (``);

			var shelfrendererroot2 = pbj[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[i].itemSectionRenderer.contents[0].shelfRenderer;

				if (typeof pbj[1].response.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[i].itemSectionRenderer.contents[0].shelfRenderer.titleAnnotation != 'undefined') {

					hasannotation = true;

					for (j = 0; j < shelfrendererroot2.titleAnnotation.runs.length; j++) {

						var annotathaslink;

						var link;

						var annotattext = shelfrendererroot2.titleAnnotation.runs[j].text;

						var isbold;

						if (shelfrendererroot2.titleAnnotation.runs[j].bold != 'undefined') {

							if (shelfrendererroot2.titleAnnotation.runs[j].bold) {

								isbold = true;

							} else {

								isbold = false;

							}

						} else {

							isbold = false;

						}

						if (typeof shelfrendererroot2.titleAnnotation.runs[j].navigationEndpoint != 'undefined') {

									annotathaslink = true;

									if (typeof shelfrendererroot2.titleAnnotation.runs[j].navigationEndpoint.canonicalBaseUrl != 'undefined') {

									link = shelfrendererroot2.titleAnnotation.runs[j].navigationEndpoint.canonicalBaseUrl;

									} else {

										link = "https://www.youtube.com/channel/" + shelfrendererroot2.titleAnnotation.runs[j].navigationEndpoint.browseId;

									}

							} else {

									annotathaslink = false;

							}

							var annotationinthemaking = (isbold ? `<b>` + (annotathaslink ? `<a href="` + link + `" class="g-hovercard yt-uix-sessionlink      spf-link " data-ytid="UCF0pVplsI8R5kcAqgtoRqoA" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg">` + annotattext + `</a>` : annotattext) : annotattext);

							constructedannotation += annotationinthemaking;

						}

				} else {

					hasannotation = false;

				}

				if (typeof shelfrendererroot2.endpoint != 'undefined') {

				islink = true;

				shelflink = shelfrendererroot2.endpoint.browseEndpoint.canonicalBaseUrl;

				}

				var hasthumb;

				if (typeof shelfrendererroot2.thumbnail != 'undefined') {

					hasthumb = true;

					var shelfthumb = shelfrendererroot2.thumbnail.thumbnails[0].url;

				} else {

					hasthumb = false;

				}

				var shelflengthisgreaterthan6;

				var hasmovielist;

				if (typeof shelfrendererroot2.content.horizontalMovieListRenderer != 'undefined') {

					hasmovielist = true;

				} else {

					hasmovielist = false;

				}

				if (!hasmovielist) {

					if (shelfrendererroot2.content.horizontalListRenderer.items.length > 5) {

						shelflengthisgreaterthan6 = true;

					} else {

						shelflengthisgreaterthan6 = false;

					}

				} else {

					if (shelfrendererroot2.content.horizontalMovieListRenderer.items.length > 5) {

						shelflengthisgreaterthan6 = true;

					} else {

						shelflengthisgreaterthan6 = false;

					}

				}

			var shelfinthemaking = (`<li>
    <ol id="item-section-` + randomnum + `" class="item-section">
        <li>
            <div class="feed-item-container browse-list-item-container yt-section-hover-container compact-shelf shelf-item branded-page-box vve-check clearfix " data-visibility-tracking="CIEBENwcGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4=">
                <div class="feed-item-dismissable">
                    <div class="shelf-title-table">
                        <div class="shelf-title-row">
                            <h2 class="branded-page-module-title shelf-title-cell">` + (islink ? `<a href="` + shelflink + `" class="branded-page-module-title-link yt-uix-sessionlink      spf-link " data-sessionlink="itct=CIEBENwcGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4">` + (hasthumb ? `<div class="yt-lockup-thumbnail"><div class="yt-thumb video-thumb"><span class="yt-thumb-simple">
  <img height="20" alt="" width="20" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="` + shelfthumb + `">
</span></div></div>` : ``) + `<span class="branded-page-module-title-text">` + sectionname + `</span></a>` + (hasannotation ? `&nbsp;<span class="shelf-annotation shelf-title-annotation">` + constructedannotation + `</span>` : ``) + `</h2>` : `<span class="branded-page-module-title-text">` + sectionname + `</span>`) + `
                            <div class="menu-container shelf-title-cell"></div>
                        </div>
                    </div>
                    <div class="compact-shelf yt-uix-shelfslider yt-uix-shelfslider-at-head">
                        <div class="yt-uix-shelfslider-body yt-viewport">
                            <ul class="yt-uix-shelfslider-list">` + videoitems + `</ul>
                        </div>` + (shelflengthisgreaterthan6 ? `<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-shelf-slider-pager yt-uix-shelfslider-prev" type="button" onclick=";return false;"><span class="yt-uix-button-content"><span class="yt-uix-shelfslider-prev-arrow yt-uix-tooltip yt-sprite" aria-label="Previous" data-tooltip-text="Previous"></span></span></button><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-shelf-slider-pager yt-uix-shelfslider-next" type="button" onclick=";return false;"><span class="yt-uix-button-content"><span class="yt-uix-shelfslider-next-arrow yt-uix-tooltip yt-sprite" aria-label="Next" data-tooltip-text="Next"></span></span></button>` : ``) + `</div>
                </div>
                <div class="feed-item-dismissal-notices"></div>
            </div>
        </li>
    </ol>
</li>`);

shelves += shelfinthemaking;

}

var shelfFinalTemplate = (`<div id="content" class="  content-alignment" role="main">


  <div class="branded-page-v2-container branded-page-base-bold-titles branded-page-v2-container-flex-width branded-page-v2-secondary-column-hidden">

    <div class="branded-page-v2-col-container">
      <div class="branded-page-v2-col-container-inner">
        <div class="branded-page-v2-primary-col">
          <div class="   yt-card  clearfix">
                <div class="branded-page-v2-primary-col-header-container branded-page-v2-primary-column-content">

    </div>
  <div class="branded-page-v2-body branded-page-v2-primary-column-content" id="">
      <div id="feed" class="">
      <div id="feed-main-what_to_watch" class="individual-feed" data-feed-name="what_to_watch" data-feed-type="main">

<ol id="section-list-249032" class="section-list">





` + shelves + `









</ol>






    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button scrolldetect" type="button" onclick=";return false;" aria-label="Load more
" data-uix-load-more-href="/browse_ajax?action_continuation=1&amp;continuation=4qmFsgJ9Eg9GRXdoYXRfdG9fd2F0Y2gaaENBaDZTa05wYjBGQlIxWjFRVUZHVmxWM1FVSldWazFCUVZGQ1IxSllaRzlaV0ZKbVpFYzVabVF5UmpCWk1tZEJRVkZCUVVGUlJVSkJRVUZDUVVGRlVVRkNhV281VEdadWVIQlFWRUZuQgA%253D&amp;target_id=section-list-249032&amp;direct_render=1" data-scrolldetect-offset="600" data-uix-load-more-target-id="section-list-249032" data-scrolldetect-callback="load-more-auto"><span class="yt-uix-button-content">  <span class="load-more-loading hid">
      <span class="yt-spinner">
      <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

Loading...
  </span>

  </span>
  <span class="load-more-text">
    Load more

  </span>
</span></button>

  </div>

  <div id="feed-error" class="individual-feed  hid">
    <p class="feed-message">
We were unable to complete the request, please try again later.
    </p>
  </div>

  <div id="feed-loading-template" class=" hid">
    <div class="feed-message">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

    </div>
  </div>

  </div>
  <div id="footer-ads">



  <div id="ad_creative_3" class="ad-div " style="z-index: 1">
    <div id="ad_creative_div_3"></div>
    <script>(function() {function tagMpuIframe() {var containerEl = document.getElementById('ad_creative_div_3');if (!containerEl) {return;}var iframeEl = document.createElement('iframe');var iframeSrc = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?ad_rule=0\u0026d_imp=1\u0026gdfp_req=1\u0026iu=%2F6762%2Fmkt.ythome_1x1\u0026scp=dc_yt%3D1%26kga%3D-1%26kgg%3D-1%26klg%3Den%26kmyd%3Dad_creative_3%26ssl%3D1%26ytexp%3D9419451%252C9422596%252C9428398%252C9431012%252C9434289%252C9437553%252C9438290%252C9444897%252C9446054%252C9448053%252C9451823%252C9452098%252C9453700%252C9455480%252C9457360%252C9459986%252C9460072%252C9460350%252C9460627%252C9463153%252C9464344%252C9464495%252C9464640%252C9465438%252C9466754%252C9466777%252C9467777%252C9467781%252C9468956%252C9469926%252C9470125\u0026sz=1x1" + '&correlator=' +Math.floor(Math.random() * 10000000000000000);iframeEl.id = 'ad_creative_iframe_3';iframeEl.width = '1';iframeEl.height = '1';iframeEl.style.cssText = 'z-index:1;';iframeEl.scrolling = 'no';iframeEl.frameBorder = '0';containerEl.appendChild(iframeEl);iframeEl.src = iframeSrc;}tagMpuIframe();if (window.ytcsi) {window.ytcsi.info("yt_ad", "1", '');}})();</script>
  </div>


  </div>

  </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);

return shelfFinalTemplate;

	}

	function genGuide() {
		
		var subscriptionnumber;

		if (!loggedin) {

			var finalGuideTemplate = (`<div id="guide" class="yt-scrollbar">      <div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-layout appbar-guide-clickable-ancestor yt-uix-scroller yt-uix-tdl" role="navigation">
    <div id="guide-container">
        <div class="guide-module-content yt-scrollbar">
    <ul class="guide-toplevel">
            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="what_to_watch-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link  guide-item-selected   " href="/" title="Home" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-system&amp;ved=CJQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D" data-external-id="what_to_watch">
    <span class="yt-valign-container">
        <span class="thumb guide-what-to-watch-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Home
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="trending-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/feed/trending" title="Trending" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-trending&amp;ved=CJUBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEMEgpGRXRyZW5kaW5n" data-external-id="trending">
    <span class="yt-valign-container">
        <span class="thumb guide-trending-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Trending
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="history-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/feed/history" title="History" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-personal&amp;ved=CJYBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQELEglGRWhpc3Rvcnk%3D" data-external-id="history">
    <span class="yt-valign-container">
        <span class="thumb guide-history-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            History
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="unlimited-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/red" title="Get YouTube Red" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;ved=CJcBELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQENEgtTUHVubGltaXRlZA%3D%3D" data-external-id="unlimited">
    <span class="yt-valign-container">
        <span class="thumb guide-video-youtube-red-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Get YouTube Red
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    " href="https://tv.youtube.com/?utm_source=youtube_web&amp;utm_medium=ep&amp;utm_campaign=home&amp;ve=34273" title="Get YouTube TV" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;ved=CJgBEOGLAhgEIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e" data-serialized-endpoint="qrnBvQFZCldodHRwczovL3R2LnlvdXR1YmUuY29tLz91dG1fc291cmNlPXlvdXR1YmVfd2ViJnV0bV9tZWRpdW09ZXAmdXRtX2NhbXBhaWduPWhvbWUmdmU9MzQyNzM%3D" data-external-id="">
    <span class="yt-valign-container">
        <span class="thumb guide-unplugged-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Get YouTube TV
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
          <h3>
      Best of YouTube
    </h3>

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC-9-kyTW8ZkZNDHQJ6FgpwQ-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" title="Music" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJoBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQy05LWt5VFc4WmtaTkRIUUo2Rmdwd1E%3D" data-external-id="UC-9-kyTW8ZkZNDHQJ6FgpwQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Music
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCEgdi0XIXXZ-qJOFPf4JSKw-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw" title="Sports" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJsBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ0VnZGkwWElYWFotcUpPRlBmNEpTS3c%3D" data-external-id="UCEgdi0XIXXZ-qJOFPf4JSKw">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/Egdi0XIXXZ-qJOFPf4JSKw/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Sports
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCOpNcN46UbXVtpKMrmU4Abg-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCOpNcN46UbXVtpKMrmU4Abg" title="Gaming" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJwBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ09wTmNONDZVYlhWdHBLTXJtVTRBYmc%3D" data-external-id="UCOpNcN46UbXVtpKMrmU4Abg">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/OpNcN46UbXVtpKMrmU4Abg/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Gaming
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UClgRkhTL3_hImCAmdLfDE4g-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UClgRkhTL3_hImCAmdLfDE4g" title="Movies" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJ0BELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ2xnUmtoVEwzX2hJbUNBbWRMZkRFNGc%3D" data-external-id="UClgRkhTL3_hImCAmdLfDE4g">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/lgRkhTL3_hImCAmdLfDE4g/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Movies
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCl8dMTqDrJQ0c8y23UBu4kQ-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCl8dMTqDrJQ0c8y23UBu4kQ" title="TV Shows" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJ4BELUsGAQiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ2w4ZE1UcURySlEwYzh5MjNVQnU0a1E%3D" data-external-id="UCl8dMTqDrJQ0c8y23UBu4kQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="https://yt3.ggpht.com/-hFxEr8QHrvM/AAAAAAAAAAI/AAAAAAAAAAA/REjjL0X3gIs/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            TV Shows
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCYfdidRxbB8Qhf0Nx7ioOYw-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCYfdidRxbB8Qhf0Nx7ioOYw" title="News" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CJ8BELUsGAUiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ1lmZGlkUnhiQjhRaGYwTng3aW9PWXc%3D" data-external-id="UCYfdidRxbB8Qhf0Nx7ioOYw">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/YfdidRxbB8Qhf0Nx7ioOYw/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            News
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UC4R8DWoMoI7CAwX8_LjQHig-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UC4R8DWoMoI7CAwX8_LjQHig" title="Live" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CKABELUsGAYiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQzRSOERXb01vSTdDQXdYOF9MalFIaWc%3D" data-external-id="UC4R8DWoMoI7CAwX8_LjQHig">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/4R8DWoMoI7CAwX8_LjQHig/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Live
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCBR8-60-B28hp2BmDPdntcQ-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCBR8-60-B28hp2BmDPdntcQ" title="Spotlight" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CKEBELUsGAciEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ0JSOC02MC1CMjhocDJCbURQZG50Y1E%3D" data-external-id="UCBR8-60-B28hp2BmDPdntcQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="https://yt3.ggpht.com/-dL2jeHlm2Ok/AAAAAAAAAAI/AAAAAAAAAAA/ZCMMkRj-hrw/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            Spotlight
          </span>
        </span>
    </span>
  </a>

  </li>


  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCzuqhhs6NWbgTzMuM09WKDQ-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link    " href="/channel/UCzuqhhs6NWbgTzMuM09WKDQ" title="360° Video" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel&amp;ved=CKIBELUsGAgiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qDduQEaEhhVQ3p1cWhoczZOV2JnVHpNdU0wOVdLRFE%3D" data-external-id="UCzuqhhs6NWbgTzMuM09WKDQ">
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" data-thumb="//i.ytimg.com/i/zuqhhs6NWbgTzMuM09WKDQ/1.jpg" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="/yts/img/pixel-vfl3z5WfW.gif">

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            360° Video
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="guide_builder-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    " href="/channels" title="Browse channels" data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-manage&amp;ved=CKQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4" data-serialized-endpoint="0qPduQECCAE%3D" data-external-id="guide_builder">
    <span class="yt-valign-container">
        <span class="thumb guide-builder-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Browse channels
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section guide-header signup-promo">
    <p>
      Sign in now to see your channels and recommendations!
    </p>
    <div id="guide-builder-promo-buttons" class="signed-out clearfix">
      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dsign_in_promo%26next%3D%252F%26hl%3Den&amp;hl=en" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-primary yt-uix-button-size-default" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg"><span class="yt-uix-button-content">Sign in</span></a>
    </div>
  </li>

    </ul>
  </div>

    </div>
  </div>
  <div id="appbar-guide-notifications" class="hid">
        <div id="appbar-guide-notification-watch-later-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-watch-later-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-subscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription added</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-unsubscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription removed</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Saved to Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-set">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >You'll be reminded about this event</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Event reminder removed</span></span></div>
    -->
  </div>


  </div>
  <div id="appbar-guide-item-templates" class="hid">
        <div id="appbar-guide-item-template-playlist">
      <!--

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-playlists" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-playlists-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-mix">
      <!--

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-playlists" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-mix-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-channel">
      <!--

  <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink    "
    href="__URL__"
    title="__TITLE__"
    data-visibility-tracking="" data-sessionlink="ei=CSjoWL-iFYGs-wP_wrwg&amp;feature=g-channel" data-serialized-endpoint="" data-external-id="__ID__"
  >
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20"
    >
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">

  <img height="20" alt="" width="20" aria-hidden="true" onload=";window.__ytRIL &amp;&amp; __ytRIL(this)" data-ytimg="1" src="__THUMBNAIL_URL__" >

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Subscription added">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>

  </div>

</div>`);

return finalGuideTemplate;

		} else {

			var primarysection = (`<li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="what_to_watch-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link  guide-item-selected  " href="/" title="Home" data-external-id="what_to_watch" data-serialized-endpoint="0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNYBELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-what-to-watch-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Home
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCX7oszedvnbp06-_CWVwdOA-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/channel/UCX7oszedvnbp06-_CWVwdOA" title="My Channel" data-external-id="UCX7oszedvnbp06-_CWVwdOA" data-serialized-endpoint="0qDduQEaEhhVQ1g3b3N6ZWR2bmJwMDYtX0NXVndkT0E%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNcBELUsGAEiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-my-channel-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            My Channel
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="trending-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/trending" title="Trending" data-external-id="trending" data-serialized-endpoint="0qDduQEMEgpGRXRyZW5kaW5n" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-trending&amp;ved=CNgBELUsGAIiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-trending-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Trending
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="subscriptions-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/subscriptions" title="Subscriptions" data-external-id="subscriptions" data-serialized-endpoint="0qDduQEREg9GRXN1YnNjcmlwdGlvbnM%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNkBELUsGAMiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-my-subscriptions-icon yt-sprite"></span>
        <span class="display-name ">
          <span>
            Subscriptions
          </span>
        </span>
    </span>
          <span class="guide-count yt-uix-tooltip yt-valign">
      <span class="yt-valign-container guide-count-value">6</span>
    </span>

  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="history-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/history" title="History" data-external-id="history" data-serialized-endpoint="0qDduQELEglGRWhpc3Rvcnk%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNoBELUsGAQiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-history-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            History
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="VLWL-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/playlist?list=WL" title="Watch Later" data-external-id="VLWL" data-serialized-endpoint="0qDduQEGEgRWTFdM" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNsBELUsGAUiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-watch-later-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Watch Later
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>`);

  function genLibrary() {

	   var playlistitemsvisible = (``);

	   var playlistitemshidden = (``);

	   var hasshowmorebutton;

	   function findCollapsibleSectionEntryRenderer() {

		   for (p = 0; p < guidedata.items[0].guideSectionRenderer.items.length; p++) {

			   if (typeof guidedata.items[0].guideSectionRenderer.items[p].guideCollapsibleSectionEntryRenderer != 'undefined') {

				   return p;

			   }

		   }

	   }

	   var collapsiblesearch = findCollapsibleSectionEntryRenderer();

	   function findPlaylistJson() {

		   for (l = 0; l < guidedata.items[0].guideSectionRenderer.items[3].guideCollapsibleSectionEntryRenderer.sectionItems.length; l++) {

			   if (typeof guidedata.items[0].guideSectionRenderer.items[3].guideCollapsibleSectionEntryRenderer.sectionItems[l].guideCollapsibleEntryRenderer != 'undefined') {

				   return l;

			   }

		   }

	   }

	   var playlistjsonsearch = findPlaylistJson();

	   function findOwnChannelLink() {

		   for (a = 0; a < guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems.length; a++) {

			   var currententry = guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems[a];

			   if (currententry.guideEntryRenderer.icon.iconType == "MY_VIDEOS" ) {

				   var urlendpoint = currententry.guideEntryRenderer.navigationEndpoint.urlEndpoint.url;

				   for (y = 0; y < urlendpoint.split("/").length; y++) {

					   if (urlendpoint.split("/")[y].startsWith("UC")) {

						   return urlendpoint.split("/")[y];

					   } else {

						   continue;

					   }

				   }

			   }

		   }

	   }

	   ownchannelid = findOwnChannelLink();

	   var expandableitem = guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems[playlistjsonsearch].guideCollapsibleEntryRenderer.expandableItems;

	   var runjloop;

	   var jloopstartingpoint;

	   for (m = 0; m < expandableitem.length; m++) {

		   if (guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems[playlistjsonsearch].guideCollapsibleEntryRenderer.expandableItems[m].guideEntryRenderer.icon.iconType == 'LIKES_PLAYLIST') {

			   continue;

		   }

		   var guideroot = guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems[playlistjsonsearch].guideCollapsibleEntryRenderer.expandableItems[m];

		   //var playlistitemsvisible = (``);

		   var playlisttitle = guideroot.guideEntryRenderer.formattedTitle.simpleText;

		   var bid = guideroot.guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId;

		   if (bid.startsWith("VL")) {

			   var trueplaylistid = bid.slice(2);

		   } else {

			   var trueplaylistid = bid;

		   }

		   var playlistinthemaking1 = (`<li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="` + bid + `-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/playlist?list=` + trueplaylistid + `" title="` + playlisttitle + `" data-external-id="` + bid + `" data-serialized-endpoint="0qDduQEmEiRWTFBMV3RSdHdLZ0NPTnBrMzVYNE9DUlB3ckR2YWR5N1pKbFU%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-playlists&amp;ved=CN0BELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-playlists-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            ` + playlisttitle + `
          </span>
        </span>
    </span>
  </a>

  </li>`);

  playlistitemsvisible += playlistinthemaking1;

  		   var htmlparser = new DOMParser().parseFromString(playlistitemsvisible, "text/html");
		   htmlparser = new DOMParser().parseFromString(playlistitemsvisible, "text/html");

		   //console.log(htmlparser);

		   if (htmlparser.querySelectorAll("li").length >= 2) {

			   playlistitemsvisible += (`<li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="VLLL-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/playlist?list=LL" title="Liked videos" data-external-id="VLLL" data-serialized-endpoint="0qDduQEcEhpWTExMWDdvc3plZHZuYnAwNi1fQ1dWd2RPQQ%3D%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-playlists&amp;ved=CN8BELUsGAIiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-likes-playlist-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Liked videos
          </span>
        </span>
    </span>
  </a>

  </li>`);

  runjloop = true;

  jloopstartingpoint = htmlparser.querySelectorAll("li").length;

			   break;

		   }

	   }

	   if (runjloop) {

		   hasshowmorebutton = true;

	   for (j = jloopstartingpoint; j < expandableitem.length; j++) {

				 var guideroot2 = guidedata.items[0].guideSectionRenderer.items[collapsiblesearch].guideCollapsibleSectionEntryRenderer.sectionItems[playlistjsonsearch].guideCollapsibleEntryRenderer.expandableItems[j];

				 var playlisttitle = guideroot2.guideEntryRenderer.formattedTitle.simpleText;

		   var bid = guideroot2.guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId;

		   if (bid.startsWith("VL")) {

//var sliceend = bid.length - 1;

			   var trueplaylistid = bid.slice(2);

		   } else {

			   var trueplaylistid = bid;

		   }

		   var playlistinthemaking2 = (`<li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="` + bid + `-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/playlist?list=` + trueplaylistid + `" title="` + playlisttitle + `" data-external-id="` + bid + `" data-serialized-endpoint="0qDduQEmEiRWTFBMV3RSdHdLZ0NPTnBrMzVYNE9DUlB3ckR2YWR5N1pKbFU%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-playlists&amp;ved=CN0BELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-playlists-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            ` + playlisttitle + `
          </span>
        </span>
    </span>
  </a>

  </li>`);

  playlistitemshidden += playlistinthemaking2;

	   }

	   } else {

		   hasshowmorebutton = false;

	   }

	   var finalLibraryTemplate = (`<li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">
          <h3>
      <a href="/channel/` + ownchannelid + `/playlists" class="g-hovercard yt-uix-sessionlink      spf-link " data-ytid="` + ownchannelid + `" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal" data-name="g-personal">Library</a>
    </h3>

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              ` + playlistitemsvisible + `

              ` + (hasshowmorebutton ? `<div class="guide-collapsible-item yt-uix-expander yt-uix-expander-collapsed" tabindex="0">
    <div class="yt-uix-expander-body">
          ` + playlistitemshidden + `

      <button class="yt-uix-expander-head guide-view-more yt-valign" data-visibility-tracking="">
        <span class="yt-valign-container">
          Show fewer
        </span>
      </button>
    </div>
    <div class="yt-uix-expander-collapsed-body">
      <button class="yt-uix-expander-head guide-view-more yt-valign" data-visibility-tracking="">
        <span class="yt-valign-container">
          Show more
        </span>
      </button>
    </div>
  </div>` : ``) + `

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>`);

  return finalLibraryTemplate;

  }

  function genSubscriptions() {

	  var subscriptions = (``);

	  function findSubscriptionRendererJson() {

		  for (i = 0; i < guidedata.items.length; i++) {

			  if (typeof guidedata.items[i].guideSubscriptionsSectionRenderer != 'undefined') {

				  return i;

			  }

		  }

	  }

	  var subscriptionrenderer = findSubscriptionRendererJson();

	  for (l = 0; l < guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items.length; l++) {

		  if (typeof guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideCollapsibleEntryRenderer != 'undefined') {

			  break;

		  }

		  var subscriptionid = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId;

		  var channelurl = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url;

		  var subscriptionchannelname = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.formattedTitle.simpleText;

		  var subscriptionpfp = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.thumbnail.thumbnails[0].url;

		  var accessibilitydata = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.accessibility.accessibilityData.label;

		  var hasnewcontent;

		  if (accessibilitydata.search("New content available") != "-1") {

			  hasnewcontent = true;
			  
			  if (!subscriptionnumber) {
			  
			  subscriptionnumber = true;
			  
			  }

		  } else {

			  hasnewcontent = false;

		  }
		  
		  var islive;

		  if (typeof guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.badges != 'undefined') {

			  var isliveboolean = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[l].guideEntryRenderer.badges;

			  if (typeof isliveboolean.liveBroadcasting != 'undefined') {

				  if (isliveboolean.liveBroadcasting) {

					  islive = true;

				  } else {

					  islive = false;

				  }

			  } else {

				  islive = false;

			  }

		  } else {

			  islive = false;

		  }

		  var subscriptioninthemaking1 = (`<li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="` + subscriptionid + `-guide-item" data-visibility-tracking="" role="menuitem">

    <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="` + channelurl + `" title="` + subscriptionchannelname + `" data-external-id="` + subscriptionid + `" data-serialized-endpoint="0qDduQEaEhhVQ1QyWDE5SkphSkdVTjdtcll1SW1BTlE%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-channel&amp;ved=COYBELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
        <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img height="20" width="20" aria-hidden="true" data-thumb="` + subscriptionpfp + `" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">

        <span class="vertical-align"></span>
        </span>
        </span>
        </span>
        </span>
        <span class="display-name ">
          <span>
            ` + subscriptionchannelname + `
          </span>
        </span>
        </span>
        <span class="guide-count yt-uix-tooltip yt-valign">
      ` + (islive ? `<span class="guide-badge-live yt-uix-tooltip yt-valign" data-tooltip-text="LIVE" aria-labelledby="yt-uix-tooltip1923-arialabel" title="LIVE">
        <span class="yt-valign-container"></span>
      </span>` : (hasnewcontent ? `<span class="yt-valign-container guide-count-value">1</span>` : ``)) + `
        </span>

    </a>

</li>`);

		 subscriptions += subscriptioninthemaking1;

	  }

	  		  function findCollapsibleItemJson() {

			  for (j = 0; j < guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items.length; j++) {

				  if (typeof guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[j].guideCollapsibleEntryRenderer != 'undefined') {

					  return j;

				  }

			  }

		  }

		  var collapsiblejson = findCollapsibleItemJson();

	  for (o = 0; o < guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[collapsiblejson].guideCollapsibleEntryRenderer.expandableItems.length; o++) {

		  var islive2;

			  var currentsubscriptionjson = guidedata.items[subscriptionrenderer].guideSubscriptionsSectionRenderer.items[collapsiblejson].guideCollapsibleEntryRenderer.expandableItems[o];

			  if (typeof currentsubscriptionjson.guideEntryRenderer.icon != 'undefined') {

				  if (currentsubscriptionjson.guideEntryRenderer.icon.iconType == 'ADD_CIRCLE') {

					  break;

				  }

			  }

			  var subscriptioncid = currentsubscriptionjson.guideEntryRenderer.navigationEndpoint.browseEndpoint.browseId;

			  var subscriptioncanonicalurl = currentsubscriptionjson.guideEntryRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url;

			  var subscriptionchanneltitle = currentsubscriptionjson.guideEntryRenderer.formattedTitle.simpleText;

			  var subscriptionaccessibilitydata = currentsubscriptionjson.guideEntryRenderer.accessibility.accessibilityData.label;

			  var newcontent;

			  if (subscriptionaccessibilitydata.search("New content available") != "-1") {

				  newcontent = true;

			  } else {

				  newcontent = false;

			  }

			  if (typeof currentsubscriptionjson.guideEntryRenderer.badges != 'undefined') {

				  var livebroadcastingboolean = currentsubscriptionjson.guideEntryRenderer.badges;

				  if (typeof livebroadcastingboolean.liveBroadcasting != 'undefined') {

					  if (livebroadcastingboolean.liveBroadcasting) {

						  islive2 = true;

					  } else {

						  islive2 = false;

					  }

				  } else {

					  islive2 = false;

				  }

			  } else {

				  islive2 = false;

			  }

			  //var livebroadcastingboolean = currentsubscriptionjson.guideEntryRenderer.badges.liveBroadcasting;

			  try {

			  var subscriptioncpfp = currentsubscriptionjson.guideEntryRenderer.thumbnail.thumbnails[0].url;

			  } catch(err) { console.log(o); };

			  var subscriptioninthemaking2 = (`<li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="` + subscriptioncid + `-guide-item" data-visibility-tracking="" role="menuitem">

    <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="` + subscriptioncanonicalurl + `" title="` + subscriptionchanneltitle + `" data-external-id="` + subscriptioncid + `" data-serialized-endpoint="0qDduQEaEhhVQ1QyWDE5SkphSkdVTjdtcll1SW1BTlE%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-channel&amp;ved=COYBELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
        <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20">
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img height="20" width="20" aria-hidden="true" data-thumb="` + subscriptioncpfp + `" src="https://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="">

        <span class="vertical-align"></span>
        </span>
        </span>
        </span>
        </span>
        <span class="display-name ">
          <span>
            ` + subscriptionchanneltitle + `
          </span>
        </span>
        </span>
        <span class="guide-count yt-uix-tooltip yt-valign">
      ` + (islive2 ? `<span class="guide-badge-live yt-uix-tooltip yt-valign" data-tooltip-text="LIVE" aria-labelledby="yt-uix-tooltip1923-arialabel" title="LIVE">
        <span class="yt-valign-container"></span>
      </span>` : (newcontent ? `<span class="yt-valign-container guide-count-value">1</span>` : ``)) + `
        </span>

    </a>

</li>`);

subscriptions += subscriptioninthemaking2;

		  }

	  var finalSubscriptionTemplate = (`<li id="guide-subscriptions-section" class="guide-section hover-action-menu-trigger vve-check" data-visibility-tracking="">
      <span class="guide-sort-container yt-uix-button-group"><button aria-expanded="false" type="button" class="guide-sort-button flip yt-uix-button yt-uix-button-hover-action-menu yt-uix-button-size-small yt-uix-button-has-icon yt-uix-button-empty" aria-label="Subscriptions sorting mode" aria-haspopup="true" onclick=";return false;" data-button-has-sibling-menu="true" data-guide-sort="2"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-hover-action-menu yt-sprite"></span></span><span class="yt-uix-button-arrow yt-sprite"></span><ul class=" yt-uix-button-menu yt-uix-button-menu-hover-action-menu hid" role="menu" aria-haspopup="true"><li role="menuitem"><span class="guide-sort-choice yt-uix-button-menu-item" onclick=";return false;" checked="False" data-guide-sort="0">Most relevant</span></li><li role="menuitem"><span class="guide-sort-choice yt-uix-button-menu-item" onclick=";return false;" checked="False" data-guide-sort="1">New activity</span></li><li role="menuitem"><span class="yt-uix-button-icon-wrapper yt-uix-button-icon-checkbox"><span class="yt-uix-button-icon-dropdown-checked yt-sprite"></span></span><span class="guide-sort-choice yt-uix-button-menu-item" onclick=";return false;" checked="True" data-guide-sort="2">A-Z</span></li></ul></button></span>
        <h3>
      <a href="/subscription_manager" class=" yt-uix-sessionlink " data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-channel">Subscriptions</a>
    </h3>

    <div id="guide-subs-footer-container">
        <div id="guide-subscriptions-container">
            <div class="guide-channels-content yt-scrollbar">
    <ul id="guide-channels" class="guide-channels-list guide-item-container parent-list guide-infinite-list yt-uix-scroller filter-has-matches yt-uix-tdl" role="menu" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">

` + subscriptions + `


    </ul>
  </div>

        </div>
    </div>
      <hr class="guide-section-separator">
  </li>`);

  return finalSubscriptionTemplate;

  }

  var finalGuideTemplate = (`<div id="guide" class="yt-scrollbar">      <div id="appbar-guide-menu" class="appbar-menu appbar-guide-menu-layout appbar-guide-clickable-ancestor yt-uix-scroller yt-uix-tdl" role="navigation" data-scroller-mousewheel-listener="" data-scroller-scroll-listener="">
    <div id="guide-container">
        <div class="guide-module-content yt-scrollbar">
    <ul class="guide-toplevel">
            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="what_to_watch-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link  guide-item-selected  " href="/" title="Home" data-external-id="what_to_watch" data-serialized-endpoint="0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNYBELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-what-to-watch-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Home
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="UCX7oszedvnbp06-_CWVwdOA-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/profile" title="My Channel" data-external-id="UCX7oszedvnbp06-_CWVwdOA" data-serialized-endpoint="0qDduQEaEhhVQ1g3b3N6ZWR2bmJwMDYtX0NXVndkT0E%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNcBELUsGAEiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-my-channel-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            My Channel
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="trending-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/trending" title="Trending" data-external-id="trending" data-serialized-endpoint="0qDduQEMEgpGRXRyZW5kaW5n" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-trending&amp;ved=CNgBELUsGAIiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-trending-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Trending
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="subscriptions-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/subscriptions" title="Subscriptions" data-external-id="subscriptions" data-serialized-endpoint="0qDduQEREg9GRXN1YnNjcmlwdGlvbnM%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNkBELUsGAMiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-my-subscriptions-icon yt-sprite"></span>
        <span class="display-name ">
          <span>
            Subscriptions
          </span>
        </span>
    </span>
          <span class="guide-count yt-uix-tooltip yt-valign">
      ` + (subscriptionnumber ? `<span class="yt-valign-container guide-count-value">1</span>` : ``) + `
    </span>

  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="history-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/feed/history" title="History" data-external-id="history" data-serialized-endpoint="0qDduQELEglGRWhpc3Rvcnk%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNoBELUsGAQiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-history-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            History
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="VLWL-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/playlist?list=WL" title="Watch Later" data-external-id="VLWL" data-serialized-endpoint="0qDduQEGEgRWTFdM" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-personal&amp;ved=CNsBELUsGAUiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-watch-later-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Watch Later
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>` + genLibrary() + genSubscriptions() + `





            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="guide_builder-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/channels" title="Browse channels" data-external-id="guide_builder" data-serialized-endpoint="0qPduQECCAE%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-manage&amp;ved=CIUCELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-builder-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Browse channels
          </span>
        </span>
    </span>
  </a>

  </li>

              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="subscription_manager-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   " href="/subscription_manager" title="Manage subscriptions" data-external-id="subscription_manager" data-serialized-endpoint="oqjduQECCAE%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-manage&amp;ved=CIYCELUsGAEiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-subscription-manager-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            Manage subscriptions
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
      <hr class="guide-section-separator">
  </li>

            <li class="guide-section vve-check" data-visibility-tracking="">
    <div class="guide-item-container personal-item">

      <ul class="guide-user-links yt-uix-tdl yt-box" role="menu">
              <li class="vve-check guide-channel guide-notification-item overflowable-list-item " id="unlimited-guide-item" data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-link   " href="/red" title="YouTube Red" data-external-id="unlimited" data-serialized-endpoint="0qDduQENEgtTUHVubGltaXRlZA%3D%3D" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;ved=CIgCELUsGAAiEwj515vhguPNAhVLo34KHZZGBvMojh4">
    <span class="yt-valign-container">
        <span class="thumb guide-unlimited-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            YouTube Red
          </span>
        </span>
    </span>
  </a>

  </li>

      </ul>
    </div>
  </li>

    </ul>
  </div>

    </div>
  </div>
  <div id="appbar-guide-notifications" class="hid">
        <div id="appbar-guide-notification-watch-later-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-watch-later-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Watch Later</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-subscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription added</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-unsubscription">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Subscription removed</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Saved to Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Playlists</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-added">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-playlist-video-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from playlist</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-like">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Added to Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-video-unlike">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Removed from Liked videos</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-set">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >You'll be reminded about this event</span></span></div>
    -->
  </div>


    <div id="appbar-guide-notification-event-reminder-removed">
    <!--
    <div class="appbar-guide-notification " role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" >Event reminder removed</span></span></div>
    -->
  </div>


  </div>
  <div id="appbar-guide-item-templates" class="hid">
        <div id="appbar-guide-item-template-playlist">
      <!--
          <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-external-id="__ID__" data-serialized-endpoint="" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-playlists"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-playlists-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-mix">
      <!--
          <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-external-id="__ID__" data-serialized-endpoint="" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-playlists"
  >
    <span class="yt-valign-container">
        <span class="thumb guide-mix-icon yt-sprite"></span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Saved to Playlists">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>
    <div id="appbar-guide-item-template-channel">
      <!--
          <li class="vve-check guide-channel guide-notification-item overflowable-list-item show-insertion-notification " id="__ID__-guide-item"
 data-visibility-tracking="" role="menuitem">

  <a class="guide-item yt-uix-sessionlink yt-valign spf-nolink   "
    href="__URL__"
    title="__TITLE__"
    data-external-id="__ID__" data-serialized-endpoint="" data-visibility-tracking="" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;feature=g-channel"
  >
    <span class="yt-valign-container">
        <span class="thumb">  <span class="video-thumb  yt-thumb yt-thumb-20"
    >
    <span class="yt-thumb-square">
      <span class="yt-thumb-clip">
          <img width="20" height="20" src="__THUMBNAIL_URL__" alt="" aria-hidden="true" >

        <span class="vertical-align"></span>
      </span>
    </span>
  </span>
</span>
        <span class="display-name  no-count">
          <span>
            __TITLE__
          </span>
        </span>
    </span>
  </a>

      <div class="appbar-guide-notification guide-item-insertion-notification" role="alert"><span class="appbar-guide-notification-content-wrapper yt-valign"><span class="appbar-guide-notification-icon yt-sprite"></span><span class="appbar-guide-notification-text-content" aria-label="Subscription added">__NOTIFICATION_OVERLAY_MESSAGE__</span></span></div>
  </li>

      -->
    </div>

  </div>

</div>`);

return finalGuideTemplate;

		}

	}

	function genFooter() {

		//todo

var currentdate = new Date().getFullYear();

        var fgl = (ytconfigdata.GL).toLowerCase().replaceAll("-", "").replaceAll("_", "").trim();

        var cglf = countries[fgl];

        var fhl = (ytconfigdata.HL).replaceAll("-", "").replaceAll("_", "").toLowerCase().trim();

        var lgfhl = languages[fhl];

        var lockedsafetyf = ytconfigdata.INNERTUBE_CONTEXT.user.lockedSafetyMode;

		var finalFooterTemplate  = (`<div id="footer-container" class="yt-base-gutter force-layer"><div id="footer"><div id="footer-main"><div id="footer-logo"><a href="/" id="footer-logo-link" title="YouTube home" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw&amp;ved=CAEQpmEiEwj515vhguPNAhVLo34KHZZGBvMojh4" class="yt-uix-sessionlink"><span class="footer-logo-icon yt-sprite"></span></a></div>  <ul class="pickers yt-uix-button-group" data-button-toggle-group="optional">
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon" type="button" onclick=";return false;" id="yt-picker-language-button" data-button-menu-id="arrow-display" data-button-action="yt.www.picker.load" data-picker-key="language" data-picker-position="footer" data-button-toggle="true"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-language yt-sprite"></span></span><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Language:
  </span>
  ` + lgfhl + `
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-country-button" data-button-menu-id="arrow-display" data-button-action="yt.www.picker.load" data-picker-key="country" data-picker-position="footer" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Country:
  </span>
  ` + cglf + `
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
      <li>
            <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default" type="button" onclick=";return false;" id="yt-picker-safetymode-button" data-button-menu-id="arrow-display" data-button-action="yt.www.picker.load" data-picker-key="safetymode" data-picker-position="footer" data-button-toggle="true"><span class="yt-uix-button-content">  <span class="yt-picker-button-label">
Restricted Mode:
  </span>
` + (lockedsafetyf ? `On` : `Off`) + `
</span><span class="yt-uix-button-arrow yt-sprite"></span></button>


      </li>
  </ul>
<a href="/feed/history" class="yt-uix-button  footer-history yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default yt-uix-button-has-icon" data-sessionlink="ei=4yp_V7naAsvG-gOWjZmYDw"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-footer-history yt-sprite"></span></span><span class="yt-uix-button-content">History</span></a>    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon yt-uix-button-reverse yt-google-help-link inq-no-click " type="button" onclick=";return false;" id="google-help" data-ghelp-tracking-param="" data-ghelp-anchor="google-help" data-load-chat-support="" data-feedback-product-id="59"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-questionmark yt-sprite"></span></span><span class="yt-uix-button-content">Help
</span></button>
      <div id="yt-picker-language-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

      <div id="yt-picker-country-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

      <div id="yt-picker-safetymode-footer" class="yt-picker" style="display: none">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

</div><div id="footer-links"><ul id="footer-links-primary">  <li><a href="//www.youtube.com/yt/about/">About</a></li>
  <li><a href="//www.youtube.com/yt/press/">Press</a></li>
  <li><a href="//www.youtube.com/yt/copyright/">Copyright</a></li>
  <li><a href="//www.youtube.com/yt/creators/">Creators</a></li>
  <li><a href="//www.youtube.com/yt/advertise/">Advertise</a></li>
  <li><a href="//www.youtube.com/yt/dev/">Developers</a></li>
  <li><a href="https://plus.google.com/+youtube" dir="ltr">+YouTube</a></li>
</ul><ul id="footer-links-secondary">  <li><a href="/t/terms">Terms</a></li>
  <li><a href="https://www.google.com/intl/en/policies/privacy/">Privacy</a></li>
  <li><a href="//www.youtube.com/yt/policyandsafety/">
Policy &amp; Safety
  </a></li>
  <li><a href="//support.google.com/youtube/?hl=en" onclick="return yt.www.feedback.start(59);" class="reportbug">Send feedback</a></li>
  <li><a href="/testtube">Try something new!</a></li>
  <li><a href="javascript:void(0);">About GoodTube</a></li>
  <li>  <span class="copyright" dir="ltr">© ` + currentdate + ` YouTube, LLC</span>
</li>
</ul></div></div></div>`);

return finalFooterTemplate;

	}

	var finalHTMLPage = (`<head><style name="www-roboto">@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url(//fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0Z0EAVxt0G0biEntp43Qt6E.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto Regular'),local('Roboto-Regular'),url(//fonts.gstatic.com/s/roboto/v15/zN7GBFwfMP4uA6AR0HCoLQ.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:local('Roboto Medium'),local('Roboto-Medium'),url(//fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUaCWcynf_cDxXwCLxiixG1c.ttf)format('truetype');}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:local('Roboto Italic'),local('Roboto-Italic'),url(//fonts.gstatic.com/s/roboto/v15/W4wDsBUluyw0tK3tykhXEfesZW2xOQ-xsNqO47m55DA.ttf)format('truetype');}</style><script name="www-roboto">if (document.fonts && document.fonts.load) {document.fonts.load("400 10pt Roboto", "E");document.fonts.load("500 10pt Roboto", "E");}</script><script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);</script><script>var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};</script>





  <script>
        (function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);
  </script>

      <script src="/yts/jsbin/scheduler-vflP0xYB-/scheduler.js" type="text/javascript" name="scheduler/scheduler" class="js-httpswwwyoutubecomytsjsbinschedulervflP0xYBschedulerjs"></script>



  <link rel="stylesheet" href="/yts/cssbin/www-core-vflt4ZGY7.css" name="www-core" class="css-httpswwwyoutubecomytscssbinwwwcorevflt4ZGY7css">
    <link rel="stylesheet" href="/yts/cssbin/www-home-c4-vflIw8IlQ.css" name="www-home-c4" class="css-httpswwwyoutubecomytscssbinwwwhomec4vflIw8IlQcss">

  <link rel="stylesheet" href="/yts/cssbin/www-pageframe-vfl1hU8te.css" name="www-pageframe" class="css-httpswwwyoutubecomytscssbinwwwpageframevfl1hU8tecss">
  <link rel="stylesheet" href="/yts/cssbin/www-guide-vflJFFhnq.css" name="www-guide" class="css-httpswwwyoutubecomytscssbinwwwguidevflJFFhnqcss">


<title>YouTube</title><link rel="canonical" href="https://www.youtube.com/"><link rel="alternate" media="handheld" href="https://m.youtube.com/"><link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.youtube.com/"><meta name="description" content="Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube."><meta name="keywords" content="video, sharing, camera phone, video phone, free, upload"><link rel="manifest" href="/manifest.json"><link rel="search" type="application/opensearchdescription+xml" href="https://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search"><link rel="shortcut icon" href="https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico" type="image/x-icon">     <link rel="icon" href="/yts/img/favicon_32-vfl8NGn4k.png" sizes="32x32"><link rel="icon" href="/yts/img/favicon_48-vfl1s0rGh.png" sizes="48x48"><link rel="icon" href="/yts/img/favicon_96-vfldSA3ca.png" sizes="96x96"><link rel="icon" href="/yts/img/favicon_144-vflWmzoXw.png" sizes="144x144"><meta name="theme-color" content="#e62117">  <meta property="og:image" content="/yts/img/yt_1200-vfl4C3T0K.png">
  <meta property="fb:app_id" content="87741124305">
  <link rel="publisher" href="https://plus.google.com/115229808208707341778">
  <link rel="alternate" href="android-app://com.google.android.youtube/http/www.youtube.com/">
  <link rel="alternate" href="ios-app://544007664/vnd.youtube/www.youtube.com/">
<style>.yt-uix-button-primary, .yt-uix-button-primary[disabled], .yt-uix-button-primary[disabled]:hover, .yt-uix-button-primary[disabled]:active, .yt-uix-button-primary[disabled]:focus { background-color: #167ac6; }</style><style type="text/css">ytd-masthead #logo-icon-container, #contentContainer #logo-icon-container, ytd-topbar-logo-renderer > #logo {content: url("https://i.ibb.co/rfKJyVz/classic-Logo.png") !important;width: 72px !important;height: auto !important;}ytd-masthead[dark] #logo-icon-container, html[dark] #contentContainer #logo-icon-container, ytd-masthead[dark] ytd-topbar-logo-renderer > #logo, html[dark] ytd-topbar-logo-renderer > #logo {content: url("https://i.ibb.co/56XCNzt/classic-Logo-Dark.png") !important;width: 72px !important;height: auto !important;}#start > #masthead-logo, #masthead > #masthead-logo {content: url("https://i.ibb.co/56XCNzt/classic-Logo-Dark.png") !important;width: 72px !important;height: auto !important;}html[dark] #start > #masthead-logo, html[dark] #masthead > #masthead-logo {content: url("https://i.ibb.co/56XCNzt/classic-Logo-Dark.png") !important;width: 72px !important;height: auto !important}html:not([dark]) ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer, html:not([dark]) ytd-guide-entry-renderer[active] > #endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover {background-color: #cd201f !important}yt-img-shadow.ytd-topbar-menu-button-renderer, #avatar.ytd-active-account-header-renderer, #avatar.ytd-video-owner-renderer, #author-thumbnail.ytd-comment-renderer yt-img-shadow.ytd-comment-renderer, #author-thumbnail.ytd-comment-simplebox-renderer, #avatar.ytd-c4-tabbed-header-renderer, yt-img-shadow.ytd-channel-avatar-editor, yt-img-shadow.ytd-guide-entry-renderer, #author-thumbnail.ytd-commentbox, ytd-commentbox[is-reply][is-backstage-comment] #author-thumbnail.ytd-commentbox {border-radius: 0%!important;}#header.ytd-rich-grid-renderer{display:none!important} yt-related-chip-cloud-renderer{display:none!important}#center.ytd-masthead { margin-right: auto;flex: 0 1 628px!important} ytd-searchbox.ytd-masthead{margin: 0 0 0 25px!important}div#contents.ytd-rich-grid-renderer ytd-rich-section-renderer{display:none!important}#primary.ytd-watch-flexy, #player-container-outer{--ytd-watch-flexy-min-player-width:480px!important;min-height:480px!important;min-width:--ytd-watch-flexy-min-player-width: 100%!important;max-width:854px!important}ytd-watch-flexy[flexy_][is-two-columns_][is-extra-wide-video_] #primary.ytd-watch-flexy, ytd-watch-flexy[flexy_][is-two-columns_][is-four-three-to-sixteen-nine-video_] #primary.ytd-watch-flexy{min-width:854px!important} ytd-watch-flexy[flexy_][flexy-large-window_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][transcript-opened_][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][playlist][is-two-columns_]:not([is-extra-wide-video_]), ytd-watch-flexy[flexy_][flexy-large-window_][should-stamp-chat][is-two-columns_]:not([is-extra-wide-video_]) {--ytd-watch-flexy-min-player-height:480px!important;</style><script src="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.js" class="js-chromeextensionlnkdbjbjpnpjeciipoaflmpcddinpjjpmytubejs"></script><!-- The following scripts are externally injected by the extension. --><script>if (document.fonts && document.fonts.load) {document.fonts.load("400 10pt Roboto", "E");document.fonts.load("500 10pt Roboto", "E");}</script><script>var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);</script><script>var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};</script><script>
        (function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);</script><script src="https://s.ytimg.com/yts/jsbin/scheduler-vflP0xYB-/scheduler.js" type="text/javascript" name="scheduler/scheduler" class="js-httpssytimgcomytsjsbinschedulervflP0xYBschedulerjs"></script></head>
    <body dir="ltr" id="body" class="  ltr    exp-responsive exp-scrollable-guide exp-search-big-thumbs   site-center-aligned site-as-giant-card guide-pinning-enabled    visibility-logging-enabled   not-nirvana-dogfood  not-yt-legacy-css    flex-width-enabled      flex-width-enabled-snap    delayed-frame-styles-not-in  " data-spf-name="other">

  <div id="early-body"></div>
  <div id="body-container"><div id="a11y-announcements-container" role="alert"><div id="a11y-announcements-message"></div></div><form name="logoutForm" method="POST" action="/logout"><input type="hidden" name="action_logout" value="1"></form>` + genMast() + `<div id="masthead-positioner-height-offset"></div><div id="page-container"><div id="page" class="  home     branded-page-v2-masthead-ad-header  clearfix">` + genGuide() + `<div class="alerts-wrapper"><div id="alerts" class="content-alignment">
</div></div><div id="header">


    <div id="ad_creative_1" class="ad-div mastad" style="z-index: 1;">
<script>(function() {var loaded = function() {return window.yt && yt.www && yt.www.feed && yt.www.feed.ui && yt.www.feed.ui.ads;};window.masthead_ad_creative_iframe_1_workaround = function() {if (loaded()) {yt.www.feed.ui.ads.workaroundIE(this);}};window.masthead_ad_creative_iframe_1_onload = function() {if (!loaded()) {setTimeout(masthead_ad_creative_iframe_1_onload, 50);return;}yt.www.feed.ui.ads.workaroundLoad();};})();</script>
      <script>(function() {function tagMpuIframe() {var containerEl = document.getElementById('ad_creative_1');if (!containerEl) {return;}var iframeEl = document.createElement('iframe');var iframeSrc = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?ad_rule=0\u0026d_imp=1\u0026gdfp_req=1\u0026impl=ifr\u0026iu=%2F4061%2Fcom.ythome\u0026scp=dc_yt%3D1%26kbsg%3DHPUS170407%26kga%3D-1%26kgg%3D-1%26klg%3Den%26kmyd%3Dad_creative_1%26ssl%3D1%26ytdevice%3D1%26ytexp%3D9419451%252C9422596%252C9428398%252C9431012%252C9434289%252C9437553%252C9438290%252C9444897%252C9446054%252C9448053%252C9451823%252C9452098%252C9453700%252C9455480%252C9457360%252C9459986%252C9460072%252C9460350%252C9460627%252C9463153%252C9464344%252C9464495%252C9464640%252C9465438%252C9466754%252C9466777%252C9467777%252C9467781%252C9468956%252C9469926%252C9470125\u0026sz=970x250\u0026ytdevice=1" + '&correlator=' +Math.floor(Math.random() * 10000000000000000);iframeEl.id = 'ad_creative_iframe_1';iframeEl.width = '970';iframeEl.height = '250';iframeEl.style.cssText = 'z-index:1;';iframeEl.onload = window.masthead_ad_creative_iframe_1_onload;iframeEl.onmouseover = window.masthead_ad_creative_iframe_1_workaround;iframeEl.onfocus = window.masthead_ad_creative_iframe_1_workaround;iframeEl.setAttribute('allowFullScreen', '');iframeEl.scrolling = 'no';iframeEl.frameBorder = '0';containerEl.appendChild(iframeEl);iframeEl.src = iframeSrc;}tagMpuIframe();if (window.ytcsi) {window.ytcsi.info("yt_ad", "1", '');}})();</script>
    </div>



      <div id="ad_creative_expand_btn_1" class="masthead-ad-control open content-alignment masthead-ad-control-header hid">
    <a onclick="masthead.expand_ad(); return false;" class="yt-valign">
      <span class="yt-valign-container">Show ad</span>
      <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="" class="yt-valign-container">
    </a>
  </div>

</div><div id="player" class="  off-screen " role="complementary"><div id="theater-background" class="player-height"></div>  <div id="player-mole-container">
    <div id="player-unavailable" class="  hid  ">

    </div>

    <div id="player-api" class="player-width player-height off-screen-target player-api" tabindex="-1"></div>
        <script>if (window.ytcsi) {window.ytcsi.tick("cfg", null, '');}</script>
    <script>var ytplayer = ytplayer || {};ytplayer.config = {"messages":{"player_fallback":["Adobe Flash Player or an HTML5 supported browser is required for video playback.\u003cbr\u003e\u003ca href=\"https:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player \u003c\/a\u003e\u003cbr\u003e\u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e"]},"attrs":{"id":"movie_player"},"args":{"player_error_log_fraction":"1.0","gapi_hint_params":"m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA","apiary_host_firstparty":"","cr":"US","autoplay":"0","innertube_api_version":"v1","cver":"1.20170406","fflags":"spherical_on_android_iframe=true\u0026html5_playing_event_buffer_underrun=true\u0026enable_live_state_auth=true\u0026enable_plus_page_pts=true\u0026use_fast_fade_in_0s=true\u0026html5_max_buffer_health_for_downgrade_proportion=0.0\u0026send_api_stats_ads_asr=true\u0026html5_min_readbehind_cap_secs=0\u0026mpu_visible_threshold_count=2\u0026html5_allowable_liveness_drift_chunks=2\u0026forced_brand_precap_duration_ms=2000\u0026html5_get_video_info_promiseajax=true\u0026disable_new_pause_state3=true\u0026fixed_padding_skip_button=true\u0026html5_max_readahead_bandwidth_cap=0\u0026ios_notifications_disabled_subs_tab_promoted_item_promo=true\u0026polymer_report_missing_web_navigation_endpoint=false\u0026fix_api_stats_ads_companion_backfill_break_type=true\u0026live_chunk_readahead=3\u0026uniplayer_dbp=true\u0026dash_manifest_version=4\u0026enable_local_channel=true\u0026html5_max_vss_watchtime_ratio=0.0\u0026kids_asset_theme=server_side_assets\u0026html5_elbow_tracking_tweaks=true\u0026playready_on_borg=true\u0026disable_search_mpu=true\u0026website_actions_throttle_percentage=1.0\u0026exo_drm_max_keyfetch_delay_ms=0\u0026kids_enable_server_side_assets=true\u0026king_crimson_player_redux=true\u0026html5_min_readbehind_secs=0\u0026use_new_style=true\u0026show_thumbnail_on_standard=true\u0026html5_background_cap_idle_secs=60\u0026enable_red_carpet_p13n_shelves=true\u0026vss_dni_delayping=0\u0026midroll_notify_time_seconds=5\u0026mweb_blacklist_progressive_chrome_mobile=true\u0026html5_min_vss_watchtime_to_cut_secs_redux=0.0\u0026stop_using_ima_sdk_gpt_request_activity=true\u0026html5_variability_full_discount_thresh=3.0\u0026html5_strip_emsg=true\u0026html5_long_term_bandwidth_window_size=0\u0026fix_gpt_pos_params=true\u0026send_html5_api_stats_ads_abandon=true\u0026html5_vp9_live_whitelist=false\u0026html5_enable_embedded_player_visibility_signals=true\u0026html5_tight_max_buffer_allowed_impaired_time=0.0\u0026enable_ccs_buy_flow_for_chirp=true\u0026web_response_paid_content_overlay=true\u0026postroll_notify_time_seconds=5\u0026html5_spherical_bicubic_mode=0\u0026html5_idle_preload_secs=1\u0026html5_min_vss_watchtime_to_cut_secs=0.0\u0026player_destroy_old_version=true\u0026log_js_exceptions_fraction=0.20\u0026enable_offer_restricts_for_watch_page_offers=true\u0026kids_enable_block_servlet=true\u0026html5_retry_media_element_errors_delay=0\u0026html5_variability_no_discount_thresh=1.0\u0026enable_pla_desktop_shelf=true\u0026html5_request_size_min_secs=0.0\u0026yto_feature_hub_channel=false\u0026request_mpu_on_unfilled_ad_break=true\u0026interaction_log_delayed_event_batch_size=200\u0026sidebar_renderers=true\u0026html5_burst_less_for_no_bw_data=true\u0026mweb_pu_android_chrome_54_above=true\u0026html5_live_4k_more_buffer=true\u0026disable_desktop_homepage_pyv_backfill=true\u0026android_enable_thumbnail_overlay_side_panel=false\u0026lugash_header_by_service=true\u0026html5_reseek_on_infinite_buffer=true\u0026html5_local_max_byterate_lookahead=15\u0026ios_disable_notification_preprompt=true\u0026html5_tight_max_buffer_allowed_bandwidth_stddevs=0.0\u0026html5_throttle_rate=0.0\u0026lock_fullscreen=false\u0026doubleclick_gpt_retagging=true\u0026use_new_skip_icon=true\u0026html5_audio_preload_duration=2.0\u0026dynamic_ad_break_seek_threshold_sec=0\u0026sdk_wrapper_levels_allowed=0\u0026html5_get_video_info_timeout_ms=0\u0026use_push_for_desktop_live_chat=true\u0026ad_duration_threshold_for_showing_endcap_seconds=15\u0026dynamic_ad_break_pause_threshold_sec=0\u0026html5_pause_manifest_ended=true\u0026html5_use_adaptive_live_readahead=true\u0026yto_enable_watch_offer_module=true\u0026desktop_cleanup_companion_on_instream_begin=true\u0026html5_deadzone_multiplier=1.1\u0026html5_live_pin_to_tail=true\u0026html5_suspend_manifest_on_pause=true\u0026mweb_adsense_instreams_disabled_for_android_tablets=true\u0026flex_theater_mode=true\u0026live_readahead_seconds_multiplier=0.8\u0026html5_live_disable_dg_pacing=true\u0026html5_background_quality_cap=360\u0026html5_msi_error_fallback=true\u0026yt_unlimited_pts_skip_ads_promo_desktop_always=true\u0026html5_progressive_signature_reload=true\u0026html5_timeupdate_readystate_check=true\u0026legacy_autoplay_flag=true\u0026html5_min_secs_between_format_selections=8.0\u0026yto_enable_unlimited_landing_page_yto_features=true\u0026html5_repredict_interval_secs=0.0\u0026king_crimson_player=false\u0026html5_max_buffer_health_for_downgrade=15\u0026ad_video_end_renderer_duration_milliseconds=7000\u0026html5_disable_non_contiguous=true\u0026kids_enable_post_onboarding_red_flow=true\u0026html5_post_interrupt_readahead=0\u0026html5_min_upgrade_health=0\u0026kids_enable_privacy_notice=true\u0026html5_always_reload_on_403=true\u0026html5_nnr_downgrade_count=4\u0026html5_min_startup_smooth_target=10.0\u0026html5_max_bandwidth_sample_duration=0.0\u0026html5_report_conn=true\u0026ios_enable_mixin_accessibility_custom_actions=true\u0026html5_min_byterate_to_time_out=0\u0026html5_default_quality_cap=0\u0026html5_stale_dash_manifest_retry_factor=1.0\u0026autoplay_time=8000\u0026enable_playlist_multi_season=true\u0026html5_max_buffer_duration=0\u0026html5_adjust_effective_request_size=true\u0026html5_connect_timeout_secs=7.0\u0026html5_reduce_startup_rebuffers=true\u0026pla_shelf_hovercard=true\u0026polymer_selective_initialization=false\u0026html5_serverside_biscotti_id_wait_ms=1000\u0026html5_bandwidth_window_size=0\u0026yto_enable_ytr_promo_refresh_assets=true\u0026show_countdown_on_bumper=true\u0026html5_check_for_reseek=true\u0026html5_new_preloading=true\u0026chrome_promo_enabled=true\u0026html5_ad_no_buffer_abort_after_skippable=true\u0026html5_min_buffer_to_resume=6\u0026html5_request_sizing_multiplier=0.8\u0026lugash_header_warmup=true\u0026mobile_disable_ad_mob_on_home=true\u0026html5_variability_discount=0.5\u0026html5_report_performance_cap=true\u0026live_fresca_v2=true\u0026html5_max_av_sync_drift=50\u0026html5_trust_platform_bitrate_limits=true\u0026kids_enable_terms_servlet=true\u0026html5_disable_audio_slicing=true\u0026variable_load_timeout_ms=0","fexp":"9419451,9422596,9428398,9431012,9434046,9434289,9438290,9444897,9446054,9446364,9448053,9449243,9452098,9453700,9453897,9455480,9456640,9457141,9457360,9458576,9459986,9460072,9460160,9460627,9463153,9463496,9463594,9463965,9464344,9464495,9464640,9465438,9465533,9466754,9466777,9466777,9466793,9466795,9467274,9467777,9467781,9468482,9468956,9469224,9469926,9470125","innertube_context_client_version":"1.20170406","hl":"en_US","ssl":"1","xhr_apiary_host":"youtubei.youtube.com","apiary_host":"","host_language":"en","enablejsapi":"1","innertube_api_key":"AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8","c":"WEB"},"assets":{"js":"\/yts\/jsbin\/player-en_US-vfl6_PD5A\/base.js","css":"\/yts\/cssbin\/www-player-vflN63lJq.css"},"html5":true,"url_v9as2":"","min_version":"8.0.0","url":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vflwXO_z0\/watch_as3.swf","params":{"allowscriptaccess":"always","bgcolor":"#000000","allowfullscreen":"true"},"sts":17261,"url_v8":"https:\/\/s.ytimg.com\/yts\/swfbin\/player-vflwXO_z0\/cps.swf"};ytplayer.load = function() {yt.player.Application.create("player-api", ytplayer.config);ytplayer.config.loaded = true;};</script>


    <div id="watch-queue-mole" class="video-mole mole-collapsed hid"><div id="watch-queue" class="watch-playlist player-height"><div class="main-content"><div class="watch-queue-header"><div class="watch-queue-info"><div class="watch-queue-info-icon"><span class="tv-queue-list-icon yt-sprite"></span></div><h3 class="watch-queue-title">Watch Queue</h3><h3 class="tv-queue-title">Queue</h3><span class="tv-queue-details"></span></div><div class="watch-queue-control-bar control-bar-button"><div class="watch-queue-mole-info"><div class="watch-queue-control-bar-icon"><span class="watch-queue-icon yt-sprite"></span></div><div class="watch-queue-title-container"><span class="watch-queue-count"></span><span class="watch-queue-title">Watch Queue</span><span class="tv-queue-title">Queue</span></div></div>  <span class="dark-overflow-action-menu">


    <button aria-expanded="false" type="button" aria-label="Actions for the queue" aria-haspopup="true" onclick=";return false;" class="flip control-bar-button yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty"><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid" role="menu" aria-haspopup="true"><li role="menuitem"><span data-action="remove-all" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;">Remove all</span></li><li role="menuitem"><span data-action="disconnect" class="watch-queue-menu-choice overflow-menu-choice yt-uix-button-menu-item" onclick=";return false;">Disconnect</span></li></ul></button>
  </span>
  <div class="watch-queue-controls">
    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button prev-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Previous video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-prev yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button play-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Play"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-play yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button pause-watch-queue-button yt-uix-button-opacity yt-uix-tooltip hid yt-uix-tooltip" type="button" onclick=";return false;" title="Pause"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-pause yt-sprite"></span></span></button>

    <button class="yt-uix-button yt-uix-button-size-default yt-uix-button-empty yt-uix-button-has-icon control-bar-button next-watch-queue-button yt-uix-button-opacity yt-uix-tooltip yt-uix-tooltip" type="button" onclick=";return false;" title="Next video"><span class="yt-uix-button-icon-wrapper"><span class="yt-uix-button-icon yt-uix-button-icon-watch-queue-next yt-sprite"></span></span></button>
  </div>
</div><div class="autoplay-dismiss-bar fade-out"><span class="autoplay-dismiss-title-label">The next video is starting</span><span><button class="yt-uix-button yt-uix-button-size-default autoplay-dismiss-button yt-uix-tooltip" type="button" onclick=";return false;" title="stop"><span class="yt-uix-button-content">stop</span></button></span></div></div><div class="watch-queue-items-container yt-scrollbar-dark yt-scrollbar"><div class="yt-uix-scroller playlist-videos-list"><ol class="watch-queue-items-list" data-scroll-action="yt.www.watchqueue.loadThumbnails">  <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>
</ol><div class="autoplay-control-container yt-uix-scroller-scroll-unit hid">  <div class="autoplay-control-bar">
    <label class="autoplay-label" for="autoplay-toggle-id"></label>
    <label class="yt-uix-form-input-checkbox-container yt-uix-form-input-container yt-uix-form-input-paper-toggle-container "><input class="yt-uix-form-input-checkbox" type="checkbox" id="autoplay-toggle-id"><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-bar"></div><div class="yt-uix-form-input-paper-toggle-bg yt-uix-form-input-paper-toggle-button"></div></label>
  </div>
</div><div class="up-next-item-container hid"></div></div></div></div>  <div class="hid">
    <div id="watch-queue-title-msg">
Watch Queue
    </div>

    <div id="tv-queue-title-msg">Queue</div>

    <div id="watch-queue-count-msg">
__count__/__total__
    </div>

    <div id="watch-queue-loading-template">
      <!--
          <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

      -->
    </div>
  </div>
</div></div>

    <div id="player-playlist" class="  hid  ">

    </div>

  </div>

  <div class="clear"></div>
</div>` + genHome() + `</div></div></div>  ` + genFooter() + `


      <div class="yt-dialog hid " id="feed-privacy-lb">
    <div class="yt-dialog-base">
      <span class="yt-dialog-align"></span>
      <div class="yt-dialog-fg" role="dialog">
        <div class="yt-dialog-fg-content">
          <div class="yt-dialog-loading">
              <div class="yt-dialog-waiting-content">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
Loading...
    </span>
  </p>

  </div>

          </div>
          <div class="yt-dialog-content">
              <div id="feed-privacy-dialog">
  </div>

          </div>
          <div class="yt-dialog-working">
              <div class="yt-dialog-working-overlay"></div>
  <div class="yt-dialog-working-bubble">
    <div class="yt-dialog-waiting-content">
        <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Working...
    </span>
  </p>

      </div>
  </div>

          </div>
        </div>
        <div class="yt-dialog-focus-trap" tabindex="0"></div>
      </div>
    </div>
  </div>


<div id="hidden-component-template-wrapper" class="hid">    <div id="shared-addto-watch-later-login" class="hid">
      <a class="sign-in-link" href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26feature%3Dplaylist%26next%3D%252F%26hl%3Den&amp;hl=en">Sign in</a> to add this to Watch Later

    </div>
<div id="yt-uix-videoactionmenu-menu" class="yt-ui-menu-content">  <div class="hide-on-create-pl-panel">
    <h3>
Add to
    </h3>
  </div>
  <div class="add-to-widget">
      <p class="yt-spinner ">
        <span class="yt-spinner-img  yt-sprite" title="Loading icon"></span>

    <span class="yt-spinner-message">
        Loading playlists...
    </span>
  </p>

  </div>
</div></div>    <script>var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;ytspf.config['animation-duration'] = 0;</script>
  <script src="/yts/jsbin/spf-vflWieI3y/spf.js" type="text/javascript" name="spf/spf" class="js-httpswwwyoutubecomytsjsbinspfvflWieI3yspfjs"></script>
  <script src="/yts/jsbin/www-en_US-vflefqTvR/base.js" name="www/base" class="js-httpswwwyoutubecomytsjsbinwwwen_USvflefqTvRbasejs"></script>
<script>spf.script.path({'www/': '/yts/jsbin/www-en_US-vflefqTvR/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/angular_base": "www/common", "www/channels_accountupload": "www/common", "www/channels": "www/common", "www/dashboard": "www/common", "www/downloadreports": "www/common", "www/experiments": "www/common", "www/feed": "www/common", "www/instant": "www/common", "www/legomap": "www/common", "www/live_chat": "www/common", "www/live_chat_moderation": "www/common", "www/promo_join_network": "www/common", "www/results_harlemshake": "www/common", "www/results": "www/common", "www/results_starwars": "www/common", "www/subscriptionmanager": "www/common", "www/unlimited": "www/common", "www/watch": "www/common", "www/ypc_bootstrap": "www/common", "www/ypc_core": "www/common", "www/channels_edit": "www/channels", "www/live_dashboard": "www/angular_base", "www/videomanager": "www/angular_base", "www/watch_autoplayrenderer": "www/watch", "www/watch_edit": "www/watch", "www/watch_editor": "www/watch", "www/watch_live": "www/watch", "www/watch_promos": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_transcript": "www/watch", "www/watch_videoshelf": "www/watch", "www/ct_advancedsearch": "www/videomanager", "www/my_videos": "www/videomanager"};spf.script.declare(ytdepmap);</script><script>if (window.ytcsi) {window.ytcsi.tick("je", null, '');}</script>

  <script>

    yt.setConfig({
      'MASTHEAD_ENCRYPTED_ID': "LpAnpR34gyU",
      'MASTHEAD_IS_BRANDED': false
    });

(function() {var c = document.getElementById('feed-pyv-container');if (c) {var h = "\u003cscript\u003ewindow.yt = window.yt || {};yt.www = yt.www || {};yt.www.feed = yt.www.feed || {};yt.www.feed.ui = yt.www.feed.ui || {};yt.www.feed.ui.ads = yt.www.feed.ui.ads || {};window.renderHomepagePyv = function(pyv) {writePyvAd();};\u003c\/script\u003e\u003cscript\u003evar renderPyvCallback = parent.yt.www.ads.pyv.pyvHomeAfcCallback;window.writePyvAd = function() {window['google_page_url'] = parent.document.location;window['google_language'] = \"en\";window['google_loeid'] = \"__loeid__\";window['google_eids'] = \"__eids__\";window['google_pucrd'] = \"__pucrd__\";window['google_ad_client'] = \"__property_code__\";window['google_ad_channel'] = \"__channels__\";window['google_max_num_ads'] = 1;window['google_ad_output'] = 'js';window['google_ad_type'] = 'text';window['google_only_pyv_ads'] = true;window['google_ad_request_done'] = function(googleAds) {renderPyvCallback(googleAds);};document.write('\u003cscript s\u0072c=\"\/\/pagead2.googlesyndication.com\/pagead\/show_ads.js\"\u003e\u003c\\\/script\u003e');};var pyvCallback = window.renderHomepagePyv;pyvCallback();yt.setConfig({'PYV_IFRAME_CONTENT': h,'PYV_IFRAME_ID': 'pyv-iframe'});}})();
  yt.setConfig('JS_PAGE_MODULES', ['www/feed', 'www/ypc_bootstrap']);

    yt.setConfig('DISMISS_THROUGH_IT', true);

      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  </script>

<script>yt.setConfig({GAPI_HINT_PARAMS: "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBBAPIARY_HOST: "",INNERTUBE_CONTEXT_CLIENT_NAME: 1,INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",'VISITOR_DATA': "CgtiWkVyeG1xVlBoVQ%3D%3D",'GAPI_HOST': "https:\/\/apis.google.com",'GAPI_LOCALE': "en_US",'_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",APIARY_HOST_FIRSTPARTY: "",INNERTUBE_API_VERSION: "v1",INNERTUBE_CONTEXT_CLIENT_VERSION: "1.20170406",XHR_APIARY_HOST: "youtubei.youtube.com",INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'XHR_APIARY_HOST': "youtubei.youtube.com"});yt.setConfig({'ROOT_VE_CHILDREN': ["CAEQ7VAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CAIQpmEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJIBEP4eIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CJMBEOYrGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJUBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJYBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJcBELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJgBEOGLAhgEIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CJkBEOYrGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJoBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJsBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJwBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ0BELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ4BELUsGAQiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ8BELUsGAUiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKABELUsGAYiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKEBELUsGAciEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKIBELUsGAgiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKMBEOYrGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKUBENguGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKYBEMcxIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CKcBEMMtGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKgBEMMtGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4"],'ROOT_VE_TYPE': 3854});yt.setConfig({'EVENT_ID': "CSjoWL-iFYGs-wP_wrwg",'PAGE_NAME': "index",'LOGGED_IN': false,'SESSION_INDEX': null,'VALID_SESSION_TEMPDATA_DOMAINS': ["www.youtube.com","gaming.youtube.com"],'PARENT_TRACKING_PARAMS': "",'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'GOOGLEPLUS_HOST': "https:\/\/plus.google.com",'PAGEFRAME_JS': "\/yts\/jsbin\/www-pageframe-vfl4HdsAa\/www-pageframe.js",'GAPI_LOADER_URL': "\/yts\/jsbin\/www-gapi-loader-vflfHbWwD\/www-gapi-loader.js",'JS_COMMON_MODULE': "\/yts\/jsbin\/www-en_US-vflefqTvR\/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "\/yts\/cssbin\/www-pageframedelayloaded-vflo9ddF2.css",'EXPERIMENT_FLAGS': {"gfeedback_for_signed_out_users_enabled":true,"player_swfcfg_cleanup":true,"comment_deep_link":true,"use_push_for_desktop_live_chat":true,"watch_next_pause_autoplay_lact_sec":3600,"service_worker_push_enabled":true,"enable_watch_next_pause_autoplay_lact":true,"autoescape_tempdata_url":true,"log_window_onerror_fraction":0.1,"navigation_only_csi_reset":true,"desktop_pyv_on_watch_missing_params":true,"enable_server_side_search_pyv":true,"consent_url_override":"","enable_more_related_ve_logging":true,"enable_youtubei_innertube":true,"autoplay_pause_sampling_fraction":0.0,"service_worker_push_prompt_cap":1,"service_worker_enabled":true,"web_gel_lact":true,"clear_web_implicit_clicktracking":true,"block_spf_search_ads_impressions":true,"service_worker_push_home_only":true,"service_worker_scope":"\/","warm_load_nav_start_web":true,"desktop_pyv_on_watch_via_valor":true,"desktop_pyv_on_watch_override_lact":true,"chat_smoothing_animations":84,"cold_load_nav_start_web":true,"same_domain_static_resources_desktop":true,"web_logging_max_batch":100},'GUIDED_HELP_PARAMS': {"logged_in":"0","context":"yt_web_w2w"},'HIGH_CONTRAST_MODE_CSS': "\/yts\/cssbin\/www-highcontrastmode-vflYLtJ1j.css",'PREFETCH_CSS_RESOURCES' : ["\/yts\/cssbin\/www-player-vflN63lJq.css"],'PREFETCH_JS_RESOURCES': ["\/yts\/jsbin\/player-en_US-vfl6_PD5A\/base.js"],'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': "\n\n  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" role=\"button\" title=\"Watch Later\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_BUTTON': "  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Queue\" data-video-ids=\"__VIDEO_ID__\" data-style=\"tv-queue\"\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_MENU': "  \u003cspan class=\"thumb-menu dark-overflow-action-menu video-actions\"\u003e\n    \u003cbutton aria-expanded=\"false\" class=\"yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty\" type=\"button\" aria-haspopup=\"true\" onclick=\";return false;\" \u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003cul class=\"watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid\"\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item\" data-action=\"play-next\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay next\u003c\/span\u003e\u003c\/li\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item\" data-action=\"play-now\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay now\u003c\/span\u003e\u003c\/li\u003e\u003c\/ul\u003e\u003c\/button\u003e\n  \u003c\/span\u003e\n",'SAFETY_MODE_PENDING': false,'ZWIEBACK_PING_URLS': ["https:\/\/www.google.com\/pagead\/lvz?pg=index\u0026req_ts=1491609609\u0026evtid=AErLtk1JzLFPJuSFayjfHPpKQWXlu3OAU8MkUv7XGh5CZOAyXZaOB1gkEFG00Q9WJhLEM8aR4AD74U3M-w8Hs3PLxY_JgnIKOg\u0026sigh=AE2cNp7_cO7kV5RydOh-nhqwC9KKePQBIA"],'LOCAL_DATE_TIME_CONFIG': {"formatWeekdayShortTime":"EE h:mm a","shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"formatLongDateOnly":"MMMM d, yyyy","firstWeekCutoffDay":3,"formatLongDate":"MMMM d, yyyy h:mm a","amPms":["AM","PM"],"weekendRange":[6,5],"formatShortTime":"h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatShortDate":"MMM d, yyyy","firstDayOfWeek":0,"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},'PAGE_CL': 152397198,'PAGE_BUILD_LABEL': "youtube_20170406_0_RC2",'VARIANTS_CHECKSUM': "f37256344ff7c0522a5596a768f65714",'CLIENT_PROTOCOL': "HTTP\/1.0",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'SERVICE_WORKER_PROMPT_NOTIFICATIONS': true,'FEEDBACK_BUCKET_ID': "Home",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"logged_in":false,"experiments":"9415398,9416475,9417482,9419451,9419979,9420289,9422596,9423555,9428398,9431012,9432939,9433839,9433870,9434046,9434289,9434949,9437553,9438290,9438309,9439294,9440054,9441194,9441929,9442387,9442746,9443659,9444189,9444897,9445139,9446054,9446364,9448053,9448302,9449072,9449243,9449256,9450544,9451814,9451823,9451937,9452098,9452448,9452833,9452850,9453098,9453167,9453540,9453553,9453700,9453897,9454394,9454653,9454837,9454976,9455031,9455068,9455480,9455939,9456249,9456445,9456640,9457115,9457141,9457169,9457360,9457541,9457592,9457595,9457598,9457968,9458265,9458576,9458668,9458881,9458947,9459067,9459075,9459187,9459655,9459657,9459792,9459799,9459986,9460072,9460087,9460098,9460160,9460266,9460295,9460350,9460458,9460554,9460627,9460829,9460960,9461124,9461452,9461777,9461906,9462018,9462032,9462359,9462377,9463083,9463153,9463175,9463177,9463460,9463470,9463496,9463512,9463594,9463664,9463784,9463809,9463841,9463936,9463963,9463965,9464040,9464111,9464207,9464344,9464407,9464440,9464490,9464495,9464640,9464823,9464887,9464889,9464909,9465117,9465438,9465513,9465533,9465560,9465652,9465676,9465710,9465732,9465813,9466136,9466181,9466754,9466777,9466793,9466795,9466835,9467001,9467274,9467400,9467508,9467510,9467548,9467588,9467659,9467700,9467777,9467781,9467795,9467806,9467820,9467822,9467867,9467895,9467977,9468110,9468153,9468195,9468228,9468285,9468389,9468433,9468482,9468551,9468770,9468956,9469081,9469090,9469224,9469606,9469609,9469615,9469734,9469849,9469863,9469887,9469926,9470125,9470269,9470602,9470730,9470734","accept_language":"en-US,en;q=0.8"}});   yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });
yt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist\n",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)\n",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "Queue",'ADS_INSTREAM_FIRST_PLAY': "A video ad is playing.",'ADS_INSTREAM_SKIPPABLE': "Video ad can be skipped.",'ADS_OVERLAY_IMPRESSION': "Ad displayed.",'MASTHEAD_NOTIFICATIONS_LABEL': {"other": "# unread notifications.", "case0": "0 unread notifications.", "case1": "1 unread notification."},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': "99+",'MDX_AUTOPLAY_OFF': 'Autoplay is off','MDX_AUTOPLAY_ON': 'Autoplay is on'});  yt.setConfig('FEED_PRIVACY_CSS_URL', "\/yts\/cssbin\/www-feedprivacydialog-vflJHnACg.css");
  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);
yt.setConfig({'SBOX_JS_URL': "\/yts\/jsbin\/www-searchbox-legacy-vflOli-cL\/www-searchbox-legacy.js",'SBOX_SETTINGS': {"REQUEST_LANGUAGE":"en","HAS_ON_SCREEN_KEYBOARD":false,"SESSION_INDEX":null,"PSUGGEST_TOKEN":null,"IS_FUSION":false,"PQ":"","SUGG_EXP_ID":"ytd3_arm_5","REQUEST_DOMAIN":"us"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"}});  yt.setConfig({
    'YPC_LOADER_JS': "\/yts\/jsbin\/www-ypc-vflf0pVRw\/www-ypc.js",
    'YPC_LOADER_CSS': "\/yts\/cssbin\/www-ypc-vfl-AgXO7.css",
    'YPC_SIGNIN_URL': "https:\/\/accounts.google.com\/ServiceLogin?uilel=3\u0026service=youtube\u0026passive=true\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3Den\u0026hl=en",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "\/subscription_ajax",
    'YPC_SWITCH_URL': "\/signin?action_handle_signin=true\u0026skip_identity_prompt=True\u0026feature=purchases\u0026next=%2F",
    'YPC_GB_LANGUAGE': "en_US",
    'YPC_MB_URL': "https:\/\/payments.google.com\/payments\/v4\/js\/integrator.js?ss=md",
    'YPC_TRANSACTION_URL': "\/transaction_handler",
    'YPC_SUBSCRIPTION_URL': "\/ypc_subscription_ajax",
    'YPC_POST_PURCHASE_URL': "\/ypc_post_purchase_ajax",
    'YTR_FAMILY_CREATION_URL': "https:\/\/families.google.com\/webcreation?usegapi=1",
    'YTO_GTM_DATA': {'event': 'purchased', 'purchaseStatus': 'success'},
    'YTO_GTM_1_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '1'},
    'YTO_GTM_2_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '2'}
  });
  yt.setMsg({
    'YPC_OFFER_OVERLAY': "  \n",
    'YPC_UNSUBSCRIBE_OVERLAY': "  \n"
  });
  yt.setConfig('GOOGLE_HELP_CONTEXT', "homepage");
ytcsi.info('st', 961);ytcfg.set({"CSI_VIEWPORT":true,"TIMING_ACTION":"home","TIMING_AFT_KEYS":["ol"],"CSI_SERVICE_NAME":"youtube","TIMING_INFO":{"yt_ref":"watch","cver":"1.20170406","yt_li":"0","yt_fn":"what_to_watch","yt_lt":"cold","GetBrowse_rid":"0xb4355eb33d426bd4","c":"WEB"}});;  yt.setConfig({
      'XSRF_TOKEN': "QUFFLUhqa0JsMHExUkU5Q2VndmVZT29JbEpTVzFwdVl4UXxBQ3Jtc0trN0wxeEg4STRYc0VCSExYM18xZDhRTUNGMnBNV0ZOWFJBZ0dWajBJVjJWQWtUSWl4UTNiVFNfdWpjMmp4T2lGRHo2RDJlRUR0ZFpoQ1JXZC12NG1WWnd0VDRvY1hScjl6TDZYRWZPLTNGU3RNQjlUbUpPSHp3Y3ZOOUpNTW9Xd2piT1JSVmNvU09ObzZFbjhTblU4THhTbXFzRnc=",
      'XSRF_FIELD_NAME': "session_token",

      'XSRF_REDIRECT_TOKEN': "koIPrkzFfq5Pw4PoWFaSLWlQpAt8MTQ5MTY5NjAxMEAxNDkxNjA5NjEw"  });
yt.setConfig('ID_TOKEN', null);window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 300);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}</script>


<mytubeelement id="myTubeRelayElementToPage" event="preferencesUpdated" data="{&quot;bundle&quot;:{&quot;label_delimitor&quot;:&quot;:&quot;,&quot;percentage&quot;:&quot;%&quot;,&quot;smart_buffer&quot;:&quot;Smart Buffer&quot;,&quot;start_playing_when_buffered&quot;:&quot;Start playing when buffered&quot;,&quot;sound&quot;:&quot;Sound&quot;,&quot;desktop_notification&quot;:&quot;Desktop Notification&quot;,&quot;continuation_on_next_line&quot;:&quot;-&quot;,&quot;loop&quot;:&quot;Loop&quot;,&quot;only_notify&quot;:&quot;Only Notify&quot;,&quot;estimated_time&quot;:&quot;Estimated Time&quot;,&quot;global_preferences&quot;:&quot;Global Preferences&quot;,&quot;no_notification_supported_on_your_browser&quot;:&quot;No notification style supported on your browser version&quot;,&quot;video_buffered&quot;:&quot;Video Buffered&quot;,&quot;buffered&quot;:&quot;Buffered&quot;,&quot;hyphen&quot;:&quot;-&quot;,&quot;buffered_message&quot;:&quot;The video has been buffered as requested and is ready to play.&quot;,&quot;not_supported&quot;:&quot;Not Supported&quot;,&quot;on&quot;:&quot;On&quot;,&quot;off&quot;:&quot;Off&quot;,&quot;click_to_enable_for_this_site&quot;:&quot;Click to enable for this site&quot;,&quot;desktop_notification_denied&quot;:&quot;You have denied permission for desktop notification for this site&quot;,&quot;notification_status_delimitor&quot;:&quot;;&quot;,&quot;error&quot;:&quot;Error&quot;,&quot;adblock_interferance_message&quot;:&quot;Adblock (or similar extension) is known to interfere with SmartVideo. Please add this url to adblock whitelist.&quot;,&quot;calculating&quot;:&quot;Calculating&quot;,&quot;waiting&quot;:&quot;Waiting&quot;,&quot;will_start_buffering_when_initialized&quot;:&quot;Will start buffering when initialized&quot;,&quot;will_start_playing_when_initialized&quot;:&quot;Will start playing when initialized&quot;,&quot;completed&quot;:&quot;Completed&quot;,&quot;buffering_stalled&quot;:&quot;Buffering is stalled. Will stop.&quot;,&quot;stopped&quot;:&quot;Stopped&quot;,&quot;hr&quot;:&quot;Hr&quot;,&quot;min&quot;:&quot;Min&quot;,&quot;sec&quot;:&quot;Sec&quot;,&quot;any_moment&quot;:&quot;Any Moment&quot;,&quot;popup_donate_to&quot;:&quot;Donate to&quot;,&quot;extension_id&quot;:&quot;lnkdbjbjpnpjeciipoaflmpcddinpjjp&quot;},&quot;prefs&quot;:{&quot;desktopNotification&quot;:true,&quot;soundNotification&quot;:true,&quot;logLevel&quot;:0,&quot;enable&quot;:true,&quot;loop&quot;:false,&quot;hidePopup&quot;:false,&quot;autoPlay&quot;:false,&quot;autoBuffer&quot;:true,&quot;autoPlayOnBuffer&quot;:false,&quot;autoPlayOnBufferPercentage&quot;:42,&quot;autoPlayOnSmartBuffer&quot;:true,&quot;quality&quot;:&quot;hd1080&quot;,&quot;fshd&quot;:true,&quot;onlyNotification&quot;:false,&quot;saveBandwidth&quot;:false,&quot;playerSize&quot;:&quot;default&quot;,&quot;hideAnnotations&quot;:false,&quot;turnOffPagedBuffering&quot;:true,&quot;enablePageAction&quot;:false}}"></mytubeelement><mytubeelement id="myTubeRelayElementToTab" event="relayPrefs" data="{&quot;loadBundle&quot;:true}"></mytubeelement><script>var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;ytspf.config['animation-duration'] = 0;</script><script src="https://s.ytimg.com/yts/jsbin/spf-vflWieI3y/spf.js" type="text/javascript" name="spf/spf" class="js-httpssytimgcomytsjsbinspfvflWieI3yspfjs"></script><script src="https://s.ytimg.com/yts/jsbin/www-en_US-vflefqTvR/base.js" name="www/base" class="js-httpssytimgcomytsjsbinwwwen_USvflefqTvRbasejs"></script><script>if (window.ytcsi) {window.ytcsi.tick("je", null, '');} </script><script>var yes2 = setInterval(function() {

	if (typeof yt == undefined) {

		try {


    yt.setConfig({
      'MASTHEAD_ENCRYPTED_ID': "LpAnpR34gyU",
      'MASTHEAD_IS_BRANDED': false
    });

  yt.setConfig('JS_PAGE_MODULES', ['www/feed', 'www/ypc_bootstrap']);

    yt.setConfig('DISMISS_THROUGH_IT', true);

      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  yt.setConfig({GAPI_HINT_PARAMS: "m;/_/scs/abc-static/_/js/k=gapi.gapi.en.DTPeBB_SvOA.O/m=__features__/rt=j/d=1/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",APIARY_HOST_FIRSTPARTY: "",INNERTUBE_API_VERSION: "v1",INNERTUBE_CONTEXT_CLIENT_VERSION: "2.20210823.00.00",XHR_APIARY_HOST: "youtube.com",APIARY_HOST: "",INNERTUBE_CONTEXT_CLIENT_NAME: 1,INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",'VISITOR_DATA': "CgtnVDdSelJrT0IwRSim25CJBg%3D%3D",'GAPI_HOST': "https://apis.google.com",'GAPI_LOCALE': "en_US",'INNERTUBE_CONTEXT_HL': "en",'INNERTUBE_CONTEXT_GL': "US",'XHR_APIARY_HOST': "youtube.com"});



		} catch (e) {};

	} else {

		clearInterval(yes2);

	}

}, 10);




  </script><script>yt.setConfig({'EVENT_ID': "pi0kYZ2uDYGH4QT0u5TQBA",'PAGE_NAME': "index",'LOGGED_IN': true,'SESSION_INDEX': 0,'VALID_SESSION_TEMPDATA_DOMAINS': ["www.youtube.com","gaming.youtube.com"],'PARENT_TRACKING_PARAMS': "",'FORMATS_FILE_SIZE_JS': ["%s B","%s KB","%s MB","%s GB","%s TB"],'DELEGATED_SESSION_ID': null,'ONE_PICK_URL': "",'UNIVERSAL_HOVERCARDS': true,'GOOGLEPLUS_HOST': "https://plus.google.com",'PAGEFRAME_JS': "/yts/jsbin/www-pageframe-vfl4HdsAa/www-pageframe.js",'GAPI_LOADER_URL': "/yts/jsbin/www-gapi-loader-vflfHbWwD/www-gapi-loader.js",'JS_COMMON_MODULE': "/yts/jsbin/www-en_US-vflefqTvR/common.js",'PAGE_FRAME_DELAYLOADED_CSS': "/yts/cssbin/www-pageframedelayloaded-vflo9ddF2.css",'EXPERIMENT_FLAGS': {"gfeedback_for_signed_out_users_enabled":true,"player_swfcfg_cleanup":true,"comment_deep_link":true,"use_push_for_desktop_live_chat":true,"watch_next_pause_autoplay_lact_sec":3600,"service_worker_push_enabled":true,"enable_watch_next_pause_autoplay_lact":true,"autoescape_tempdata_url":true,"log_window_onerror_fraction":0.1,"navigation_only_csi_reset":true,"desktop_pyv_on_watch_missing_params":true,"enable_server_side_search_pyv":true,"consent_url_override":"","enable_more_related_ve_logging":true,"enable_youtubei_innertube":true,"autoplay_pause_sampling_fraction":0.0,"service_worker_push_prompt_cap":1,"service_worker_enabled":true,"web_gel_lact":true,"clear_web_implicit_clicktracking":true,"block_spf_search_ads_impressions":true,"service_worker_push_home_only":true,"service_worker_scope":"/","warm_load_nav_start_web":true,"desktop_pyv_on_watch_via_valor":true,"desktop_pyv_on_watch_override_lact":true,"chat_smoothing_animations":84,"cold_load_nav_start_web":true,"same_domain_static_resources_desktop":true,"web_logging_max_batch":100},'GUIDED_HELP_PARAMS': {"logged_in":"1","context":"yt_web_w2w"},'HIGH_CONTRAST_MODE_CSS': "/yts/cssbin/www-highcontrastmode-vflYLtJ1j.css",'PREFETCH_CSS_RESOURCES' : ["/yts/cssbin/www-player-vfl8A2j89.css"],'PREFETCH_JS_RESOURCES': ["/yts/jsbin/player-en_US-vfl6PWeOD/base.js"],'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': "

  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip" type="button" onclick=";return false;" role="button" title="Watch Later" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="__VIDEO_ID__"><span class="yt-uix-button-arrow yt-sprite"></span></button>
",'WATCH_QUEUE_BUTTON': "  <button class="yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip" type="button" onclick=";return false;" title="Queue" data-video-ids="__VIDEO_ID__" data-style="tv-queue"></button>
",'WATCH_QUEUE_MENU': "  <span class="thumb-menu dark-overflow-action-menu video-actions">
    <button aria-expanded="false" class="yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty" type="button" aria-haspopup="true" onclick=";return false;" ><span class="yt-uix-button-arrow yt-sprite"></span><ul class="watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid"><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item" data-action="play-next" onclick=";return false;"  data-video-ids="__VIDEO_ID__"><span class="addto-watch-queue-menu-text">Play next</span></li><li role="menuitem" class="overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item" data-action="play-now" onclick=";return false;"  data-video-ids="__VIDEO_ID__"><span class="addto-watch-queue-menu-text">Play now</span></li></ul></button>
  </span>
",'SAFETY_MODE_PENDING': false,'ZWIEBACK_PING_URLS': ["https://www.google.com/pagead/lvz?pg=index&req_ts=1491609609&evtid=AErLtk1JzLFPJuSFayjfHPpKQWXlu3OAU8MkUv7XGh5CZOAyXZaOB1gkEFG00Q9WJhLEM8aR4AD74U3M-w8Hs3PLxY_JgnIKOg&sigh=AE2cNp7_cO7kV5RydOh-nhqwC9KKePQBIA"],'LOCAL_DATE_TIME_CONFIG': {"formatWeekdayShortTime":"EE h:mm a","shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"formatLongDateOnly":"MMMM d, yyyy","firstWeekCutoffDay":3,"formatLongDate":"MMMM d, yyyy h:mm a","amPms":["AM","PM"],"weekendRange":[6,5],"formatShortTime":"h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatShortDate":"MMM d, yyyy","firstDayOfWeek":0,"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},'PAGE_CL': 152397198,'PAGE_BUILD_LABEL': "youtube_20170406_0_RC2",'VARIANTS_CHECKSUM': "f37256344ff7c0522a5596a768f65714",'CLIENT_PROTOCOL': "HTTP/1.0",'CLIENT_TRANSPORT': "tcp",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'SERVICE_WORKER_PROMPT_NOTIFICATIONS': true,'FEEDBACK_BUCKET_ID': "Home",'FEEDBACK_LOCALE_LANGUAGE': "en",'FEEDBACK_LOCALE_EXTRAS': {"logged_in":false,"experiments":"9415398,9416475,9417482,9419451,9419979,9420289,9422596,9423555,9428398,9431012,9432939,9433839,9433870,9434046,9434289,9434949,9437553,9438290,9438309,9439294,9440054,9441194,9441929,9442387,9442746,9443659,9444189,9444897,9445139,9446054,9446364,9448053,9448302,9449072,9449243,9449256,9450544,9451814,9451823,9451937,9452098,9452448,9452833,9452850,9453098,9453167,9453540,9453553,9453700,9453897,9454394,9454653,9454837,9454976,9455031,9455068,9455480,9455939,9456249,9456445,9456640,9457115,9457141,9457169,9457360,9457541,9457592,9457595,9457598,9457968,9458265,9458576,9458668,9458881,9458947,9459067,9459075,9459187,9459655,9459657,9459792,9459799,9459986,9460072,9460087,9460098,9460160,9460266,9460295,9460350,9460458,9460554,9460627,9460829,9460960,9461124,9461452,9461777,9461906,9462018,9462032,9462359,9462377,9463083,9463153,9463175,9463177,9463460,9463470,9463496,9463512,9463594,9463664,9463784,9463809,9463841,9463936,9463963,9463965,9464040,9464111,9464207,9464344,9464407,9464440,9464490,9464495,9464640,9464823,9464887,9464889,9464909,9465117,9465438,9465513,9465533,9465560,9465652,9465676,9465710,9465732,9465813,9466136,9466181,9466754,9466777,9466793,9466795,9466835,9467001,9467274,9467400,9467508,9467510,9467548,9467588,9467659,9467700,9467777,9467781,9467795,9467806,9467820,9467822,9467867,9467895,9467977,9468110,9468153,9468195,9468228,9468285,9468389,9468433,9468482,9468551,9468770,9468956,9469081,9469090,9469224,9469606,9469609,9469615,9469734,9469849,9469863,9469887,9469926,9470125,9470269,9470602,9470730,9470734","accept_language":"en-US,en;q=0.8"}});

  yt.setConfig({
    'GUIDED_HELP_LOCALE': "en_US",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  yt.setConfig('SPF_SEARCH_BOX', true);

  yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': "Create new playlist
",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': "  $dynamic_title_placeholder (create new)
",'ADDTO_WATCH_LATER': "Watch Later",'ADDTO_WATCH_LATER_ADDED': "Added",'ADDTO_WATCH_LATER_ERROR': "Error",'ADDTO_WATCH_QUEUE': "Watch Queue",'ADDTO_WATCH_QUEUE_ADDED': "Added",'ADDTO_WATCH_QUEUE_ERROR': "Error",'ADDTO_TV_QUEUE': "Queue",'ADS_INSTREAM_FIRST_PLAY': "A video ad is playing.",'ADS_INSTREAM_SKIPPABLE': "Video ad can be skipped.",'ADS_OVERLAY_IMPRESSION': "Ad displayed.",'MASTHEAD_NOTIFICATIONS_LABEL': {"other": "# unread notifications.", "case0": "0 unread notifications.", "case1": "1 unread notification."},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': "99+",'MDX_AUTOPLAY_OFF': 'Autoplay is off','MDX_AUTOPLAY_ON': 'Autoplay is on'});

  yt.setConfig('FEED_PRIVACY_CSS_URL', "/yts/cssbin/www-feedprivacydialog-vflJHnACg.css");

  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);

  yt.setConfig({'SBOX_JS_URL': "/yts/jsbin/www-searchbox-legacy-vflOli-cL/www-searchbox-legacy.js",'SBOX_SETTINGS': {"REQUEST_LANGUAGE":"en","HAS_ON_SCREEN_KEYBOARD":false,"SESSION_INDEX":null,"PSUGGEST_TOKEN":null,"IS_FUSION":false,"PQ":"","SUGG_EXP_ID":"ytd3_arm_5","REQUEST_DOMAIN":"us"},'SBOX_LABELS': {"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"}});



  yt.setConfig({
    'YPC_LOADER_JS': "/yts/jsbin/www-ypc-vflf0pVRw/www-ypc.js",
    'YPC_LOADER_CSS': "/yts/cssbin/www-ypc-vfl-AgXO7.css",
    'YPC_SIGNIN_URL': "https://accounts.google.com/ServiceLogin?uilel=3&service=youtube&passive=true&continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3Den&hl=en",
    'DBLCLK_ADVERTISER_ID': "2542116",
    'DBLCLK_YPC_ACTIVITY_GROUP': "youtu444",
    'SUBSCRIPTION_URL': "/subscription_ajax",
    'YPC_SWITCH_URL': "/signin?action_handle_signin=true&skip_identity_prompt=True&feature=purchases&next=%2F",
    'YPC_GB_LANGUAGE': "en_US",
    'YPC_MB_URL': "https://payments.google.com/payments/v4/js/integrator.js?ss=md",
    'YPC_TRANSACTION_URL': "/transaction_handler",
    'YPC_SUBSCRIPTION_URL': "/ypc_subscription_ajax",
    'YPC_POST_PURCHASE_URL': "/ypc_post_purchase_ajax",
    'YTR_FAMILY_CREATION_URL': "https://families.google.com/webcreation?usegapi=1",
    'YTO_GTM_DATA': {'event': 'purchased', 'purchaseStatus': 'success'},
    'YTO_GTM_1_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '1'},
    'YTO_GTM_2_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '2'}
  });

    yt.setMsg({
    'YPC_OFFER_OVERLAY': "
",
    'YPC_UNSUBSCRIBE_OVERLAY': "
"
  });

  yt.setConfig('GOOGLE_HELP_CONTEXT', "homepage");

  ytcsi.info('st', 961);

  ytcfg.set({"CSI_VIEWPORT":true,"TIMING_ACTION":"home","TIMING_AFT_KEYS":["ol"],"CSI_SERVICE_NAME":"youtube","TIMING_INFO":{"yt_ref":"watch","cver":"1.20170406","yt_li":"0","yt_fn":"what_to_watch","yt_lt":"cold","GetBrowse_rid":"0xb4355eb33d426bd4","c":"WEB"}});

  yt.setConfig({
      'XSRF_TOKEN': "QUFFLUhqazhNUm1PZ0M0Vk1QTl9DQVNBX1BoNVcxeW5Wd3xBQ3Jtc0tuWENmN3l0VFpEaF93bS1LZF9VMEROS1hxTm9EeGpIWmg2U0U5S1BuVkFLcFNKZDMwNzJmMENOdmlRSktBOEtyelh3WDVxbDhuMkhMQlMtUXd3NUl3Y2xhMkZsak12Wkk0R1FuVjhOZnhobUZuc3Y1NA==",
      'XSRF_FIELD_NAME': "session_token",

      'XSRF_REDIRECT_TOKEN': "koIPrkzFfq5Pw4PoWFaSLWlQpAt8MTQ5MTY5NjAxMEAxNDkxNjA5NjEw"  });

	  yt.setConfig('ID_TOKEN', QUFFLUhqbFpISXhLSURzMmFDLWMwaXBFd2hrVzhFSWtZd3w=);

	  window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 300);
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}</script><iframe id="history-iframe" src="javascript:&quot;&quot;" style="display: none;"></iframe></body>`);


return finalHTMLPage;

}

var youtubehtml;

function getYouTubeHTML() {

	var url = "https://www.youtube.com/";

	var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       youtubehtml = xhttp.responseText;
    }
};
xhttp.open("GET", url, true);
xhttp.send();

}

var shelfdata;

async function getShelfHp(data = {})
{

    var response = await fetch("https://www.youtube.com/?pbj=1",
    {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credientials: 'same-origin',
        headers:
        {
            'X-YOUTUBE-CLIENT-NAME': '1',
            'X-YOUTUBE-CLIENT-VERSION': '1.20200101.01.01'
        },
        redirect: 'follow',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(data)
    });

    return response.json();

}

async function updateShelfData() {

shelfdata = await getShelfHp().then(response => shelfdata = response);

}

updateShelfData();

var ytinitialjson;

getYouTubeHTML();

var ytconfigdata;

function getYtConfigAndInitialData() {

	var htmlparser = new DOMParser().parseFromString(youtubehtml, "text/html");

	for (i = 0; i < htmlparser.scripts.length; i++) {

		if (htmlparser.scripts[i].innerHTML.startsWith("(function() {window.ytplayer={};")) {

			var partiallyfixedjson = htmlparser.scripts[i].innerHTML.replace('(function() {window.ytplayer={};', '');

			var inthefixingjson = partiallyfixedjson.replace('ytcfg.set(', '');

            var setmessageoccurence = inthefixingjson.search("var setMessage");

	        var brokenoccurence = setmessageoccurence - 2;

	        var fixedjson = inthefixingjson.slice(0, brokenoccurence);

            var parsedjson = JSON.parse(fixedjson);

			ytconfigdata = parsedjson;

			//return parsedjson;

			break;

			}

	}

	for (b = 0; b < htmlparser.scripts.length; b++) {

		if (htmlparser.scripts[b].innerHTML.startsWith("var ytInitialData")) {

			var ytinitialhtml = htmlparser.scripts[b].innerHTML;

			eval(ytinitialhtml);

			ytinitialjson = ytInitialData;

			console.log(ytinitialjson);

		}

	}


}

var yes = setInterval(function() {

	if (youtubehtml) {

		clearInterval(yes);

getYtConfigAndInitialData();

	}

}, 10);

async function injectPage() {

if (loggedin) {

	var guidedata = await action("guide");

} else {

var guidedata = "";

}

	var finalpage = await genPage(shelfdata, guidedata);

	document.querySelector("html").innerHTML = finalpage;

	document.querySelector("html").setAttribute("class", "guide-pinned show-guide content-snap-width-3");

}



var waitfordata = setInterval(function() {

	if (shelfdata && youtubehtml && ytconfigdata) {

		clearInterval(waitfordata);

		injectPage();

	}

}, 10);



/*

function createYtConfigScript() {

var createScript = setInterval(function() {

	if (!document.getElementById("experimentalytconfig")) {

	try {

var script = document.createElement("script");
script.id = "experimentalytconfig";
script.textContent = (`var yes = setInterval(function() {

	try {

		if (ytconfigdata.YES != 'TRUE') {

	yt.setConfig({'YES':'TRUE'},'JS_PAGE_MODULES', ['www/feed', 'www/ypc_bootstrap'],);


		} else {

			clearInterval(yes);

		}

	} catch(e) {};

}, 10);`);


document.head.appendChild(script);

	} catch(e) {};

	} else {

		clearInterval(createScript);

	}

}, 10);

}

var waitforythtml = setInterval(function() {

	if (youtubehtml) {

		clearInterval(waitforythtml);

		createYtConfigScript();

	}

}, 10);

*/

async function updateMast() {

	var notifjsondata = await action("notifcount");

	console.log(notifjsondata);

	function updatePfp() {

	for (u = 0; u < ytinitialjson.topbar.desktopTopbarRenderer.topbarButtons.length; u++) {

		if (typeof ytinitialjson.topbar.desktopTopbarRenderer.topbarButtons[u].topbarMenuButtonRenderer != 'undefined') {

			if (typeof ytinitialjson.topbar.desktopTopbarRenderer.topbarButtons[u].topbarMenuButtonRenderer.avatar != 'undefined') {

				break;

			} else {

				continue;

			}

		} else {

			continue;

		}

	}

	var pfp = ytinitialjson.topbar.desktopTopbarRenderer.topbarButtons[u].topbarMenuButtonRenderer.avatar.thumbnails[0].url;

	document.querySelector("button.yt-masthead-user-icon").querySelector("img").setAttribute('src', pfp);

	}

	function updateNotifButton() {

		var notifbutton = document.querySelector("div.notifications-container").querySelector("button");

		if (typeof notifjsondata.unseenCount != 'undefined') {

			if (notifjsondata.unseenCount != 0) {

				notifbutton.setAttribute("class", notifbutton.getAttribute("class").replace("sb-notif-off", "sb-notif-on"));

				notifbutton.querySelector("span.yt-uix-button-content").innerHTML = (notifjsondata.unseenCount).toString();

			} else {

				notifbutton.setAttribute("class", notifbutton.getAttribute("class").replace("sb-notif-on", "sb-notif-off"));

				notifbutton.querySelector("span.yt-uix-button-content").innerHTML = "";

			}

		} else if (typeof notifjsondata.actions != 'undefined') {

			for (t = 0; t < notifjsondata.actions.length; t++) {

				if (typeof notifjsondata.actions[t].updateNotificationsUnseenCountAction != 'undefined') {

					break;

				} else {

					continue;

				}

			}

			var unseencountupdate = notifjsondata.actions[t].updateNotificationsUnseenCountAction.unseenCount;

			if (unseencountupdate != 0) {

				notifbutton.setAttribute("class", notifbutton.getAttribute("class").replace("sb-notif-off", "sb-notif-on"));

				notifbutton.querySelector("span.yt-uix-button-content").innerHTML = (unseencountupdate).toString();

			} else {

				notifbutton.setAttribute("class", notifbutton.getAttribute("class").replace("sb-notif-on", "sb-notif-off"));

				notifbutton.querySelector("span.yt-uix-button-content").innerHTML = "";

			}

		}

	}
	updatePfp();
	updateNotifButton();

}





var wait = setInterval(async function() {

	if (document.querySelector("span.masthead-logo-renderer-logo") && youtubehtml && ytinitialjson) {

		clearInterval(wait);

                if (loggedin) {

		updateMast();

}

		injectScripts();

		removeGtCss();

	}

}, 10);

/*

var waitforscriptinjection = setInterval(function() {
	
	if (scriptsdoneloading) {
		
		clearInterval(waitforscriptinjection);
		
		//removeGtScripts();
		
	}
	
}, 10);

*/

var removegtscript = setInterval(removeGtScripts, 10);

setTimeout(function() {
	
	clearInterval(removegtscript);
	
}, 10000);

function removeGtCss() {

	for (s = 0; s < document.querySelectorAll("#gt-css-injection").length; s++) {

		document.querySelectorAll("#gt-css-injection")[s].remove();

	}

}



async function injectScripts() {

	//try {



	var script;

	/*


	var script = document.createElement("script");
	script.src = "https://closure-compiler.appspot.com/code/jscb73fc4108c838c7d2a568da1e30be3a5/default.js";
	document.head.appendChild(script);

	*/


	script = document.createElement("script");
	script.textContent = `if (document.fonts && document.fonts.load) {document.fonts.load("400 10pt Roboto", "E");document.fonts.load("500 10pt Roboto", "E");}`;
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`var ytcsi = {gt: function(n) {n = (n || '') + 'data_';return ytcsi[n] || (ytcsi[n] = {tick: {},info: {}});},now: window.performance && window.performance.timing &&window.performance.now ? function() {return window.performance.timing.navigationStart + window.performance.now();} : function() {return (new Date()).getTime();},tick: function(l, t, n) {ticks = ytcsi.gt(n).tick;var v = t || ytcsi.now();if (ticks[l]) {ticks['_' + l] = (ticks['_' + l] || [ticks[l]]);ticks['_' + l].push(v);}ticks[l] = v;},info: function(k, v, n) {ytcsi.gt(n).info[k] = v;},setStart: function(s, t, n) {ytcsi.info('yt_sts', s, n);ytcsi.tick('_start', t, n);}};(function(w, d) {ytcsi.setStart('dhs', w.performance ? w.performance.timing.responseStart : null);var isPrerender = (d.visibilityState || d.webkitVisibilityState) == 'prerender';var vName = d.webkitVisibilityState ? 'webkitvisibilitychange' : 'visibilitychange';if (isPrerender) {ytcsi.info('prerender', 1);var startTick = function() {ytcsi.setStart('dhs');d.removeEventListener(vName, startTick);};d.addEventListener(vName, startTick, false);}if (d.addEventListener) {d.addEventListener(vName, function() {ytcsi.tick('vc');}, false);}var slt = function(el, t) {setTimeout(function() {var n = ytcsi.now();el.loadTime = n;if (el.slt) {el.slt();}}, t);};w.__ytRIL = function(el) {if (!el.getAttribute('data-thumb')) {if (w.requestAnimationFrame) {w.requestAnimationFrame(function() {slt(el, 0);});} else {slt(el, 16);}}};})(window, document);`);
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`var ytcfg = {d: function() {return (window.yt && yt.config_) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};`);
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`
        (function(){var b={a:"content-snap-width-1",b:"content-snap-width-2",c:"content-snap-width-3"};function f(){var a=[],c;for(c in b)a.push(b[c]);return a}
function h(a){var c=f().concat(["guide-pinned","show-guide"]),e=c.length,g=[];a.replace(/\S+/g,function(a){for(var d=0;d<e;d++)if(a==c[d])return;g.push(a)});
return g}
;function k(a,c,e){var g=document.getElementsByTagName("html")[0],d=h(g.className);a&&1251<=(window.innerWidth||document.documentElement.clientWidth)&&(d.push("guide-pinned"),c&&d.push("show-guide"));e&&(e=(window.innerWidth||document.documentElement.clientWidth)-21-50,1251<=(window.innerWidth||document.documentElement.clientWidth)&&a&&c&&(e-=230),d.push(1262<=e?"content-snap-width-3":1056<=e?"content-snap-width-2":"content-snap-width-1"));g.className=d.join(" ")}
var l=["yt","www","masthead","sizing","runBeforeBodyIsReady"],m=this;l[0]in m||!m.execScript||m.execScript("var "+l[0]);for(var n;l.length&&(n=l.shift());)l.length||void 0===k?m[n]&&m[n]!==Object.prototype[n]?m=m[n]:m=m[n]={}:m[n]=k;}).call(this);

      try {window.ytbuffer = {};ytbuffer.handleClick = function(e) {var element = e.target || e.srcElement;while (element.parentElement) {if (/(^| )yt-can-buffer( |$)/.test(element.className)) {window.ytbuffer = {bufferedClick: e};element.className += ' yt-is-buffered';break;}element = element.parentElement;}};if (document.addEventListener) {document.addEventListener('click', ytbuffer.handleClick);} else {document.attachEvent('onclick', ytbuffer.handleClick);}} catch(e) {}

    yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);`);
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.src = "https://s.ytimg.com/yts/jsbin/scheduler-vflP0xYB-/scheduler.js";
	script.type = "text/javascript";
	script.setAttribute("name", "scheduler/scheduler");
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;ytspf.config['animation-duration'] = 0;`);
	script.id = "gt-script-injection";
	document.body.appendChild(script);

	script = document.createElement("script");
	script.src = (`https://s.ytimg.com/yts/jsbin/spf-vflWieI3y/spf.js`);
	script.type = "text/javascript";
	script.setAttribute("name", "spf/spf");
	script.id = "gt-script-injection";
	document.body.appendChild(script);

	script = document.createElement("script");
	script.src = (`https://s.ytimg.com/yts/jsbin/www-en_US-vflefqTvR/base.js`);
	script.setAttribute("name", "www/base");
	script.id = "gt-script-injection";
	document.body.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`var waitforspf = setInterval(function() {

		if (typeof spf != 'undefined') {

			clearInterval(waitforspf);

			spf.script.path({'www/': '/yts/jsbin/www-en_US-vflefqTvR/'});var ytdepmap = {"www/base": null, "www/common": "www/base", "www/angular_base": "www/common", "www/channels_accountupload": "www/common", "www/channels": "www/common", "www/dashboard": "www/common", "www/downloadreports": "www/common", "www/experiments": "www/common", "www/feed": "www/common", "www/instant": "www/common", "www/legomap": "www/common", "www/live_chat": "www/common", "www/live_chat_moderation": "www/common", "www/promo_join_network": "www/common", "www/results_harlemshake": "www/common", "www/results": "www/common", "www/results_starwars": "www/common", "www/subscriptionmanager": "www/common", "www/unlimited": "www/common", "www/watch": "www/common", "www/ypc_bootstrap": "www/common", "www/ypc_core": "www/common", "www/channels_edit": "www/channels", "www/live_dashboard": "www/angular_base", "www/videomanager": "www/angular_base", "www/watch_autoplayrenderer": "www/watch", "www/watch_edit": "www/watch", "www/watch_editor": "www/watch", "www/watch_live": "www/watch", "www/watch_promos": "www/watch", "www/watch_speedyg": "www/watch", "www/watch_transcript": "www/watch", "www/watch_videoshelf": "www/watch", "www/ct_advancedsearch": "www/videomanager", "www/my_videos": "www/videomanager"};spf.script.declare(ytdepmap);

			waitforspf = null;

		}

	}, 10)`);
	script.id = "gt-script-injection";
	document.head.appendChild(script);

	script = document.createElement("script");
	script.textContent = (`if (window.ytcsi) {window.ytcsi.tick("je", null, '');} `);
	script.id = "gt-script-injection";
	document.body.appendChild(script);

	var hl = ytconfigdata.HL;
	var gl = ytconfigdata.GL;
	var apiver = ytconfigdata.INNERTUBE_API_VERSION;
	var clientver = ytconfigdata.INNERTUBE_CONTEXT_CLIENT_VERSION;
	var clientname = ytconfigdata.INNERTUBE_CONTEXT_CLIENT_NAME;
	var apikey = ytconfigdata.INNERTUBE_API_KEY;
	var visitordata = ytconfigdata.VISITOR_DATA;
	var locale = hl + `_` + gl;
	var eventid = ytconfigdata.EVENT_ID;
	var loggedin = ytconfigdata.LOGGED_IN;
	var sessionindex = ytconfigdata.SESSION_INDEX;
	var sessid = ytconfigdata.DELEGATED_SESSION_ID;
	var xsrffield = ytconfigdata.XSRF_FIELD_NAME;
	var xsrftoken = ytconfigdata.XSRF_TOKEN;
	var idtoken = ytconfigdata.ID_TOKEN;
	var eventid = ytconfigdata.EVENT_ID;

	script = document.createElement("script");
	script.textContent = (`yes2 = setInterval(function() {

	if (typeof yt != 'undefined' && yt.setConfig) {

		clearInterval(yes2);

		//try {


    yt.setConfig({
      'MASTHEAD_ENCRYPTED_ID': "LpAnpR34gyU",
      'MASTHEAD_IS_BRANDED': false
    });

  yt.setConfig('JS_PAGE_MODULES', ['www/feed', 'www/ypc_bootstrap']);

    yt.setConfig('DISMISS_THROUGH_IT', true);

      yt.setConfig({
        'GUIDE_SELECTED_ITEM': "0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D"
      });

      yt.setConfig({
    'GUIDED_HELP_LOCALE': "` + locale + `",
    'GUIDED_HELP_ENVIRONMENT': "prod"
  });

  yt.setConfig({GAPI_HINT_PARAMS: "m;\/_\/scs\/abc-static\/_\/js\/k=gapi.gapi.en.DTPeBB_SvOA.O\/m=__features__\/rt=j\/d=1\/rs=AHpOoo-J3J0yqNDMPVrmQT6j-SBFfGx8oA",APIARY_HOST_FIRSTPARTY: "",INNERTUBE_API_VERSION: "` + apiver + `",INNERTUBE_CONTEXT_CLIENT_VERSION: "` + clientver + `",XHR_APIARY_HOST: "youtube.com",APIARY_HOST: "",INNERTUBE_CONTEXT_CLIENT_NAME: ` + clientname + `,INNERTUBE_API_KEY: "` + apikey + `",'VISITOR_DATA': "` + visitordata + `",'GAPI_HOST': "https:\/\/apis.google.com",'GAPI_LOCALE': "` + locale + `",'INNERTUBE_CONTEXT_HL': "` + hl +`",'INNERTUBE_CONTEXT_GL': "` + gl + `",'XHR_APIARY_HOST': "youtube.com"});

  delete yes2;



		//} catch (e) {};

	}

}, 10);




  `);

  script.id = "gt-script-injection";
  document.body.appendChild(script);

  script = document.createElement("script");
  script.textContent = (`yes3 = setInterval(function() {

	  if (typeof yt != 'undefined' && yt.setConfig) {

		  clearInterval(yes3);
	  yt.setConfig({'CLIENT_PROTOCOL':"HTTP/1.0",'CLIENT_TRANSPORT':"tcp",'CSI_SERVICE_NAME':"youtube",'CSI_VIEWPORT':true,'DELEGATED_SESSION_ID':` + (sessid ? sessid : `null`) + `,'ERRORS':[],'EVENT_ID':"` + eventid + `",'EXPERIMENT_FLAGS':{"gfeedback_for_signed_out_users_enabled":` + loggedin + `,"player_swfcfg_cleanup":true,"comment_deep_link":true,"use_push_for_desktop_live_chat":true,"watch_next_pause_autoplay_lact_sec":3600,"service_worker_push_enabled":true,"enable_watch_next_pause_autoplay_lact":true,"autoescape_tempdata_url":true,"log_window_onerror_fraction":0.1,"navigation_only_csi_reset":true,"desktop_pyv_on_watch_missing_params":true,"enable_server_side_search_pyv":true,"consent_url_override":"","enable_more_related_ve_logging":true,"enable_youtubei_innertube":true,"autoplay_pause_sampling_fraction":0,"service_worker_push_prompt_cap":1,"service_worker_enabled":true,"web_gel_lact":true,"clear_web_implicit_clicktracking":true,"block_spf_search_ads_impressions":true,"service_worker_push_home_only":true,"service_worker_scope":"/","warm_load_nav_start_web":true,"desktop_pyv_on_watch_via_valor":true,"desktop_pyv_on_watch_override_lact":true,"chat_smoothing_animations":84,"cold_load_nav_start_web":true,"same_domain_static_resources_desktop":true,"web_logging_max_batch":100},'FEEDBACK_BUCKET_ID':"Home",'FEEDBACK_LOCALE_EXTRAS':{"logged_in":` + loggedin + `,"experiments":"9415398,9416475,9417482,9419451,9419979,9420289,9422596,9423555,9428398,9431012,9432939,9433839,9433870,9434046,9434289,9434949,9437553,9438290,9438309,9439294,9440054,9441194,9441929,9442387,9442746,9443659,9444189,9444897,9445139,9446054,9446364,9448053,9448302,9449072,9449243,9449256,9450544,9451814,9451823,9451937,9452098,9452448,9452833,9452850,9453098,9453167,9453540,9453553,9453700,9453897,9454394,9454653,9454837,9454976,9455031,9455068,9455480,9455939,9456249,9456445,9456640,9457115,9457141,9457169,9457360,9457541,9457592,9457595,9457598,9457968,9458265,9458576,9458668,9458881,9458947,9459067,9459075,9459187,9459655,9459657,9459792,9459799,9459986,9460072,9460087,9460098,9460160,9460266,9460295,9460350,9460458,9460554,9460627,9460829,9460960,9461124,9461452,9461777,9461906,9462018,9462032,9462359,9462377,9463083,9463153,9463175,9463177,9463460,9463470,9463496,9463512,9463594,9463664,9463784,9463809,9463841,9463936,9463963,9463965,9464040,9464111,9464207,9464344,9464407,9464440,9464490,9464495,9464640,9464823,9464887,9464889,9464909,9465117,9465438,9465513,9465533,9465560,9465652,9465676,9465710,9465732,9465813,9466136,9466181,9466754,9466777,9466793,9466795,9466835,9467001,9467274,9467400,9467508,9467510,9467548,9467588,9467659,9467700,9467777,9467781,9467795,9467806,9467820,9467822,9467867,9467895,9467977,9468110,9468153,9468195,9468228,9468285,9468389,9468433,9468482,9468551,9468770,9468956,9469081,9469090,9469224,9469606,9469609,9469615,9469734,9469849,9469863,9469887,9469926,9470125,9470269,9470602,9470730,9470734","accept_language":"` + (gl.replace("_", "-")) + `,` + hl + `;q=0.8"},'FEEDBACK_LOCALE_LANGUAGE':"` + gl + `",'FEED_PRIVACY_CSS_URL':"/yts/cssbin/www-feedprivacydialog-vflJHnACg.css",'FEED_PRIVACY_LIGHTBOX_ENABLED':true,'FORMATS_FILE_SIZE_JS':["%s B","%s KB","%s MB","%s GB","%s TB"],'GAPI_LOADER_URL':"/yts/jsbin/www-gapi-loader-vflfHbWwD/www-gapi-loader.js",'GAPI_LOCALE':"` + gl + `",'GOOGLEPLUS_HOST':"https://plus.google.com",'GOOGLE_HELP_CONTEXT':"homepage",'GUIDED_HELP_PARAMS':{"logged_in":"` + (loggedin ? `1` : `0`) + `","context":"yt_web_w2w"},'HIGH_CONTRAST_MODE_CSS':"/yts/cssbin/www-highcontrastmode-vflYLtJ1j.css",'ID_TOKEN':"` + idtoken + `",'JS_COMMON_MODULE':"/yts/jsbin/www-en_US-vflefqTvR/common.js",'LOCAL_DATE_TIME_CONFIG':{"formatWeekdayShortTime":"EE h:mm a","shortWeekdays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"formatLongDateOnly":"MMMM d, yyyy","firstWeekCutoffDay":3,"formatLongDate":"MMMM d, yyyy h:mm a","amPms":["AM","PM"],"weekendRange":[6,5],"formatShortTime":"h:mm a","shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"dateFormats":["MMMM d, yyyy h:mm a","MMMM d, yyyy","MMM d, yyyy","MMM d, yyyy"],"formatShortDate":"MMM d, yyyy","firstDayOfWeek":0,"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},'LOGGED_IN':` + loggedin + `,'MDX_ENABLE_CASTV2':true,'MDX_ENABLE_QUEUE':true,'ONE_PICK_URL':"",'PAGEFRAME_JS':"/yts/jsbin/www-pageframe-vfl4HdsAa/www-pageframe.js",'PAGE_BUILD_LABEL':"youtube_20170406_0_RC2",'PAGE_CL':152397198,'PAGE_FRAME_DELAYLOADED_CSS':"/yts/cssbin/www-pageframedelayloaded-vflo9ddF2.css",'PAGE_NAME':"index",'PARENT_TRACKING_PARAMS':"",'PREBUFFER_AUTONAV':false,'PREBUFFER_AUTOPLAY':false,'PREBUFFER_LINKS':false,'PREBUFFER_MAX':1,'PREFETCH_AUTONAV':false,'PREFETCH_AUTOPLAY':false,'PREFETCH_AUTOPLAY_TIME':0,'PREFETCH_CSS_RESOURCES':["/yts/cssbin/www-player-vflN63lJq.css"],'PREFETCH_JS_RESOURCES':["/yts/jsbin/player-en_US-vfl6_PD5A/base.js"],'PREFETCH_LINKS':false,'PREFETCH_LINKS_MAX':1,'ROOT_VE_CHILDREN':["CAEQ7VAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CAIQpmEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJIBEP4eIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CJMBEOYrGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJUBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJYBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJcBELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJgBEOGLAhgEIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CJkBEOYrGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJoBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJsBELUsGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJwBELUsGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ0BELUsGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ4BELUsGAQiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CJ8BELUsGAUiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKABELUsGAYiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKEBELUsGAciEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKIBELUsGAgiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKMBEOYrGAIiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKQBELUsGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKUBENguGAMiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKYBEMcxIhMI_8qi58aT0wIVAdZ-Ch1_IQ8EKI4e","CKcBEMMtGAAiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4","CKgBEMMtGAEiEwj_yqLnxpPTAhUB1n4KHX8hDwQojh4"],'ROOT_VE_TYPE':3854,'SAFETY_MODE_PENDING':false,'SBOX_JS_URL':"/yts/jsbin/www-searchbox-legacy-vflOli-cL/www-searchbox-legacy.js",'SBOX_LABELS':{"SUGGESTION_DISMISSED_LABEL":"Suggestion dismissed","SUGGESTION_DISMISS_LABEL":"Remove"},'SBOX_SETTINGS':{"REQUEST_LANGUAGE":"` + hl + `","HAS_ON_SCREEN_KEYBOARD":false,"SESSION_INDEX":"` + sessionindex + `","PSUGGEST_TOKEN":null,"IS_FUSION":false,"PQ":"","SUGG_EXP_ID":"ytd3_arm_5","REQUEST_DOMAIN":"` + (gl.toLowerCase()) + `"},'SERVED_VIA_SPF_HISTORY':false,'SERVICE_WORKER_KILLSWITCH':false,'SERVICE_WORKER_PROMPT_NOTIFICATIONS':true,'SESSION_INDEX':"` + sessionindex + `",'SPF_SEARCH_BOX':true,'SUBSCRIPTION_URL':"/subscription_ajax",'THUMB_DELAY_LOAD_BUFFER':300,'TIMING_ACTION':"home",'TIMING_AFT_KEYS':["ol"],'TIMING_INFO':{"yt_ref":"watch","cver":"1.20170406","yt_li":"0","yt_fn":"what_to_watch","yt_lt":"cold","GetBrowse_rid":"0xb4355eb33d426bd4","c":"WEB"},'UNIVERSAL_HOVERCARDS':true,'VALID_SESSION_TEMPDATA_DOMAINS':["www.youtube.com","gaming.youtube.com"],'VARIANTS_CHECKSUM':"f37256344ff7c0522a5596a768f65714",'XSRF_FIELD_NAME':"` + xsrffield + `",'XSRF_REDIRECT_TOKEN':"koIPrkzFfq5Pw4PoWFaSLWlQpAt8MTQ5MTY5NjAxMEAxNDkxNjA5NjEw",'XSRF_TOKEN':"` + xsrftoken + `",'YPC_GB_LANGUAGE':"` + gl + `",'YPC_LOADER_CSS':"/yts/cssbin/www-ypc-vfl-AgXO7.css",'YPC_LOADER_JS':"/yts/jsbin/www-ypc-vflf0pVRw/www-ypc.js",'YPC_MB_URL':"https://payments.google.com/payments/v4/js/integrator.js?ss=md",'YPC_POST_PURCHASE_URL':"/ypc_post_purchase_ajax",'YPC_SIGNIN_URL':"https://accounts.google.com/ServiceLogin?uilel=3&service=youtube&passive=true&continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26next%3D%252F%26hl%3D` + hl + `&hl=` + hl + `",'YPC_SUBSCRIPTION_URL':"/ypc_subscription_ajax",'YPC_SWITCH_URL':"/signin?action_handle_signin=true&skip_identity_prompt=True&feature=purchases&next=%2F",'YPC_TRANSACTION_URL':"/transaction_handler",'YTO_GTM_1_BUTTON_CLICK_DATA':{"event":"landingButtonClick","buttonPosition":"1"},'YTO_GTM_2_BUTTON_CLICK_DATA':{"event":"landingButtonClick","buttonPosition":"2"},'YTO_GTM_DATA':{"event":"purchased","purchaseStatus":"success"},'YTR_FAMILY_CREATION_URL':"https://families.google.com/webcreation?usegapi=1",'ZWIEBACK_PING_URLS':["https://www.google.com/pagead/lvz?pg=index&req_ts=1491609609&evtid=AErLtk1JzLFPJuSFayjfHPpKQWXlu3OAU8MkUv7XGh5CZOAyXZaOB1gkEFG00Q9WJhLEM8aR4AD74U3M-w8Hs3PLxY_JgnIKOg&sigh=AE2cNp7_cO7kV5RydOh-nhqwC9KKePQBIA"]});

	  /*

	  try {

		  yt.setConfig({'WATCH_LATER_BUTTON':"\n\n  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" role=\"button\" title=\"Watch Later\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_BUTTON': "  \u003cbutton class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button addto-queue-button video-actions spf-nolink hide-until-delayloaded addto-tv-queue-button yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Queue\" data-video-ids=\"__VIDEO_ID__\" data-style=\"tv-queue\"\u003e\u003c\/button\u003e\n",'WATCH_QUEUE_MENU': "  \u003cspan class=\"thumb-menu dark-overflow-action-menu video-actions\"\u003e\n    \u003cbutton aria-expanded=\"false\" class=\"yt-uix-button-reverse flip addto-watch-queue-menu spf-nolink hide-until-delayloaded yt-uix-button yt-uix-button-dark-overflow-action-menu yt-uix-button-size-default yt-uix-button-has-icon no-icon-markup yt-uix-button-empty\" type=\"button\" aria-haspopup=\"true\" onclick=\";return false;\" \u003e\u003cspan class=\"yt-uix-button-arrow yt-sprite\"\u003e\u003c\/span\u003e\u003cul class=\"watch-queue-thumb-menu yt-uix-button-menu yt-uix-button-menu-dark-overflow-action-menu hid\"\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-next yt-uix-button-menu-item\" data-action=\"play-next\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay next\u003c\/span\u003e\u003c\/li\u003e\u003cli role=\"menuitem\" class=\"overflow-menu-choice addto-watch-queue-menu-choice addto-watch-queue-play-now yt-uix-button-menu-item\" data-action=\"play-now\" onclick=\";return false;\"  data-video-ids=\"__VIDEO_ID__\"\u003e\u003cspan class=\"addto-watch-queue-menu-text\"\u003ePlay now\u003c\/span\u003e\u003c\/li\u003e\u003c\/ul\u003e\u003c\/button\u003e\n  \u003c\/span\u003e\n"});

	  } catch(err) {};

	  */
if (window.ytcsi) {window.ytcsi.tick("jl", null, '');}

delete yes3;

	  }

  }, 10);






`);
script.id = "gt-script-injection";
document.body.appendChild(script);



  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-en_US-vflefqTvR/common.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);

  script = document.createElement("script");
  script.textContent = (`yes4 = setInterval(function() {

	  if (typeof _yt_www != 'undefined') {

		  clearInterval(yes4);

		  var script;

  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-en_US-vflefqTvR/feed.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);

  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-en_US-vflefqTvR/angular_base.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);

  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-pageframe-vfl4HdsAa/www-pageframe.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);
  
  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-ypc-vflf0pVRw/www-ypc.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);
  
  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-searchbox-legacy-vflOli-cL/www-searchbox-legacy.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);
  
  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/www-gapi-loader-vflfHbWwD/www-gapi-loader.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);

  delete yes4;

	  }

  }, 10);`);
  script.id = "gt-script-injection";
  document.body.appendChild(script);



  script = document.createElement("script");
  script.src = "https://s.ytimg.com/yts/jsbin/player-en_US-vfl6_PD5A/remote.js";
  script.id = "gt-script-injection";
  document.body.appendChild(script);







/*

for (var i  = 0; i < document.querySelectorAll("script").length; i++) {

	if (document.querySelectorAll("script")[i].src) {

		var script = document.createElement("script");
		script.src = document.querySelectorAll("script")[i].src;
		script.setAttribute("name", document.querySelectorAll("script")[i].getAttribute("name"));
		script.setAttribute("type", "text/javascript");

		if (document.body.contains(document.querySelectorAll("script")[i])) {

			document.body.appendChild(script);

		} else if (document.head.contains(document.querySelectorAll("script")[i])) {

			document.head.appendChild(script);

		}

	} else {

		var scripttoeval = document.querySelectorAll("script")[i].textContent;

		eval(scripttoeval);

	}

}

*/

	//} catch(e) {};

}

function removeGtScripts() {
	
	for (f = 0; f < document.querySelectorAll("script#gt-script-injection").length; f++) {
		
		document.querySelectorAll("script#gt-script-injection")[f].remove();
		
	}
	
}

}

init();