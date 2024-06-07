$(document).ready(function(){
    // تحميل السيرفرات عند تحميل الصفحة
    loadServers();
});

function loadServers() {
    $.ajax({
        type: "GET",
        url: "https://discord.com/api/v10/users/@me/guilds",
        headers: {
            "Authorization": "Bearer MTA3NTM3OTI4MzA4MzY2NTQ0MA.G_Verk.5B7jaQ_saVWlc_EKOAoJ2Ebvgg0jRGBMpevpNg"
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
