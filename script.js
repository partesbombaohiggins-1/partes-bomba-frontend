// Nómina oficial de la Primera Compañía "Bomba O'Higgins" - Rancagua
const voluntariosCompania = [
  { num: 1, nombre: "Vargas Gómez Mario", tipo: "MH" },
  { num: 2, nombre: "Torrealba Escárate Omar", tipo: "MH" },
  { num: 3, nombre: "Valenzuela Gallardo Alfredo", tipo: "MH" },
  { num: 4, nombre: "Méndez Bustamante Juan", tipo: "DH" },
  { num: 5, nombre: "Torres Almonacid Roberto", tipo: "MH" },
  { num: 6, nombre: "Pérez Rubio Juan", tipo: "MH" },
  { num: 7, nombre: "Espinoza Espinosa Jaime", tipo: "DH" },
  { num: 8, nombre: "Catejo Tapia Juan", tipo: "DH" },
  { num: 9, nombre: "Corvalán Jiménez Jaime", tipo: "MH" },
  { num: 10, nombre: "Monje Navarro Roberto", tipo: "MH" },
  { num: 11, nombre: "Venegas Vidal Luís", tipo: "DH" },
  { num: 12, nombre: "Bahamondes Brisso Carlos", tipo: "MH" },
  { num: 13, nombre: "Morán Montoya Carlos", tipo: "MH" },
  { num: 14, nombre: "Meza Vargas Juan", tipo: "VH" },
  { num: 15, nombre: "Correa Jara Leónidas", tipo: "MH" },
  { num: 16, nombre: "Toledo Rebolledo Juan", tipo: "MH" },
  { num: 17, nombre: "Farías Pozo Manuel", tipo: "MH" },
  { num: 18, nombre: "Henríquez Muñoz Hernán", tipo: "MH" },
  { num: 19, nombre: "Martínez Higueras Hugo", tipo: "MH" },
  { num: 20, nombre: "Correa Jara Francisco", tipo: "MH" },
  { num: 21, nombre: "Field Bravo Juan", tipo: "DH" },
  { num: 22, nombre: "Rojas Espina Humberto", tipo: "VH" },
  { num: 23, nombre: "Bahamondes Sergio Omar", tipo: "VH" },
  { num: 24, nombre: "Gaete Peña José", tipo: "VH" },
  { num: 25, nombre: "Bahamondes Guevara Carlos", tipo: "VH" },
  { num: 26, nombre: "Bahamondes Brisso Freddy", tipo: "DH" },
  { num: 27, nombre: "Peña Ahumada Víctor", tipo: "DH" },
  { num: 28, nombre: "Miranda Arriola Carlos", tipo: "VH" },
  { num: 29, nombre: "Barrientos Ossa Mario", tipo: "VE" },
  { num: 30, nombre: "Ulloa Carmona Francisco", tipo: "VH" },
  { num: 31, nombre: "Romero Reyes Alfredo", tipo: "VH" },
  { num: 32, nombre: "Moran Zamorano Gonzalo", tipo: "VH" },
  { num: 33, nombre: "Gaete Pérez Patricio", tipo: "VH" },
  { num: 34, nombre: "Chávez Meza Rodrigo", tipo: "VH" },
  { num: 35, nombre: "Araya Cabrera Cristian", tipo: "VH" },
  { num: 36, nombre: "Guiñez Robertson Gonzalo", tipo: "VA" },
  { num: 37, nombre: "Rojas Martínez Manuel", tipo: "VH" },
  { num: 38, nombre: "Gaete Pérez Juan", tipo: "VH" },
  { num: 39, nombre: "Sánchez Morán Pablo", tipo: "VH" },
  { num: 40, nombre: "Vargas Tobar Miguel", tipo: "VH" },
  { num: 41, nombre: "Martínez Vera Ricardo", tipo: "VH" },
  { num: 42, nombre: "Aravena Araya Cristian", tipo: "VH" },
  { num: 43, nombre: "Nieto Toro Javiera", tipo: "VH" },
  { num: 44, nombre: "Arévalo Arévalo José Luis", tipo: "VH" },
  { num: 45, nombre: "Guzmán Orellana René", tipo: "VH" },
  { num: 46, nombre: "Chinchón Ayala Héctor", tipo: "VH" },
  { num: 47, nombre: "Torres Riveros Felipe", tipo: "VA" },
  { num: 48, nombre: "Balcarce Salvo Roberto", tipo: "VA" },
  { num: 49, nombre: "Yaksich Furche Antonio", tipo: "VE" },
  { num: 50, nombre: "Brisso Mondaca Héctor", tipo: "VA" },
  { num: 51, nombre: "Pérez Peñaloza Miguel", tipo: "VA" },
  { num: 52, nombre: "Garate Cerda Franco", tipo: "VA" },
  { num: 53, nombre: "Pávez Pardo Luis", tipo: "VE" },
  { num: 54, nombre: "Retamal Rubio Sergio", tipo: "VE" },
  { num: 55, nombre: "Olguín Vargas Sergio", tipo: "VA" },
  { num: 56, nombre: "Rebolledo Droguett Andrés", tipo: "VA" },
  { num: 57, nombre: "Bahamondes Conteras Carlos", tipo: "VA" },
  { num: 58, nombre: "Escalona Valenzuela Francesca", tipo: "VA" },
  { num: 59, nombre: "Giadach Castillo Cristian", tipo: "VE" },
  { num: 60, nombre: "Serrano Vega Matías", tipo: "VA" },
  { num: 61, nombre: "Guzmán Céspedes Fabián Eliú", tipo: "VA" },
  { num: 62, nombre: "Matamala Pérez Ignacio Antonio", tipo: "VA" },
  { num: 63, nombre: "Riquelme Lira Felipe Ignacio", tipo: "VA" },
  { num: 64, nombre: "Aravena Quijada Felipe Ignacio", tipo: "VA" },
  { num: 65, nombre: "Aravena Correa Martina", tipo: "VA" },
  { num: 66, nombre: "Méndez Vidal Cristian Felipe", tipo: "VA" },
  { num: 67, nombre: "Guzmán Céspedes Christian", tipo: "VA" },
  { num: 68, nombre: "Plaza Vejar Patricio", tipo: "VE" },
  { num: 69, nombre: "Farias Aristegui Benjamín", tipo: "VA" },
  { num: 70, nombre: "Pizzoleo Vergara Catalina", tipo: "VA" },
  { num: 71, nombre: "Ríos Gálvez Benjamín Andrés", tipo: "VA" },
  { num: 72, nombre: "Zamora Pérez Israel Alejandro", tipo: "VA" },
  { num: 73, nombre: "Gaete Pávez Kimberly", tipo: "VA" },
  { num: 74, nombre: "Villar de la Barra Maximiliano", tipo: "VA" },
  { num: 75, nombre: "Schenke Zúñiga Jorge", tipo: "VE" },
  { num: 76, nombre: "Arriagada Contreras Joaquin", tipo: "VA" }
];

