window.MobileBankingSolutions = window.MobileBankingSolutions || {};

$(function () {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Howto/Themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if (window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !MobileBankingSolutions.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "tizen":
                tizen.application.getCurrentApplication().exit();
                break;
            case "android":
                navigator.app.exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    MobileBankingSolutions.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MobileBankingSolutions,
        layoutSet: DevExpress.framework.html.layoutSets[MobileBankingSolutions.config.layoutSet],
        navigation: MobileBankingSolutions.config.navigation,
        commandMapping: MobileBankingSolutions.config.commandMapping
    });
    MobileBankingSolutions.app.router.register(":view/:id", { view: "home", id: undefined });
    MobileBankingSolutions.app.on("navigatingBack", onNavigatingBack);
    MobileBankingSolutions.app.navigate();
});
