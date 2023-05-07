$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var breakOnClick = false;

  var vocabulary = [
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
