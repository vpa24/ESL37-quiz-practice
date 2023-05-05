$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
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
  function displaydefinition(vocabulary) {
    definitionList = randomWords(vocabulary).slice(0, 10);
    let vocaText = "<ol type='a'>";
    definitionList.forEach((word) => {
      vocaText += `<li>${word.definition}</li>`;
    });
    vocaText += "</ol>";
    document.getElementById("definition").innerHTML = vocaText;
  }
  const randomVocabulary = randomWords(vocabulary);
  displaydefinition(randomVocabulary);
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
      const definition = definitionList[indexFromVocabulary].name;
      if (vocabularyList[index].name == definition) {
        source++;
      } else {
        incorrectVocabulary.push(vocabularyList[index].name);
      }
    });
    var errorString = incorrectVocabulary.join(", ");
    $("#message span").html(`You are correct ${source}/10. `);
    if (source < 10) {
      $("#message span").append(
        `You should learn the definition of: <strong>${errorString}</strong> again.`
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
