$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var breakOnClick = false;
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
          var vocaName = vocabularyList[index].name;
          incorrectVocabulary.push(vocaName);
          $(`#answer_${index + 1}`).val(getLetter(vocaName));
          $(`#answer_${index + 1}`).addClass("text-danger fw-bold");
        }
      }
    });
    if (breakOnClick) {
      return false;
    }
    var errorString = incorrectVocabulary.join(", ");
    if (source < 10) {
      $("#message span").html(
        `You are correct ${source}/10. You should learn the definition of: <strong>${errorString}</strong> again.`
      );
    } else {
      $("#message span").append(
        `Great job! You got a perfect 10 out of 10! That's fantastic! You're amazing!! 🎉👍`
      );
    }
    $("#message").removeClass("d-none");
  });
});
