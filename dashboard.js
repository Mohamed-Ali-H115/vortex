$(document).ready(function(){
    // تحميل السيرفرات عند تحميل الصفحة
    loadServers();
});

function loadServers() {
    $.ajax({
        type: "GET",
        url: "https://discord.com/api/v10/users/@me/guilds",
        headers: {
            "Authorization": "Bearer YOUR_DISCORD_ACCESS_TOKEN"
        },
        success: function(response) {
            displayServers(response);
        },
        error: function(xhr, status, error) {
            console.error("Error loading servers:", error);
        }
    });
}

function displayServers(servers) {
    var serverList = $("#serverList");
    serverList.empty();

    servers.forEach(function(server) {
        var listItem = $("<li>").text(server.name);
        serverList.append(listItem);
    });
}