document.addEventListener("DOMContentLoaded", () => {

  function normalizarTexto(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  // ==========================================
  // 1. OCUPANTES DINÁMICOS EN PARTE GENERAL
  // ==========================================
  const selectCantOcupantes = document.getElementById("cant-ocupantes");
  if (selectCantOcupantes) {
    selectCantOcupantes.addEventListener("change", (e) => {
      const cantidad = parseInt(e.target.value);
      for (let i = 1; i <= 4; i++) {
        const bloque = document.getElementById(`bloque-ocupante-${i}`);
        if (bloque) {
          if (i <= cantidad) {
            bloque.classList.remove("d-none");
          } else {
            bloque.classList.add("d-none");
          }
        }
      }
    });
  }

  // ==========================================
  // 2. PARTE GENERAL: ASISTENTES AL ACTO
  // ==========================================
  const inputBuscar = document.getElementById("buscar-bombero");
  const contenedorResultados = document.getElementById("resultados-busqueda");
  const tablaCuerpo = document.getElementById("tabla-asistentes-cuerpo");
  let asistentesAgregados = [];

  if (inputBuscar && contenedorResultados) {
    inputBuscar.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputBuscar.value);
      contenedorResultados.innerHTML = "";

      if (busqueda.length < 1) {
        contenedorResultados.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        contenedorResultados.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-danger me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarAAsistencia(vol);
            inputBuscar.value = "";
            contenedorResultados.style.setProperty("display", "none", "important");
          });
          contenedorResultados.appendChild(item);
        });
      }
      contenedorResultados.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputBuscar.contains(e.target) && !contenedorResultados.contains(e.target)) {
        contenedorResultados.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarAAsistencia(voluntario) {
    if (asistentesAgregados.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está registrado en la lista del acto.");
      return;
    }
    asistentesAgregados.push(voluntario);
    renderizarTablaAsistencia();
  }

  function renderizarTablaAsistencia() {
    if (!tablaCuerpo) return;
    if (asistentesAgregados.length === 0) {
      tablaCuerpo.innerHTML = `<tr id="sin-asistentes"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en el acto.</td></tr>`;
      return;
    }
    tablaCuerpo.innerHTML = "";
    asistentesAgregados.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-acto" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-acto").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        asistentesAgregados = asistentesAgregados.filter(item => item.num !== numEliminar);
        renderizarTablaAsistencia();
      });
    });
  }

  // ==========================================
  // 3. PARTE GENERAL: PERSONAL EN CUARTEL
  // ==========================================
  const switchCuartel = document.getElementById("switch-en-cuartel");
  const contenedorCuartel = document.getElementById("contenedor-en-cuartel");
  const inputCuartel = document.getElementById("buscar-bombero-cuartel");
  const resultadosCuartel = document.getElementById("resultados-busqueda-cuartel");
  const tablaCuartelCuerpo = document.getElementById("tabla-cuartel-cuerpo");
  let personalCuartelAgregado = [];

  if (switchCuartel && contenedorCuartel) {
    switchCuartel.addEventListener("change", (e) => {
      if (e.target.checked) {
        contenedorCuartel.classList.remove("d-none");
      } else {
        contenedorCuartel.classList.add("d-none");
      }
    });
  }

  if (inputCuartel && resultadosCuartel) {
    inputCuartel.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputCuartel.value);
      resultadosCuartel.innerHTML = "";

      if (busqueda.length < 1) {
        resultadosCuartel.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        resultadosCuartel.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-secondary me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarACuartel(vol);
            inputCuartel.value = "";
            resultadosCuartel.style.setProperty("display", "none", "important");
          });
          resultadosCuartel.appendChild(item);
        });
      }
      resultadosCuartel.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputCuartel.contains(e.target) && !resultadosCuartel.contains(e.target)) {
        resultadosCuartel.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarACuartel(voluntario) {
    if (personalCuartelAgregado.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está registrado en la lista de cuartel.");
      return;
    }
    personalCuartelAgregado.push(voluntario);
    renderizarTablaCuartel();
  }

  function renderizarTablaCuartel() {
    if (!tablaCuartelCuerpo) return;
    if (personalCuartelAgregado.length === 0) {
      tablaCuartelCuerpo.innerHTML = `<tr id="sin-cuartel"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en cuartel.</td></tr>`;
      return;
    }
    tablaCuartelCuerpo.innerHTML = "";
    personalCuartelAgregado.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-cuartel" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaCuartelCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-cuartel").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        personalCuartelAgregado = personalCuartelAgregado.filter(item => item.num !== numEliminar);
        renderizarTablaCuartel();
      });
    });
  }

  // ==========================================
  // 4. PARTE RESCATE VEHICULAR: ASISTENCIA Y CUARTEL
  // ==========================================
  const inputBuscarRescate = document.getElementById("buscar-bombero-rescate");
  const resultadosRescate = document.getElementById("resultados-busqueda-rescate");
  const tablaRescateCuerpo = document.getElementById("tabla-asistentes-rescate-cuerpo");
  let asistentesRescateAgregados = [];

  if (inputBuscarRescate && resultadosRescate) {
    inputBuscarRescate.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputBuscarRescate.value);
      resultadosRescate.innerHTML = "";

      if (busqueda.length < 1) {
        resultadosRescate.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        resultadosRescate.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-danger me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarARescate(vol);
            inputBuscarRescate.value = "";
            resultadosRescate.style.setProperty("display", "none", "important");
          });
          resultadosRescate.appendChild(item);
        });
      }
      resultadosRescate.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputBuscarRescate.contains(e.target) && !resultadosRescate.contains(e.target)) {
        resultadosRescate.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarARescate(voluntario) {
    if (asistentesRescateAgregados.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está en la lista del rescate.");
      return;
    }
    asistentesRescateAgregados.push(voluntario);
    renderizarTablaRescate();
  }

  function renderizarTablaRescate() {
    if (!tablaRescateCuerpo) return;
    if (asistentesRescateAgregados.length === 0) {
      tablaRescateCuerpo.innerHTML = `<tr id="sin-asistentes-rescate"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en el rescate.</td></tr>`;
      return;
    }
    tablaRescateCuerpo.innerHTML = "";
    asistentesRescateAgregados.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-rescate" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaRescateCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-rescate").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        asistentesRescateAgregados = asistentesRescateAgregados.filter(item => item.num !== numEliminar);
        renderizarTablaRescate();
      });
    });
  }

  // RESCATE VEHICULAR: EN CUARTEL
  const switchCuartelRescate = document.getElementById("switch-en-cuartel-rescate");
  const contenedorCuartelRescate = document.getElementById("contenedor-en-cuartel-rescate");
  const inputCuartelRescate = document.getElementById("buscar-bombero-cuartel-rescate");
  const resultadosCuartelRescate = document.getElementById("resultados-busqueda-rescate");
  const tablaCuartelRescateCuerpo = document.getElementById("tabla-cuartel-rescate-cuerpo");
  let personalCuartelRescateAgregado = [];

  if (switchCuartelRescate && contenedorCuartelRescate) {
    switchCuartelRescate.addEventListener("change", (e) => {
      if (e.target.checked) {
        contenedorCuartelRescate.classList.remove("d-none");
      } else {
        contenedorCuartelRescate.classList.add("d-none");
      }
    });
  }

  if (inputCuartelRescate && resultadosCuartelRescate) {
    inputCuartelRescate.addEventListener("input", () => {
      const busqueda = normalizarTexto(inputCuartelRescate.value);
      resultadosCuartelRescate.innerHTML = "";

      if (busqueda.length < 1) {
        resultadosCuartelRescate.style.setProperty("display", "none", "important");
        return;
      }

      const filtrados = voluntariosCompania.filter(vol => {
        if (!vol || !vol.nombre) return false;
        const numStr = vol.num ? vol.num.toString() : "";
        return normalizarTexto(vol.nombre).includes(busqueda) || numStr === busqueda;
      });

      if (filtrados.length === 0) {
        resultadosCuartelRescate.innerHTML = `<div class="list-group-item text-muted p-2 bg-white">No hay coincidencias</div>`;
      } else {
        filtrados.forEach(vol => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "list-group-item list-group-item-action py-2 text-start fw-bold bg-white";
          item.innerHTML = `<span class="badge bg-secondary me-2">${vol.num}</span> ${vol.nombre} <small class="text-muted">(${vol.tipo})</small>`;
          
          item.addEventListener("click", () => {
            agregarACuartelRescate(vol);
            inputCuartelRescate.value = "";
            resultadosCuartelRescate.style.setProperty("display", "none", "important");
          });
          resultadosCuartelRescate.appendChild(item);
        });
      }
      resultadosCuartelRescate.style.setProperty("display", "block", "important");
    });

    document.addEventListener("click", (e) => {
      if (!inputCuartelRescate.contains(e.target) && !resultadosCuartelRescate.contains(e.target)) {
        resultadosCuartelRescate.style.setProperty("display", "none", "important");
      }
    });
  }

  function agregarACuartelRescate(voluntario) {
    if (personalCuartelRescateAgregado.some(item => item.num === voluntario.num)) {
      alert("El voluntario ya está registrado en la lista de cuartel.");
      return;
    }
    personalCuartelRescateAgregado.push(voluntario);
    renderizarTablaCuartelRescate();
  }

  function renderizarTablaCuartelRescate() {
    if (!tablaCuartelRescateCuerpo) return;
    if (personalCuartelRescateAgregado.length === 0) {
      tablaCuartelRescateCuerpo.innerHTML = `<tr id="sin-cuartel-rescate"><td colspan="4" class="text-center text-muted">No hay voluntarios registrados en cuartel.</td></tr>`;
      return;
    }
    tablaCuartelRescateCuerpo.innerHTML = "";
    personalCuartelRescateAgregado.forEach(vol => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="fw-bold">${vol.num}</td>
        <td>${vol.nombre}</td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <button type="button" class="btn btn-sm btn-outline-danger btn-quitar-cuartel-rescate" data-num="${vol.num}">✕</button>
        </td>
      `;
      tablaCuartelRescateCuerpo.appendChild(tr);
    });

    document.querySelectorAll(".btn-quitar-cuartel-rescate").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const numEliminar = parseInt(e.target.getAttribute("data-num"));
        personalCuartelRescateAgregado = personalCuartelRescateAgregado.filter(item => item.num !== numEliminar);
        renderizarTablaCuartelRescate();
      });
    });
  }

  // ==========================================
  // 5. REGISTRO FOTOGRÁFICO DE EMERGENCIA
  // ==========================================
  const inputFotos = document.getElementById("input-fotos-registro");
  const contenedorPrevia = document.getElementById("vista-previa-fotos");
  let archivosFotos = [];

  if (inputFotos && contenedorPrevia) {
    inputFotos.addEventListener("change", (e) => {
      const nuevosArchivos = Array.from(e.target.files);
      archivosFotos = archivosFotos.concat(nuevosArchivos);
      renderizarVistaPrevia();
    });

    function renderizarVistaPrevia() {
      contenedorPrevia.innerHTML = "";

      archivosFotos.forEach((archivo, index) => {
        if (archivo.type.startsWith("image/")) {
          const lector = new FileReader();
          lector.onload = (evento) => {
            const div = document.createElement("div");
            div.className = "position-relative d-inline-block me-2 mb-2";
            div.innerHTML = `
              <img src="${evento.target.result}" class="img-thumbnail rounded shadow-sm" style="width: 105px; height: 105px; object-fit: cover;">
              <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 rounded-circle m-1 px-2 py-0 fw-bold btn-quitar-foto" data-index="${index}" style="line-height: 1.2; font-size: 12px; z-index: 10;">✕</button>
            `;
            contenedorPrevia.appendChild(div);

            div.querySelector(".btn-quitar-foto").addEventListener("click", (e) => {
              const idxEliminar = parseInt(e.target.getAttribute("data-index"));
              archivosFotos.splice(idxEliminar, 1);
              renderizarVistaPrevia();
            });
          };
          lector.readAsDataURL(archivo);
        }
      });
    }
  }

  // ==========================================
  // 6. SECCIÓN 3: CONTROL ASISTENCIA COMPLETO
  // ==========================================
  const tablaAsistencia = document.getElementById("tabla-asistencia-completa-cuerpo");
  const filtroAsistencia = document.getElementById("filtro-voluntario-asistencia");
  const contadorAsistencia = document.getElementById("contador-asistencia");
  const btnResetAsistencia = document.getElementById("btn-reset-asistencia");

  let registroAsistencia = {};
  voluntariosCompania.forEach(vol => {
    registroAsistencia[vol.num] = false;
  });

  function renderizarListaAsistencia() {
    if (!tablaAsistencia) return;

    const textoFiltro = filtroAsistencia ? normalizarTexto(filtroAsistencia.value) : "";
    tablaAsistencia.innerHTML = "";

    const filtrados = voluntariosCompania.filter(vol => {
      if (!vol || !vol.nombre) return false;
      const numStr = vol.num ? vol.num.toString() : "";
      return normalizarTexto(vol.nombre).includes(textoFiltro) || numStr === textoFiltro;
    });

    if (filtrados.length === 0) {
      tablaAsistencia.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-4">No se encontró ningún voluntario con ese criterio.</td></tr>`;
      return;
    }

    filtrados.forEach(vol => {
      const estaPresente = registroAsistencia[vol.num];
      const tr = document.createElement("tr");
      if (estaPresente) tr.className = "table-success";

      tr.innerHTML = `
        <td class="fw-bold text-center">${vol.num}</td>
        <td><span class="fw-bold text-dark">${vol.nombre}</span></td>
        <td class="text-center"><span class="badge bg-secondary">${vol.tipo}</span></td>
        <td class="text-center">
          <div class="form-check d-flex justify-content-center m-0">
            <input class="form-check-input chk-asistencia" type="checkbox" id="chk-ast-${vol.num}" 
              data-num="${vol.num}" ${estaPresente ? 'checked' : ''} style="transform: scale(1.4); cursor: pointer;">
          </div>
        </td>
      `;

      tablaAsistencia.appendChild(tr);

      tr.querySelector(`#chk-ast-${vol.num}`).addEventListener("change", (e) => {
        const numVol = parseInt(e.target.getAttribute("data-num"));
        registroAsistencia[numVol] = e.target.checked;
        if (e.target.checked) {
          tr.classList.add("table-success");
        } else {
          tr.classList.remove("table-success");
        }
        actualizarContadorAsistencia();
      });
    });

    actualizarContadorAsistencia();
  }

  function actualizarContadorAsistencia() {
    if (!contadorAsistencia) return;
    const totalPresentes = Object.values(registroAsistencia).filter(val => val === true).length;
    contadorAsistencia.textContent = `${totalPresentes} / ${voluntariosCompania.length} Presentes`;
  }

  if (filtroAsistencia) {
    filtroAsistencia.addEventListener("input", renderizarListaAsistencia);
  }

  if (btnResetAsistencia) {
    btnResetAsistencia.addEventListener("click", () => {
      voluntariosCompania.forEach(vol => {
        registroAsistencia[vol.num] = false;
      });
      renderizarListaAsistencia();
    });
  }

  renderizarListaAsistencia();
