$(document).ready(function () {
    init();

    var lastCommand = "i";

    function openMobileKeyboard() {
        $('#mobile').click(function(e){ $(this).focus(); });

        $('#cmd').click(function(e)
        {
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
            'How about a nice game of chess?'
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