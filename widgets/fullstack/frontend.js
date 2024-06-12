async function loaded(card) {
    const { widget, main } = card;
    const response = await fetch(widget.dataURL);
    const msg = await response.text();
    main.body.innerText = msg
}

module.exports = { loaded };
