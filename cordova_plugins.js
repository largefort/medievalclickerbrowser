cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "file": "plugins/@codeeshop/cordova-plugin-google-play-games/www/googleplaygames.js",
        "id": "@codeeshop/cordova-plugin-google-play-games.GooglePlayGames",
        "pluginId": "@codeeshop/cordova-plugin-google-play-games",
        "clobbers": [
            "GooglePlayGames"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-android-fullscreen": "1.0.0",
    "cordova-plugin-fullscreen": "1.3.0",
    "@codeeshop/cordova-plugin-google-play-games": "1.4.4"
}
// BOTTOM OF METADATA
});