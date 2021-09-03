var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Balesin',
    // App id
    id: 'com.balesin.bjtech',
    // theme: 'ios',
    pane: {
        swipe: true,
    },
    theme: 'ios',
    // ... other parameters
});

// Init View Main
const mainView = app.views.create('.view-main');

// Init Left Panel Menu
const panelMenu = app.panel.create({
    el: '.panel-menu',
    visibleBreakpoint: 1024,
})