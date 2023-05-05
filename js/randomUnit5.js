$(function () {
  var vocabularyList = [];
  var definitionList = [];

  var vocabulary = [
    {
      name: "countless",
      defenition: "too many to be counted: very many",
    },
    {
      name: "alley",
      defenition: "a narrow street or passage between building",
    },
    {
      name: "audience",
      defenition:
        "a group of people who gather together to listen to something or watch something",
    },
    {
      name: "immediately",
      defenition: "without any delay",
    },
    {
      name: "round",
      defenition: "a series of similar actions, events, activities, or things",
    },
    {
      name: "fan",
      defenition:
        "a person who likes and admires someone or something in a very enthusiastic way",
    },
    {
      name: "disgusting",
      defenition:
        "so unpleasant to see, smell, taste, consider, etc.., that you feel slightly sick",
    },
    {
      name: "ton",
      defenition:
        "a unit for measuring weight that equals 2,000 pounds (907 kilograms)",
    },
    {
      name: "layer",
      defenition:
        "a form or arrange parts or pieces of something on top of each other",
    },
    {
      name: "tourist",
      defenition: "of or relating to a tour, tourism, or tourist",
    },
    {
      name: "distant",
      defenition: "existing or happening far away in space: separated by space",
    },
    {
      name: "container",
      defenition:
        "a large box that goods are placed in so that they can be moved from one place to another; an object that can hold something",
    },
    {
      name: "mobile",
      defenition: "able to move from one place to another",
    },
    {
      name: "community",
      defenition: "belonging or relating to a community as a whole",
    },
    {
      name: "community",
      defenition:
        "a group of people who are live in the same area; a group of people who have the same interests, religion, race, etc.",
    },
    {
      name: "Founder",
      defenition:
        "a person who creates or establishes something that is meant for a long time (such as a business or school)",
    },
    {
      name: "Success",
      defenition: "the fact of getting or achieving wealth, respect, or fame",
    },
    {
      name: "Treasure",
      defenition: "Relating to something that is every important or valuable",
    },
    {
      name: "Design",
      defenition:
        "the way something has been made: the way the parts of something are formed and arranged for a specific use, effect, etc.",
    },
    {
      name: "Narrow",
      defenition: "long and not wide: small from one side to the other side",
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
