const fests = [
    {
      year: 2020,
      day:"October 24th and 25th",
      venue: "Online",
      performances:[
        {artist:"Jake Soffer", link:"https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=397"},
        {artist:"Twenty Three Suns", link:"https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=3780"},
        {artist:"Lambent", link:"https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=6947"},
        {artist:"Clodewerks", link:"https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=9141"},
        {artist:"Oleada", link:"https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=11206"},
        {artist:"Gnostic Evolution", link:"https://youtu.be/https://www.youtube.com/watch?v=fl7bMzvZbMM&feature=youtu.be&t=13982"},
        {artist:"Josep Garcés & LiveLoop", link:"https://www.youtube.com/watch?v=E9Og3K5UtXg&feature=youtu.be&t=170"},
        {artist:"Pedeplei", link:"https://www.youtube.com/watch?v=E9Og3K5UtXg&feature=youtu.be&t=5669"},
        {artist:"Waffle Taco", link:"https://www.youtube.com/watch?v=E9Og3K5UtXg&feature=youtu.be&t=8090"},
        {artist:"Sundog", link:"https://www.youtube.com/watch?v=E9Og3K5UtXg&feature=youtu.be&t=10917"}
      ],
      sponsors:[{sponsor:"LiveLoop",link:"http://liveloop.live"}],
      attendance:300,
      revenue:230
    },
    {
      year: 2019,
      day:"August 25th",
      venue: "Bit House Saloon",
      performances:[
        {artist:"Twenty Three Suns", link:"https://www.youtube.com/watch?v=xDrP10CBaYk"},
        {artist:"EBP", link:"https://www.youtube.com/watch?v=VRhje56XuuA"},
        {artist:"The Exosphere Project", link:"https://www.youtube.com/watch?v=_8-SGZqTWA8"},
        {artist:"Gnostic Evolution", link:"https://www.youtube.com/watch?v=BfWvrbL8boQ"},
        {artist:"Annie Sea", link:"https://www.youtube.com/watch?v=LkuVaKiWiIs"},
        {artist:"Top Shelf Low Down", link:"https://www.youtube.com/watch?v=YsWTGQc98VU"},
        {artist:"Scrambler", link:"https://www.youtube.com/watch?v=ysl_ta0xZRk"},
        {artist:"Clodewerks", link:""},
        {artist:"JOOSS", link:"https://www.youtube.com/watch?v=bRzh-1ps2OE&t=2s"}
      ],
      sponsors:[],
      attendance:20,
      revenue:230
    },
    {
      year: 2017,
      day:"August 25th",
      venue: "Rogue Bayfront Public House",
      performances:[
        {artist:"Noah Peterson", link:"https://www.youtube.com/watch?v=UqmZwompN0w&amp;list=PLjiWJF83CBikR61t-83xrIlObqBwvipd9"},
        {artist:"Stargasm", link:"https://www.youtube.com/watch?v=LBTceMBMppc&amp;list=PLjiWJF83CBimD2vMPUhEF0NzItMG5i8O5"},
        {artist:"Twenty Three Suns", link:"https://www.youtube.com/watch?v=zCCAbR-m0lc"},
        {artist:"Luthor Maggot", link:"https://www.youtube.com/watch?v=vR4gUQQhPTY"},
        {artist:"Waffle Taco", link:"https://www.youtube.com/watch?v=ugwRr3armio&amp;list=PLjiWJF83CBin6Nmn5DpCSq26RREh9zS-s"},
        {artist:"Nathan North", link:"https://www.youtube.com/watch?v=FSIKMofa9Og&amp;list=PLjiWJF83CBikDxWPn8dXlO9HeODdqglfi"},
        {artist:"Saundra's Electric Nightlife", link:"https://www.youtube.com/watch?v=6sR6xLPaHx8&amp;list=PLjiWJF83CBinLRtWvwuxqKbzjtqn0l_RI"},
        {artist:"Gordo", link:"https://www.youtube.com/watch?v=Fj-ngzC3sVs&amp;list=PLjiWJF83CBimLojmpqHy6ng1199W63wWa"},
        {artist:"John Firshi", link:"https://www.youtube.com/watch?v=HL53ny6sBLw&amp;list=PLjiWJF83CBim3JswcfZmt_YgyoU8JBHki"},
        {artist:"Philophobia", link:"https://www.youtube.com/watch?v=OBcMK1vjWx4&amp;list=PLjiWJF83CBin-10bqDdlDCoWLsmfjXPut"},
        {artist:"Brothers", link:"https://www.youtube.com/watch?v=ZSGJaBpqm0A&amp;list=PLjiWJF83CBin5L68DNvFfMKrUoo_HY9FK"},
        {artist:"Playboy Smooth", link:"https://www.youtube.com/watch?v=2eTPbq6U--Q"},
        {artist:"Jessie Davis", link:"https://www.youtube.com/watch?v=IqMAmRI-_es&amp;list=PLjiWJF83CBikwYuxe7SMeu8o4bonFG-3F"}
      ],
      sponsors:[{sponsor:"Morley Pedals", link:"http://www.morleypedals.com/"},
      {sponsor:"Option Knob", link:"http://www.optionknob.com"},
      {sponsor:"Electro-Faustus", link:"http://www.electrofaustus.com/"},
      {sponsor:"D'Addario", link:"http://www.daddario.com"},
      {sponsor:"Henretta Engineering", link:"http://www.henrettaengineering.com"}],
      attendance:20,
      revenue:0
    },
    {
      year: 2016,
      day:"August 25th",
      venue: "Local 99 hall",
      performances:[
        {artist:"Tyler Carson", link:"https://www.youtube.com/watch?v=XS8bkA3Xm8s&amp;list=PLjiWJF83CBinq_hLjSo1oEPrkNw9AskGP"},
        {artist:"Saundra's Electric Night Life", link:"https://www.youtube.com/watch?v=18E3zY09BTY&amp;list=PLjiWJF83CBini6AqMZvcMjVlp_gRylRGb&amp;index=1"},
        {artist:"Professor Slicebox", link:"https://www.youtube.com/watch?v=SFYQUPcd4dA&amp;list=PLjiWJF83CBikvGCfArHtFca8v9b7Tlqxq"},
        {artist:"Arbor Daze", link:"https://www.youtube.com/watch?v=wkhQFsTcVvw&amp;list=PLjiWJF83CBinnpdNwq93-nslXn-9sfDPS"},
        {artist:"Tim Scallon", link:"https://www.youtube.com/watch?v=36Jes5g_Q9E&amp;list=PLjiWJF83CBim4EfpIxt03a_XpPBUyHqgd"},
        {artist:"Jet Black Pearl", link:"https://www.youtube.com/watch?v=SzssJI9nVAM&amp;list=PLjiWJF83CBimMTXmswTBuSNmM78ETwxzt"},
        {artist:"Riley Tyrel Carter", link:"https://www.youtube.com/watch?v=tC6ssF-3-yU&amp;list=PLjiWJF83CBik9tHn3QmXpwuTZvDtHmEks"},
        {artist:"PhiloPhobia", link:"https://www.youtube.com/watch?v=d-4wZuNfbV4&amp;list=PLjiWJF83CBimVtjH4UfvLDs3iY-8JXsxQ"},
        {artist:"Bodarc Bestvina", link:"https://www.youtube.com/watch?v=vFOxnGV2h6M&amp;list=PLjiWJF83CBinoTevpGAri2X6T-HR2lv5C"},
        {artist:"litmus0001", link:"https://www.youtube.com/watch?v=asRGvRKVQFw"},
        {artist:"Iconoplasty", link:"https://www.youtube.com/watch?v=ccY8Az4IjvE"},
        {artist:"Mandoman", link:"https://www.youtube.com/watch?v=mYo-QMJi69Y"},
        {artist:"Rock Forming Mineral", link:"https://www.youtube.com/watch?v=_qiURD00Daw&amp;list=PLjiWJF83CBikzvpHqbS39AD_Ou4nBnvto"},
        {artist:"Daves Device", link:"https://www.youtube.com/watch?v=C-G40B_Vo7c&amp;list=PLjiWJF83CBinSWXh0zvO1Orgpn7zjZvq_"}
      ],
      sponsors:[
        {sponsor:"TC-Helicon",link:"http://www.tc-helicon.com/en/products/perform-v/"},
        {sponsor:"Loopinglive",link:"http://www.loopinglive.com"},
        {sponsor:"Morley Pedals",link:"http://www.morleypedals.com/"},
        {sponsor:"Pigtronix",link:"http://www.pigtronix.com/infinity"},
      ],
      attendance:20,
      revenue:0
    },
    {
      year: 2015,
      day:"August 25th",
      venue: "Analog Cafe",
      performances:[
        {artist:"Blake DeGraw", link:"https://www.youtube.com/watch?v=lPcRLXTZBq0&amp;list=PLjiWJF83CBilSqAzLmGS1OF86c46_5Ta0"},
        {artist:"The Electric Noodle", link:"https://www.youtube.com/watch?v=hDGfeVtjC-g"},
        {artist:"Quiet Horn", link:"https://www.youtube.com/watch?v=yBS5TChylHE"},
        {artist:"Mark Hamburg", link:"https://www.youtube.com/watch?v=Kk9JQmy3SRg&amp;list=PLjiWJF83CBimpFfXTcMXvBFVAAW5vEUA7&amp;index=1"},
        {artist:"Troll Foot Frass", link:"https://www.youtube.com/watch?v=-6qozcrIkVs&amp;list=PLjiWJF83CBinFZ1aUvlFd7i91yN4SFKD2&amp;index=1"},
        {artist:"FreshFX", link:"https://www.youtube.com/watch?v=XNBPH8_Q0kI&amp;list=PLjiWJF83CBili8BvnJwyt7oQmy-EGkoiw&amp;index=1"},
        {artist:"Timothy Scallon", link:"https://www.youtube.com/watch?v=9LqKPMQbgNw"},
        {artist:"Son Fish", link:"https://www.youtube.com/watch?v=KLx7Plxsf7I&amp;list=PLjiWJF83CBildFTFFOOGF45ZKre6f9iCr&amp;index=1"},
        {artist:"Noah Peterson", link:"https://www.youtube.com/watch?v=4fbvVS-Cixw&amp;list=PLjiWJF83CBimccKaWKggmeZpg548pl5Tt&amp;index=1"},
        {artist:"Lexhart", link:"https://www.youtube.com/watch?v=4bHgZ0jm50U&amp;index=1&amp;list=PLjiWJF83CBimE_lQec_yFioNGv3XqmRFL"},
        {artist:"MC Space Cadet", link:"https://www.youtube.com/watch?v=Ub6Df0DxLvs&amp;index=1&amp;list=PLjiWJF83CBimqYDv6rJuhUpol4mV_m_hV"},
        {artist:"Steve Uccello", link:"https://www.youtube.com/watch?v=V_5n2_q8GO0&amp;index=1&amp;list=PLjiWJF83CBil4JwVMW_L4O4gpRdmdezM9"},
        {artist:"Frederick Brummer", link:"https://www.youtube.com/watch?v=Qvxdg7liP7Q&amp;list=PLjiWJF83CBilYZahxjWFmP5xjZyueGexG&amp;index=1"},
        {artist:"Cindy Sawprano", link:"https://www.youtube.com/watch?v=caJdOZzmmww&amp;list=PLjiWJF83CBilrquxkKhkYuWbW0qp8BdTU&amp;index=1"},
        {artist:"Waffle Taco", link:"https://www.youtube.com/watch?v=SzdfzCd1PT4&amp;list=PLjiWJF83CBimDbDChPTXGDP4jwQkolEl5&amp;index=1"},
        {artist:"thisissami", link:"https://www.youtube.com/watch?v=gqqHV1pf_6M&amp;list=PLjiWJF83CBimrFAL-HXFF__9wLaETGHOa"},
        {artist:"Daniel J. Davis", link:"https://www.youtube.com/watch?v=RTueHLBDSYI&amp;list=PLjiWJF83CBil6Jw-RjUMNiqrXOGzC9ynK&amp;index=1"},
        {artist:"Riley Tyrel Carter", link:"https://www.youtube.com/watch?v=-LYTq-z6Vis&amp;list=PLjiWJF83CBinlEXoicRoz0ZzleHH545LE&amp;index=1"},
        {artist:"Canzino", link:"https://www.youtube.com/watch?v=76tXpvdnvVQ&amp;list=PLjiWJF83CBilOyP0IsVRghjrikFRKBQIy&amp;index =1"},
        {artist:"Chrome Mole Monocle", link:"https://www.youtube.com/watch?v=xyCr7dYKRoo&amp;feature=youtu.be"},
        {artist:"Professor Slicebox", link:"https://www.youtube.com/watch?v=ltBCY_MkeX8&amp;index=1&amp;list=PLjiWJF83CBilEczDKtMt3C_LMnVSXVy1c"},
        {artist:"Group Loop", link:"https://www.youtube.com/watch?v=HPRHVaqhM7w"},
        {artist:"Blake DeGraw",link:"https://www.youtube.com/watch?v=lPcRLXTZBq0&amp;list=PLjiWJF83CBilSqAzLmGS1OF86c46_5Ta0"},
        {artist:"Eric Muhs",link:"https://www.youtube.com/watch?v=rK37VTSxx_E&amp;list=PLjiWJF83CBikpM6NbPEJlxuHHfm8jenpN&amp;index=1"},
        {artist:"Group Loop",link:"https://www.youtube.com/watch?v=HPRHVaqhM7w"},
        {artist:"The Electric Noodle",link:"https://www.youtube.com/watch?v=hDGfeVtjC-g"},
        {artist:"Chrome Mole Monocle",link:"https://www.youtube.com/watch?v=xyCr7dYKRoo&amp;feature=youtu.be"},
        {artist:"Quiet Horn",link:"https://www.youtube.com/watch?v=yBS5TChylHE"},
        {artist:"Mark Hamburg",link:"https://www.youtube.com/watch?v=Kk9JQmy3SRg&amp;list=PLjiWJF83CBimpFfXTcMXvBFVAAW5vEUA7&amp;index=1"},
        {artist:"Troll Foot Frass",link:"https://www.youtube.com/watch?v=-6qozcrIkVs&amp;list=PLjiWJF83CBinFZ1aUvlFd7i91yN4SFKD2&amp;index=1"},
        {artist:"FreshF",link:"https://www.youtube.com/watch?v=XNBPH8_Q0kI&amp;list=PLjiWJF83CBili8BvnJwyt7oQmy-EGkoiw&amp;index=1"},
        {artist:"Timothy Scallon",link:"https://www.youtube.com/watch?v=9LqKPMQbgNw"},
        {artist:"Son Fish",link:"https://www.youtube.com/watch?v=KLx7Plxsf7I&amp;list=PLjiWJF83CBildFTFFOOGF45ZKre6f9iCr&amp;index=1"},
        {artist:"Noah Peterson",link:"https://www.youtube.com/watch?v=4fbvVS-Cixw&amp;list=PLjiWJF83CBimccKaWKggmeZpg548pl5Tt&amp;index=1"},
        {artist:"Lexhart",link:"https://www.youtube.com/watch?v=4bHgZ0jm50U&amp;index=1&amp;list=PLjiWJF83CBimE_lQec_yFioNGv3XqmRFL"}
      ],
      sponsors:[
        {sponsor:"Beatbuddy",link:"http://mybeatbuddy.com/?utm_source=LoopFest&utm_medium=banner&utm_campaign=LoopFest"}
      ],
      attendance:20,
      revenue:0
    },
    {
      year: 2014,
      day:"August 25th",
      venue: "Analog Cafe",
      performances:[
        {artist:"Mark Hamburg",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBinzklswAcuNmddqt7RvcsW4"},
        {artist:"Jean-Paul De Roover",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilToG_2DYoW0gzn5bMJVXIt"},
        {artist:"Lucid Brain Integrative Project",link:"https://www.youtube.com/watch?v=pna4JdFdk9M&amp;feature=youtu.be"},
        {artist:"Richie Dagger's Crime",link:"https://www.youtube.com/watch?v=lCMbrKCkFCA&amp;list=PLjiWJF83CBikBcBR7SDJ2ipr_JrAtqlhs"},
        {artist:"Daniel J. Davis",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBikc0eaXLwzM9xfypGbT2F6d"},
        {artist:"Cian",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBikG-OQK2_GKEuEaerxWBPmy"},
        {artist:"Mandoman",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBim87EwCWqHPnvga4BpmbdLM"},
        {artist:"Mr. Tim",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBik799Rr-FdvgKEXFoCeXil1"},
        {artist:"Rejyna",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBinS62pUKtWyd0v6DqM8N-q_"},
        {artist:"Per Boysen",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBikCgX1tu4isHnQ-VE54ufAE"},
        {artist:"Ted Killian",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBikjNn9qjdEdyQPT00LeTNwz"},
        {artist:"Eric Buchner",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBin8xLGEI8dvZvbWdjIw9bD6"},
        {artist:"David Kollar and Paola Raineri",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilGe0r3cqdHjFDlOMV9apga"},
        {artist:"Just Alliance",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimlWlJO2iOIYfcqhd8IhOcG"},
        {artist:"Consumer",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimBavRhvicMN_L20RRMMlBG"},
        {artist:"thisissami",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilUcHbhicDsT94gNOnQ-wAo"},
        {artist:"Noah Peterson",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBikUqECbWRN0BVtyT0Pj9Oco"},
        {artist:"Noise Agency",link:"https://www.youtube.com/watch?v=y16LSrE-m2o&amp;feature=youtu.be"}
      ],
      sponsors:[],
      attendance:20,
      revenue:0
    },
    {
      year: 2013,
      day:"August 25th",
      venue: "Analog Cafe",
      performances:[
        {artist:"Noah Peterson",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimd0uZqcTeJ68ch6PoRnDGn"},
        {artist:"Lucid Brain Integrative Project",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBinJwoP8cYJuLbotvLJekT3M"},
        {artist:"Consumer",link:"https://www.youtube.com/watch?v=bTqLmJ7hvpA"},
        {artist:"Ben Beauvais",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBinPsrt_0scdYW95aC8bKwja"},
        {artist:"Polemic Contriver",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimxOI5jHrDRfbya3HVns7bM"},
        {artist:"Eastside Industrial",link:"https://www.youtube.com/my_videos?o=U&amp;pi=3"},
        {artist:"Tukso Okey",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBiklJ3LZNc8AKEWX1oUelKdF"},
        {artist:"Rejyna Douglass-Whitman",link:"https://www.facebook.com/rejynamusic"},
        {artist:"ANI",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimsKcwA_HVvUpqsG2vtqcTe"},
        {artist:"Stephen Briggs",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimtBvPbaBGJp7Ws8MdmJ3oR"},
        {artist:"Bill Walker",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilh8Sqj6Se_XFwjVLXocQLc"},
        {artist:"Gideon Freudmann",link:"https://www.youtube.com/watch?v=gZu96WFgfss"},
        {artist:"Forever Growing",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilAihOU2onGVDZd6SVpHFr4"},
        {artist:"Moongriffin",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBil1ubClv7QCWwv2FQ9I-can"},
        {artist:"Cellotronik",link:"https://www.youtube.com/watch?v=9BGX0pRR_tM"},
        {artist:"Isaac Thompson",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilZFequ-rUqIWHUVoOAZ0Hc"},
        {artist:"Christopher Ingold",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBilK6cbrqwT-BGxMmG8wRrvY"},
        {artist:"Clifford Dunn",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBinRxu4qvNG7ByAKp9BDQdLB"},
        {artist:"Eric Muhs",link:"https://www.youtube.com/playlist?list=PLjiWJF83CBimGZVMY7AZVkzaAxQFCgu1w"},
        {artist:"The Genie",link:"https://www.youtube.com/watch?v=KEGm-tjuHlc"}
      ],
      sponsors:[],
      attendance:20,
      revenue:0
    },
  ];
  
  const artists = [
        {
        name:"Jake Soffer",
        location:"Portland, Oregon",
        desc:"Sleepy guitar looping music.",
        url:"https://jakesoffer.com"
        },
        {
        name:"Twenty Three Suns",
        location:"Portland, Oregon",
        desc:"Twenty Three Suns blends ambient, progressive, krautrock, and experimental music into extended instrumental suites.",
        url:"https://m.facebook.com/pages/category/Musician-Band/Twenty-Three-Suns-207616279278682/"
        },
        {
        name:"Lambent",
        location:"Bali, Indonesia",
        desc:"Improv live looping utilizing keyboard, synth, modular, guitar, electric drums, and vocals.",
        url:"https://m.facebook.com/lambentmusic/"
        },
        {
        name:"Clodewerks",
        location:"Portland, Oregon",
        desc:" Clodewerks is Kyle Linneman, trumpet player and producer. Kyle combines his passion for trumpet and electronic music into a lush and unique sound.  Live, Clodewerks combines looping, samples, and live effects to make an immersive experience.",
        url:"http://www.clodewerks.com"
        },
        {
        name:"Oleada",
        location:"Portland, Oregon",
        desc:"Psychedelic cumbia played by a duo of multi-instrumentalists, incorporating live looping to create groovy rhythms.",
        url:"https://oleada.bandcamp.com/"
        },
        {
        name:"Gnostic Evolution",
        location:"The Universe",
        desc:"Exploration of the 5th element of Hip Hop.",
        url:""
        },
        {
        name:"Josep Garcés & LiveLoop",
        location:"Amsterdam, The Netherlands",
        desc:"Audio visual Live Looping set using clarinet and a custom software which I created and available to others.",
        url:"www.liveloop.live"
        },
        {
        name:"Pedeplei",
        location:"Guadalajara, Mexico",
        desc:"Found sound electrónica that ranges from ambient to EDM.",
        url:"https://israelpmusic.com/"
        },
        {
        name:"Waffle Taco",
        location:"Portland, Oregon",
        desc:"Waffle Taco’s main ingredient is jazz, but added notes of moving trumpet melodies and poignant songwriting give this duo their delicious sound. Waffle Taco is the duo of Ben Beauvais (bass,vocals) and Kyle Linneman (trumpet).",
        url:"http://www.waffletacopdx.com"
        },
        {
        name:"Sundog",
        location:"Portland, Oregon",
        desc:"Sundog uses samplers, drum pads, bass, ukelele and vocals to make songs from scratch on stage with a looping pedal. Accustomed to working alone, Sundog brings creativity to arrangements, making disparate sounds friends to the same groove.",
        url:"https://youtu.be/cXUTDoTCIlk"
        },
  ];
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    artists,
    fests
  };
  