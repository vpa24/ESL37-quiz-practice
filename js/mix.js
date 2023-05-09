$(function () {
  var vocabularyList = [];
  var definitionList = [];
  var userVerbsList = [];
  var verbsList = [];
  var userNounsList = [];
  var nounsList = [];
  var userAdjectivesList = [];
  var adjectivesList = [];

  var vocabulary = [
    {
      name: "especially",
      type: "adv",
      definition: "to a great extent; very much",
    },
    {
      name: "distracted",
      type: "adj",
      definition: "unable to concentrate",
    },
    {
      name: "consume",
      type: "v",
      definition: "to use (fuel, time, rescources)",
    },
    {
      name: "technique",
      type: "n",
      definition: "way of accomplishing something",
    },
    {
      name: "familiar",
      type: "adj",
      definition: "easily to recoginzed",
    },
    {
      name: "sophisticated",
      type: "adj",
      definition: "complex/complicated",
    },
    {
      name: "monument",
      type: "n",
      definition: "a building that is build to honor a special person or event",
    },
    {
      name: "accurate",
      type: "adj",
      definition: "correct/without any mistakes",
    },
    {
      name: "measure",
      type: "v",
      definition: "discover the exact size or amount",
    },
    {
      name: "countless",
      type: "adj",
      definition: "too many to be counted: very many",
    },
    {
      name: "alley",
      type: "n",
      definition: "a narrow street or passage between building",
    },
    {
      name: "audience",
      type: "n",
      definition:
        "a group of people who gather together to listen to something or watch something",
    },
    {
      name: "immediately",
      type: "adv",
      definition: "without any delay",
    },
    {
      name: "distant",
      type: "adj",
      definition: "existing or happening far away in space: separated by space",
    },
    {
      name: "mobile",
      type: "adj",
      definition: "able to move from one place to another",
    },
    {
      name: "community",
      type: "n",
      definition:
        "a group of people who are live in the same area; a group of people who have the same interests, religion, race, etc.",
    },
    {
      name: "success",
      type: "n",
      definition: "the fact of getting or achieving wealth, respect, or fame",
    },
    {
      name: "narrow",
      type: "adj",
      definition: "long and not wide: small from one side to the other side",
    },
    {
      name: "stare",
      type: "v",
      definition: "look for a long time with the eyes wide open",
    },
    {
      name: "instant",
      type: "adj",
      definition: "happen immediately",
    },
    {
      name: "toddler",
      type: "n",
      definition: "a young child learning to walk",
    },
    {
      name: "physical",
      type: "adj",
      definition: "relating to the body",
    },
    {
      name: "difference",
      type: "n",
      definition: "things that are not the same",
    },
    {
      name: "material",
      type: "n",
      definition: "a physical subtance that things can be made from",
    },
    {
      name: "criticize",
      type: "v",
      definition: "to express disapproval of someone or something",
    },
    {
      name: "patience",
      type: "n",
      definition: "the ability without complaint",
    },
    {
      name: "ignore",
      type: "v",
      definition: "intentionally listen or give attention",
    },
    {
      name: "curious",
      type: "adj",
      definition: "interested in something",
    },
    {
      name: "driveway",
      type: "n",
      definition: "a private road leading up to a house",
    },
    {
      name: "stuck",
      type: "adj",
      definition: "unable to move",
    },
    {
      name: "organization",
      type: "n",
      definition:
        "a company, business, club, etc. that is formed for a particular purpose",
    },
    {
      name: "lifestyle",
      type: "n",
      definition:
        "a specific way of living; the way as person lives or a group of people live",
    },
    {
      name: "valuable",
      type: "adj",
      definition: "worth a lot of money; useful or important",
    },
    {
      name: "affluent",
      type: "adj",
      definition: "having a lot of money and good standard of living",
    },
    {
      name: "give up",
      type: "phrasal verb",
      definition: "to stop doing or having something",
    },
    {
      name: "victory",
      type: "n",
      definition: "succes in a game, an election, a war, etc.",
    },
    {
      name: "traditional",
      type: "adj",
      definition:
        "a beflief, custom, or way of doing something that has existed for a long time",
    },
    {
      name: "embarrassed",
      type: "adj",
      definition: "feeling ashamed and uncomfotable",
    },
    {
      name: "celebrate",
      type: "v",
      definition: "to do something special for an important event",
    },
    {
      name: "represent",
      type: "v",
      definition: "to stand for -- or in place of  -- something else",
    },
    {
      name: "national",
      type: "adj",
      definition:
        "connected with a particular nation; shared by a whole nation",
    },
    {
      name: "common",
      type: "adj",
      definition:
        "happening offen; existing in large numbers or in many places",
    },
    {
      name: "additional",
      type: "adj",
      definition: "more than was first mentioned or is usual",
    },
    {
      name: "decoration",
      type: "n",
      definition:
        "a thing that make something look more attractive on special occasions",
    },
    {
      name: "ritual",
      type: "n",
      definition:
        "a ceremony; something that is done in the same way every time",
    },
  ];

  function randomWords(words, number) {
    const shuffledWords = [...words]; // Make a copy of the input array
    for (let i = shuffledWords.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledWords[i], shuffledWords[j]] = [
        shuffledWords[j],
        shuffledWords[i],
      ];
    }
    return shuffledWords.slice(0, number);
  }

  function getRandomWordsWithN_V_Adj(words) {
    const types = ["n", "v", "adj"];

    // filter words to only include the desired types
    const filteredWords = words.filter((word) => types.includes(word.type));

    // group and shuffle the remaining words by type
    const groupedWords = filteredWords.reduce((groups, word) => {
      const type = word.type;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(word);
      return groups;
    }, {});

    const shuffledWords = Object.keys(groupedWords).reduce((shuffled, type) => {
      shuffled[type] = shuffle(groupedWords[type]);
      return shuffled;
    }, {});

    // select 6 random words of each type and map them to objects
    const randomWords = types.flatMap((type) => {
      return shuffledWords[type].slice(0, 5).map((word) => ({
        name: word.name,
        type: word.type,
      }));
    });

    return randomWords;
  }

  // shuffle function (for shuffling the words within each group)
  function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function dispplayVocabulary_1(list_1) {
    var names = list_1.map((word) => word.name);
    return $("#list_1").html(names.join(" "));
  }

  function displayVocabulary(vocabulary) {
    vocabularyList = randomWords(vocabulary, 10);
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
    definitionList = randomWords(vocabulary, 10);
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

  function filterVocabularyByType(vocabularyList) {
    for (let i = 0; i < vocabularyList.length; i++) {
      const vocabulary = vocabularyList[i];
      if (vocabulary.type === "n") {
        nounsList.push(vocabulary.name);
      } else if (vocabulary.type === "v") {
        verbsList.push(vocabulary.name);
      } else if (vocabulary.type == "adj") {
        adjectivesList.push(vocabulary.name);
      }
    }
  }
  function compareLists(userList, referenceList, type) {
    var source = 0;
    const matchingItems = [];
    var nonMatchingItems = [];

    userList.forEach((item) => {
      if (
        type === "adj" &&
        referenceList.includes(item) &&
        adjectivesList.includes(item)
      ) {
        matchingItems.push(item);
        source++;
      } else if (
        type === "noun" &&
        referenceList.includes(item) &&
        nounsList.includes(item)
      ) {
        matchingItems.push(item);
        source++;
      } else if (
        type === "verb" &&
        referenceList.includes(item) &&
        verbsList.includes(item)
      ) {
        matchingItems.push(item);
        source++;
      }
    });
    nonMatchingItems = referenceList.filter((item) => !userList.includes(item));

    return { matching: matchingItems, notMatching: nonMatchingItems, source };
  }

  function getSource_displayAnwser(user, original, type) {
    const comparison = compareLists(user, original, type);
    var matching = comparison.matching ? comparison.matching.join(", ") : "";
    var notMatching = comparison.notMatching
      ? comparison.notMatching.join(", ")
      : "";
    $(`#${type}s_anwser`).html(`${matching}`);
    $(`#${type}s_anwser`).append(
      `<br><span class="fw-b text-danger"> ${notMatching}</span>`
    );
    return comparison.source;
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

  const randomVocabulary = randomWords(vocabulary, 10);
  var randomWordsWithN_V_Adj = getRandomWordsWithN_V_Adj(vocabulary, 15);
  var list_1 = randomWords(randomWordsWithN_V_Adj);

  displaydefinition(randomVocabulary);
  displayVocabulary(randomVocabulary);
  dispplayVocabulary_1(list_1);

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

  // onclick function for Part 1
  $("#check_part_1").on("click", function () {
    var totalSource = 0;
    var nouns_string = $("#nouns").val();
    userNounsList = nouns_string.split(", ").map(function (item) {
      return item.trim();
    });
    var verbs_string = $("#verbs").val();
    userVerbsList = verbs_string.split(", ").map(function (item) {
      return item.trim();
    });
    var adjs_string = $("#adjs").val();
    userAdjectivesList = adjs_string.split(", ").map(function (item) {
      return item.trim();
    });
    filterVocabularyByType(randomWordsWithN_V_Adj);
    totalSource += getSource_displayAnwser(userNounsList, nounsList, "noun");
    totalSource += getSource_displayAnwser(userVerbsList, verbsList, "verb");
    totalSource += getSource_displayAnwser(
      userAdjectivesList,
      adjectivesList,
      "adj"
    );

    $("textarea, #check_part_1").addClass("d-none");
    $("textarea").val("");
    $("#nouns_anwser, #verbs_anwser, #adjs_anwser").removeClass("d-none");
    if (totalSource < 15) {
      $("#message_part_1").html(`You are correct ${totalSource}/15.`);
    } else {
      $("#message_part_1").html(
        "Great job! You got a perfect 15 out of 15! You're so smart because you have learned of them by an awesome, beautiful, capable, delightful, enthusiastic, helpful, generous, intelligent, outgoing, and positive  ESL professor. 🎉👍"
      );
    }
    $("#message_part_1, #new_part_1").removeClass("d-none");
  });
  $("#new_part_1").on("click", function () {
    verbsList = [];
    userNounsList = [];
    nounsList = [];
    userAdjectivesList = [];
    adjectivesList = [];
    randomWordsWithN_V_Adj = getRandomWordsWithN_V_Adj(vocabulary, 15);
    list_1 = randomWords(randomWordsWithN_V_Adj);
    dispplayVocabulary_1(list_1);
    $("#nouns_anwser, #verbs_anwser, #adjs_anwser, #new_part_1").addClass(
      "d-none"
    );
    $("#nouns_anwser, #verbs_anwser, #adjs_anwser").html("");
    $("#message_part_1").addClass("d-none");
    $("#check_part_1, textarea").removeClass("d-none");
  });
});
