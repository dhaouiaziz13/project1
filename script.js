$(".card").hide();
let quotes = [
  "“Being a student is easy. Learning requires actual work.”— William Crawford",
  "“The great aim of education is not knowledge but action.”— Herbert Spencer",
  "“If you think education is expensive, try estimating the cost of ignorance.”— Howard Gardner",
  "“Smooth seas do not make skillful sailors.”— African Proverb",
  "“Anything worth doing well is worth doing poorly at first.”— Ray Congdon",
  "“I don't think much of a man who is not wiser today than he was yesterday. “— Abraham Lincoln",
];
let fav_quote =
  "‘Any fool can know. The point is to understand.’–Albert Einstein";
$("a").mouseenter(() => {
  $("a").css({ "background-color": "#87CEFA", "transition-duration": "0.6s" });
});
$("a").mouseleave(() => {
  $("a").css({ "background-color": "#278da4", "transition-duration": "0.6s" });
});

//you can click on the show button after 2 seconds when the quote is completely shown

$(".quote").html(fav_quote).hide().fadeIn(3000);

setInterval(() => {
  let randomItem = quotes[Math.floor(Math.random() * quotes.length)];
  $(".quote").html(randomItem);
}, 4500);

setTimeout(() => {
  $("#click").click(() => {
    $(".quote").fadeOut(1000);
    setTimeout(() => {
      $(".card").slideDown(2000);
    }, 2000);
  });
}, 3000);

$("#hide").click(() => {
  $(".card").slideUp(2050);
  setTimeout(() => {
    $(".quote").fadeIn(950);
  }, 2000);
});
