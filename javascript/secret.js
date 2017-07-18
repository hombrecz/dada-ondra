$(document).ready(function () {
    init();

    var lastCommand = "i";

    function openMobileKeyboard() {
        $('#mobile').click(function(e){ $(this).focus(); });

        $('#cmd').click(function(e)
        {
            e.preventDefault();
            $('#mobile').trigger('click');
        })
    }

    function init() {
        addListeners();
        showIntro();
        openMobileKeyboard();
    }

    function addListeners() {
        $(function () {
            $(window).keypress(function (e) {
                var char = String.fromCharCode(e.which);

                switch (char) {
                    case "c":
                        clearConsole();
                        break;
                    case "e":
                        showCeremony();
                        break;
                    case "g":
                        showGifts();
                        break;
                    case "h":
                        showHelp();
                        break;
                    case "i":
                        clearConsole();
                        showIntro();
                        break;
                    case "o":
                        openLinkInNewTab();
                        break;
                    case "p":
                        showParty();
                        break;
                    case "q":
                        showRandomQuote();
                        break;
                    case "r":
                        showRegistrationForm();
                        break;
                    default:
                }

                lastCommand = char;
            });
        });
    }

    function showIntro() {
        appendCmdLine("Welcome to Hombrix!");
        appendCmdLine("-------------------");
        appendCmdLine("");
        appendCmdLine("> press (h) for help");
        blinkingPointer();
    }

    function showHelp() {
        appendCmdLine("> h");
        appendCmdLine("> Available commands:");
        appendCmdLine("-------------------");
        appendCmdLine("> c - clear console");
        appendCmdLine("> e - ceremony info");
        appendCmdLine("> g - gifts list");
        appendCmdLine("> h - help");
        appendCmdLine("> i - show invitation");
        appendCmdLine("> p - party info");
        appendCmdLine("> q - qoute");
        appendCmdLine("> r - registration form");
        appendCmdLine("-------------------");
        blinkingPointer();

    }

    function showCeremony() {
        appendCmdLine("> c");
        appendCmdLine("> Ceremony info");
        appendCmdLine("> - time: 011400Z SEP17");
        appendCmdLine("> - location: 50°52'32.0\"N 15°10'57.1\"E");
        appendCmdLine("> press (o) to open location in map");
        blinkingPointer();
    }

    function showParty() {
        appendCmdLine("> p");
        appendCmdLine("> Party info");
        appendCmdLine("> - time: 011530Z SEP17");
        appendCmdLine("> - location: 50°52'17.3\"N 15°11'40.8\"E");
        appendCmdLine("> press (o) to open location in map");
        blinkingPointer();
    }

    function showGifts() {
        appendCmdLine("> g");
        appendCmdLine("> Gifts list");
        appendCmdLine("> - located outside of system");
        appendCmdLine("> press (o) to open in another window");
        blinkingPointer();
    }

    function showRegistrationForm() {
        appendCmdLine("> r");
        appendCmdLine("> Registration form");
        appendCmdLine("> - located outside of system");
        appendCmdLine("> press (o) to open in another window");
        blinkingPointer();
    }

    function openLinkInNewTab() {
        switch (lastCommand) {
            case "e":
                appendCmdLine("> o");
                appendCmdLine("> opening ceremony map");
                openLink("https://www.google.cz/maps/place/50%C2%B052'32.0%22N+15%C2%B010'57.1%22E/@50.875545,15.1819808,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d50.875545!4d15.182528?hl=cs");
                break;
            case "p":
                appendCmdLine("> o");
                appendCmdLine("> opening party map");
                openLink("https://www.google.cz/maps/place/50%C2%B052'17.3%22N+15%C2%B011'40.8%22E/@50.871479,15.1935787,18z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d50.871479!4d15.194673?hl=cs");
                break;
            case "g":
                appendCmdLine("> o");
                appendCmdLine("> opening gifts list");
                openLink("https://www.beremese.cz/wedding_registry/9ls48k8/");
                break;
            case "r":
                appendCmdLine("> o");
                appendCmdLine("> opening registration map");
                openLink("https://goo.gl/forms/SvvZb9QWUnnOk0Li2");
                break;
            default:
        }
        blinkingPointer();
    }

    function openLink(url) {
        window.open(url);
    }

    function showRandomQuote() {
        appendCmdLine("> q");
        //TODO - more quotes
        var textArray = [
            'Blbý svatby...',
            'How about a nice game of chess?',
            'Think out of box!',
            'When I was here, I wanted to be there, when I was there, all I could think of was getting back into the jungle.',
            'Low whistles are twice as long and play an octave lower. They\'re good to own because, in a pinch, you can use one to defend yourself in a pub.',
            'Night Stalkers Don\'t Quit!',
            'The trouble with Scotland is that it\'s full of Scots.',
            'The only replacement for a DC-3 is another DC-3..',
            'We\'re going to bomb them back into the stone Age.',
            'The difference between a duck and a co-pilot? The duck can fly.',
            'A helicopter is a collection of rotating parts going round and round and reciprocating parts going up and down - all of them trying to become random in motion.',
            'Good judgment comes from experience and experience comes from bad judgment.',
            'Aviation is not so much a profession as it is a disease.',
            'The RF-4E Phantom - living proof that if you put enough engine on something . . . even a brick could fly.',
            'When a forecaster talks about yesterday\'s weather, he\'s an historian, when he talks about tomorrow\'s, he\'s reading tea leaves.',
            'The odds against there being a bomb on a plane are a million to one, and against two bombs a million times a million to one. Next time you fly, cut the odds and take a bomb.',
            'Real planes use only a single stick to fly. This is why bulldozers & helicopters — in that order — need two.',
            'Roger: Used when you\'re not sure what else to say.',
            'Helicopters are for the rich... or the enlisted.',
            'A \'good\' landing is one from which you can walk away. A \'great\' landing is one after which they can use the aeroplane again.',
            'What\'s the difference between God and fighter pilots? God doesn\'t think he\'s a fighter pilot.',
            'Some pilots will make an emergency out of a bad magneto check. Others, upon losing a wing, will ask for a lower altitude.',
            'There are Rules and there are Laws. The rules are made by men who think that they know better how to fly your airplane than you. The Laws (of Physics) were made by the Great One. You can, and sometimes should, suspend the Rules but you can never suspend the Laws.',
            'Cluster bombing from B-52s are very, very accurate. The bombs are guaranteed to always hit the ground.',
            'We, the willing, led by the unknowing, are doing the impossible for the ungrateful. We have now done so much for so long with so little, we are now capable of doing anything with nothing.'
        ];
        var randomNumber = Math.floor(Math.random()*textArray.length);

        appendCmdLine(textArray[randomNumber]);
        blinkingPointer();
    }

    function clearConsole() {
        $("#cmd").empty();
        blinkingPointer();
    }

    function blinkingPointer() {
        $("#pointer").remove();

        $("#cmd").append(
            $('<p/>', {'id': 'pointer', text: '> '}).append(
                $('<span/>', {'class': 'blinking', text: '_'})
            )
        );
    }

    function appendCmdLine(message) {
        $("#cmd").append("<p>" + message + "</p>");
    }
});