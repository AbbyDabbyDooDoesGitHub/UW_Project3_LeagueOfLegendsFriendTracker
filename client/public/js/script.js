
// MODAL FUNCTIONALITY
$( document ).ready(function() {
    $('.modal').modal();
    $('#sign-in-modal').on('click', function() {
    });
    $('#account-creation-modal').on('click', function() {
    });
});


// CHANGE IMG ON ADD NEW FRIEND PG
let images = [
    // [ dk tx img,  lt tx img, alt text, Tagline],
    [ "1.png", "2.png", "Objective Focused Icon", "Rest assured you won't need to ping objectives with this player on your team!"],
    [ "3.png", "4.png", "Great Vision Score Icon", "Wards are plentiful with this player on the map."],
    [ "5.png", "6.png", "Reliable Carry Icon", "Hang on tight, this player's about to carry your team to victory (or at least put up a crazy fight for it)."],
    [ "7.png", "8.png", "Casual Player Icon", "A blast to play with (if they're ever on), but maybe play a warm-up match before jumping into anything high stakes."],
    [ "9.png", "10.png", "Competitive Player Icon", "Going to play a seasonal game mode \"just for fun\"? Rest assured this player will take it way too seriously."],
    [ "11.png", "12.png", "Big Brain Plays Icon", "This player pulls crazy plays you never see coming... The game won't be dull with them around!"],
    [ "13.png", "14.png", "Tilt-Proof Icon", "No matter how bleak, this player will keep a cool head. They may be a great asset for competitive modes (if thier gameplay matches yours)."],
    [ "15.png", "16.png", "Prone To Rage Icon", "Consider keeping them in low stakes gamemodes as this player is likely to tilt more than a carnival ride."],
    [ "17.png", "18.png", "Great Roaming Icon", "They were on the other side of the map a second ago, but now they're pulling off a crazy assist... This player knows how to play the map!"],
    [ "19.png", "20.png", "No Map Awareness Icon", "Be prepared to ping and don't expect this player to pay attention to their surroundings--they have serious tunnel vision!"],
    [ "21.png", "22.png", "No Voice Chat Icon", "Be prepared to communicate with pings and chat because this player doesn't get on voice chat."],
    [ "23.png", "24.png", "Friend IRL Icon", "The ultimate verification! You know this person in real life, outside of the pixels."],
    [ "25.png", "26.png", "Quick to Surrender Icon", "Just looking for some casual games? This player will surrender easily when the game takes a downturn... No hostage taking here!"],
    [ "27.png", "28.png", "Never Surrenders Icon", "No matter how dire, this player will hold out to the bitter end and keep fighting. Keep this in mind if you only have time for a game or two."],
    [ "29.png", "30.png", "Great Duo Laner Icon", "It's always great when a lane-partner synergizes with your playstyle. Dominate your lane with confidence!"],
    [ "31.png", "32.png", "Loves to Invade Icon", "Expect some aggressive plays from this player! They're always pushing to cross into enemy territory at the slightest opportunity or provocation"]
];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};