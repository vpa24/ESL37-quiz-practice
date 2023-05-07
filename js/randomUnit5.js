$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var breakOnClick = false;

  var vocabulary = [
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
      name: "round",
      definition: "a series of similar actions, events, activities, or things",
    },
    {
      name: "fan",
      definition:
        "a person who likes and admires someone or something in a very enthusiastic way",
    },
    {
      name: "disgusting",
      definition:
        "so unpleasant to see, smell, taste, consider, etc.., that you feel slightly sick",
    },
    {
      name: "ton",
      definition:
        "a unit for measuring weight that equals 2,000 pounds (907 kilograms)",
    },
    {
      name: "layer",
      definition:
        "a form or arrange parts or pieces of something on top of each other",
    },
    {
      name: "tourist",
      definition: "of or relating to a tour, tourism, or tourist",
    },
    {
      name: "distant",
      definition: "existing or happening far away in space: separated by space",
    },
    {
      name: "container",
      definition:
        "a large box that goods are placed in so that they can be moved from one place to another; an object that can hold something",
    },
    {
      name: "mobile",
      definition: "able to move from one place to another",
    },
    {
      name: "community (adj)",
      definition: "belonging or relating to a community as a whole",
    },
    {
      name: "community (n)",
      definition:
        "a group of people who are live in the same area; a group of people who have the same interests, religion, race, etc.",
    },
    {
      name: "founder",
      definition:
        "a person who creates or establishes something that is meant for a long time (such as a business or school)",
    },
    {
      name: "success",
      definition: "the fact of getting or achieving wealth, respect, or fame",
    },
    {
      name: "treasure",
      definition: "relating to something that is every important or valuable",
    },
    {
      name: "design",
      definition:
        "the way something has been made: the way the parts of something are formed and arranged for a specific use, effect, etc.",
    },
    {
      name: "narrow",
      definition: "long and not wide: small from one side to the other side",
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
        $("#message").html(
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
  });

  $("#new").on("click", function () {
    displaydefinition(randomVocabulary);
    displayVocabulary(randomVocabulary);
    $(this).addClass("d-none");
    $("#message").addClass("d-none");
    $("#check").removeClass("d-none");
  });
});