// ==========================================
  // 7. DESCARGA PDF Y ENVÍO POR CORREO (100% FUNCIONAL)
  // ==========================================

  // DESCARGA DE PDF DIRECTA Y SEGURA
  document.querySelectorAll(".btn-descargar-pdf").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const botonPresionado = e.currentTarget;
      const targetId = botonPresionado.getAttribute("data-form");
      const elementoForm = document.getElementById(targetId);

      if (!elementoForm) return;

      const textoOriginal = botonPresionado.innerHTML;
      botonPresionado.innerHTML = "⏳ Generando PDF...";
      botonPresionado.disabled = true;

      const correlativo = document.getElementById("correlativo-cia")?.value || "S-N";
      const fecha = document.getElementById("fecha-acto")?.value || new Date().toISOString().slice(0, 10);
      const nombrePDF = `Parte_Servicio_Bomba_OHiggins_N${correlativo}_${fecha}.pdf`;

      // Ocultar temporalmente botones y elementos interactivos que rompen el canvas
      const elementosOcultar = elementoForm.querySelectorAll(".btn, .form-switch, input[type='file'], .list-group, #resultados-busqueda, #resultados-busqueda-cuartel");
      elementosOcultar.forEach(el => el.style.display = "none");

      const opciones = {
        margin:       [10, 10, 10, 10],
        filename:     nombrePDF,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false, scrollY: 0 },
        jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
      };

      try {
        await html2pdf().set(opciones).from(elementoForm).save();
      } catch (error) {
        console.error("Error al generar PDF:", error);
        alert("Hubo un detalle al exportar el PDF. También puede presionar Ctrl + P y seleccionar 'Guardar como PDF'.");
      } finally {
        // Restaurar la visibilidad de los botones en pantalla
        elementosOcultar.forEach(el => el.style.display = "");
        botonPresionado.innerHTML = textoOriginal;
        botonPresionado.disabled = false;
      }
    });
  });

  // ENVÍO DE CORREO AUTOMÁTICO VÍA EMAILJS
  document.querySelectorAll(".btn-enviar-correo").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const botonPresionado = e.currentTarget;

      const correlativo = document.getElementById("correlativo-cia")?.value || "S-N";
      const fecha = document.getElementById("fecha-acto")?.value || new Date().toISOString().slice(0, 10);
      const hora = document.getElementById("hora-acto")?.value || "No especificada";
      const clave = document.getElementById("clave-acto")?.value || "No especificada";
      const direccion = document.getElementById("direccion-acto")?.value || "No especificada";
      const observaciones = document.getElementById("observaciones-parte")?.value || "Sin observaciones registradas.";

      // Extraer personal asistente al acto
      let listaAsistentesText = "";
      document.querySelectorAll("#tabla-asistentes-cuerpo tr").forEach(tr => {
        const celdas = tr.querySelectorAll("td");
        if (celdas.length >= 3) {
          listaAsistentesText += `- N° ${celdas[0].innerText.trim()}: ${celdas[1].innerText.trim()} (${celdas[2].innerText.trim()})\n`;
        }
      });
      if (!listaAsistentesText) listaAsistentesText = "Sin asistentes registrados.";

      // Extraer personal en cuartel
      let listaCuartelText = "";
      document.querySelectorAll("#tabla-cuartel-cuerpo tr").forEach(tr => {
        const celdas = tr.querySelectorAll("td");
        if (celdas.length >= 3) {
          listaCuartelText += `- N° ${celdas[0].innerText.trim()}: ${celdas[1].innerText.trim()} (${celdas[2].innerText.trim()})\n`;
        }
      });
      if (!listaCuartelText) listaCuartelText = "Sin personal en cuartel.";

      const textoOriginal = botonPresionado.innerHTML;
      botonPresionado.innerHTML = "⏳ Enviando parte...";
      botonPresionado.disabled = true;

      const resumenCompleto = `PARTE OFICIAL DE SERVICIO - BOMBA O'HIGGINS
--------------------------------------------------
Correlativo Cía: ${correlativo}
Fecha: ${fecha}
Hora: ${hora}
Clave del Acto: ${clave}
Dirección: ${direccion}

PERSONAL ASISTENTE AL ACTO:
${listaAsistentesText}
PERSONAL REGISTRADO EN CUARTEL:
${listaCuartelText}
OBSERVACIONES DEL ACTO:
${observaciones}
--------------------------------------------------
Primera Compañía de Bomberos "Bomba O'Higgins" - Rancagua`;

      const parametrosPlantilla = {
        asunto: `Parte de Servicio N° ${correlativo} - Bomba O'Higgins (${fecha})`,
        mensaje: resumenCompleto
      };

      // Envío usando tu Service ID y tu Template ID real
      emailjs.send("service_0j6b43d", "template_e631aiq", parametrosPlantilla)
        .then(() => {
          alert("✅ Parte de servicio enviado exitosamente con toda la información a partesbombaohiggins@gmail.com");
        })
        .catch((error) => {
          console.error("Error al enviar con EmailJS:", error);
          alert("⚠️ No se pudo enviar el parte automáticamente. Revisa tu conexión a internet.");
        })
        .finally(() => {
          botonPresionado.innerHTML = textoOriginal;
          botonPresionado.disabled = false;
        });
    });
  });