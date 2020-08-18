function abrirVentana() {
    let newWindow = window.open('', '', 'width=250, height=120');
    newWindow.document.write('<p>Hello World!</p>');
  }