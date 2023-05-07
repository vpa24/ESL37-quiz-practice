$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var breakOnClick = false;

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
      $("input[type=text]").val("");
    }
    $("#message").removeClass("d-none");
  });
});
