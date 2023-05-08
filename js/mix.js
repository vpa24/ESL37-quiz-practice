$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "especially",
      definition: "to a great extent; very much",
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
      name: "familiar",
      definition: "easily to recoginzed",
    },
    {
      name: "sophisticated",
      definition: "complex/complicated",
    },
    {
      name: "monument",
      definition: "a building that is build to honor a special person or event",
    },
    {
      name: "accurate",
      definition: "correct/without any mistakes",
    },
    {
      name: "messure",
      definition: "discover the exact size or amount",
    },
    {
      name: "countless",
      definition: "too many to be counted: very many",
    },
    {
      name: "alley",
      definition: "a narrow street or passage between building",
    },
    {
      name: "audience",
      definition:
        "a group of people who gather together to listen to something or watch something",
    },
    {
      name: "immediately",
      definition: "without any delay",
    },
    {
      name: "distant",
      definition: "existing or happening far away in space: separated by space",
    },
    {
      name: "mobile",
      definition: "able to move from one place to another",
    },
    {
      name: "community (n)",
      definition:
        "a group of people who are live in the same area; a group of people who have the same interests, religion, race, etc.",
    },
    {
      name: "success",
      definition: "the fact of getting or achieving wealth, respect, or fame",
    },
    {
      name: "narrow",
      definition: "long and not wide: small from one side to the other side",
    },
    {
      name: "stare",
      definition: "look for a long time with the eyes wide open",
    },
    {
      name: "instant",
      definition: "happen immediately",
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
      name: "difference",
      definition: "things that are not the same",
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
      name: "patience",
      definition: "the ability without complaint",
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
      name: "driveway",
      definition: "a private road leading up to a house",
    },
    {
      name: "stuck",
      definition: "unable to move",
    },
    {
      name: "organization",
      definition:
        "a company, business, club, etc. that is formed for a particular purpose",
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
      name: "victory",
      definition: "succes in a game, an election, a war, etc.",
    },
    {
      name: "tradional",
      definition:
        "a beflief, custom, or way of doing something that has existed for a long time",
    },
    {
      name: "embarrassed",
      definition: "feeling ashamed and uncomfotable",
    },
    {
      name: "celebrate",
      definition: "to do something special for an important event",
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
      name: "additional",
      definition: "more than was first mentioned or is usual",
    },
    {
      name: "decoration",
      definition:
        "a thing that make something look more attractive on special occasions",
    },
    {
      name: "ritual",
      definition:
        "a ceremony; something that is done in the same way every time",
    },
  ];
  console.log(vocabulary);
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
    $("#message").html(
      `Please find the answer of <b>${emptyAnswerString}</b>.`
    );
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
      var userAnswer = $(this).val().toLowerCase();
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
