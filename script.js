const audio = document.getElementById("audio");
const lyrics = document.getElementById("lyrics");
const lyricsTranslate = document.getElementById("lyricsTranslate");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const slowDownButton = document.getElementById("slow-down-button");
const speedUpButton = document.getElementById("speed-up-button");
const resetSpeedButton = document.getElementById("reset-speed-button");
const translateButton = document.getElementById("translate-button");

let context;
let source;
let analyser;
let currentTime = 0;

function startAudio() {
  context = new AudioContext();
  source = context.createMediaElementSource(audio);
  analyser = context.createAnalyser();

  source.connect(analyser);
  analyser.connect(context.destination);

  audio.play();
  requestAnimationFrame(updateLyrics);
}

function updateLyrics() {
  currentTime = audio.currentTime;
  const currentLine = script.find(
    (line) => currentTime >= line.start && currentTime < line.end
  );
  if (currentLine) {
    lyrics.textContent = currentLine.text;
    //lyrics.classList.add("highlight");
  } else {
    lyrics.textContent = "";

    //lyrics.classList.remove("highlight");
  }
  requestAnimationFrame(updateLyrics);
}

function translate(str, lang1, lang2) {
  const escapedStr = encodeURI(str);
  const lastPart = `${lang1}&tl=${lang2}&dt=t&dt=t&q=${escapedStr}`;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${lastPart}`;

  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const startIndex = text.indexOf('"') + 1;
      const endIndex = text.indexOf('"', startIndex);
      const result = text.substring(startIndex, endIndex);
      document.querySelector("#lyricsTranslate").textContent = result;
    })
    .catch((error) => {
      console.error(error);
    });
}

document.addEventListener("click", startAudio);

playButton.addEventListener("click", function () {
  audio.play();
  document.querySelector("#lyricsTranslate").textContent = "";
});

pauseButton.addEventListener("click", function () {
  audio.pause();
});

slowDownButton.addEventListener("click", function () {
  audio.playbackRate -= 0.1;
});

speedUpButton.addEventListener("click", function () {
  audio.playbackRate += 0.1;
});

resetSpeedButton.addEventListener("click", function () {
  audio.playbackRate = audio.defaultPlaybackRate;
});

translateButton.addEventListener("click", function () {
  translate(lyrics.textContent, "en", "vi");
});

const script = [
  {
    start: 2,
    end: 8,
    text: "[Music] the amalfi coast",
  },
  {
    start: 8,
    end: 14,
    text: "the amalfi coast in italy is a beautiful place to travel it's a beautiful area with an",
  },
  {
    start: 14,
    end: 22,
    text: "interesting culture located on the taranian sea next to the mediterranean in southern italy",
  },
  {
    start: 22,
    end: 27,
    text: "the amalfi coast has high mountains and amazing beaches",
  },
  {
    start: 27,
    end: 32,
    text: "amalfi is on the west coast of italy and it takes less than four hours to",
  },
  {
    start: 32,
    end: 38,
    text: "drive there from rome the country's capital you'll love it from the moment you",
  },
  {
    start: 38,
    end: 46,
    text: "arrive there there are many activities for travelers including beautiful beaches for swimming",
  },
  {
    start: 46,
    end: 53,
    text: "you can also play games on the beach and catch free space a boat trip is a good way to spend the",
  },
  {
    start: 53,
    end: 59,
    text: "day and you may see ducks and other birds sitting on the water",
  },
  {
    start: 59,
    end: 64,
    text: "fishing is also a popular activity there are dozens of villages on the",
  },
  {
    start: 64,
    end: 70,
    text: "amalfi coast and you can visit one of them to see how a typical local person",
  },
  {
    start: 70,
    end: 76,
    text: "lives if you're friendly you might even get invited into someone's house to enjoy",
  },
  {
    start: 76,
    end: 82,
    text: "home-cooked italian food italians like drinking alcohol",
  },
  {
    start: 82,
    end: 89,
    text: "especially wine the amalfi coast has lots of gardens to explore",
  },
  {
    start: 89,
    end: 96,
    text: "italy is famous for its pizza and pasta however the amalfi coast is also well",
  },
  {
    start: 96,
    end: 102,
    text: "known for fish and octopus because it is located next to the water",
  },
  {
    start: 102,
    end: 108,
    text: "pastries are a popular breakfast food on the amalfi coast",
  },
  {
    start: 108,
    end: 113,
    text: "august is a popular month to travel to the amalfi coast because the weather is",
  },
  {
    start: 113,
    end: 118,
    text: "warm it's easy to spend a week traveling around the area",
  },
  {
    start: 118,
    end: 125,
    text: "make sure to take a camera so you can take a lot of photos we're sure you'll agree that it's a",
  },
  {
    start: 125,
    end: 131,
    text: "great place [Music]",
  },
  {
    start: 131,
    end: 137,
    text: "the laboratory mia's father had a laboratory but she",
  },
  {
    start: 137,
    end: 144,
    text: "had no idea what was in it her dad always closed and locked the door when he went in",
  },
  {
    start: 144,
    end: 150,
    text: "she knew that he used it to do projects for work he never told mia what these projects",
  },
  {
    start: 150,
    end: 158,
    text: "were one night mia approached the door to the laboratory she stopped and thought",
  },
  {
    start: 158,
    end: 165,
    text: "i wonder what crazy experiment he is doing now suddenly she heard a loud noise",
  },
  {
    start: 165,
    end: 171,
    text: "it sounded like an evil laugh the noise scared her so she walked",
  },
  {
    start: 171,
    end: 176,
    text: "quickly back to her room the next night her friend liz came to",
  },
  {
    start: 176,
    end: 182,
    text: "her house when liz arrived mia told her about the night before",
  },
  {
    start: 182,
    end: 188,
    text: "oh it was terrible she said why don't we see what is in there",
  },
  {
    start: 188,
    end: 195,
    text: "liz asked it will be a fun adventure mia felt nervous about going into her",
  },
  {
    start: 195,
    end: 202,
    text: "father's laboratory but she agreed as always the door was locked",
  },
  {
    start: 202,
    end: 209,
    text: "they waited until mia's father left the laboratory to eat dinner he didn't lock the door",
  },
  {
    start: 209,
    end: 214,
    text: "liz said let's go the laboratory was dark",
  },
  {
    start: 214,
    end: 221,
    text: "the girls walked down the stairs carefully mia smelled strange chemicals",
  },
  {
    start: 221,
    end: 228,
    text: "what terrible thing was her father creating suddenly they heard an evil laugh",
  },
  {
    start: 228,
    end: 236,
    text: "it was even worse than the one mia heard the night before what if a monster was going to kill them",
  },
  {
    start: 236,
    end: 244,
    text: "mia had to do something she shouted for help mia's father ran into the room and",
  },
  {
    start: 244,
    end: 251,
    text: "turned on the lights oh no he said you must have learned my secret",
  },
  {
    start: 251,
    end: 258,
    text: "your monster tried to kill us mia said monster he asked",
  },
  {
    start: 258,
    end: 265,
    text: "you mean this he had a pretty doll in his hands the doll laughed",
  },
  {
    start: 265,
    end: 271,
    text: "the laugh didn't sound so evil anymore i made this for your birthday",
  },
  {
    start: 271,
    end: 278,
    text: "i wanted to give it to you then but you can have it now i hope you like it",
  },
  {
    start: 278,
    end: 284,
    text: "[Music] the report",
  },
  {
    start: 284,
    end: 290,
    text: "lee sat among the books at the library and thought about his group project",
  },
  {
    start: 290,
    end: 296,
    text: "they had to turn it in soon but he hadn't even started his part jack and",
  },
  {
    start: 296,
    end: 303,
    text: "claire were in his group they had worked hard they were also very smart and lee didn't",
  },
  {
    start: 303,
    end: 308,
    text: "want them to get a bad grade jack did the report",
  },
  {
    start: 308,
    end: 314,
    text: "he wrote a lot of very good sentences and described things clearly and carefully",
  },
  {
    start: 314,
    end: 323,
    text: "claire drew a nice map of the stars now lee needed to do his part of the project",
  },
  {
    start: 323,
    end: 328,
    text: "well i suppose i need to start my model lee thought",
  },
  {
    start: 328,
    end: 335,
    text: "making a model of a planet was really hard lee tried to read several books but he",
  },
  {
    start: 335,
    end: 341,
    text: "couldn't understand any of the charts we're going to fail because of me",
  },
  {
    start: 341,
    end: 347,
    text: "lee said he put his head down on the table and said",
  },
  {
    start: 347,
    end: 355,
    text: "i wish i could see a planet and an alien instead of having to read about it",
  },
  {
    start: 355,
    end: 361,
    text: "suddenly he had a great idea that would help him solve his problem",
  },
  {
    start: 361,
    end: 368,
    text: "why not go on the web and look for photographs of the earth and other planets taken from space",
  },
  {
    start: 368,
    end: 375,
    text: "they would give him a really good view of the planets they had to talk about in their report",
  },
  {
    start: 375,
    end: 380,
    text: "instead of a bad grade his group would have the best project ever",
  },
  {
    start: 380,
    end: 386,
    text: "the photos of earth showed lots of clouds but you could still see the shapes of",
  },
  {
    start: 386,
    end: 393,
    text: "land and seas on earth he also looked at photos of mars",
  },
  {
    start: 393,
    end: 399,
    text: "lee now had plenty of ideas for making a model of the planet mars",
  },
  {
    start: 399,
    end: 404,
    text: "all he had to do was to turn his ideas into a model",
  },
  {
    start: 404,
    end: 410,
    text: "he used a small ball to help him make the shape he wanted and then painted it",
  },
  {
    start: 410,
    end: 416,
    text: "to look like the photos of mars that he had seen sometimes seeing is much more helpful",
  },
  {
    start: 416,
    end: 422,
    text: "than just reading [Music]",
  },
  {
    start: 422,
    end: 429,
    text: "the dog's bell john's dog was a bad dog",
  },
  {
    start: 429,
    end: 434,
    text: "he bit people frequently john was concerned about this",
  },
  {
    start: 434,
    end: 441,
    text: "it was not an appropriate way for a dog to behave his friends in the village always",
  },
  {
    start: 441,
    end: 447,
    text: "expected the dog to bite them the news about john's dog spread through",
  },
  {
    start: 447,
    end: 452,
    text: "the village none of the people wanted to go to john's house",
  },
  {
    start: 452,
    end: 458,
    text: "john tried to instruct the dog to behave but it never worked",
  },
  {
    start: 458,
    end: 465,
    text: "he tried to be patient and teach the dog to be calm that also didn't work",
  },
  {
    start: 465,
    end: 473,
    text: "john didn't want to punish the dog how will i stop my dog's bad habit",
  },
  {
    start: 473,
    end: 479,
    text: "john asked himself john's friend came to talk to him about the issue",
  },
  {
    start: 479,
    end: 485,
    text: "during their important meeting his friend said the people in the village asked me to",
  },
  {
    start: 485,
    end: 491,
    text: "represent them we want your dog to stop this habit",
  },
  {
    start: 491,
    end: 497,
    text: "why don't you put a bell around the dog's neck this way we would hear your dog coming",
  },
  {
    start: 497,
    end: 502,
    text: "down the street john thought this was a great idea",
  },
  {
    start: 502,
    end: 508,
    text: "now people could stay away from the dog he would not be able to bite anyone",
  },
  {
    start: 508,
    end: 515,
    text: "anymore the dog liked the bell too people looked at him when they heard his",
  },
  {
    start: 515,
    end: 521,
    text: "bell this made the dog very content he liked the sound the bell made when he",
  },
  {
    start: 521,
    end: 526,
    text: "walked one day john's dog strolled through the village",
  },
  {
    start: 526,
    end: 532,
    text: "and met some other dogs he expected them to want a bell like his",
  },
  {
    start: 532,
    end: 539,
    text: "but they laughed at his bell they said the bell made people avoid him",
  },
  {
    start: 539,
    end: 545,
    text: "john's dog shook his head no they look at me because they like the",
  },
  {
    start: 545,
    end: 551,
    text: "bell the other dog said you have the wrong idea about what makes",
  },
  {
    start: 551,
    end: 558,
    text: "you popular of course they like your bell it tells them where you are so they can",
  },
  {
    start: 558,
    end: 563,
    text: "avoid you you aren't able to bite them anymore",
  },
  {
    start: 563,
    end: 573,
    text: "you see being popular isn't something positive when it's for the wrong reason",
  },
  {
    start: 573,
    end: 580,
    text: "iron man races have you heard of the iron man triathlon",
  },
  {
    start: 580,
    end: 589,
    text: "it's considered one of the most challenging sporting events in the world competitors swim ride a bike and run",
  },
  {
    start: 589,
    end: 595,
    text: "the race consists of a 3.86 kilometer swim a",
  },
  {
    start: 595,
    end: 601,
    text: "180.25 kilometer bicycle ride and a 42.2 kilometer run",
  },
  {
    start: 601,
    end: 607,
    text: "there are no breaks during the race so competitors must keep going no matter",
  },
  {
    start: 607,
    end: 614,
    text: "what people who choose to enter this race must be healthy and prepared in both",
  },
  {
    start: 614,
    end: 619,
    text: "mind and body iron ironman races are held all over the",
  },
  {
    start: 619,
    end: 626,
    text: "world some well-known competitions take place in new zealand germany and california in",
  },
  {
    start: 626,
    end: 633,
    text: "the united states there are several rules for those who want to compete in the ironman",
  },
  {
    start: 633,
    end: 639,
    text: "the minimum age of racers is 18 so everyone who competes is an adult",
  },
  {
    start: 639,
    end: 646,
    text: "training for the ironman can take more than a year people who train often start practicing",
  },
  {
    start: 646,
    end: 651,
    text: "the events at shorter distances first and then increase the amount of length",
  },
  {
    start: 651,
    end: 658,
    text: "and time they swim bike and run training can be difficult because people",
  },
  {
    start: 658,
    end: 665,
    text: "need to find a balance of strength and endurance training without enough training people can get",
  },
  {
    start: 665,
    end: 671,
    text: "bad injuries some people even gain weight when training because their bodies store",
  },
  {
    start: 671,
    end: 677,
    text: "calories instead of using them for energy all people in training should drink",
  },
  {
    start: 677,
    end: 682,
    text: "plenty of water doctors believe that exercise is good",
  },
  {
    start: 682,
    end: 688,
    text: "for people's health and helps the heart people participate in other sports and",
  },
  {
    start: 688,
    end: 695,
    text: "games such as golf or american football but the iron man is a challenging way to",
  },
  {
    start: 695,
    end: 700,
    text: "stay fit even though it is hard it can still be fun",
  },
  {
    start: 700,
    end: 706,
    text: "it's a great way to stay active and enjoy life",
  },
  {
    start: 706,
    end: 714,
    text: "[Music] the twins katie and alice were twins",
  },
  {
    start: 714,
    end: 721,
    text: "they were so alike that few people could tell them apart they were almost like seeing one person",
  },
  {
    start: 721,
    end: 726,
    text: "looking in a mirror they even spoke in the same way as each other",
  },
  {
    start: 726,
    end: 732,
    text: "they were best friends the twins attributes were not all",
  },
  {
    start: 732,
    end: 737,
    text: "exactly the same alice preferred sports and was a star",
  },
  {
    start: 737,
    end: 744,
    text: "athlete in soccer katie preferred foreign languages and was bilingual and fringe",
  },
  {
    start: 744,
    end: 751,
    text: "katie decided to be a participant at a summer camp in france alice wasn't interested in the french",
  },
  {
    start: 751,
    end: 756,
    text: "language so she didn't go but she was angry that katie wanted to",
  },
  {
    start: 756,
    end: 763,
    text: "spend the summer away from her two months later katie returned",
  },
  {
    start: 763,
    end: 769,
    text: "alice dashed to the airport to greet her sister but when alice saw katie she was",
  },
  {
    start: 769,
    end: 776,
    text: "surprised katie now spoke french and she looked completely different",
  },
  {
    start: 776,
    end: 782,
    text: "she was wearing fashionable clothes and she looked taller",
  },
  {
    start: 782,
    end: 788,
    text: "alice felt very messy next to her she was just wearing an old t-shirt and",
  },
  {
    start: 788,
    end: 794,
    text: "her hair looked untidy when alice asked katie about friends",
  },
  {
    start: 794,
    end: 801,
    text: "katie was vague and didn't say much it made alice feel tense and filled her",
  },
  {
    start: 801,
    end: 807,
    text: "with disgust because in the past they'd always told each other everything",
  },
  {
    start: 807,
    end: 814,
    text: "now there was a huge gulf between them over the weeks the sisters spoke even",
  },
  {
    start: 814,
    end: 822,
    text: "less two months later it was the twins birthday all their lives they'd had a ritual",
  },
  {
    start: 822,
    end: 829,
    text: "before their birthday they'd talk all night long that night alice came into katie's",
  },
  {
    start: 829,
    end: 834,
    text: "bedroom i'm sorry i haven't spoken to you much lately",
  },
  {
    start: 834,
    end: 840,
    text: "katie said i understand you have new friends now",
  },
  {
    start: 840,
    end: 846,
    text: "said alice angrily katie said my french friends don't write much",
  },
  {
    start: 846,
    end: 852,
    text: "nowadays for a while i thought they were more exciting than my friends at home",
  },
  {
    start: 852,
    end: 859,
    text: "but i was wrong you're my sister and you'll always be my best friend",
  },
  {
    start: 859,
    end: 865,
    text: "alice said i'm sorry too i wanted our relationship to stay the",
  },
  {
    start: 865,
    end: 872,
    text: "same forever but it's totally natural for twins to have different interests we can still be",
  },
  {
    start: 872,
    end: 877,
    text: "best friends without being together all the time",
  },
  {
    start: 877,
    end: 883,
    text: "[Music] the best prince",
  },
  {
    start: 883,
    end: 888,
    text: "king minos was very sick his condition was getting worse",
  },
  {
    start: 888,
    end: 897,
    text: "he had three sons he loved them all he had to announce who would become king",
  },
  {
    start: 897,
    end: 902,
    text: "two of the princes stood waiting outside the king's room",
  },
  {
    start: 902,
    end: 907,
    text: "theseus was the oldest and strongest he thought his father would make him",
  },
  {
    start: 907,
    end: 913,
    text: "king pilias the second son thought differently",
  },
  {
    start: 913,
    end: 919,
    text: "he was an expert in fighting he thought the king would choose him",
  },
  {
    start: 919,
    end: 926,
    text: "when i'm king theseus told peelias i'll let you contribute to protect our",
  },
  {
    start: 926,
    end: 932,
    text: "country you can lead the army peleast became angry",
  },
  {
    start: 932,
    end: 937,
    text: "father knows i'm famous for my fighting skills he'll make me king",
  },
  {
    start: 937,
    end: 944,
    text: "you theseus said he won't choose you the kingdom is mine",
  },
  {
    start: 944,
    end: 951,
    text: "pilias claimed father will give it to me or i'll use force to take it",
  },
  {
    start: 951,
    end: 959,
    text: "theseus made a sudden move to take out his sword then peleast did the same",
  },
  {
    start: 959,
    end: 964,
    text: "beating me will be a challenge theseus said fight me now",
  },
  {
    start: 964,
    end: 970,
    text: "the winner gets the kingdom pelias agreed",
  },
  {
    start: 970,
    end: 978,
    text: "king minos could hear his sons fighting the youngest son jason stood beside him",
  },
  {
    start: 978,
    end: 985,
    text: "he sensed his father's sadness the king laid his hand on jason's arm",
  },
  {
    start: 985,
    end: 990,
    text: "your brother's fight too much the king told him",
  },
  {
    start: 990,
    end: 998,
    text: "i must protect my kingdom from all harm they'll divide it between them",
  },
  {
    start: 998,
    end: 1003,
    text: "the people won't know what to do there'll be war",
  },
  {
    start: 1003,
    end: 1008,
    text: "i can't allow either of them to be king therefore",
  },
  {
    start: 1008,
    end: 1014,
    text: "i'm making you king your kindness has always made you",
  },
  {
    start: 1014,
    end: 1020,
    text: "special it's the difference between you and your brothers",
  },
  {
    start: 1020,
    end: 1025,
    text: "you can bring peace they can't",
  },
  {
    start: 1025,
    end: 1030,
    text: "then the king died theseus and pelias heard that their",
  },
  {
    start: 1030,
    end: 1036,
    text: "youngest brother was king they were surprised",
  },
  {
    start: 1036,
    end: 1042,
    text: "they realized that their fighting was wrong it had kept them from saying goodbye to",
  },
  {
    start: 1042,
    end: 1047,
    text: "their father they agreed to have jason as their king",
  },
  {
    start: 1047,
    end: 1054,
    text: "he was the best choice [Music]",
  },
  {
    start: 1054,
    end: 1061,
    text: "how the sun and the moon were made do you ever wonder where the moon and",
  },
  {
    start: 1061,
    end: 1067,
    text: "the sun came from the inuit people of alaska have a theory",
  },
  {
    start: 1067,
    end: 1072,
    text: "they tell a story about a beautiful girl she was very nice",
  },
  {
    start: 1072,
    end: 1081,
    text: "in contrast her brother was a mean little boy one day he proposed something",
  },
  {
    start: 1081,
    end: 1086,
    text: "we should go to a party he said the girl accepted",
  },
  {
    start: 1086,
    end: 1092,
    text: "first it was necessary for her to get ready she arranged her hair and put on nice",
  },
  {
    start: 1092,
    end: 1099,
    text: "clothes this required a lot of time but the girl worked hard and soon she",
  },
  {
    start: 1099,
    end: 1106,
    text: "was satisfied she looked perfect they attended the party together",
  },
  {
    start: 1106,
    end: 1111,
    text: "the girl was having fun later she walked into the bathroom",
  },
  {
    start: 1111,
    end: 1117,
    text: "suddenly the lights were turned off someone grabbed her hair and tore her",
  },
  {
    start: 1117,
    end: 1125,
    text: "clothes she ran out of the bathroom she wanted to know who did this to her",
  },
  {
    start: 1125,
    end: 1133,
    text: "then she had an idea she fixed her hair again this time it was even more beautiful",
  },
  {
    start: 1133,
    end: 1139,
    text: "she even arranged beautiful jewels in it she wanted to encourage the person to",
  },
  {
    start: 1139,
    end: 1146,
    text: "grab it again she put black dirt in her hair the purpose of this was to catch the",
  },
  {
    start: 1146,
    end: 1153,
    text: "person she went to the bathroom again and it was the same pattern",
  },
  {
    start: 1153,
    end: 1161,
    text: "the lights went off and someone grabbed her hair when he released it his hand was black",
  },
  {
    start: 1161,
    end: 1166,
    text: "the girl returned to the party she knew there was only a single person",
  },
  {
    start: 1166,
    end: 1172,
    text: "with a black hand when she saw that person he was very familiar",
  },
  {
    start: 1172,
    end: 1179,
    text: "it was her brother he ran into the woods the girl ran after him",
  },
  {
    start: 1179,
    end: 1185,
    text: "they both carried fire so they could see in the dark the smoke went into the air",
  },
  {
    start: 1185,
    end: 1193,
    text: "as they ran they grew they became huge then they went into space",
  },
  {
    start: 1193,
    end: 1199,
    text: "when the girl's fire went out she hung in the sky she became the moon",
  },
  {
    start: 1199,
    end: 1206,
    text: "and her brother became the sun they chase each other forever",
  },
  {
    start: 1206,
    end: 1212,
    text: "[Music] service animals",
  },
  {
    start: 1212,
    end: 1220,
    text: "have you ever seen a blind person on the bus with a dog this dog is most likely a service animal",
  },
  {
    start: 1220,
    end: 1227,
    text: "a service animal is an animal that is trained to do things for people who cannot do them alone because of a",
  },
  {
    start: 1227,
    end: 1235,
    text: "disability dogs are most usually used as service animals because they are intelligent",
  },
  {
    start: 1235,
    end: 1243,
    text: "animals they also have a good sense of smell and can sense dangerous situations",
  },
  {
    start: 1243,
    end: 1250,
    text: "in addition dogs are easy to train and are loyal to their owners",
  },
  {
    start: 1250,
    end: 1257,
    text: "when they are close to their owners dogs will do anything to keep them safe",
  },
  {
    start: 1257,
    end: 1263,
    text: "service dogs are sometimes called guide dogs or hearing dogs",
  },
  {
    start: 1263,
    end: 1268,
    text: "these dogs can help people who cannot see or hear",
  },
  {
    start: 1268,
    end: 1275,
    text: "they are trained to open and close a door push a button and listen to a command",
  },
  {
    start: 1275,
    end: 1281,
    text: "these dogs can also help people who have a hurt leg and need to use a wheelchair",
  },
  {
    start: 1281,
    end: 1286,
    text: "to get around service dogs are strong and can even",
  },
  {
    start: 1286,
    end: 1293,
    text: "pull wheelchairs if these people ever need medical attention the dogs are trained to bark",
  },
  {
    start: 1293,
    end: 1300,
    text: "and get help dogs can also be used as therapy dogs",
  },
  {
    start: 1300,
    end: 1307,
    text: "therapy dogs may visit a school or hospital to help people who are feeling lonely or",
  },
  {
    start: 1307,
    end: 1312,
    text: "anxious their bad feelings can create health problems",
  },
  {
    start: 1312,
    end: 1318,
    text: "therapy dogs can provide kindness and love to improve a person's mood which",
  },
  {
    start: 1318,
    end: 1324,
    text: "can then improve that person's health although dogs are the most common",
  },
  {
    start: 1324,
    end: 1330,
    text: "service animals there are other animals that can be trained to be service animals as well",
  },
  {
    start: 1330,
    end: 1337,
    text: "you might see a cat a rabbit or a horse that is used as a service animal",
  },
  {
    start: 1337,
    end: 1342,
    text: "these animals can keep a person company and become a good friend",
  },
  {
    start: 1342,
    end: 1349,
    text: "many people depend on service animals for help service animals can do jobs that people",
  },
  {
    start: 1349,
    end: 1358,
    text: "cannot do alone and they can help improve the health of people by making them feel",
  },
  {
    start: 1358,
    end: 1366,
    text: "happy the first peacock argos lived in ancient greece",
  },
  {
    start: 1366,
    end: 1373,
    text: "he was a husband and a proud father he worked hard and did well at his job",
  },
  {
    start: 1373,
    end: 1380,
    text: "but one thing about him wasn't normal he was born with 100 eyes",
  },
  {
    start: 1380,
    end: 1388,
    text: "having many eyes was usually a benefit to him he had a chance to see many things",
  },
  {
    start: 1388,
    end: 1395,
    text: "also since he had so many eyes he was very good at guarding things",
  },
  {
    start: 1395,
    end: 1402,
    text: "while sleeping he only rested a few eyes at a time the others stayed open",
  },
  {
    start: 1402,
    end: 1408,
    text: "he worked for hera a great goddess his primary function was to guard a",
  },
  {
    start: 1408,
    end: 1413,
    text: "special cow the cow was very important to hera",
  },
  {
    start: 1413,
    end: 1420,
    text: "she loved it the most essential part of his job was to keep the cow alone",
  },
  {
    start: 1420,
    end: 1428,
    text: "it had to be kept separate from all the other cows and far away from people",
  },
  {
    start: 1428,
    end: 1434,
    text: "this was an easy job for argos the cow just ate grass all day",
  },
  {
    start: 1434,
    end: 1440,
    text: "but the god zeus wanted the cow he wanted to take it away from hera",
  },
  {
    start: 1440,
    end: 1448,
    text: "he had a plan he found a great music player he asked the man to play a beautiful",
  },
  {
    start: 1448,
    end: 1454,
    text: "song for argos zeus was certain argos would go to sleep",
  },
  {
    start: 1454,
    end: 1460,
    text: "the song had an immediate effect argos couldn't focus on his job",
  },
  {
    start: 1460,
    end: 1466,
    text: "he fell asleep zeus saw this and he took the cow",
  },
  {
    start: 1466,
    end: 1472,
    text: "hara was very angry with argos she turned him into a peacock",
  },
  {
    start: 1472,
    end: 1478,
    text: "she put his many eyes on his tail argos was very sad",
  },
  {
    start: 1478,
    end: 1484,
    text: "zeus saw how much trouble he had given argos he made another plan",
  },
  {
    start: 1484,
    end: 1490,
    text: "he turned argos into a group of stars he wanted argos to remain in the sky",
  },
  {
    start: 1490,
    end: 1496,
    text: "forever even today argos's image remains there above the",
  },
  {
    start: 1496,
    end: 1506,
    text: "site where all his problems began we can still see him in the night sky",
  },
  {
    start: 1506,
    end: 1512,
    text: "keeping our earth clean across the world",
  },
  {
    start: 1512,
    end: 1517,
    text: "places are increasing their efforts to recycle and help the environment",
  },
  {
    start: 1517,
    end: 1525,
    text: "recycling is when trash is reused and not thrown away in recent history more and more cities",
  },
  {
    start: 1525,
    end: 1531,
    text: "and countries have started recycling these places have developed their",
  },
  {
    start: 1531,
    end: 1537,
    text: "recycling programs to stop our earth from being covered with trash and black",
  },
  {
    start: 1537,
    end: 1544,
    text: "dirty air according to the environmental protection agency in the united states",
  },
  {
    start: 1544,
    end: 1550,
    text: "recycling also helps save energy the agency encourages the recycling of",
  },
  {
    start: 1550,
    end: 1556,
    text: "glass and plastic bottles paper and aluminum cans",
  },
  {
    start: 1556,
    end: 1564,
    text: "many european countries have strong recycling programs as well austria germany and norway are well",
  },
  {
    start: 1564,
    end: 1569,
    text: "known for being leaders in recycling and south korea and wales are countries",
  },
  {
    start: 1569,
    end: 1575,
    text: "that have a lot of recycling as well there are many reasons why some",
  },
  {
    start: 1575,
    end: 1580,
    text: "countries recycle more than others the fact is that these governments",
  },
  {
    start: 1580,
    end: 1587,
    text: "support recycling and they are aware of its importance there is also a lot of money spent on",
  },
  {
    start: 1587,
    end: 1594,
    text: "recycling however it is also necessary for people to try hard to recycle what they can",
  },
  {
    start: 1594,
    end: 1601,
    text: "from their own homes other ways to fight the waste problem also exist",
  },
  {
    start: 1601,
    end: 1607,
    text: "many cities place recycling bins on their streets there are recycling projects across some",
  },
  {
    start: 1607,
    end: 1613,
    text: "cities and in these projects companies advertise the need to recycle",
  },
  {
    start: 1613,
    end: 1620,
    text: "this helps keep the city streets clean electric cars are another way to keep",
  },
  {
    start: 1620,
    end: 1627,
    text: "the environment clean the motors of these cars are electric they get their power from electricity",
  },
  {
    start: 1627,
    end: 1634,
    text: "and batteries rather than from gas the hope is that eventually all cities",
  },
  {
    start: 1634,
    end: 1640,
    text: "in all countries will recycle and make our earth a cleaner place",
  },
  {
    start: 1640,
    end: 1646,
    text: "we must protect nature and never stop thinking about how to protect it",
  },
  {
    start: 1646,
    end: 1654,
    text: "so think before you throw away something that can be recycled",
  },
  {
    start: 1654,
    end: 1659,
    text: "[Music] the crazy artist",
  },
  {
    start: 1659,
    end: 1664,
    text: "friendhoffer was the best artist in the world everyone loved him",
  },
  {
    start: 1664,
    end: 1671,
    text: "the quality of his paintings was very high he always used the best materials",
  },
  {
    start: 1671,
    end: 1676,
    text: "he made a big profit from his paintings he had delicious meals with his rich",
  },
  {
    start: 1676,
    end: 1682,
    text: "neighbors he taught art classes life was good",
  },
  {
    start: 1682,
    end: 1689,
    text: "then his attitude changed he stopped selling paintings and teaching",
  },
  {
    start: 1689,
    end: 1695,
    text: "he tried a new method of painting he stayed alone in his apartment all day",
  },
  {
    start: 1695,
    end: 1702,
    text: "he worked all day and all night rarely eating soon frenhofer became very thin",
  },
  {
    start: 1702,
    end: 1710,
    text: "but he kept working on the same painting for many years he worked as hard as he could",
  },
  {
    start: 1710,
    end: 1716,
    text: "finally he finished the painting he was very happy and invited other",
  },
  {
    start: 1716,
    end: 1722,
    text: "artists to see it i want your professional opinion he said",
  },
  {
    start: 1722,
    end: 1729,
    text: "he wanted them to judge it and compare it to other paintings everyone was very excited as they went",
  },
  {
    start: 1729,
    end: 1735,
    text: "up the stairs to his apartment friendhoffer was excited to show his painting",
  },
  {
    start: 1735,
    end: 1741,
    text: "and the artists were excited to see it they'll love it he thought",
  },
  {
    start: 1741,
    end: 1746,
    text: "but they did not they were surprised by his painting",
  },
  {
    start: 1746,
    end: 1754,
    text: "there was no white anywhere friendhoffer filled the whole painting with lines and colors",
  },
  {
    start: 1754,
    end: 1760,
    text: "there was no space for a normal picture it was full of strange shapes",
  },
  {
    start: 1760,
    end: 1765,
    text: "it looked bad to the other artists he used symbols and they didn't",
  },
  {
    start: 1765,
    end: 1772,
    text: "understand them they thought it was terrible why did you paint this strange picture",
  },
  {
    start: 1772,
    end: 1777,
    text: "someone asked they didn't understand its beauty",
  },
  {
    start: 1777,
    end: 1783,
    text: "but after some time many people began to like his painting",
  },
  {
    start: 1783,
    end: 1789,
    text: "people wrote articles about it in magazines they said it was his best work",
  },
  {
    start: 1789,
    end: 1794,
    text: "they loved his strange symbols they loved his strange colors",
  },
  {
    start: 1794,
    end: 1800,
    text: "frenhofer's painting reminded everyone that just because something was new",
  },
  {
    start: 1800,
    end: 1807,
    text: "didn't mean that it was bad he also helped them to realize that sometimes it takes people a little time",
  },
  {
    start: 1807,
    end: 1812,
    text: "to understand great things",
  },
  {
    start: 1812,
    end: 1818,
    text: "[Music] the taxi driver",
  },
  {
    start: 1818,
    end: 1824,
    text: "peter's job was driving a taxi downtown he made a small salary",
  },
  {
    start: 1824,
    end: 1830,
    text: "but he liked his job because it wasn't dull every day he saw new things that",
  },
  {
    start: 1830,
    end: 1836,
    text: "appealed to him peter was practical about the future maybe i can get a scholarship for",
  },
  {
    start: 1836,
    end: 1842,
    text: "college he thought i could study accounting and get a job at a bank",
  },
  {
    start: 1842,
    end: 1849,
    text: "i could help clients invest their money peter stopped to pick up a passenger",
  },
  {
    start: 1849,
    end: 1854,
    text: "where to he asked go to the 4th street bank and don't talk",
  },
  {
    start: 1854,
    end: 1862,
    text: "to me i've had a rough day the man said peter was a peaceful person so he was",
  },
  {
    start: 1862,
    end: 1868,
    text: "not angry when they stopped the man's fare came to ten dollars and twenty five cents",
  },
  {
    start: 1868,
    end: 1874,
    text: "he put his hands in his pockets i can't find my wallet",
  },
  {
    start: 1874,
    end: 1879,
    text: "he said i can't pay the fare peter said",
  },
  {
    start: 1879,
    end: 1884,
    text: "i'll give you a temporary loan you can borrow ten dollars and a quarter from me",
  },
  {
    start: 1884,
    end: 1889,
    text: "the man was embarrassed and said i was mean to you but now i want to help",
  },
  {
    start: 1889,
    end: 1895,
    text: "you i founded this bank i want to give you a hundred dollars",
  },
  {
    start: 1895,
    end: 1901,
    text: "that much money was like a treasure to peter the man urged him to take the money but",
  },
  {
    start: 1901,
    end: 1908,
    text: "he didn't you're an honest person the man said",
  },
  {
    start: 1908,
    end: 1913,
    text: "i assumed you would take it i want you to work for me",
  },
  {
    start: 1913,
    end: 1922,
    text: "the next day peter started his job at the bank he was happy to leave his former job",
  },
  {
    start: 1922,
    end: 1928,
    text: "[Music] a magical book",
  },
  {
    start: 1928,
    end: 1935,
    text: "sarah loved to read she read novels and poems she loved the beautiful descriptions and",
  },
  {
    start: 1935,
    end: 1940,
    text: "phrases she loved reading work by poets and writers",
  },
  {
    start: 1940,
    end: 1946,
    text: "she didn't like video games or technology she was on the basketball team",
  },
  {
    start: 1946,
    end: 1951,
    text: "but she didn't like sports her parents made her play basketball",
  },
  {
    start: 1951,
    end: 1959,
    text: "in fact sarah's parents made her do many things but she didn't want to do those things",
  },
  {
    start: 1959,
    end: 1964,
    text: "she just wanted to sit and read all day",
  },
  {
    start: 1964,
    end: 1969,
    text: "one day a small book came in the mail it was for sarah",
  },
  {
    start: 1969,
    end: 1975,
    text: "the book looked very special it was printed on sheets of gold",
  },
  {
    start: 1975,
    end: 1982,
    text: "sarah began to read the outline of the story was simple it was about a magical place",
  },
  {
    start: 1982,
    end: 1987,
    text: "strange things happened there one example from the book was about a",
  },
  {
    start: 1987,
    end: 1993,
    text: "boy who could control people in one scene he made his friends tell funny",
  },
  {
    start: 1993,
    end: 2000,
    text: "jokes sarah loved the book she read it all the time",
  },
  {
    start: 2000,
    end: 2006,
    text: "then something strange happened the book gave sarah a special power",
  },
  {
    start: 2006,
    end: 2011,
    text: "she could control other people she was like the boy in the book",
  },
  {
    start: 2011,
    end: 2019,
    text: "during one exam she made her friend tell silly jokes her friend got in trouble",
  },
  {
    start: 2019,
    end: 2027,
    text: "after school sarah did not make a direct trip home on the way she went to the local store",
  },
  {
    start: 2027,
    end: 2032,
    text: "she wanted to play more tricks on people she made problems",
  },
  {
    start: 2032,
    end: 2038,
    text: "she made people fall down she laughed and had fun",
  },
  {
    start: 2038,
    end: 2044,
    text: "finally she left and started to walk home then she saw something",
  },
  {
    start: 2044,
    end: 2051,
    text: "her basketball coach was about to walk in front of a bus he was looking the other way",
  },
  {
    start: 2051,
    end: 2057,
    text: "she had to stop him she used her power she controlled him",
  },
  {
    start: 2057,
    end: 2063,
    text: "she made him stop walking sarah learned something that day",
  },
  {
    start: 2063,
    end: 2070,
    text: "it was better to help people than make them suffer so she put a limit on how she used her",
  },
  {
    start: 2070,
    end: 2078,
    text: "power she did not want to do bad things with it anymore she only wanted to do good",
  },
  {
    start: 2078,
    end: 2086,
    text: "[Music] the big race a dog saw a group of animals cross the",
  },
  {
    start: 2086,
    end: 2092,
    text: "road he walked over to meet them what are you doing",
  },
  {
    start: 2092,
    end: 2098,
    text: "he asked them i just sold them tickets to a race between the rabbit and the turtle",
  },
  {
    start: 2098,
    end: 2104,
    text: "the duck responded the dog was extremely excited",
  },
  {
    start: 2104,
    end: 2110,
    text: "he felt fortunate that he happened to be there i don't have anything to do today the",
  },
  {
    start: 2110,
    end: 2117,
    text: "dog said i want to buy a ticket too the dog sat down to observe the race",
  },
  {
    start: 2117,
    end: 2122,
    text: "it would be many kilometers in length the rabbit and the turtle stood next to",
  },
  {
    start: 2122,
    end: 2129,
    text: "each other they waited for the race to start the dog wondered why the turtle agreed",
  },
  {
    start: 2129,
    end: 2135,
    text: "to run against the rabbit being fast was not a characteristic of",
  },
  {
    start: 2135,
    end: 2140,
    text: "turtles the rabbit was going to win easily",
  },
  {
    start: 2140,
    end: 2146,
    text: "suddenly the race began the rabbit ran extremely quickly",
  },
  {
    start: 2146,
    end: 2152,
    text: "the turtle walked slowly after a minute the rabbit looked back",
  },
  {
    start: 2152,
    end: 2158,
    text: "he saw that the turtle was far behind him and was breathing quickly because he",
  },
  {
    start: 2158,
    end: 2166,
    text: "was so tired the rabbit smiled and slowed down to a walk",
  },
  {
    start: 2166,
    end: 2171,
    text: "a minute later the rabbit said i'm winning so i'll take a rest",
  },
  {
    start: 2171,
    end: 2178,
    text: "he sat and began to consume some grass then he let his eyes close",
  },
  {
    start: 2178,
    end: 2184,
    text: "he wasn't the winner yet but there was no risk of him losing the race",
  },
  {
    start: 2184,
    end: 2191,
    text: "he went to sleep hours later a loud sound woke him",
  },
  {
    start: 2191,
    end: 2196,
    text: "all of the animals were talking loudly and looking at the field",
  },
  {
    start: 2196,
    end: 2202,
    text: "he felt fear for the first time the turtle was almost at the finish line",
  },
  {
    start: 2202,
    end: 2208,
    text: "now the rabbit realized his mistake but the race was over",
  },
  {
    start: 2208,
    end: 2214,
    text: "he gave the turtle an opportunity to win and the turtle took it",
  },
  {
    start: 2214,
    end: 2220,
    text: "the duck handed the turtle his prize it was the happiest day of the turtle's",
  },
  {
    start: 2220,
    end: 2225,
    text: "life the dog was happy for the turtle",
  },
  {
    start: 2225,
    end: 2231,
    text: "he isn't fast the dog thought but he tried his best and did something",
  },
  {
    start: 2231,
    end: 2236,
    text: "great [Music]",
  },
  {
    start: 2236,
    end: 2242,
    text: "kwanzaa kwanzaa is a seven day holiday",
  },
  {
    start: 2242,
    end: 2248,
    text: "celebrated in the united states and other countries by people of african descent",
  },
  {
    start: 2248,
    end: 2253,
    text: "it is celebrated from december 26th to january first each year",
  },
  {
    start: 2253,
    end: 2259,
    text: "the celebration is dedicated to honoring african culture and working together as",
  },
  {
    start: 2259,
    end: 2264,
    text: "a community kwanzaa was created in 1966",
  },
  {
    start: 2264,
    end: 2272,
    text: "by mualana karing karang was an african studies professor at california state university",
  },
  {
    start: 2272,
    end: 2278,
    text: "according to him kwanzaa comes from the swahili language and means first fruit",
  },
  {
    start: 2278,
    end: 2284,
    text: "karang wanted to create a holiday for african americans as a way for them to",
  },
  {
    start: 2284,
    end: 2289,
    text: "reconnect with their heritage the colors of kwanzaa are black red and",
  },
  {
    start: 2289,
    end: 2297,
    text: "green these colors are seen in decorations such as african pieces of art baskets",
  },
  {
    start: 2297,
    end: 2304,
    text: "and cloth millions of african americans wear african clothes during kwanzaa and",
  },
  {
    start: 2304,
    end: 2310,
    text: "decorate their homes with fruit and vegetables each day a family will celebrate one of",
  },
  {
    start: 2310,
    end: 2318,
    text: "seven different principles of their african heritage such as unity faith and community",
  },
  {
    start: 2318,
    end: 2324,
    text: "then they light a candle the candles are put on a candle holder called a kinara",
  },
  {
    start: 2324,
    end: 2330,
    text: "the middle candle is black the three candles on one side of the kinara are red",
  },
  {
    start: 2330,
    end: 2336,
    text: "and the other three candles are green on the sixth day of kwanzaa",
  },
  {
    start: 2336,
    end: 2342,
    text: "families remember their ancestors and get together for a big dinner called a",
  },
  {
    start: 2342,
    end: 2350,
    text: "caramel traditional african-american dishes which include chicken fish rice beans",
  },
  {
    start: 2350,
    end: 2355,
    text: "peas sweet potatoes and other vegetables are served",
  },
  {
    start: 2355,
    end: 2360,
    text: "like christmas there are gifts which are exchanged on the seventh day",
  },
  {
    start: 2360,
    end: 2368,
    text: "books are always included because they symbolize the importance of learning about history and tradition",
  },
  {
    start: 2368,
    end: 2373,
    text: "kwanzaa is a way of celebrating the end of the year by honoring african culture",
  },
  {
    start: 2373,
    end: 2382,
    text: "and traditions and to start the new year with family members as well as the community",
  },
  {
    start: 2382,
    end: 2387,
    text: "[Music] the race for water",
  },
  {
    start: 2387,
    end: 2393,
    text: "there was a town next to a river the people there had a lot of water",
  },
  {
    start: 2393,
    end: 2399,
    text: "but they wasted it that made the sky angry it said",
  },
  {
    start: 2399,
    end: 2406,
    text: "if you waste water i will take it away from you but the people didn't listen",
  },
  {
    start: 2406,
    end: 2412,
    text: "when the season changed from spring to summer the clouds disappeared",
  },
  {
    start: 2412,
    end: 2419,
    text: "the bright sun was hot and made the river dry there was no water available",
  },
  {
    start: 2419,
    end: 2427,
    text: "people asked when will the rain fall the sky's response was",
  },
  {
    start: 2427,
    end: 2434,
    text: "you don't appreciate water you waste it and now i will never make rain again",
  },
  {
    start: 2434,
    end: 2440,
    text: "a boy decided that this wasn't fair he thought of a solution",
  },
  {
    start: 2440,
    end: 2447,
    text: "he asked the sky to race him he said if i get to the top of that hill before",
  },
  {
    start: 2447,
    end: 2453,
    text: "your rain can form puddles you must fill our the sky laughed",
  },
  {
    start: 2453,
    end: 2460,
    text: "little boy i am the sky i am above everything else you cannot beat me",
  },
  {
    start: 2460,
    end: 2468,
    text: "but the boy knew he would win when the race began the boy ran forward",
  },
  {
    start: 2468,
    end: 2473,
    text: "the sky started raining on the hill but puddles did not form there",
  },
  {
    start: 2473,
    end: 2481,
    text: "when it rained on the hill the water went down the sky kept raining the water flowed",
  },
  {
    start: 2481,
    end: 2488,
    text: "down into the river when the boy reached the top of the hill the river was full",
  },
  {
    start: 2488,
    end: 2493,
    text: "the people began to celebrate it was the highest level the river had",
  },
  {
    start: 2493,
    end: 2498,
    text: "ever been at before the sky was angry",
  },
  {
    start: 2498,
    end: 2505,
    text: "a boy can't beat me i won't fill your river it said",
  },
  {
    start: 2505,
    end: 2511,
    text: "now the boy laughed it doesn't matter whether you want to fill it or not",
  },
  {
    start: 2511,
    end: 2517,
    text: "he said you already did the sky looked at the full river",
  },
  {
    start: 2517,
    end: 2523,
    text: "you tricked me it said it asked the people",
  },
  {
    start: 2523,
    end: 2528,
    text: "do you appreciate water now yes they said",
  },
  {
    start: 2528,
    end: 2535,
    text: "we won't waste it that is how a lone boy saved his town",
  },
  {
    start: 2535,
    end: 2541,
    text: "and won the race for water [Music]",
  },
  {
    start: 2541,
    end: 2548,
    text: "eat healthy it is important to eat healthy food",
  },
  {
    start: 2548,
    end: 2554,
    text: "there are five main healthy food groups they are grains fruits vegetables",
  },
  {
    start: 2554,
    end: 2559,
    text: "protein and dairy a food pyramid can show you how much of",
  },
  {
    start: 2559,
    end: 2566,
    text: "each group you should eat many different kinds of food are necessary for a balanced diet",
  },
  {
    start: 2566,
    end: 2572,
    text: "you need to eat grains such as rice wheat and several types of bread",
  },
  {
    start: 2572,
    end: 2578,
    text: "fruits and vegetables are also important fruits such as bananas are good for you",
  },
  {
    start: 2578,
    end: 2584,
    text: "others such as oranges and kiwis contain a lot of vitamin c",
  },
  {
    start: 2584,
    end: 2590,
    text: "vegetables are an important part of a daily diet they are extremely healthy",
  },
  {
    start: 2590,
    end: 2596,
    text: "and can be eaten in many ways salads with raw vegetables such as",
  },
  {
    start: 2596,
    end: 2602,
    text: "spinach and carrots are common but you can also cook vegetables in many different ways",
  },
  {
    start: 2602,
    end: 2610,
    text: "soups are another easy way to get vegetables into your diet protein is an important food group too",
  },
  {
    start: 2610,
    end: 2616,
    text: "meats such as beef and chicken are well known forms of protein",
  },
  {
    start: 2616,
    end: 2622,
    text: "tofu beans eggs and nuts also contain high amounts of protein",
  },
  {
    start: 2622,
    end: 2629,
    text: "you should also eat dairy products such as cheese yogurt and milk as well",
  },
  {
    start: 2629,
    end: 2634,
    text: "a healthy diet includes drinking lots of water instead of sugary drinks such as",
  },
  {
    start: 2634,
    end: 2640,
    text: "soda and juice while sweets may not be considered healthy foods",
  },
  {
    start: 2640,
    end: 2646,
    text: "they are fine if you don't eat too many chocolate and cake are well-loved sweets",
  },
  {
    start: 2646,
    end: 2652,
    text: "commonly found at restaurants and grocery stores they are often served at special events",
  },
  {
    start: 2652,
    end: 2658,
    text: "such as birthday parties and weddings at restaurants you can ask the waiters",
  },
  {
    start: 2658,
    end: 2666,
    text: "to tell you which ingredients are included in different dishes at home you can always find healthy and",
  },
  {
    start: 2666,
    end: 2673,
    text: "delicious recipes in cookbooks or on the internet eating healthy food is great for your",
  },
  {
    start: 2673,
    end: 2678,
    text: "health [Music]",
  },
  {
    start: 2678,
    end: 2683,
    text: "shipwrecked simon yates was a lawyer",
  },
  {
    start: 2683,
    end: 2689,
    text: "he helped many people however he was not a nice man",
  },
  {
    start: 2689,
    end: 2696,
    text: "his policy was to help only rich people he didn't bother about social injustice",
  },
  {
    start: 2696,
    end: 2705,
    text: "he made a lot of money but many people didn't like him even people on his staff didn't like him",
  },
  {
    start: 2705,
    end: 2710,
    text: "in fact they were glad when he got into trouble",
  },
  {
    start: 2710,
    end: 2716,
    text: "simon had a very bad day he did many things wrong and lost his",
  },
  {
    start: 2716,
    end: 2724,
    text: "job soon he didn't have any money his wife mrs yates began to have doubts",
  },
  {
    start: 2724,
    end: 2729,
    text: "about him simon wanted to start a new life",
  },
  {
    start: 2729,
    end: 2735,
    text: "he planned to leave the country he mentioned his plan to the captain of",
  },
  {
    start: 2735,
    end: 2743,
    text: "a ship the captain was exploring the world the captain felt bad for simon and said",
  },
  {
    start: 2743,
    end: 2749,
    text: "i will take you to foreign countries they left the next day",
  },
  {
    start: 2749,
    end: 2754,
    text: "near the conclusion of their international trip the weather turned bad",
  },
  {
    start: 2754,
    end: 2759,
    text: "a wave pushed simon off the boat but he was alive",
  },
  {
    start: 2759,
    end: 2765,
    text: "he swam toward an island after a long time he got there",
  },
  {
    start: 2765,
    end: 2771,
    text: "at first he was upset he was lost and alone",
  },
  {
    start: 2771,
    end: 2778,
    text: "i'll never go home again he thought he had a lot of problems but he didn't",
  },
  {
    start: 2778,
    end: 2785,
    text: "die he built a house in a tree he lived on a diet of fish",
  },
  {
    start: 2785,
    end: 2792,
    text: "he made tools from wood and bones he made a cup to drink rain water",
  },
  {
    start: 2792,
    end: 2799,
    text: "slowly he learned to be happy on the island he swam every day",
  },
  {
    start: 2799,
    end: 2805,
    text: "he had trouble sometimes but he always found a way to fix the problem",
  },
  {
    start: 2805,
    end: 2811,
    text: "life was simple he liked it finally",
  },
  {
    start: 2811,
    end: 2817,
    text: "people on a ship saw simon on the island they wanted to take him home",
  },
  {
    start: 2817,
    end: 2822,
    text: "but simon was happy he gave them a long speech about life",
  },
  {
    start: 2822,
    end: 2828,
    text: "he said he wanted to stay he liked his new simple life",
  },
  {
    start: 2828,
    end: 2833,
    text: "more than his old life [Music]",
  },
  {
    start: 2833,
    end: 2840,
    text: "the seven cities of gold many years ago a spanish officer named",
  },
  {
    start: 2840,
    end: 2846,
    text: "coronado heard the story of seven great cities the walls of these cities are made of",
  },
  {
    start: 2846,
    end: 2852,
    text: "gold his friends told him the people eat meat from golden plates",
  },
  {
    start: 2852,
    end: 2858,
    text: "and dress in nice clothes they said they called these cities the seven",
  },
  {
    start: 2858,
    end: 2863,
    text: "cities of gold were the city's real coronado never considered asking his",
  },
  {
    start: 2863,
    end: 2870,
    text: "friends coronado thought to himself the things in these cities must be worth",
  },
  {
    start: 2870,
    end: 2875,
    text: "a lot of money so he went to find the seven cities of gold",
  },
  {
    start: 2875,
    end: 2880,
    text: "he took along 300 men many horses and extra food",
  },
  {
    start: 2880,
    end: 2887,
    text: "they headed west coronado wanted to achieve his goal very badly",
  },
  {
    start: 2887,
    end: 2894,
    text: "coronado and his men rode for many days then they saw some cities",
  },
  {
    start: 2894,
    end: 2901,
    text: "we found the seven cities of gold his men said but coronado wasn't happy",
  },
  {
    start: 2901,
    end: 2906,
    text: "he had a different opinion these can't be the seven cities of gold",
  },
  {
    start: 2906,
    end: 2913,
    text: "he said look they're made of dirt coronado was right the cities weren't",
  },
  {
    start: 2913,
    end: 2920,
    text: "bright and golden they were dirty and brown the people didn't eat meat from golden",
  },
  {
    start: 2920,
    end: 2928,
    text: "plates they ate vegetables from regular bowls they wore the most basic clothes",
  },
  {
    start: 2928,
    end: 2935,
    text: "coronado regarded the cities as ugly places what happened to the cities of gold he",
  },
  {
    start: 2935,
    end: 2942,
    text: "thought did someone destroy them was there a war did someone already come and take the",
  },
  {
    start: 2942,
    end: 2949,
    text: "gold that night the people of the cities entertained coronado and his men",
  },
  {
    start: 2949,
    end: 2954,
    text: "and served them food they advised coronado to go home",
  },
  {
    start: 2954,
    end: 2959,
    text: "there is no gold here they told him coronado was angry",
  },
  {
    start: 2959,
    end: 2965,
    text: "did his friends lie to him he left the next morning",
  },
  {
    start: 2965,
    end: 2970,
    text: "he looked back at the cities one more time the sun reflected light on the dirt",
  },
  {
    start: 2970,
    end: 2978,
    text: "houses coronado thought he saw a bit of gold were his friends right after all",
  },
  {
    start: 2978,
    end: 2988,
    text: "no he told himself it's just the sun then he turned away and went home",
  },
  {
    start: 2988,
    end: 2994,
    text: "katie i first met eight-year-old katie on a",
  },
  {
    start: 2994,
    end: 3000,
    text: "rainy afternoon i was a nurse at a hospital the clerk at the desk told me about",
  },
  {
    start: 3000,
    end: 3008,
    text: "katie she was there because she felt a lot of pain the doctors located a problem at the",
  },
  {
    start: 3008,
    end: 3014,
    text: "base of her brain i knew she was special even before she got better",
  },
  {
    start: 3014,
    end: 3021,
    text: "i'll always remember katie as a hero when i entered katie's room she was not",
  },
  {
    start: 3021,
    end: 3027,
    text: "in her bed she was in a chair next to tommy a little boy",
  },
  {
    start: 3027,
    end: 3032,
    text: "though katie did not feel well she was playing with tommy and his toys",
  },
  {
    start: 3032,
    end: 3040,
    text: "it took a lot of effort for her just to sit in the chair but she played with tommy because it",
  },
  {
    start: 3040,
    end: 3047,
    text: "made him happy katie was always smiling and never appeared to be in pain",
  },
  {
    start: 3047,
    end: 3054,
    text: "she refused to just lie in bed one day i found her painting a picture",
  },
  {
    start: 3054,
    end: 3061,
    text: "later she gave it to one of the older patients another day she went outside to get",
  },
  {
    start: 3061,
    end: 3066,
    text: "flowers for another sick little girl katie made everyone",
  },
  {
    start: 3066,
    end: 3072,
    text: "smile the doctors hurried to fix the problem in katie's brain",
  },
  {
    start: 3072,
    end: 3077,
    text: "the operation was successful the doctors informed the hospital staff",
  },
  {
    start: 3077,
    end: 3083,
    text: "of the good news katie was fine she soon felt excellent",
  },
  {
    start: 3083,
    end: 3089,
    text: "she got better and was able to leave the hospital a month later",
  },
  {
    start: 3089,
    end: 3094,
    text: "i have had a long career as a nurse i have met many patients",
  },
  {
    start: 3094,
    end: 3102,
    text: "however i have never met another girl like katie even after she got well she still came",
  },
  {
    start: 3102,
    end: 3107,
    text: "to the hospital she played various games with the young patients",
  },
  {
    start: 3107,
    end: 3114,
    text: "she read many books to the older patients katie's kind heart helped her get better",
  },
  {
    start: 3114,
    end: 3122,
    text: "so quickly she is a hero to me and everyone else at the hospital",
  },
  {
    start: 3122,
    end: 3128,
    text: "[Music] a better reward",
  },
  {
    start: 3128,
    end: 3133,
    text: "jenny delivered food for a restaurant she read the newspaper and said",
  },
  {
    start: 3133,
    end: 3141,
    text: "uh-oh there was a story about a thief he stole food and no one had seen him",
  },
  {
    start: 3141,
    end: 3146,
    text: "even the police couldn't catch him jenny was a little scared",
  },
  {
    start: 3146,
    end: 3152,
    text: "she worked close to that area the newspaper included a message from",
  },
  {
    start: 3152,
    end: 3157,
    text: "the police if anything strange occurs call us",
  },
  {
    start: 3157,
    end: 3162,
    text: "if you help us catch the thief you'll earn a reward",
  },
  {
    start: 3162,
    end: 3169,
    text: "jenny talked to jim he managed the restaurant do you know about the thief",
  },
  {
    start: 3169,
    end: 3175,
    text: "yes he said but he steals more than one person can eat",
  },
  {
    start: 3175,
    end: 3182,
    text: "and why haven't the police stopped him yet it's a mystery if you see him contact",
  },
  {
    start: 3182,
    end: 3188,
    text: "the police don't run after him jenny drove to a customer's house",
  },
  {
    start: 3188,
    end: 3195,
    text: "she left her car and opened the gate to the house but then she heard a noise by her car",
  },
  {
    start: 3195,
    end: 3202,
    text: "she said thief she wasn't scared she wanted the reward",
  },
  {
    start: 3202,
    end: 3207,
    text: "she did the opposite of what jim told her to do hey",
  },
  {
    start: 3207,
    end: 3212,
    text: "she said get back here she set the food on the ground and ran",
  },
  {
    start: 3212,
    end: 3217,
    text: "to her car but the thief had already left with the food",
  },
  {
    start: 3217,
    end: 3225,
    text: "jenny followed a noise around the corner she was amazed she saw a dog and some puppies",
  },
  {
    start: 3225,
    end: 3231,
    text: "they were eating her food they looked thin and scared",
  },
  {
    start: 3231,
    end: 3236,
    text: "the actual thief is just a dog she's feeding her puppies",
  },
  {
    start: 3236,
    end: 3241,
    text: "she said that's why she steals so much food",
  },
  {
    start: 3241,
    end: 3247,
    text: "jenny felt bad she tried to comfort the dogs with another plate of food",
  },
  {
    start: 3247,
    end: 3253,
    text: "then she took them back to the store everyone there took a puppy home",
  },
  {
    start: 3253,
    end: 3259,
    text: "jenny called the police she told them there was no real thief",
  },
  {
    start: 3259,
    end: 3265,
    text: "jenny didn't do it to receive the reward anymore she said it was just a dog",
  },
  {
    start: 3265,
    end: 3275,
    text: "but there's no charge for catching this thief she said my new dog is a better reward",
  },
  {
    start: 3275,
    end: 3283,
    text: "[Music] the camp stacey wanted to stay at a nice hotel",
  },
  {
    start: 3283,
    end: 3289,
    text: "for vacation but her parents sent her to a terrible camp instead",
  },
  {
    start: 3289,
    end: 3294,
    text: "for breakfast stacy liked fresh juice and chocolate milk",
  },
  {
    start: 3294,
    end: 3299,
    text: "but she got water at the camp in the afternoon she wanted to write",
  },
  {
    start: 3299,
    end: 3306,
    text: "poems but she had to swim the camp was near an airport with loud",
  },
  {
    start: 3306,
    end: 3311,
    text: "planes spider webs hung over her bed to her",
  },
  {
    start: 3311,
    end: 3318,
    text: "the kid's average behavior was very bad no girl matched her personality",
  },
  {
    start: 3318,
    end: 3323,
    text: "she hated it one day they had a class",
  },
  {
    start: 3323,
    end: 3330,
    text: "mental exercise sounded good to stacy but it was a course on water safety",
  },
  {
    start: 3330,
    end: 3336,
    text: "they learned how to be safe passengers on a boat stacey didn't ever plan to go",
  },
  {
    start: 3336,
    end: 3344,
    text: "on a boat the next day they played a game there was a red team and a blue team",
  },
  {
    start: 3344,
    end: 3349,
    text: "stacy was on the blue team each team had to try to remove the other",
  },
  {
    start: 3349,
    end: 3356,
    text: "team's flag from a pole they also had to use water guns",
  },
  {
    start: 3356,
    end: 3362,
    text: "i'm not much of an athlete she said but she still had to play",
  },
  {
    start: 3362,
    end: 3368,
    text: "stacy took a water gun and looked for somewhere to hide a boy said",
  },
  {
    start: 3368,
    end: 3375,
    text: "stacy you advance to the middle i will go right those two will go left",
  },
  {
    start: 3375,
    end: 3381,
    text: "stacy still didn't want to play she walked into the forest and saw a red",
  },
  {
    start: 3381,
    end: 3387,
    text: "team player coming stacy hid behind a tree and then jumped",
  },
  {
    start: 3387,
    end: 3393,
    text: "out and shot the other player this is fun stacy thought",
  },
  {
    start: 3393,
    end: 3399,
    text: "several minutes after moving further stacy saw the red flag",
  },
  {
    start: 3399,
    end: 3404,
    text: "a red team member was watching over it she shot him with her water gun",
  },
  {
    start: 3404,
    end: 3410,
    text: "then she lowered the flag and ran back to her team i got it",
  },
  {
    start: 3410,
    end: 3417,
    text: "she said the blue team won stacy was the hero",
  },
  {
    start: 3417,
    end: 3426,
    text: "for the rest of the week stacy had fun she even made new friends",
  },
  {
    start: 3426,
    end: 3431,
    text: "[Music] a strong friendship",
  },
  {
    start: 3431,
    end: 3438,
    text: "tim was the strongest man in the town when he played sports he always won",
  },
  {
    start: 3438,
    end: 3444,
    text: "he performed and exercised in the public park he did this to show everyone how strong",
  },
  {
    start: 3444,
    end: 3450,
    text: "he was most people liked him but one man didn't",
  },
  {
    start: 3450,
    end: 3455,
    text: "his name was jack jack hated tim",
  },
  {
    start: 3455,
    end: 3463,
    text: "jack was a movie critic and the smartest man in town he could solve complex math problems",
  },
  {
    start: 3463,
    end: 3469,
    text: "but no one cared jack wanted to be famous like tim",
  },
  {
    start: 3469,
    end: 3476,
    text: "one day there was an unusual event a big storm came suddenly",
  },
  {
    start: 3476,
    end: 3482,
    text: "the town was buried in snow no one could get out they needed food",
  },
  {
    start: 3482,
    end: 3487,
    text: "the people said this is a task for a strong man",
  },
  {
    start: 3487,
    end: 3493,
    text: "tim was under pressure to save them but jack wanted to be a hero",
  },
  {
    start: 3493,
    end: 3499,
    text: "so they both went tim said you can't help because of your lack of",
  },
  {
    start: 3499,
    end: 3504,
    text: "strength but jack knew the local area very well",
  },
  {
    start: 3504,
    end: 3511,
    text: "and could find paths that were usable despite the snow they led in the direction of another",
  },
  {
    start: 3511,
    end: 3516,
    text: "town that town had food they walked until there was a block of",
  },
  {
    start: 3516,
    end: 3522,
    text: "ice in their way jack said we can't get past it",
  },
  {
    start: 3522,
    end: 3529,
    text: "but if you strike it it might break tim knew he probably had enough strength",
  },
  {
    start: 3529,
    end: 3536,
    text: "so he struck it with a hammer it broke when there were more blocks of ice",
  },
  {
    start: 3536,
    end: 3542,
    text: "tim broke them that made him tired he couldn't walk anymore",
  },
  {
    start: 3542,
    end: 3550,
    text: "jack said let's unite and support each other i'll get the food alone you rest here",
  },
  {
    start: 3550,
    end: 3556,
    text: "jack came back with food tim couldn't remember which path led home",
  },
  {
    start: 3556,
    end: 3561,
    text: "he needed jack to be his guide the men became friends by working",
  },
  {
    start: 3561,
    end: 3566,
    text: "together in town people saw jack with the food",
  },
  {
    start: 3566,
    end: 3572,
    text: "and cheered they called jack a hero but jack didn't care",
  },
  {
    start: 3572,
    end: 3579,
    text: "he was thinking of something else he said to tim i thought i was smart but i learned a",
  },
  {
    start: 3579,
    end: 3586,
    text: "new term today friendship",
  },
  {
    start: 3586,
    end: 3591,
    text: "[Music] joe's pond",
  },
  {
    start: 3591,
    end: 3598,
    text: "joe made the world a better place he got the idea to do that at school",
  },
  {
    start: 3598,
    end: 3606,
    text: "he watched a video there it was about a factory this factory produced a lot of trash and",
  },
  {
    start: 3606,
    end: 3611,
    text: "put it in a river the trash and water were a bad mix",
  },
  {
    start: 3611,
    end: 3616,
    text: "people populated the area by the river and drank its water",
  },
  {
    start: 3616,
    end: 3624,
    text: "this made them sick many of them needed medicine and made regular visits to doctors",
  },
  {
    start: 3624,
    end: 3630,
    text: "but the video wasn't all bad news it showed ways to pick up trash and why",
  },
  {
    start: 3630,
    end: 3637,
    text: "it's important to do this it said people can make a difference to their environment",
  },
  {
    start: 3637,
    end: 3644,
    text: "the video's important features made joe associate trash with hurting people",
  },
  {
    start: 3644,
    end: 3650,
    text: "one day joe walked through a park he recognized some of the problems from",
  },
  {
    start: 3650,
    end: 3657,
    text: "the video one instance of these problems was the trash in the pond it was full of plastic",
  },
  {
    start: 3657,
    end: 3665,
    text: "cups there was too much trash joe didn't want it to hurt anyone",
  },
  {
    start: 3665,
    end: 3671,
    text: "he told his grandfather about the park his grandfather said you know it's a",
  },
  {
    start: 3671,
    end: 3677,
    text: "tradition in our family to help people that's why we give food to poor people",
  },
  {
    start: 3677,
    end: 3682,
    text: "maybe you can help people by cleaning the park",
  },
  {
    start: 3682,
    end: 3689,
    text: "cleaning the park would involve hard work joe decided to organize a group to help",
  },
  {
    start: 3689,
    end: 3695,
    text: "him he chose a wide area of the park it had the most trash",
  },
  {
    start: 3695,
    end: 3701,
    text: "he asked his family and friends to come on saturday he gave everyone a sharp",
  },
  {
    start: 3701,
    end: 3709,
    text: "stick they wondered why he said you use the stixx tip to pick up trash",
  },
  {
    start: 3709,
    end: 3714,
    text: "this makes it easier they worked for six weeks",
  },
  {
    start: 3714,
    end: 3720,
    text: "different people helped each time but joe was always there",
  },
  {
    start: 3720,
    end: 3726,
    text: "in that period of time joe saw a range of results",
  },
  {
    start: 3726,
    end: 3731,
    text: "there was no trash in the water people could swim in it",
  },
  {
    start: 3731,
    end: 3737,
    text: "joe knew that was a good sign he was happy because he helped his",
  },
  {
    start: 3737,
    end: 3742,
    text: "environment [Music]",
  },
  {
    start: 3742,
    end: 3749,
    text: "archie and his donkey old archie needed some money",
  },
  {
    start: 3749,
    end: 3755,
    text: "he decided to sell his donkey so he and his son tom went to town",
  },
  {
    start: 3755,
    end: 3761,
    text: "it was situated many miles away soon they met a woman",
  },
  {
    start: 3761,
    end: 3767,
    text: "where are you going she asked to town said archie",
  },
  {
    start: 3767,
    end: 3775,
    text: "any smart person would ride the donkey she said what are you implying archie asked i'm",
  },
  {
    start: 3775,
    end: 3782,
    text: "very smart archie wanted to look smart so he climbed onto the donkey",
  },
  {
    start: 3782,
    end: 3789,
    text: "then they continued in the direction of the town further along the road they met a farmer",
  },
  {
    start: 3789,
    end: 3797,
    text: "hello said archie we want to sell this donkey do you want to buy it",
  },
  {
    start: 3797,
    end: 3805,
    text: "i don't need a donkey said the farmer but if you want my advice don't write it",
  },
  {
    start: 3805,
    end: 3812,
    text: "the donkey needs to be in good physical condition idea said archie",
  },
  {
    start: 3812,
    end: 3819,
    text: "tom i want you to write it your lighter neither you nor your son should ride it",
  },
  {
    start: 3819,
    end: 3826,
    text: "it looks very tired you should carry the donkey suggested the farmer",
  },
  {
    start: 3826,
    end: 3833,
    text: "you're right said archie come on tom we'll carry it for the final few miles",
  },
  {
    start: 3833,
    end: 3839,
    text: "the donkey was very heavy and they couldn't maintain a good speed",
  },
  {
    start: 3839,
    end: 3845,
    text: "they didn't arrive until late in the evening at last they walked into the town",
  },
  {
    start: 3845,
    end: 3852,
    text: "but there they attracted the attention of some teenage boys they laughed at tom and archie",
  },
  {
    start: 3852,
    end: 3858,
    text: "they started to throw stones at them the donkey reacted by kicking",
  },
  {
    start: 3858,
    end: 3865,
    text: "tom and darchie dropped the donkey it fell on the ground and then ran away",
  },
  {
    start: 3865,
    end: 3870,
    text: "archie lost his donkey he went home with no money",
  },
  {
    start: 3870,
    end: 3877,
    text: "what does this story teach us we cannot please everyone in our society",
  },
  {
    start: 3877,
    end: 3884,
    text: "don't take everyone's advice but set your own standards prove to everyone that you can make",
  },
  {
    start: 3884,
    end: 3889,
    text: "decisions by yourself otherwise you may end up with nothing at",
  },
  {
    start: 3889,
    end: 3895,
    text: "all [Music]",
  },
  {
    start: 3895,
    end: 3903,
    text: "the spider and the bird there was once a very big spider",
  },
  {
    start: 3903,
    end: 3909,
    text: "however if a bug got into his web he didn't eat it right away",
  },
  {
    start: 3909,
    end: 3915,
    text: "he would carefully examine it he asked the bug a question first",
  },
  {
    start: 3915,
    end: 3921,
    text: "it was always quite a difficult puzzle if the bug's answer was correct he let",
  },
  {
    start: 3921,
    end: 3930,
    text: "it go if not he ate it one day a small bird on a journey flew",
  },
  {
    start: 3930,
    end: 3935,
    text: "into the spider's wab the spider couldn't imagine eating a",
  },
  {
    start: 3935,
    end: 3942,
    text: "bird it was so big but his hunger was too great",
  },
  {
    start: 3942,
    end: 3947,
    text: "he said to the bird if you cannot give me a specific answer",
  },
  {
    start: 3947,
    end: 3953,
    text: "i will eat you the bird laughed i could eat you",
  },
  {
    start: 3953,
    end: 3959,
    text: "but the bird was actually scared she had used all her energy trying to",
  },
  {
    start: 3959,
    end: 3967,
    text: "get out of the wab and a spider's bite can be very effective in killing animals",
  },
  {
    start: 3967,
    end: 3974,
    text: "please don't eat me the bird said i would rather make a deal with you",
  },
  {
    start: 3974,
    end: 3979,
    text: "okay the spider said if your answer is right i will let you",
  },
  {
    start: 3979,
    end: 3987,
    text: "go if not you must give me a gift it must be something of great value",
  },
  {
    start: 3987,
    end: 3994,
    text: "the bird said you can pick anything you want to eat i will find it for you",
  },
  {
    start: 3994,
    end: 3999,
    text: "the spider agreed where can you take a trip to the coast",
  },
  {
    start: 3999,
    end: 4006,
    text: "the desert and the mountains at the same time the spider asked",
  },
  {
    start: 4006,
    end: 4012,
    text: "the birds said can you help me figure that one out",
  },
  {
    start: 4012,
    end: 4019,
    text: "but the spider did not say anything i can see those places when i fly",
  },
  {
    start: 4019,
    end: 4026,
    text: "is the sky the right answer false said the spider",
  },
  {
    start: 4026,
    end: 4032,
    text: "the answer is hawaii now you must find some bugs for me",
  },
  {
    start: 4032,
    end: 4040,
    text: "the spider climbed on the bird's back they flew and ate bugs together",
  },
  {
    start: 4040,
    end: 4046,
    text: "they took a tour of the forest then the bird took the spider home",
  },
  {
    start: 4046,
    end: 4052,
    text: "from that day on they were friends and they never tried to eat each other",
  },
  {
    start: 4052,
    end: 4060,
    text: "again [Music] the party",
  },
  {
    start: 4060,
    end: 4067,
    text: "cody's family moved to a new house his dad got a new job as a professor",
  },
  {
    start: 4067,
    end: 4075,
    text: "cody liked his new town but he missed his grandparents for his birthday cody wanted to have a",
  },
  {
    start: 4075,
    end: 4082,
    text: "party his dad said yes we could even have a band play",
  },
  {
    start: 4082,
    end: 4089,
    text: "on the day of the party cody woke up and rushed to get ready he started to check his list of things",
  },
  {
    start: 4089,
    end: 4096,
    text: "to do he was so excited but then he noticed something terrible",
  },
  {
    start: 4096,
    end: 4102,
    text: "there was snow on the ground and lots of it dad he said",
  },
  {
    start: 4102,
    end: 4107,
    text: "how can the band play their instruments outside dad said",
  },
  {
    start: 4107,
    end: 4113,
    text: "we'll move the stage inside it barely fit within the garage because",
  },
  {
    start: 4113,
    end: 4118,
    text: "there were some boxes and garbage there but when they finished they got a call",
  },
  {
    start: 4118,
    end: 4125,
    text: "from the band they did not want to come in the storm dad said",
  },
  {
    start: 4125,
    end: 4130,
    text: "let's get someone to perform magic but no one would come because of the",
  },
  {
    start: 4130,
    end: 4136,
    text: "snow finally dad said cody there's too much snow",
  },
  {
    start: 4136,
    end: 4142,
    text: "we need to cancel the party yes sir cody said sadly",
  },
  {
    start: 4142,
    end: 4149,
    text: "it's going to be a boring birthday he predicted cody wanted to share his birthday with",
  },
  {
    start: 4149,
    end: 4156,
    text: "someone he wanted to be at his old home he wanted to see his grandparents",
  },
  {
    start: 4156,
    end: 4161,
    text: "but then something got his attention he noticed a car in the driveway",
  },
  {
    start: 4161,
    end: 4166,
    text: "his grandparents owned a car like that cody was right",
  },
  {
    start: 4166,
    end: 4172,
    text: "his grandparents came for his birthday happy birthday cody",
  },
  {
    start: 4172,
    end: 4178,
    text: "we're sorry we are late but there was so much snow it made us go off schedule",
  },
  {
    start: 4178,
    end: 4183,
    text: "we tried to leave a message to tell you cody told them what happened",
  },
  {
    start: 4183,
    end: 4190,
    text: "i'm sorry said grandpa i was sad cody said",
  },
  {
    start: 4190,
    end: 4196,
    text: "but i'm not anymore i'm so happy to see you dad brought out something special for",
  },
  {
    start: 4196,
    end: 4203,
    text: "cody's birthday it was his favorite a sunday with whipped cream on top",
  },
  {
    start: 4203,
    end: 4211,
    text: "then cody told his grandparents about the new town it was his best birthday ever",
  },
  {
    start: 4211,
    end: 4216,
    text: "[Music] the demon's bridge",
  },
  {
    start: 4216,
    end: 4221,
    text: "a young woman's cow had crossed the river in the morning when the water",
  },
  {
    start: 4221,
    end: 4226,
    text: "level was moderate but when the woman returned with her dog",
  },
  {
    start: 4226,
    end: 4233,
    text: "to get the cow she was overwhelmed by how high the water had risen",
  },
  {
    start: 4233,
    end: 4240,
    text: "even if she crossed she still couldn't lead her cow back through the river",
  },
  {
    start: 4240,
    end: 4245,
    text: "what am i going to do she wondered suddenly",
  },
  {
    start: 4245,
    end: 4252,
    text: "a man appeared across the river a fragile young lady like you shouldn't",
  },
  {
    start: 4252,
    end: 4261,
    text: "have to work so hard to get across a river he said i'll build you a bridge",
  },
  {
    start: 4261,
    end: 4268,
    text: "the man was not the usual kind of person she met the young woman's perception of him",
  },
  {
    start: 4268,
    end: 4274,
    text: "was that he was a sociable person he was talkative yet something was",
  },
  {
    start: 4274,
    end: 4281,
    text: "strange about him but her innocence allowed her to trust the man",
  },
  {
    start: 4281,
    end: 4287,
    text: "i don't want to be a burden to you sir the woman replied",
  },
  {
    start: 4287,
    end: 4294,
    text: "don't worry he told her as he began crafting a bridge",
  },
  {
    start: 4294,
    end: 4301,
    text: "he merged the pieces of the bridge together with amazing speed soon it was",
  },
  {
    start: 4301,
    end: 4306,
    text: "finished oh but how can i give you money for your",
  },
  {
    start: 4306,
    end: 4312,
    text: "work let's compromise i am sure that we can find a fair",
  },
  {
    start: 4312,
    end: 4318,
    text: "solution what do you think the woman asked",
  },
  {
    start: 4318,
    end: 4323,
    text: "the only payment i need is the first living thing that crosses the bridge",
  },
  {
    start: 4323,
    end: 4332,
    text: "the man replied she thought this deal sounds strange",
  },
  {
    start: 4332,
    end: 4339,
    text: "maybe he's actually a river demon she shivered because she realized that",
  },
  {
    start: 4339,
    end: 4344,
    text: "he had taken advantage of her and settled the deal somehow",
  },
  {
    start: 4344,
    end: 4349,
    text: "but she had a plan of her own she pulled a piece of bread from her",
  },
  {
    start: 4349,
    end: 4356,
    text: "pocket and threw it across the bridge her dog ran after it",
  },
  {
    start: 4356,
    end: 4364,
    text: "the dog is the first living thing across the bridge she said to the man",
  },
  {
    start: 4364,
    end: 4370,
    text: "the man was angry he suddenly changed into a half human",
  },
  {
    start: 4370,
    end: 4376,
    text: "and half fish what's the matter with you he shouted",
  },
  {
    start: 4376,
    end: 4386,
    text: "you tricked me i have no use for your dog he screamed and dived into the river",
  },
  {
    start: 4386,
    end: 4392,
    text: "the woman sped across the bridge to the other side and had a happy meeting with",
  },
  {
    start: 4392,
    end: 4398,
    text: "her dog and cow [Music]",
  },
  {
    start: 4398,
    end: 4405,
    text: "cats and secrets in english there is a common idiom",
  },
  {
    start: 4405,
    end: 4411,
    text: "let the cat out of the bag it means to tell a secret",
  },
  {
    start: 4411,
    end: 4416,
    text: "but where did this idiom start it came from a part of england",
  },
  {
    start: 4416,
    end: 4422,
    text: "long ago people there went from town to town to sell things like vegetables",
  },
  {
    start: 4422,
    end: 4427,
    text: "clothes and pigs they had strong beliefs about honesty",
  },
  {
    start: 4427,
    end: 4432,
    text: "they didn't like lying one day a man went to the town's center",
  },
  {
    start: 4432,
    end: 4437,
    text: "to sell things i have a baby pig for sale it won't cost",
  },
  {
    start: 4437,
    end: 4444,
    text: "much he said he held the animal above his head his style was different from honest",
  },
  {
    start: 4444,
    end: 4450,
    text: "people's style he was a master of tricking people and lying",
  },
  {
    start: 4450,
    end: 4457,
    text: "a woman named beth looked at his pig he offered her the pig for one gold coin",
  },
  {
    start: 4457,
    end: 4463,
    text: "that was a very small amount beth gave him the coin he put it in his pocket",
  },
  {
    start: 4463,
    end: 4470,
    text: "he walked ahead of beth to get the pig he gave her a closed bag and said",
  },
  {
    start: 4470,
    end: 4476,
    text: "here's your pig he then left very quickly beth looked at the bag",
  },
  {
    start: 4476,
    end: 4483,
    text: "it was moving she opened it to let the pig out a cat was inside",
  },
  {
    start: 4483,
    end: 4490,
    text: "he tricked me that isn't proper she said later the man returned to trick more",
  },
  {
    start: 4490,
    end: 4495,
    text: "people beth saw him and the memory of the cat came back",
  },
  {
    start: 4495,
    end: 4502,
    text: "she told her friends they stopped him but no one knew what to do next",
  },
  {
    start: 4502,
    end: 4507,
    text: "someone said we need an independent and fair person to decide that",
  },
  {
    start: 4507,
    end: 4513,
    text: "they went to the judge beth told him about the cat in the bag",
  },
  {
    start: 4513,
    end: 4519,
    text: "the judge asked is there evidence can you demonstrate how he did it",
  },
  {
    start: 4519,
    end: 4524,
    text: "look in his bag said beth she opened it and let a cat out of the",
  },
  {
    start: 4524,
    end: 4530,
    text: "bag they learned the man's secret and he went to jail",
  },
  {
    start: 4530,
    end: 4540,
    text: "that's how the idiom let the cat out of the bag came to mean to tell a secret",
  },
];
