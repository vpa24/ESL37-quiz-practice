$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "coach",
      definition:
        "to teach people to improve at a sport, skill, or school subject",
    },
    {
      name: "driveway",
      definition: "a private road leading up to a house",
    },
    {
      name: "fine",
      definition: "good, acceptable, or satisfactory",
    },
    {
      name: "ground",
      definition: "the surface of the earth",
    },
    {
      name: "shovel",
      definition: "a tool used for digging (noun); to dig with a shovel (verb)",
    },
    {
      name: "sidewalk",
      definition:
        "a usually concrete path along the side of a street of people to walk",
    },
    {
      name: "stuck",
      definition: "unable to move",
    },
    {
      name: "teen",
      definition: "short for teenager, someone between 13 and 19",
    },
    {
      name: "organization",
      definition:
        "a company, business, club, etc. that is formed for a particular purpose",
    },
    {
      name: "common",
      definition:
        "happening offen; existing in large numbers or in many places",
    },
    {
      name: "experience",
      definition: "process of getting knowledge or skill",
    },
    {
      name: "aboard",
      definition: "in or  to a foreign country",
    },
    {
      name: "lifestyle",
      definition:
        "a specific way of living; the way as person lives or a group of people live",
    },
    {
      name: "valuable",
      definition: "worth a lot of money; useful or important",
    },
    {
      name: "afflunent",
      definition: "having a lot of money and good standard of living",
    },
    {
      name: "give up",
      definition: "to stop doing or having something",
    },
    {
      name: "satisfied",
      definition:
        "having a happy or pleased feeling because of something that you did or something that happened to you",
    },
    {
      name: "stare",
      definition: "look for a long time with the eyes wide open",
    },
    {
      name: "in public",
      definition: "in the place where many people can hear it such as a park",
    },
    {
      name: "instant",
      definition: "happen immediately",
    },
    {
      name: "bond",
      definition: "strong feeling of friendship",
    },
    {
      name: "toodler",
      definition: "a young child learning to walk",
    },
    {
      name: "physical",
      definition: "relating to the body",
    },
    {
      name: "reaction",
      definition: "way to react to something",
    },
    {
      name: "relate to",
      definition: "connected something or someone",
    },
    {
      name: "difference",
      definition: "things that are not the same",
    },
    {
      name: "different",
      definition: "not the same",
    },
    {
      name: "material",
      definition: "a physical subtance that things can be made from",
    },
    {
      name: "criticize",
      definition: "to express disapproval of someone or something",
    },
    {
      name: "discouraged",
      definition: "lacking of confidence",
    },
    {
      name: "sounds",
      definition: "something you can hear",
    },
    {
      name: "planet",
      definition: "the earth",
    },
    {
      name: "patience",
      definition: "the ability without complaint",
    },
    {
      name: "overnight",
      definition: "during overnight",
    },
    {
      name: "ingore",
      definition: "intentionally listen or give attention",
    },
    {
      name: "curious",
      definition: "interested in something",
    },
    {
      name: "ashamed",
      definition: "feeling embarrassed",
    },
    {
      name: "especially",
      definition: "to a great extent; very much",
    },
    {
      name: "distracted",
      definition: "unable to concentrate",
    },
    {
      name: "consume",
      definition: "to use (fuel, time, rescources)",
    },
    {
      name: "technique",
      definition: "way of accomplishing something",
    },
    {
      name: "productivity",
      definition: "the quality of being able to generate",
    },
    {
      name: "concentrate",
      definition: "put in effort on a particular object",
    },
    {
      name: "familiar",
      definition: "easily to recoginzed",
    },
    {
      name: "minimize",
      definition: "keep to a minimmun",
    },
    {
      name: "interval",
      definition: "a space between time period",
    },
    {
      name: "leisure",
      definition: "freetime",
    },
    {
      name: "blossom",
      definition: "to change, grow and develop fully",
    },
    {
      name: "track",
      definition: "to record the progress",
    },
    {
      name: "sync",
      definition: "working together at the same time",
    },
    {
      name: "sophisticated",
      definition: "complex/complicated",
    },
    {
      name: "marks",
      definition: "symbols used for indentification",
    },
    {
      name: "mark",
      definition: "to record something",
    },
    {
      name: "monument",
      definition: "a building that is build to honor a special person or event",
    },
    {
      name: "society",
      definition: "a large group of people who live together",
    },
    {
      name: "accurate",
      definition: "correct/without any mistakes",
    },
    {
      name: "worship",
      definition:
        "the pratice of showing respect for God or a god, by saying preyers, singing with others, etc.; a ceremony for this",
    },
    {
      name: "victory",
      definition: "succes in a game, an election, a war, etc.",
    },
    {
      name: "tradional",
      definition:
        "a beflief, custom, or way of doing something that has existed for a long time",
    },
    {
      name: "lentils",
      definition: "a type of bean",
    },
    {
      name: "embarrassed",
      definition: "feeling ashamed and uncomfotable",
    },
    {
      name: "bonfire",
      definition: "a large outdoor fire",
    },
    {
      name: "celebrate",
      definition: "to do something special for an important event",
    },
    {
      name: "unique",
      definition: "being the only one of its kind",
    },
    {
      name: "represnet",
      definition: "to stand for -- or in place of  -- something else",
    },
    {
      name: "national",
      definition:
        "connected with a particular nation; shared by a whole nation",
    },
    {
      name: "common",
      definition:
        "happening offen; existing in large numbers or in many places",
    },
    {
      name: "lure",
      definition: "to trick or attract with the promise of something good",
    },
    {
      name: "additional",
      definition: "more than was first mentioned or is usual",
    },
    {
      name: "decorations",
      definition:
        "a thing that make something look more attractive on special occasions",
    },
    {
      name: "chant",
      definition:
        "words or chrases that a group of people shout or sing again and again",
    },
    {
      name: "restrictions",
      definition: "a rule or law that limits or controls what people can do",
    },
    {
      name: "everyday",
      definition: "used or happening every day or regularly; ordinary",
    },
    {
      name: "island",
      definition: "a piece of land that is completely surround by water",
    },
    {
      name: "ritual",
      definition:
        "a ceremony; something that is done in the same way every time",
    },
    {
      name: "messure",
      definition: "discover the exact size or amount",
    },
    {
      name: "countless",
      definition: "too many to be counted: very many",
    },
    {
      name: "alley",
      definition: "a narrow street or passage between building",
    },
    {
      name: "audience",
      definition:
        "a group of people who gather together to listen to something or watch something",
    },
    {
      name: "immediately",
      definition: "without any delay",
    },
    {
      name: "round",
      definition: "a series of similar actions, events, activities, or things",
    },
    {
      name: "fan",
      definition:
        "a person who likes and admires someone or something in a very enthusiastic way",
    },
    {
      name: "disgusting",
      definition:
        "so unpleasant to see, smell, taste, consider, etc.., that you feel slightly sick",
    },
    {
      name: "ton",
      definition:
        "a unit for measuring weight that equals 2,000 pounds (907 kilograms)",
    },
    {
      name: "layer",
      definition:
        "a form or arrange parts or pieces of something on top of each other",
    },
    {
      name: "tourist",
      definition: "of or relating to a tour, tourism, or tourist",
    },
    {
      name: "distant",
      definition: "existing or happening far away in space: separated by space",
    },
    {
      name: "container",
      definition:
        "a large box that goods are placed in so that they can be moved from one place to another; an object that can hold something",
    },
    {
      name: "mobile",
      definition: "able to move from one place to another",
    },
    {
      name: "community (adj)",
      definition: "belonging or relating to a community as a whole",
    },
    {
      name: "community (n)",
      definition:
        "a group of people who are live in the same area; a group of people who have the same interests, religion, race, etc.",
    },
    {
      name: "founder",
      definition:
        "a person who creates or establishes something that is meant for a long time (such as a business or school)",
    },
    {
      name: "success",
      definition: "the fact of getting or achieving wealth, respect, or fame",
    },
    {
      name: "treasure",
      definition: "relating to something that is every important or valuable",
    },
    {
      name: "design",
      definition:
        "the way something has been made: the way the parts of something are formed and arranged for a specific use, effect, etc.",
    },
    {
      name: "narrow",
      definition: "long and not wide: small from one side to the other side",
    },
  ];
  function randomWords(words) {
    const shuffledWords = [...words]; // Make a copy of the input array
    for (let i = shuffledWords.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledWords[i], shuffledWords[j]] = [
        shuffledWords[j],
        shuffledWords[i],
      ];
    }
    return shuffledWords.slice(0, 10);
  }

  function displayVocabulary(vocabulary) {
    vocabularyList = randomWords(vocabulary);
    let vocaText = "<ol>";
    vocabularyList.forEach((word, index) => {
      vocaText += `<li>${
        word.name
      } <input  type="text"  maxlength="1" size="2" id="answer_${
        index + 1
      }" /></li>`;
    });
    vocaText += "</ol>";
    document.getElementById("vocabulary").innerHTML = vocaText;
  }

  function displaydefinition(vocabulary) {
    definitionList = randomWords(vocabulary).slice(0, 10);
    let vocaText = "<ol type='a'>";
    definitionList.forEach((word) => {
      vocaText += `<li>${word.definition}</li>`;
    });
    vocaText += "</ol>";
    document.getElementById("definition").innerHTML = vocaText;
  }

  function getLetter(word) {
    var definition = "";
    $.each(definitionList, function (index, item) {
      if (item.name === word) {
        definition = index + 1;
        return false;
      }
    });
    return String.fromCharCode(definition + 96);
  }

  function processEmptyAnswer(emptyAnswer) {
    var names = emptyAnswer.map((word) => word.name);
    var emptyAnswerString = names.join(", ");
    $(`#answer_${emptyAnswer[0].index + 1}`).trigger("focus");
    $("#message").addClass("alert-warning");
    $("#message").removeClass("d-none");
    $("#message").html(`Please find the answer of <b>${emptyAnswerString}</b>`);
  }

  const randomVocabulary = randomWords(vocabulary);
  displaydefinition(randomVocabulary);
  displayVocabulary(randomVocabulary);
  $("#check").on("click", function () {
    var source = 0;
    var incorrectVocabulary = [];
    var emptyAnswer = [];
    $("input.answer").each(function (index) {
      var vocaName = vocabularyList[index].name;
      var userAnswer = $(this).val();
      if (userAnswer == "") {
        emptyAnswer.push({ name: vocaName, index: index });
      } else {
        const indexFromVocabulary =
          userAnswer.charCodeAt(0) - "a".charCodeAt(0);
        const definition = definitionList[indexFromVocabulary].name;
        if (vocaName == definition) {
          source++;
        } else {
          incorrectVocabulary.push({ name: vocaName, index: index });
        }
      }
    });
    if (emptyAnswer.length > 1) {
      processEmptyAnswer(emptyAnswer);
    } else {
      incorrectVocabulary.map((word) => {
        $(`#answer_${word.index + 1}`).val(getLetter(word.name));
        $(`#answer_${word.index + 1}`).addClass("text-danger fw-bold");
      });
      var names = incorrectVocabulary.map((word) => word.name);
      var errorString = names.join(", ");
      if ($("#message").hasClass("alert-warning")) {
        $("#message").removeClass("alert-warning");
      }
      if (source < 10) {
        $("#message ").html(
          `You are correct ${source}/10. You should learn the definition of <strong>${errorString}</strong> again.`
        );
      } else {
        $("#message").html(
          `Great job! You got a perfect 10 out of 10! You're amazing!! 🎉👍`
        );
      }
      $(this).addClass("d-none");
      $("#message").removeClass("d-none");
      $("#new").removeClass("d-none");
    }
  });

  $("#new").on("click", function () {
    displaydefinition(randomVocabulary);
    displayVocabulary(randomVocabulary);
    $(this).addClass("d-none");
    $("#message").addClass("d-none");
    $("#check").removeClass("d-none");
  });
});
