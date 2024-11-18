try{
    Fancybox.bind("[data-fancybox]", {
        Images: {
            initialSize: "fit",
        },
        Thumbs: {
            type: "classic",
        },
    });
}
catch (e){
    console.log(e)
}
