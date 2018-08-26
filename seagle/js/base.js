window.onload = function() {
    $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='./seagle/css/base.css' type='text/css'>");
    $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='./seagle/css/animations.css' type='text/css'>");
    
    $('#seagle-tchat').addClass('unloadState');
    $('#seagle-tchat').attr('onClick', 'initialise()');
};

function initialise() {
    $('#seagle-tchat').removeClass('unloadState');
    $('#seagle-tchat').addClass('loadingState');
    $('#seagle-tchat').html('Initialisation');
}