$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var breakOnClick = false;

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
