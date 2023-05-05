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
      name: "community",
      definition: "all the different populations that live together in an area",
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
