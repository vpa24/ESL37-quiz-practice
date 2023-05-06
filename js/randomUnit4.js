$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "especially",
      definition: "to a great extent; very muc",
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
      name: "messure",
      definition: "discover the exact size or amount",
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
      var userAnswer = $(this).val();
      if (userAnswer == "") {
        $(`#answer_${index + 1}`).trigger("focus");
        $("#message span").html(
          `Please find the answer of <b>${vocabularyList[index].name}</b>`
        );

        $("#message").addClass("alert-warning");
        $("#message").removeClass("d-none");
        breakOnClick = true;
        return false;
      } else {
        // Convert the user input to an index
        if ($("#message").hasClass("alert-warning")) {
          breakOnClick = false;
          $("#message").removeClass("alert-warning");
        }
        const indexFromVocabulary =
          userAnswer.charCodeAt(0) - "a".charCodeAt(0);
        const definition = definitionList[indexFromVocabulary].name;
        if (vocabularyList[index].name == definition) {
          source++;
        } else {
          incorrectVocabulary.push(vocabularyList[index].name);
        }
      }
    });
    if (breakOnClick) {
      return false;
    }
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
