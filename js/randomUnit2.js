$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "worship",
      defenition:
        "the pratice of showing respect for God or a god, by saying preyers, singing with others, etc.; a ceremony for this",
    },
    {
      name: "victory",
      defenition: "succes in a game, an election, a war, etc.",
    },
    {
      name: "tradional",
      defenition:
        "a beflief, custom, or way of doing something that has existed for a long time",
    },
    {
      name: "lentils",
      defenition: "a type of bean",
    },
    {
      name: "embarrassed",
      defenition: "feeling ashamed and uncomfotable",
    },
    {
      name: "bonfire",
      defenition: "a large outdoor fire",
    },
    {
      name: "celebrate",
      defenition: "to do something special for an important event",
    },
    {
      name: "unique",
      defenition: "being the only one of its kind",
    },
    {
      name: "represnet",
      defenition: "to stand for -- or in place of  -- something else",
    },
    {
      name: "national",
      defenition:
        "connected with a particular nation; shared by a whole nation",
    },
    {
      name: "common",
      defenition:
        "happening offen; existing in large numbers or in many places",
    },
    {
      name: "lure",
      defenition: "to trick or attract with the promise of something good",
    },
    {
      name: "additional",
      defenition: "more than was first mentioned or is usual",
    },
    {
      name: "decorations",
      defenition:
        "a thing that make something look more attractive on special occasions",
    },
    {
      name: "chant",
      defenition:
        "words or chrases that a group of people shout or sing again and again",
    },
    {
      name: "restrictions",
      defenition: "a rule or law that limits or controls what people can do",
    },
    {
      name: "everyday",
      defenition: "used or happening every day or regularly; ordinary",
    },
    {
      name: "island",
      defenition: "a piece of land that is completely surround by water",
    },
    {
      name: "ritual",
      defenition:
        "a ceremony; something that is done in the same way every time",
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
      } <input  type="text"  maxlength="1" size="2" class="answer" id="answer_${
        index + 1
      }" /></li>`;
    });
    vocaText += "</ol>";
    document.getElementById("vocabulary").innerHTML = vocaText;
  }
  function displayDefenition(vocabulary) {
    definitionList = randomWords(vocabulary).slice(0, 10);
    let vocaText = "<ol type='a'>";
    definitionList.forEach((word) => {
      vocaText += `<li>${word.defenition}</li>`;
    });
    vocaText += "</ol>";
    document.getElementById("defenition").innerHTML = vocaText;
  }
  const randomVocabulary = randomWords(vocabulary);
  displayDefenition(randomVocabulary);
  displayVocabulary(randomVocabulary);
  $("#check").on("click", function () {
    var source = 0;
    var incorrectVocabulary = [];
    $("input.answer").each(function (index) {
      console.log(vocabularyList[index].name);
      var userAnswer = $(this).val();
      // Convert the user input to an index
      const indexFromVocabulary = userAnswer.charCodeAt(0) - "a".charCodeAt(0);
      console.log(indexFromVocabulary);
      console.log(definitionList[indexFromVocabulary]);
      const defenition = definitionList[indexFromVocabulary].name;
      if (vocabularyList[index].name == defenition) {
        source++;
      } else {
        incorrectVocabulary.push(vocabularyList[index].name);
      }
    });
    var errorString = incorrectVocabulary.join(", ");
    $("#message span").html(`You are correct ${source}/10. `);
    if (source < 10) {
      $("#message span").append(
        `You should learn the defenition of: <strong>${errorString}</strong> again.`
      );
    } else {
      $("#message span").append(
        `<span'>&#128516;</span> Wow. You are so awesome!`
      );
    }
    $("#message").removeClass("d-none");
    $("input[type=text]").val("");
  });
});
