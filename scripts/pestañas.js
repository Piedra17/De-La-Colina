
  function mostrarPestana(evt, id) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('mostrar'));

    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    document.getElementById(id).classList.add('mostrar');
    evt.currentTarget.classList.add('active');
  }

