$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "stare",
      defenition: "look for a long time with the eyes wide open",
    },
    {
      name: "in public",
      defenition: "in the place where many people can hear it such as a park",
    },
    {
      name: "instant",
      defenition: "happen immediately",
    },
    {
      name: "bond",
      defenition: "strong feeling of friendship",
    },
    {
      name: "toodler",
      defenition: "a young child learning to walk",
    },
    {
      name: "physical",
      defenition: "relating to the body",
    },
    {
      name: "reaction",
      defenition: "way to react to something",
    },
    {
      name: "relate to",
      defenition: "connected something or someone",
    },
    {
      name: "difference",
      defenition: "things that are not the same",
    },
    {
      name: "different",
      defenition: "not the same",
    },
    {
      name: "material",
      defenition: "a physical subtance that things can be made from",
    },
    {
      name: "criticize",
      defenition: "to express disapproval of someone or something",
    },
    {
      name: "discouraged",
      defenition: "lacking of confidence",
    },
    {
      name: "sounds",
      defenition: "something you can hear",
    },
    {
      name: "planet",
      defenition: "the earth",
    },
    {
      name: "patience",
      defenition: "the ability without complaint",
    },
    {
      name: "overnight",
      defenition: "during overnight",
    },
    {
      name: "ingore",
      defenition: "intentionally listen or give attention",
    },
    {
      name: "curious",
      defenition: "interested in something",
    },
    {
      name: "ashamed",
      defenition: "feeling embarrassed",
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
