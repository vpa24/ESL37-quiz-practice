$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "especially",
      defenition: "to a great extent; very muc",
    },
    {
      name: "distracted",
      defenition: "unable to concentrate",
    },
    {
      name: "consume",
      defenition: "to use (fuel, time, rescources)",
    },
    {
      name: "technique",
      defenition: "way of accomplishing something",
    },
    {
      name: "productivity",
      defenition: "the quality of being able to generate",
    },
    {
      name: "concentrate",
      defenition: "put in effort on a particular object",
    },
    {
      name: "familiar",
      defenition: "easily to recoginzed",
    },
    {
      name: "minimize",
      defenition: "keep to a minimmun",
    },
    {
      name: "interval",
      defenition: "a space between time period",
    },
    {
      name: "leisure",
      defenition: "freetime",
    },
    {
      name: "blossom",
      defenition: "to change, grow and develop fully",
    },
    {
      name: "track",
      defenition: "to record the progress",
    },
    {
      name: "sync",
      defenition: "working together at the same time",
    },
    {
      name: "sophisticated",
      defenition: "complex/complicated",
    },
    {
      name: "marks",
      defenition: "symbols used for indentification",
    },
    {
      name: "mark",
      defenition: "to record something",
    },
    {
      name: "monument",
      defenition: "a building that is build to honor a special person or event",
    },
    {
      name: "society",
      defenition: "a large group of people who live together",
    },
    {
      name: "accurate",
      defenition: "correct/without any mistakes",
    },
    {
      name: "messure",
      defenition: "discover the exact size or amount",
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
