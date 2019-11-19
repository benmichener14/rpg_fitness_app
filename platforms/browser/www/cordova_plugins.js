cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-permission/www/index.js",
        "id": "cordova-plugin-permission.Permission",
        "pluginId": "cordova-plugin-permission",
        "clobbers": [
            "window.plugins.Permission"
        ]
    },
    {
        "file": "plugins/cordova-plugin-permission/tests/index.spec.js",
        "id": "cordova-plugin-permission.tests",
        "pluginId": "cordova-plugin-permission"
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-permission": "0.1.0",
    "cordova-plugin-android-permissions": "1.0.0",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-sqlite-storage": "3.4.0"
}
// BOTTOM OF METADATA
});